/* =========================================================
   VALMOND — interactions
   ========================================================= */

/**
 * Arizalarni qayerga yuborish sozlamasi.
 * endpoint — JSON qabul qiluvchi manzil (masalan, Google Apps Script,
 * Formspree yoki o'zingizning backend). Bo'sh qolsa, ariza faqat
 * brauzerda saqlanadi (sinov rejimi).
 */
const CONFIG = {
  endpoint: '',
  boxWeightGrams: 800,
  packsPerBox: 4,
};

document.documentElement.classList.remove('no-js');

/* ---------- Header on scroll ---------- */
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Mobile menu ---------- */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

const setMenu = (open) => {
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
  nav.classList.toggle('is-open', open);
  header.classList.toggle('menu-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
};

burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

/* ---------- Reveal on scroll ---------- */
const revealEls = document.querySelectorAll('.reveal');

// Bir guruh ichidagi elementlarga ketma-ket kechikish beramiz
document.querySelectorAll('.taste__grid, .moments, .audience__list, .accordion').forEach((group) => {
  group.querySelectorAll('.reveal').forEach((el, i) => el.style.setProperty('--d', `${i * 0.12}s`));
});

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* ---------- Hero parallax ---------- */
const heroVisual = document.querySelector('.hero__visual');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroVisual && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  const hero = document.querySelector('.hero');
  hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    heroVisual.style.transform = `translate3d(${x * -12}px, ${y * -10}px, 0) rotateY(${x * 4}deg)`;
  });
  hero.addEventListener('mouseleave', () => { heroVisual.style.transform = ''; });
  heroVisual.style.transition = 'transform .8s cubic-bezier(.22,.61,.36,1)';
}

/* ---------- FAQ: bir vaqtda bitta ochiq ---------- */
const faqItems = document.querySelectorAll('.accordion details');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) faqItems.forEach((other) => { if (other !== item) other.open = false; });
  });
});

/* ---------- Order form ---------- */
const form = document.getElementById('orderForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const qtyInput = document.getElementById('qty');
const consent = document.getElementById('consent');
const consentError = document.querySelector('.field__error--consent');
const giftField = document.getElementById('giftField');
const submitBtn = document.getElementById('submitBtn');

// Buyurtma turi: "Sovg'a" yoki "Korporativ" tanlansa tabrik matni maydoni ochiladi
form.querySelectorAll('input[name="type"]').forEach((radio) => {
  radio.addEventListener('change', () => {
    giftField.hidden = form.type.value === 'Shaxsiy';
  });
});

// Miqdor
const clampQty = (n) => Math.min(99, Math.max(1, Number.isFinite(n) ? Math.round(n) : 1));
const updateQty = (value) => {
  const q = clampQty(value);
  qtyInput.value = q;
  document.getElementById('qtyTotal').textContent = q * CONFIG.packsPerBox;
  const grams = q * CONFIG.boxWeightGrams;
  document.getElementById('qtyWeight').textContent =
    grams >= 1000 ? `${(grams / 1000).toLocaleString('uz-UZ', { maximumFractionDigits: 1 })} kg` : `${grams} g`;
};
form.querySelectorAll('.qty__btn').forEach((btn) => {
  btn.addEventListener('click', () => updateQty(Number(qtyInput.value) + Number(btn.dataset.step)));
});
qtyInput.addEventListener('change', () => updateQty(Number(qtyInput.value)));
updateQty(1);

// Telefon maskasi: +998 XX XXX XX XX
const formatPhone = (raw) => {
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('998')) digits = digits.slice(3);
  digits = digits.slice(0, 9);
  const parts = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)].filter(Boolean);
  return '+998' + (parts.length ? ' ' + parts.join(' ') : '');
};
phoneInput.addEventListener('focus', () => { if (!phoneInput.value) phoneInput.value = '+998 '; });
phoneInput.addEventListener('blur', () => { if (phoneInput.value.trim() === '+998') phoneInput.value = ''; });
phoneInput.addEventListener('input', () => {
  phoneInput.value = formatPhone(phoneInput.value);
  if (isPhoneValid()) setInvalid(phoneInput, false);
});

const isPhoneValid = () => phoneInput.value.replace(/\D/g, '').length === 12;
const isNameValid = () => nameInput.value.trim().length >= 2;

const setInvalid = (input, invalid) => input.closest('.field').classList.toggle('is-invalid', invalid);

nameInput.addEventListener('input', () => { if (isNameValid()) setInvalid(nameInput, false); });
consent.addEventListener('change', () => { if (consent.checked) consentError.classList.remove('is-shown'); });

const validate = () => {
  const nameOk = isNameValid();
  const phoneOk = isPhoneValid();
  setInvalid(nameInput, !nameOk);
  setInvalid(phoneInput, !phoneOk);
  consentError.classList.toggle('is-shown', !consent.checked);

  const firstBad = !nameOk ? nameInput : !phoneOk ? phoneInput : !consent.checked ? consent : null;
  if (firstBad) firstBad.focus();
  return !firstBad;
};

const sendOrder = async (order) => {
  if (!CONFIG.endpoint) {
    // Sinov rejimi: arizani brauzerda saqlaymiz
    try {
      const saved = JSON.parse(localStorage.getItem('valmond_orders') || '[]');
      saved.push(order);
      localStorage.setItem('valmond_orders', JSON.stringify(saved));
    } catch (_) { /* localStorage mavjud bo'lmasa — e'tiborsiz */ }
    console.info('[Valmond] Ariza (sinov rejimi):', order);
    await new Promise((r) => setTimeout(r, 900));
    return;
  }
  const res = await fetch(CONFIG.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validate()) return;

  const data = new FormData(form);
  const order = {
    type: data.get('type'),
    name: data.get('name').trim(),
    phone: data.get('phone'),
    boxes: Number(data.get('qty')),
    city: data.get('city'),
    giftNote: giftField.hidden ? '' : (data.get('giftNote') || '').trim(),
    comment: (data.get('comment') || '').trim(),
    createdAt: new Date().toISOString(),
  };

  submitBtn.classList.add('is-loading');
  submitBtn.querySelector('.btn__label').textContent = 'Yuborilmoqda';

  try {
    await sendOrder(order);
    openModal(order);
    form.reset();
    giftField.hidden = true;
    updateQty(1);
  } catch (err) {
    console.error(err);
    alert('Kechirasiz, arizani yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko‘ring yoki bizga qo‘ng‘iroq qiling.');
  } finally {
    submitBtn.classList.remove('is-loading');
    submitBtn.querySelector('.btn__label').textContent = 'Arizani yuborish';
  }
});

/* ---------- Modal ---------- */
const modal = document.getElementById('modal');
let lastFocus = null;

function openModal(order) {
  lastFocus = document.activeElement;
  document.getElementById('modalName').textContent = order.name.split(' ')[0];
  document.getElementById('modalPhone').textContent = order.phone;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.querySelector('.btn').focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
