// set theme based on site or system preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

Alpine.data("position", () => ({
  positionsLst: ["Software Engineer", "DevOps Enthusiast", "Linux Adept"],
  index: 0,
  get value() {
    return this.positionsLst[this.index];
  },
  next() {
    this.index = (this.index + 1) % this.positionsLst.length;
  },
}));

setInterval(function () {
  window.dispatchEvent(new Event("switch-position"));
}, 5000);
