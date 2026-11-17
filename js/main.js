const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-label', 'Ouvrir le menu');
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const subject = `Demande de contact — ${data.get('first-name')} ${data.get('name')}`;
  const body = [
    `Nom : ${data.get('name')}`,
    `Prénom : ${data.get('first-name')}`,
    `E-mail : ${data.get('email')}`,
    '',
    'Message :',
    data.get('message')
  ].join('\n');
  const note = document.querySelector('#form-note');
  note.textContent = 'Votre application de messagerie va s’ouvrir avec votre demande prête à être envoyée.';
  window.location.href = `mailto:info@consult-in360.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
