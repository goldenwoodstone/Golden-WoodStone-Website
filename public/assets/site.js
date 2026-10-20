const menu=document.querySelector('.nav-toggle'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const isOpen=nav.classList.toggle('show');menu.setAttribute('aria-expanded',String(isOpen));menu.textContent=isOpen?'✕':'☰';});

// Send the estimate only after the owner supplies a valid Formspree form ID.
// On failure, retain visitor details and offer direct contact rather than reporting success.
const form=document.getElementById('quote-form');
if(form && form.dataset.ready === 'true') {
  const button=document.getElementById('quote-submit');
  const status=document.getElementById('quote-status');
  let sending=false;
  form.addEventListener('submit', async (event)=>{
    event.preventDefault();
    if(sending || !form.reportValidity()) return;
    sending=true;
    button.disabled=true;
    button.textContent='Sending your inquiry…';
    status.textContent='Sending your inquiry…';
    status.classList.remove('error');
    try {
      const response=await fetch(form.action, {
        method:'POST', body:new FormData(form),
        headers:{'Accept':'application/json'}
      });
      if(!response.ok){
        // Explicit rate-limit or validation errors must never be shown as success.
        if(response.status===429) throw new Error('too_many_requests');
        throw new Error('submission_failed');
      }
      // Formspree accepted the request; submission delivery is verified later in the dashboard.
      window.location.assign('/thank-you/');
    } catch(err) {
      status.classList.add('error');
      status.textContent=err?.message==='too_many_requests'?
        'We are receiving too many requests at the moment. Please wait a few minutes or contact us directly by phone.':
        'Your inquiry could not be confirmed. Your details are still here. Please try again or call us directly.';
      sending=false;
      button.disabled=false;
      button.textContent='Try Sending Again →';
      status.focus();
    }
  });
}
