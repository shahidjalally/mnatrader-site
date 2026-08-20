const reelTrack = document.querySelector('.reel-track');
const originalReels = [...reelTrack.children];
originalReels.forEach((reel) => reelTrack.append(reel.cloneNode(true)));

const videos = [...document.querySelectorAll('.reel video')];
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.play().catch(() => {});
    else entry.target.pause();
  });
}, { threshold: 0.45 });
videos.forEach((video) => videoObserver.observe(video));

document.querySelectorAll('.sound-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const video = button.previousElementSibling;
    videos.forEach((item) => { if (item !== video) item.muted = true; });
    document.querySelectorAll('.sound-toggle').forEach((item) => { if (item !== button) { item.textContent = 'Sound off'; item.setAttribute('aria-label', 'Unmute video'); } });
    video.muted = !video.muted;
    button.textContent = video.muted ? 'Sound off' : 'Sound on';
    button.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
  });
});

const reviewTimes = ['6.57.03','6.57.04','6.57.06','6.57.07','6.57.08','6.57.09','6.57.10','6.57.11','6.57.13','6.57.14','6.57.15','6.57.16','6.57.17','6.57.18','6.57.19','6.57.21','6.57.22','6.57.24','6.57.25','6.57.26','6.57.27','6.57.28','6.57.30','6.57.31','6.57.32','6.57.33','6.57.34','6.57.36','6.57.37','6.57.38','6.57.39','6.57.40','6.57.42','6.57.43','6.57.45','6.57.46'];
const reviewTrack = document.querySelector('.review-track');
reviewTimes.forEach((time, index) => {
  const card = document.createElement('article');
  card.className = 'review-card glass';
  const image = document.createElement('img');
  image.src = `reviews/WhatsApp Image 2026-08-20 at ${time} PM.jpeg`;
  image.alt = `MNA Trader community feedback ${index + 1}`;
  image.loading = index < 4 ? 'eager' : 'lazy';
  card.append(image);
  reviewTrack.append(card);
});

const viewport = document.querySelector('.review-viewport');
let carouselPlaying = true;
const scrollReviews = (direction = 1) => viewport.scrollBy({ left: direction * 275, behavior: 'smooth' });
document.querySelector('.prev').addEventListener('click', () => scrollReviews(-1));
document.querySelector('.next').addEventListener('click', () => scrollReviews(1));
document.querySelector('.pause').addEventListener('click', (event) => {
  carouselPlaying = !carouselPlaying;
  event.currentTarget.textContent = carouselPlaying ? 'Ⅱ' : '▶';
  event.currentTarget.setAttribute('aria-label', carouselPlaying ? 'Pause review carousel' : 'Play review carousel');
});
setInterval(() => {
  if (!carouselPlaying || document.hidden) return;
  const end = viewport.scrollWidth - viewport.clientWidth - 10;
  if (viewport.scrollLeft >= end) viewport.scrollTo({ left: 0, behavior: 'smooth' });
  else scrollReviews(1);
}, 2800);

document.querySelector('#year').textContent = new Date().getFullYear();
