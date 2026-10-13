// Opens and closes the "Apps" dropdown on click/tap (hover also works on desktop via CSS).
(function () {
  var dropdowns = document.querySelectorAll(".dropdown");

  function closeAll(except) {
    dropdowns.forEach(function (dd) {
      if (dd === except) return;
      dd.classList.remove("open");
      var btn = dd.querySelector(".nav-btn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }

  dropdowns.forEach(function (dd) {
    var btn = dd.querySelector(".nav-btn");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAll(dd);
      var isOpen = dd.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) closeAll();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll();
  });
})();
