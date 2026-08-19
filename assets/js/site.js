const current = document.body.dataset.page;

if (current) {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.dataset.page === current) {
      link.setAttribute("aria-current", "page");
    }
  });
}

(() => {
  const storageKey = "yuanzhe-xi-theme";
  const root = document.documentElement;
  const navLinks = document.querySelector(".nav-links");

  if (!navLinks) {
    return;
  }

  const getStoredTheme = () => {
    try {
      return window.localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  };

  const storeTheme = (theme) => {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // Theme preference is optional; the site still works without storage.
    }
  };

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "theme-toggle";

  const setTheme = (theme, shouldStore = false) => {
    const nextTheme = theme === "dark" ? "dark" : "light";
    root.dataset.theme = nextTheme;
    toggle.textContent = nextTheme === "dark" ? "Light" : "Dim";
    toggle.setAttribute(
      "aria-label",
      nextTheme === "dark" ? "Switch to light theme" : "Switch to dim theme"
    );
    toggle.setAttribute("aria-pressed", nextTheme === "dark" ? "true" : "false");

    if (shouldStore) {
      storeTheme(nextTheme);
    }
  };

  const storedTheme = getStoredTheme();
  setTheme(storedTheme === "dark" ? "dark" : "light");

  toggle.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });

  navLinks.append(toggle);
})();
