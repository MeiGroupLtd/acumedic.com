// Swap the "Welcome to AcuMedic" heading for the logo after a short pause.
(function () {
  var brand = document.getElementById('brand');
  if (!brand) return;
  var delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1800;
  setTimeout(function () { brand.classList.add('is-revealed'); }, delay);
})();
