const current = document.body.dataset.page;

if (current) {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.dataset.page === current) {
      link.setAttribute("aria-current", "page");
    }
  });
}
