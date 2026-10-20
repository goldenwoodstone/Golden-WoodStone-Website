const menu=document.querySelector('.nav-toggle'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{let isOpen=nav.classList.toggle('show');menu.setAttribute('aria-expanded',String(isOpen));menu.textContent=isOpen?'✕':'☰';});
const form=document.querySelector('#quote-form');
form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const f=new FormData(form);const body=`Name: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')}\nProject: ${f.get('type')}\n\nProject details:\n${f.get('details')}`;window.location.href='mailto:goldenwoodstone@gmail.com?subject='+encodeURIComponent('New construction project inquiry - Golden WoodStone')+'&body='+encodeURIComponent(body);});
