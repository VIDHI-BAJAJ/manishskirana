/* ==========================================================================
   Manish's — site behaviour
   1 helpers · 2 site details · 3 header + drawer · 4 reveal · 5 lead gate
   6 catalogue · 7 product page · 8 testimonials · 9 forms
   ========================================================================== */

(function () {
  'use strict';

  /* 1 ─── helpers ───────────────────────────────────────────────────────── */

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const ICON = {
    arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    lock:  '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="4" y="10" width="16" height="10" rx="1.5"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>',
    star:  '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9z"/></svg>'
  };

  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
      catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); return true; }
      catch (e) { return false; }
    }
  };

  const hasData = typeof PRODUCTS !== 'undefined';
  const filled  = (v) => typeof v === 'string' && v && !/^\[.*\]$/.test(v.trim());

  /* 2 ─── business details ──────────────────────────────────────────────── */

  function applySiteDetails() {
    if (typeof SITE === 'undefined') return;

    $$('[data-site]').forEach((el) => {
      const key = el.getAttribute('data-site');
      if (key === 'phone') el.textContent = SITE.phone;
      if (key === 'email') el.textContent = SITE.email;
      if (key === 'hours') el.textContent = SITE.hours;
      if (key === 'address') el.innerHTML = SITE.address.map(esc).join('<br>');
      if (key === 'address-inline') el.textContent = SITE.address.join(', ');
      if (key === 'year') el.textContent = String(new Date().getFullYear());
    });

    if (filled(SITE.phone)) {
      $$('a[data-site-link="phone"]').forEach((a) => { a.href = 'tel:' + SITE.phone.replace(/[^\d+]/g, ''); });
    }
    if (filled(SITE.email)) {
      $$('a[data-site-link="email"]').forEach((a) => { a.href = 'mailto:' + SITE.email; });
    }
    if (SITE.whatsapp) {
      $$('[data-site-link="whatsapp"]').forEach((a) => {
        a.href = 'https://wa.me/' + SITE.whatsapp.replace(/[^\d]/g, '');
        a.target = '_blank'; a.rel = 'noopener';
      });
    }
    if (SITE.mapsUrl) {
      $$('[data-site-link="maps"]').forEach((a) => { a.href = SITE.mapsUrl; a.target = '_blank'; a.rel = 'noopener'; });
    }
    Object.keys(SITE.social || {}).forEach((k) => {
      if (!SITE.social[k]) return;
      $$('[data-social="' + k + '"]').forEach((a) => { a.href = SITE.social[k]; a.target = '_blank'; a.rel = 'noopener'; });
    });
  }

  /* 3 ─── header + mobile drawer ────────────────────────────────────────── */

  function initHeader() {
    const header = $('.site-header');
    if (header) {
      const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 8);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    const drawer = $('#drawer');
    const toggle = $('.nav-toggle');
    if (!drawer || !toggle) return;

    let lastFocus = null;

    const open = () => {
      lastFocus = document.activeElement;
      drawer.classList.add('is-open');
      drawer.removeAttribute('aria-hidden');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('is-locked');
      const first = $('a, button', drawer);
      if (first) first.focus();
    };
    const close = () => {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-locked');
      if (lastFocus) lastFocus.focus();
    };

    toggle.addEventListener('click', open);
    $$('[data-drawer-close]', drawer).forEach((el) => el.addEventListener('click', close));
    $$('a', drawer).forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && drawer.classList.contains('is-open')) close();
    });
  }

  /* 4 ─── scroll reveal ─────────────────────────────────────────────────── */

  function initReveal() {
    const items = $$('.reveal');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach((el) => io.observe(el));
  }

  /* 5 ─── lead gate ─────────────────────────────────────────────────────── */

  const GATE_KEY = 'manishs.access';
  const LEADS_KEY = 'manishs.leads';
  const GATE_DAYS = 30;

  const gate = {
    el: null, form: null, panelForm: null, panelDone: null,
    pending: null, lastFocus: null, mandatory: false,

    unlocked() {
      const rec = store.get(GATE_KEY, null);
      if (!rec || !rec.at) return false;
      return (Date.now() - rec.at) < GATE_DAYS * 864e5;
    },

    init() {
      this.el = $('#lead-gate');
      if (!this.el) return;
      this.form = $('#gate-form', this.el);
      this.panelForm = $('[data-panel="form"]', this.el);
      this.panelDone = $('[data-panel="done"]', this.el);

      $$('[data-gate-close]', this.el).forEach((b) => b.addEventListener('click', () => this.close()));
      this.el.addEventListener('mousedown', (e) => { if (e.target === this.el) this.close(); });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.el.classList.contains('is-open')) this.close();
        if (e.key === 'Tab' && this.el.classList.contains('is-open')) this.trap(e);
      });

      this.form.addEventListener('submit', (e) => this.submit(e));

      // any gated link or button anywhere on the site
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest ? e.target.closest('[data-gated]') : null;
        if (!trigger) return;
        if (this.unlocked()) return;                 // already given us their details
        e.preventDefault();
        const href = trigger.getAttribute('href');
        const label = trigger.getAttribute('data-gate-label');
        this.open(href && href !== '#' ? href : null, label);
      });

      // a product page opened cold — the gate is mandatory here
      if (document.body.getAttribute('data-requires-access') === 'true' && !this.unlocked()) {
        this.mandatory = true;
        this.open(null, 'to open this product');
      }
    },

    open(nextUrl, label) {
      this.pending = nextUrl || null;
      this.lastFocus = document.activeElement;
      const note = $('[data-gate-context]', this.el);
      if (note) note.textContent = label ? 'You are one step away ' + label + '.' : '';
      this.panelForm.hidden = false;
      this.panelDone.hidden = true;
      this.el.classList.add('is-open');
      this.el.removeAttribute('aria-hidden');
      document.body.classList.add('is-locked');
      const close = $('[data-gate-close]', this.el);
      if (close) close.hidden = this.mandatory;
      setTimeout(() => { const f = $('#gate-name'); if (f) f.focus(); }, 60);
    },

    close() {
      this.el.classList.remove('is-open');
      this.el.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-locked');
      if (this.lastFocus && this.lastFocus.focus) this.lastFocus.focus();
      if (this.mandatory && !this.unlocked()) window.location.href = 'products.html';
    },

    trap(e) {
      const nodes = $$('a[href], button:not([hidden]), input, select, textarea', this.el)
        .filter((n) => n.offsetParent !== null && !n.disabled);
      if (!nodes.length) return;
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    },

    submit(e) {
      e.preventDefault();
      const name = $('#gate-name');
      const phone = $('#gate-phone');
      let ok = true;
      ok = validateField(name, (v) => v.trim().length >= 2, 'Please tell us your name.') && ok;
      ok = validateField(phone, isPhone, 'Enter a phone number we can reach you on.') && ok;
      if (!ok) { const bad = $('.is-invalid input', this.el); if (bad) bad.focus(); return; }

      const leads = store.get(LEADS_KEY, []);
      leads.push({ name: name.value.trim(), phone: phone.value.trim(), at: new Date().toISOString(), from: location.pathname });
      store.set(LEADS_KEY, leads);
      store.set(GATE_KEY, { at: Date.now(), name: name.value.trim() });

      this.mandatory = false;
      this.panelForm.hidden = true;
      this.panelDone.hidden = false;

      const closeBtn = $('[data-gate-close]', this.el);
      if (closeBtn) closeBtn.hidden = false;   // never leave anyone trapped in the dialog

      const cont = $('[data-gate-continue]', this.el);
      if (cont) {
        if (this.pending) { cont.hidden = false; cont.setAttribute('href', this.pending); cont.focus(); }
        else { cont.hidden = true; }
      }

      document.dispatchEvent(new CustomEvent('gate:unlocked'));

      if (this.pending) {
        setTimeout(() => { window.location.href = this.pending; }, 900);
      } else {
        // already on the page they wanted — let them read it
        setTimeout(() => this.close(), 1200);
      }
    }
  };

  /* 6 ─── catalogue ─────────────────────────────────────────────────────── */

  function productCard(p) {
    const img = p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '"' +
        (p.imageFit === 'cover' ? ' style="width:100%;height:100%;object-fit:cover"' : '') + ' loading="lazy">'
      : '<div class="placeholder placeholder--media"><strong>[' + esc(p.imageNote || 'PHOTO') + ']</strong></div>';

    return '' +
      '<a class="product-card" href="product.html?p=' + esc(p.slug) + '" data-gated data-gate-label="from opening ' + esc(p.name) + '">' +
        '<div class="product-card__media">' +
          '<span class="chip' + (p.imageFit === 'cover' ? ' chip--on-photo' : '') + '">' + esc(p.group) + '</span>' +
          img +
        '</div>' +
        '<div class="product-card__body">' +
          '<h3>' + esc(p.name) + '</h3>' +
          '<p>' + esc(p.tagline) + '</p>' +
          '<div class="product-card__foot">' +
            '<span>' + esc(p.origin) + '</span>' +
            '<span class="lock">' + (gate.unlocked() ? ICON.arrow : ICON.lock) + '</span>' +
          '</div>' +
        '</div>' +
      '</a>';
  }

  function initCatalogue() {
    const host = $('#catalogue');
    if (!host || !hasData) return;

    const search = $('#catalogue-search');
    const filterBar = $('#catalogue-filters');
    let active = 'all';
    let term = '';

    if (filterBar) {
      filterBar.innerHTML = '<button type="button" class="filter" aria-pressed="true" data-cat="all">All products</button>' +
        CATEGORIES.map((c) => '<button type="button" class="filter" aria-pressed="false" data-cat="' + esc(c.id) + '">' + esc(c.name) + '</button>').join('');
    }

    function render() {
      const q = term.trim().toLowerCase();
      const cats = active === 'all' ? CATEGORIES : CATEGORIES.filter((c) => c.id === active);
      let html = '';
      let shown = 0;

      cats.forEach((cat) => {
        const items = PRODUCTS.filter((p) => p.category === cat.id).filter((p) => {
          if (!q) return true;
          return (p.name + ' ' + p.tagline + ' ' + p.group + ' ' + (p.uses || []).join(' ')).toLowerCase().indexOf(q) > -1;
        });
        if (!items.length) return;
        shown += items.length;
        html += '<section class="catalogue-group" id="' + esc(cat.id) + '">' +
          '<div class="catalogue-group__head">' +
            '<h2>' + esc(cat.name) + '</h2>' +
            '<span class="catalogue-group__count">' + items.length + (items.length === 1 ? ' line' : ' lines') + '</span>' +
          '</div>' +
          '<div class="grid grid--4">' + items.map(productCard).join('') +
            (q ? '' : '<div class="placeholder"><strong>[More ' + esc(cat.name.toLowerCase()) + ']</strong><span>Add them in assets/js/data.js and they appear here.</span></div>') +
          '</div></section>';
      });

      host.innerHTML = shown ? html :
        '<p class="catalogue-empty">Nothing matches &ldquo;' + esc(term) + '&rdquo;. Try a product name, an origin or a use.</p>';
    }

    if (filterBar) {
      filterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter');
        if (!btn) return;
        active = btn.getAttribute('data-cat');
        $$('.filter', filterBar).forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        render();
      });
    }
    if (search) {
      let t;
      search.addEventListener('input', () => {
        clearTimeout(t);
        t = setTimeout(() => { term = search.value; render(); }, 140);
      });
    }
    document.addEventListener('gate:unlocked', render);

    render();

    // deep link: products.html#seeds selects that filter
    const hash = location.hash.replace('#', '');
    if (hash && CATEGORIES.some((c) => c.id === hash) && filterBar) {
      const btn = $('[data-cat="' + hash + '"]', filterBar);
      if (btn) btn.click();
    }
  }

  /* 7 ─── product page ──────────────────────────────────────────────────── */

  function initProductPage() {
    const host = $('#product-detail');
    if (!host || !hasData) return;

    const params = new URLSearchParams(location.search);
    const slug = params.get('p') || 'dried-figs';
    const p = PRODUCTS.filter((x) => x.slug === slug)[0];

    if (!p) {
      host.innerHTML = '<div class="stack" style="--gap:1.5rem"><h1>We could not find that product.</h1>' +
        '<p>It may have been renamed. The full catalogue is one click away.</p>' +
        '<a class="btn btn--primary" href="products.html" style="align-self:flex-start">Back to the catalogue ' + ICON.arrow + '</a></div>';
      return;
    }

    document.title = "Manish's — " + p.name;
    const cat = CATEGORIES.filter((c) => c.id === p.category)[0] || { id: '', name: '' };

    const crumb = $('#breadcrumb');
    if (crumb) {
      crumb.innerHTML = '<a href="products.html">The catalogue</a><span class="breadcrumb__sep">/</span>' +
        '<a href="products.html#' + esc(cat.id) + '">' + esc(cat.name) + '</a><span class="breadcrumb__sep">/</span>' +
        '<span aria-current="page">' + esc(p.name) + '</span>';
    }

    function renderBody() {

    const figure = p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '"' + (p.imageFit === 'cover' ? ' style="width:100%;height:100%;object-fit:cover"' : '') + '>'
      : '<div class="placeholder placeholder--media"><strong>[' + esc(p.imageNote || 'PHOTO') + ']</strong></div>';

    host.innerHTML = '' +
      '<div class="pdp__figure">' + figure + '</div>' +
      '<div class="stack" style="--gap:1.375rem">' +
        '<p class="eyebrow">' + esc(p.group) + '</p>' +
        '<div><h1>' + esc(p.name) + '</h1><p class="pdp__sub">' + esc(p.tagline) + '</p></div>' +
        '<p>' + esc(p.lede) + '</p>' +
        '<p style="font-size:var(--fs-small);color:var(--ink-muted)">' + esc(p.body) + '</p>' +
        '<div class="spec">' +
          '<div><span class="spec__k">Origin</span><span class="spec__v">' + esc(p.origin) + '</span></div>' +
          '<div><span class="spec__k">Best for</span><span class="spec__v">' + esc(p.bestFor) + '</span></div>' +
          '<div><span class="spec__k">Packing</span><span class="spec__v">' + esc(p.packing) + '</span></div>' +
        '</div>' +
        '<div><span class="note-label">Storage &amp; freshness</span><p style="font-size:var(--fs-small);color:var(--ink-muted)">' + esc(p.storage) + '</p></div>' +
        '<div><span class="note-label">In the kitchen</span><div class="tags">' + (p.uses || []).map((u) => '<span class="tag">' + esc(u) + '</span>').join('') + '</div></div>' +
        '<div class="recipe"><span class="note-label">A recipe to try</span><p>' + esc(p.recipe) + '</p></div>' +
        '<div class="pdp__actions">' +
          '<a class="btn btn--primary" href="contact.html?product=' + esc(p.slug) + '">Enquire about this product ' + ICON.arrow + '</a>' +
          '<a class="btn btn--ghost" data-site-link="whatsapp" href="contact.html">' +
            '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 01-12.6 7.3L3 20.5l1.8-5.2A8.5 8.5 0 1121 11.5z"/><path d="M8.6 9.2c.4 2.6 2.6 4.8 5.2 5.2l1-1.4 2 .9-.4 1.6c-3.6.5-7.4-3.3-6.9-6.9l1.6-.4.9 2z"/></svg>Ask on WhatsApp</a>' +
        '</div>' +
      '</div>';

    // related
    const relHost = $('#related-products');
    if (relHost) {
      const related = PRODUCTS.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);
      $$('[data-related-cat]').forEach((el) => { el.textContent = cat.name; });
      relHost.innerHTML = related.map((r) =>
        '<a class="mini-card" href="product.html?p=' + esc(r.slug) + '">' +
          (r.image ? '<img src="' + esc(r.image) + '" alt="' + esc(r.name) + '" loading="lazy">'
                   : '<div class="placeholder placeholder--media" style="min-height:7rem;width:100%"><strong>[PHOTO]</strong></div>') +
          '<h5>' + esc(r.name) + '</h5><p>' + esc(r.tagline) + '</p>' +
        '</a>').join('');
    }

    applySiteDetails();

    }

    // The hard gate: none of the product's detail is written into the page
    // until the visitor has given us their name and number.
    if (gate.unlocked()) renderBody();
    else document.addEventListener('gate:unlocked', renderBody, { once: true });
  }

  /* 8 ─── testimonials ──────────────────────────────────────────────────── */

  function initTestimonials() {
    if (typeof REVIEWS === 'undefined') return;

    const feat = $('#featured-review');
    if (feat && typeof FEATURED_REVIEW !== 'undefined') {
      feat.innerHTML = '' +
        '<div class="stack" style="--gap:1.75rem">' +
          '<svg class="quote-mark" width="42" height="34" viewBox="0 0 42 34" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M17 2C9 5 3 12 3 21a11 11 0 0011 11 9 9 0 000-18c-1.6 0-3 .4-4.3 1.1C10.4 9.6 13.2 5.6 17.6 3.4z"/><path d="M39 2c-8 3-14 10-14 19a11 11 0 0011 11 9 9 0 000-18c-1.6 0-3 .4-4.3 1.1.7-5.5 3.5-9.5 7.9-11.7z"/></svg>' +
          '<blockquote>' + esc(FEATURED_REVIEW.quote) + '</blockquote>' +
          '<div class="attrib"><span><span class="attrib__name">' + esc(FEATURED_REVIEW.name) + '</span>' +
          '<span class="attrib__role">' + esc(FEATURED_REVIEW.role) + '</span></span></div>' +
        '</div>' +
        (FEATURED_REVIEW.photo
          ? '<img src="' + esc(FEATURED_REVIEW.photo) + '" alt="' + esc(FEATURED_REVIEW.name) + '" style="width:100%;height:100%;object-fit:cover">'
          : '<div class="placeholder" style="border-color:rgba(217,194,155,0.55);color:var(--pale-gold);min-height:14rem">' +
            '<strong style="color:var(--pale-gold)">[PHOTO OF THE CUSTOMER<br>OR THEIR COUNTER]</strong></div>');
    }

    const grid = $('#review-grid');
    if (grid) {
      grid.innerHTML = REVIEWS.map((r) =>
        '<figure class="review">' +
          '<div class="stars" aria-label="' + r.stars + ' out of 5">' + Array(r.stars + 1).join(ICON.star) + '</div>' +
          '<blockquote>' + esc(r.quote) + '</blockquote>' +
          '<figcaption><b>' + esc(r.name) + '</b><span>' + esc(r.meta) + '</span></figcaption>' +
        '</figure>').join('') +
        '<div class="placeholder"><strong>[More reviews]</strong><span>Add them in assets/js/data.js and they appear here.</span></div>';
      const count = $('#review-count');
      if (count) count.textContent = REVIEWS.length + ' reviews';
    }

    const trade = $('#trade-grid');
    if (trade && typeof TRADE_REVIEWS !== 'undefined') {
      trade.innerHTML = TRADE_REVIEWS.map((r) =>
        '<figure class="trade-quote">' +
          '<blockquote>' + esc(r.quote) + '</blockquote>' +
          '<figcaption><b>' + esc(r.name) + '</b><span>' + esc(r.meta) + '</span></figcaption>' +
        '</figure>').join('');
    }
  }

  /* 9 ─── forms ─────────────────────────────────────────────────────────── */

  function isPhone(v) {
    const digits = String(v).replace(/[^\d]/g, '');
    return digits.length >= 10 && digits.length <= 15;
  }
  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim()); }

  function validateField(input, test, message) {
    const field = input.closest('.field');
    const ok = test(input.value);
    if (field) {
      field.classList.toggle('is-invalid', !ok);
      let err = $('.error', field);
      if (!err) { err = document.createElement('span'); err.className = 'error'; field.appendChild(err); }
      err.textContent = ok ? '' : message;
    }
    input.setAttribute('aria-invalid', ok ? 'false' : 'true');
    return ok;
  }

  function initEnquiryForm() {
    const form = $('#enquiry-form');
    if (!form) return;

    // arriving from a product page — preselect and mention it
    const params = new URLSearchParams(location.search);
    const fromProduct = params.get('product');
    if (fromProduct && hasData) {
      const p = PRODUCTS.filter((x) => x.slug === fromProduct)[0];
      if (p) {
        const sel = $('#c-interest', form);
        if (sel) sel.value = p.category;
        const msg = $('#c-message', form);
        if (msg && !msg.value) msg.value = 'I would like grades, packing and pricing for ' + p.name + '.';
      }
    }

    const checks = [
      ['#c-name',  (v) => v.trim().length >= 2, 'Please tell us your name.'],
      ['#c-email', isEmail, 'Enter an email address we can reply to.'],
      ['#c-phone', isPhone, 'Enter a phone number we can reach you on.']
    ];

    checks.forEach(([sel, test, msg]) => {
      const input = $(sel, form);
      if (!input) return;
      input.addEventListener('blur', () => { if (input.value) validateField(input, test, msg); });
      input.addEventListener('input', () => {
        const field = input.closest('.field');
        if (field && field.classList.contains('is-invalid')) validateField(input, test, msg);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      checks.forEach(([sel, test, msg]) => {
        const input = $(sel, form);
        if (input) ok = validateField(input, test, msg) && ok;
      });
      if (!ok) { const bad = $('.is-invalid input', form); if (bad) bad.focus(); return; }

      const enquiries = store.get('manishs.enquiries', []);
      enquiries.push({
        name: $('#c-name', form).value.trim(),
        email: $('#c-email', form).value.trim(),
        phone: $('#c-phone', form).value.trim(),
        company: ($('#c-company', form) || {}).value || '',
        interest: ($('#c-interest', form) || {}).value || '',
        volume: ($('#c-volume', form) || {}).value || '',
        message: ($('#c-message', form) || {}).value || '',
        at: new Date().toISOString()
      });
      store.set('manishs.enquiries', enquiries);

      const status = $('#form-status');
      if (status) {
        status.hidden = false;
        status.textContent = 'Thank you — your enquiry is noted. ' +
          (filled(SITE.email)
            ? 'We reply from ' + SITE.email + ', usually within one working day.'
            : 'Someone from the counter will come back to you within one working day.');
        status.setAttribute('role', 'status');
        status.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }

  /* ─── boot ─────────────────────────────────────────────────────────────── */

  function boot() {
    applySiteDetails();
    initHeader();
    initReveal();
    gate.init();
    initCatalogue();
    initProductPage();
    initTestimonials();
    initEnquiryForm();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
