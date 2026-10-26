/* ============================================================
   Prime Fresh Oil Mills — script.js
   Vanilla JS: navigation, filters, modal, enquiry form, motion
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- Current year ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------------- Header state / mobile nav ---------------- */
  var header = document.getElementById("site-header");
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("site-nav");

  function onScrollHeader() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  function setNavOpen(open) {
    if (!nav) return;
    nav.classList.toggle("open", open);
    if (navToggle) navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("open"));
    });
  }
  if (nav) {
    nav.addEventListener("click", function (e) {
      var link = e.target && e.target.closest ? e.target.closest("a") : null;
      if (link) setNavOpen(false);
    });
  }

  /* ---------------- Product catalogue filters ---------------- */
  var filtersWrap = document.getElementById("productFilters");
  var grid = document.getElementById("productGrid");

  function applyFilter(filter) {
    if (!grid) return;
    var cards = grid.querySelectorAll(".product-card");
    cards.forEach(function (card) {
      var cat = card.getAttribute("data-category");
      var match = filter === "all" || cat === filter;
      card.classList.toggle("is-hidden", !match);
    });
    var activeBtn = filtersWrap ? filtersWrap.querySelector(".filter-btn.is-active") : null;
    if (filtersWrap) {
      var btns = filtersWrap.querySelectorAll(".filter-btn");
      Array.prototype.forEach.call(btns, function (b) {
        var isActive = b === activeBtn;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    }
  }

  if (filtersWrap) {
    filtersWrap.addEventListener("click", function (e) {
      var btn = e.target && e.target.closest ? e.target.closest(".filter-btn") : null;
      if (!btn) return;
      var filter = btn.getAttribute("data-filter");
      if (!filter) return;
      if (filtersWrap.querySelector(".filter-btn.is-active")) {
        filtersWrap.querySelector(".filter-btn.is-active").classList.remove("is-active");
      }
      btn.classList.add("is-active");
      applyFilter(filter);
    });
  }

  /* ---------------- Product detail modal ---------------- */
  var modal = document.getElementById("productModal");
  var modalClose = document.getElementById("modalClose");
  var modalMedia = document.getElementById("modalMedia");
  var modalCat = document.getElementById("modalCat");
  var modalTitle = document.getElementById("productModalTitle");
  var modalDesc = document.getElementById("modalDesc");
  var modalStatus = document.getElementById("modalStatus");
  var modalEnquire = document.getElementById("modalEnquire");
  var lastFocused = null;

  var PRODUCTS = {
    "yellow-mustard-oil": {
      name: "Yellow Mustard Oil", category: "Oils", badge: "Bestseller",
      desc: "Yellow mustard oil, pressed from yellow mustard seed — the business's confirmed bestselling oil.",
      img: null
    },
    "sesame-oil": {
      name: "Sesame Oil", category: "Oils", badge: "Bestseller",
      desc: "Sesame oil, pressed from sesame seed — identified as a recognised bestseller.",
      img: null
    },
    "yellow-mustard-seeds": {
      name: "Yellow Mustard Seeds", category: "Seeds", badge: null,
      desc: "Yellow mustard seed, the source of the bestselling yellow mustard oil.",
      img: "drive-download-20261025T111626Z-1-001/Yellow_Mustard_Seeds.jpg"
    },
    "sesame-seeds": {
      name: "Sesame Seeds", category: "Seeds", badge: "Bestseller",
      desc: "Sesame seeds, a confirmed bestseller.",
      img: "drive-download-20261025T111626Z-1-001/Sesame_Seeds_Photo_1.jpg"
    },
    "black-sesame-seeds": {
      name: "Black Sesame Seeds", category: "Seeds", badge: null,
      desc: "Black sesame seeds.",
      img: "drive-download-20261025T111626Z-1-001/Black_Sesame_Seeds.jpg"
    },
    "black-mustard-seeds": {
      name: "Black Mustard Seeds", category: "Seeds", badge: null,
      desc: "Black mustard seeds.",
      img: "drive-download-20261025T111626Z-1-001/Black_Mustard_Seeds.jpg"
    },
    "groundnut-seeds": {
      name: "Groundnut Seeds", category: "Seeds", badge: "Bestseller",
      desc: "Groundnut seeds, a confirmed bestseller.",
      img: "drive-download-20261025T111626Z-1-001/Groundnut_Seeds.jpg"
    },
    "yellow-mustard-cake": {
      name: "Yellow Mustard Cake", category: "De-Oiled Cakes", badge: null,
      desc: "Yellow mustard de-oiled cake.",
      img: "drive-download-20261025T111626Z-1-001/Yellow_Mustard_Cake.jpg"
    },
    "black-mustard-cake": {
      name: "Black Mustard Cake", category: "De-Oiled Cakes", badge: null,
      desc: "Black mustard de-oiled cake.",
      img: "drive-download-20261025T111626Z-1-001/Black_Mustard_Cake.jpg"
    }
  };

  function openModal(productId) {
    var product = PRODUCTS[productId];
    if (!product || !modal) return;
    lastFocused = document.activeElement;
    var body = document.body;
    if (body) body.style.overflow = "hidden";
    if (modalMedia) {
      if (product.img) {
        modalMedia.src = product.img;
        modalMedia.alt = product.name + " — supplied product photograph";
        modalMedia.hidden = false;
        var placeholder = document.getElementById("modalPlaceholder");
        if (placeholder) placeholder.hidden = true;
      } else {
        modalMedia.removeAttribute("src");
        modalMedia.alt = "";
        modalMedia.hidden = true;
        var placeholder = document.getElementById("modalPlaceholder");
        if (placeholder) placeholder.hidden = false;
      }
    }
    if (modalCat) modalCat.textContent = product.category;
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalDesc) modalDesc.textContent = product.desc;
    if (modalStatus) modalStatus.textContent = product.badge ? "Confirmed bestseller" : "Verified product";
    modal.hidden = false;
    var panel = modal.querySelector(".modal-panel");
    if (panel) panel.classList.add("is-open");
    if (modalClose) modalClose.focus();
  }

  function closeModal() {
    if (!modal) return;
    var body = document.body;
    if (body) body.style.overflow = "";
    modal.classList.remove("is-open");
    modal.hidden = true;
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  function openProductFromCard(productId) {
    var select = document.getElementById("f-product");
    if (select && PRODUCTS[productId]) select.value = productId;
    openModal(productId);
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalEnquire) modalEnquire.addEventListener("click", function () {
      closeModal();
      var select = document.getElementById("f-product");
      var enquire = document.getElementById("enquire");
      if (select) select.focus();
      if (enquire) enquire.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.hidden === false) closeModal();
    });
  }

  document.querySelectorAll("[data-open-product]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-open-product");
      if (id) openProductFromCard(id);
    });
  });

  /* ---------------- Enquiry form ---------------- */
  var form = document.getElementById("enquiryForm");
  var formSuccess = document.getElementById("formSuccess");
  var formReset = document.getElementById("formReset");

  function showError(id, message) {
    var el = document.getElementById(id);
    if (!el) return;
    el.textContent = message || "";
  }

  function validateForm() {
    var valid = true;
    var name = document.getElementById("f-name");
    var email = document.getElementById("f-email");
    var product = document.getElementById("f-product");
    var nameVal = name ? name.value.trim() : "";
    var emailVal = email ? email.value.trim() : "";
    var productVal = product ? product.value : "";
    if (!nameVal) { showError("f-name-error", "Please enter your name."); valid = false; }
    if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) { showError("f-email-error", "Please enter a valid email address."); valid = false; }
    if (!productVal) { showError("f-product-error", "Please select a product of interest."); valid = false; }
    return valid;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateForm()) {
        var firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      if (formSuccess) { formSuccess.hidden = false; form.hidden = true; }
    });
  }

  if (formReset) {
    formReset.addEventListener("click", function () {
      if (form) { form.reset(); form.hidden = false; }
      if (formSuccess) formSuccess.hidden = true;
      var firstField = document.getElementById("f-name");
      if (firstField) firstField.focus();
    });
  }

  /* ---------------- Enquiry list (frontend only) ---------------- */
  var cart = [];
  var cartItemsEl = document.getElementById("cartItems");
  var cartEmptyEl = document.getElementById("cartEmpty");
  var cartActionsEl = document.getElementById("cartActions");
  var cartCountEl = document.getElementById("cartCount");
  var cartClearEl = document.getElementById("cartClear");
  var cartSendEl = document.getElementById("cartSend");
  var cartFloatEl = document.getElementById("cartFloat");
  var cartFloatCountEl = document.getElementById("cartFloatCount");
  var cartStatusEl = document.getElementById("cartStatus");
  var cartPanelEl = document.getElementById("enquiryCart");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function cartFind(id) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === id) return cart[i];
    }
    return null;
  }

  function cartUnits() {
    return cart.reduce(function (total, item) { return total + item.qty; }, 0);
  }

  function cartAnnounce(message) {
    if (cartStatusEl) cartStatusEl.textContent = message;
  }

  function cartRender() {
    var units = cartUnits();
    if (cartCountEl) cartCountEl.textContent = String(units);
    if (cartFloatCountEl) cartFloatCountEl.textContent = String(units);
    if (cartEmptyEl) cartEmptyEl.hidden = cart.length > 0;
    if (cartActionsEl) cartActionsEl.hidden = cart.length === 0;
    if (cartClearEl) cartClearEl.hidden = cart.length === 0;
    if (cartFloatEl) {
      cartFloatEl.hidden = cart.length === 0;
      cartFloatEl.setAttribute("aria-label", "View enquiry list, " + units + (units === 1 ? " item" : " items"));
    }
    if (!cartItemsEl) return;

    cartItemsEl.innerHTML = "";
    cart.forEach(function (item) {
      var product = PRODUCTS[item.id];
      if (!product) return;

      var li = document.createElement("li");
      li.className = "cart-item";
      li.setAttribute("data-cart-id", item.id);

      var name = document.createElement("span");
      name.className = "cart-item-name";
      name.textContent = product.name;

      var qty = document.createElement("div");
      qty.className = "cart-qty";
      qty.setAttribute("role", "group");
      qty.setAttribute("aria-label", "Quantity for " + product.name);

      var dec = document.createElement("button");
      dec.type = "button";
      dec.className = "qty-btn";
      dec.setAttribute("data-cart-action", "dec");
      dec.setAttribute("aria-label", "Decrease quantity of " + product.name);
      dec.textContent = "\u2212";
      dec.disabled = item.qty <= 1;

      var val = document.createElement("span");
      val.className = "qty-value";
      val.textContent = String(item.qty);

      var inc = document.createElement("button");
      inc.type = "button";
      inc.className = "qty-btn";
      inc.setAttribute("data-cart-action", "inc");
      inc.setAttribute("aria-label", "Increase quantity of " + product.name);
      inc.textContent = "+";

      qty.appendChild(dec);
      qty.appendChild(val);
      qty.appendChild(inc);

      var remove = document.createElement("button");
      remove.type = "button";
      remove.className = "cart-remove";
      remove.setAttribute("data-cart-action", "remove");
      remove.setAttribute("aria-label", "Remove " + product.name + " from enquiry list");
      remove.textContent = "Remove";

      li.appendChild(name);
      li.appendChild(qty);
      li.appendChild(remove);
      cartItemsEl.appendChild(li);
    });
  }

  function cartFocusAfterChange(id, action) {
    if (!cartItemsEl) { if (cartPanelEl) cartPanelEl.focus(); return; }
    var row = cartItemsEl.querySelector('[data-cart-id="' + id + '"]');
    if (row && action !== "remove") {
      var btn = row.querySelector('[data-cart-action="' + action + '"]');
      if (btn && !btn.disabled) { btn.focus(); return; }
      var inc = row.querySelector('[data-cart-action="inc"]');
      if (inc) { inc.focus(); return; }
    }
    if (cartPanelEl) cartPanelEl.focus();
  }

  function cartAdd(id) {
    var product = PRODUCTS[id];
    if (!product) return;
    var item = cartFind(id);
    if (item) {
      item.qty += 1;
    } else {
      cart.push({ id: id, qty: 1 });
    }
    cartRender();
    var units = cartUnits();
    cartAnnounce(product.name + " added to your enquiry list. " + units + (units === 1 ? " item" : " items") + " selected.");
  }

  if (cartItemsEl) {
    cartItemsEl.addEventListener("click", function (e) {
      var btn = e.target && e.target.closest ? e.target.closest("[data-cart-action]") : null;
      if (!btn) return;
      var row = btn.closest("[data-cart-id]");
      if (!row) return;
      var id = row.getAttribute("data-cart-id");
      var action = btn.getAttribute("data-cart-action");
      var item = cartFind(id);
      var product = PRODUCTS[id];
      if (!item || !product) return;

      if (action === "inc") {
        item.qty += 1;
        cartRender();
        cartFocusAfterChange(id, action);
        cartAnnounce(product.name + " quantity increased to " + item.qty + ".");
      } else if (action === "dec") {
        if (item.qty <= 1) return;
        item.qty -= 1;
        cartRender();
        cartFocusAfterChange(id, action);
        cartAnnounce(product.name + " quantity decreased to " + item.qty + ".");
      } else if (action === "remove") {
        cart = cart.filter(function (entry) { return entry.id !== id; });
        cartRender();
        cartFocusAfterChange(id, action);
        cartAnnounce(product.name + " removed from your enquiry list.");
      }
    });
  }

  if (cartClearEl) {
    cartClearEl.addEventListener("click", function () {
      cart = [];
      cartRender();
      if (cartPanelEl) cartPanelEl.focus();
      cartAnnounce("Enquiry list cleared.");
    });
  }

  document.querySelectorAll("[data-add-product]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-add-product");
      if (!id) return;
      cartAdd(id);
      if (!btn.getAttribute("data-label")) btn.setAttribute("data-label", btn.textContent);
      btn.textContent = "Added";
      btn.classList.add("is-added");
      if (btn._cartTimer) window.clearTimeout(btn._cartTimer);
      btn._cartTimer = window.setTimeout(function () {
        btn.textContent = btn.getAttribute("data-label") || "Add to Enquiry";
        btn.classList.remove("is-added");
      }, 1200);
    });
  });

  if (cartSendEl) {
    cartSendEl.addEventListener("click", function () {
      if (!cart.length) return;
      var lines = cart.map(function (item) {
        var product = PRODUCTS[item.id];
        return product ? "- " + product.name + ": " + item.qty : "";
      }).filter(function (line) { return line; });
      var listText = "Products of interest:\n" + lines.join("\n");
      var message = document.getElementById("f-msg");
      if (message) {
        var existing = message.value.trim();
        if (existing && existing.indexOf("Products of interest:") !== 0) {
          listText += "\n\n" + existing;
        }
        message.value = listText;
      }
      var select = document.getElementById("f-product");
      if (select && !select.value && cart[0] && PRODUCTS[cart[0].id]) {
        select.value = cart[0].id;
      }
      var formEl = document.getElementById("enquiryForm");
      if (formEl) formEl.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      if (message) message.focus({ preventScroll: true });
      var note = document.getElementById("cartNote");
      if (note) note.textContent = "List copied into the form below \u2014 review it, then submit the form.";
      cartAnnounce("Your enquiry list has been copied into the form. Nothing has been sent.");
    });
  }

  if (cartFloatEl) {
    cartFloatEl.addEventListener("click", function () {
      if (!cartPanelEl) return;
      cartPanelEl.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      cartPanelEl.focus({ preventScroll: true });
    });
  }

  cartRender();

  /* ---------------- Reveal on scroll ---------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
