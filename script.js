const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');
const dialog = document.querySelector('.content-dialog');
menuButton.addEventListener('click', () => { const isOpen = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!isOpen)); menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation'); navigation.classList.toggle('open', !isOpen); });
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); navigation.classList.remove('open'); }));
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 100), { passive: true });
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.style.transitionDelay = `${entry.target.dataset.delay || 0}ms`; entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
const lessonCopy = {
  'Market Foundations': 'Learn how swing highs, swing lows, momentum, and key price zones work together. This module gives you a clean framework for reading any chart before you think about entering a trade.',
  'Strategy Building': 'Turn an idea into rules you can actually follow. Define context, entry, invalidation, target, risk, and a review routine so every trade becomes useful feedback.',
  'Risk Mastery': 'Build position-sizing and loss-management habits that keep one decision from defining your journey. The goal is not to avoid losses—it is to keep them planned and manageable.',
  'The one-percent rule': 'Risk is the only variable you fully control. A small fixed risk per idea gives your learning process enough time and data to improve without one bad day doing permanent damage.',
  'A simpler trading plan': 'More indicators rarely create more clarity. A useful plan identifies market context, one setup, a precise invalidation point, and the conditions that mean you should do nothing.',
  'Three pre-trade questions': 'Before entering, ask: Is this my setup? Where am I objectively wrong? Is the potential reward worth the risk? If any answer is unclear, waiting is a valid position.',
  'A focused way to learn': 'Start with market structure, build one repeatable setup, then protect it with strict risk rules. MNA Trader helps you replace scattered information with a deliberate learning routine.'
};
function openDialog(title) { dialog.querySelector('.dialog-title').textContent = title; dialog.querySelector('.dialog-copy').textContent = lessonCopy[title]; dialog.showModal(); }
document.querySelectorAll('[data-course]').forEach((button) => button.addEventListener('click', () => openDialog(button.dataset.course)));
document.querySelectorAll('[data-article]').forEach((button) => button.addEventListener('click', () => openDialog(button.dataset.article)));
document.querySelector('.video-trigger').addEventListener('click', () => openDialog('A focused way to learn'));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
dialog.querySelector('a').addEventListener('click', () => dialog.close());
document.querySelector('.copy-link').addEventListener('click', async () => { const text = window.location.href.split('#')[0]; if (navigator.clipboard) await navigator.clipboard.writeText(text); const toast = document.querySelector('.toast'); toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 1800); });
document.querySelector('#year').textContent = new Date().getFullYear();
