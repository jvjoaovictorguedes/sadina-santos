// Executado inline no <head>, antes da hidratação do React, para aplicar o
// tema salvo (ou a preferência do sistema) sem flash de tela clara/escura.
export const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("sadina-theme");
    var theme = stored
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;
