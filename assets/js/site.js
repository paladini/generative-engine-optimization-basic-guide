(function () {
  "use strict";

  const progressBar = document.querySelector("[data-progress]");
  const navLinks = Array.from(document.querySelectorAll("[data-section-nav] a[href^='#']"));
  const navSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const keyboardSections = Array.from(document.querySelectorAll("section[id]"));

  function updateProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
    progressBar.style.width = `${Math.round(progress * 100)}%`;
  }

  function updateActiveSection() {
    if (!navSections.length) return;
    const marker = window.scrollY + Math.max(96, window.innerHeight * 0.22);
    let active = navSections[0];

    for (const section of navSections) {
      if (section.offsetTop <= marker) active = section;
    }

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${active.id}`;
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function wireCopyButtons() {
    const snippets = document.querySelectorAll("[data-copy]");

    snippets.forEach((button) => {
      const target = document.querySelector(button.getAttribute("data-copy"));
      if (!target) return;

      button.addEventListener("click", async () => {
        const original = button.textContent;
        const text = target.textContent.trim();
        try {
          await copyText(text, target);
          button.textContent = button.getAttribute("data-copied") || "Copied";
        } catch (error) {
          button.textContent = button.getAttribute("data-failed") || "Select";
        }

        window.setTimeout(() => {
          button.textContent = original;
        }, 1800);
      });
    });
  }

  async function copyText(text, target) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (error) {
        // Fall back to the textarea path below when browser permissions block the Clipboard API.
      }
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      if (document.execCommand("copy")) return;
    } finally {
      textarea.remove();
    }

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(target);
    selection.removeAllRanges();
    selection.addRange(range);
    throw new Error("Clipboard copy unavailable");
  }

  function wireKeyboardHint() {
    window.addEventListener("keydown", (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      if (!keyboardSections.length) return;

      const marker = window.scrollY + 120;
      const index = keyboardSections.reduce((current, section, sectionIndex) => {
        return section.offsetTop <= marker ? sectionIndex : current;
      }, 0);
      const nextIndex = event.key === "ArrowDown" ? index + 1 : index - 1;
      const next = keyboardSections[Math.max(0, Math.min(keyboardSections.length - 1, nextIndex))];

      if (next) {
        event.preventDefault();
        next.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  wireCopyButtons();
  wireKeyboardHint();
  updateProgress();
  updateActiveSection();

  window.addEventListener("scroll", () => {
    updateProgress();
    updateActiveSection();
  }, { passive: true });

  window.addEventListener("resize", updateProgress);
})();
