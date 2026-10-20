const menu=document.querySelector('.nav-toggle'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{let isOpen=nav.classList.toggle('show');menu.setAttribute('aria-expanded',String(isOpen));menu.textContent=isOpen?'✕':'☰';});
// Allow a normal, accessible POST submission to the third-party form service.
// The success page remains on the same website after the custom domain goes live.
const nextField=document.getElementById('quote-next');
if(nextField) nextField.value=window.location.origin+'/thank-you/';
const sourceField=document.getElementById('quote-url');
if(sourceField) sourceField.value=window.location.origin+'/contact/';
