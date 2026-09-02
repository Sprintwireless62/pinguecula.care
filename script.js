// Mobile nav toggle
function initNav(){
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if(!btn || !menu) return;
  btn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(isHidden));
  });
}

// Mark the current page's nav link active (handles .html and clean URLs)
function markActiveNav(){
  let path = window.location.pathname.split('/').pop();
  if(!path) path = 'index.html';
  if(!path.includes('.')) path = path + '.html';
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const target = link.getAttribute('href');
    if(target === path) link.classList.add('active');
  });
}

// One gentle load reveal (respects reduced-motion via CSS)
function initReveal(){
  const items = document.querySelectorAll('[data-reveal]');
  items.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 60 + i * 70);
  });
}

// Contact form: client-side validation + success state (no backend wired)
function initContactForm(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  const status = document.getElementById('form-status');
  const fields = {
    name:    { el: form.querySelector('#name'),    error: form.querySelector('#name-error') },
    email:   { el: form.querySelector('#email'),   error: form.querySelector('#email-error') },
    message: { el: form.querySelector('#message'), error: form.querySelector('#message-error') },
  };
  function showError(f, msg){
    fields[f].el.setAttribute('aria-invalid','true');
    fields[f].el.style.borderColor = 'var(--urgent)';
    fields[f].error.textContent = msg;
    fields[f].error.classList.remove('hidden');
  }
  function clearError(f){
    fields[f].el.removeAttribute('aria-invalid');
    fields[f].el.style.borderColor = '';
    fields[f].error.textContent = '';
    fields[f].error.classList.add('hidden');
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    if(!fields.name.el.value.trim()){ showError('name','Please enter your name.'); valid=false; } else clearError('name');
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.el.value.trim());
    if(!emailOk){ showError('email','Please enter a valid email address.'); valid=false; } else clearError('email');
    if(fields.message.el.value.trim().length < 10){ showError('message','Please add a little more \u2014 at least 10 characters.'); valid=false; } else clearError('message');
    if(!valid){ status.textContent=''; return; }
    form.reset();
    status.style.color = 'var(--safe)';
    status.textContent = 'Thanks \u2014 your message has been received. We aim to reply within two business days. If your symptoms are urgent, please use the urgent-advice guidance rather than waiting for a reply.';
  });
}

// FAQ: keep one open at a time
function initFaq(){
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    item.addEventListener('toggle', () => {
      if(item.open){ items.forEach(o => { if(o !== item) o.open = false; }); }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav(); markActiveNav(); initReveal(); initContactForm(); initFaq();
});
