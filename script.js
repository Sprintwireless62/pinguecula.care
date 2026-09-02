// Mobile nav toggle
function initNav(){
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if(!btn || !menu) return;
  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
}

// Mark the current page's nav link as active
function markActiveNav(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const target = link.getAttribute('href');
    if(target === path || (path === '' && target === 'index.html')){
      link.classList.add('active');
    }
  });
}

// One gentle reveal for elements marked with data-reveal, on load only
function initReveal(){
  const items = document.querySelectorAll('[data-reveal]');
  if(!items.length) return;
  items.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 60 + i * 70);
  });
}

// Contact form: lightweight client-side validation + success state
function initContactForm(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  const status = document.getElementById('form-status');

  const fields = {
    name: { el: form.querySelector('#name'), error: form.querySelector('#name-error') },
    email: { el: form.querySelector('#email'), error: form.querySelector('#email-error') },
    message: { el: form.querySelector('#message'), error: form.querySelector('#message-error') },
  };

  function showError(field, message){
    fields[field].el.setAttribute('aria-invalid', 'true');
    fields[field].el.classList.add('border-[#B4623A]');
    fields[field].error.textContent = message;
    fields[field].error.classList.remove('hidden');
  }
  function clearError(field){
    fields[field].el.removeAttribute('aria-invalid');
    fields[field].el.classList.remove('border-[#B4623A]');
    fields[field].error.textContent = '';
    fields[field].error.classList.add('hidden');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if(!fields.name.el.value.trim()){
      showError('name', 'Enter your name.');
      valid = false;
    } else clearError('name');

    const emailVal = fields.email.el.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
    if(!emailOk){
      showError('email', 'Enter a valid email address.');
      valid = false;
    } else clearError('email');

    if(!fields.message.el.value.trim() || fields.message.el.value.trim().length < 10){
      showError('message', 'Say a little more \u2014 at least 10 characters.');
      valid = false;
    } else clearError('message');

    if(!valid){
      status.textContent = '';
      return;
    }

    // No backend is wired up; simulate a successful send.
    form.reset();
    status.className = 'text-sm mt-4 text-[#6E6053]';
    status.textContent = "Thanks \u2014 we\u2019ve received your message and will reply within two business days.";
  });
}

// FAQ: ensure only relevant one auto-opens, rest closed
function initFaq(){
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    item.addEventListener('toggle', () => {
      if(item.open){
        items.forEach(other => { if(other !== item) other.open = false; });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  markActiveNav();
  initReveal();
  initContactForm();
  initFaq();
});
