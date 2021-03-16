(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const btnNoneRef = document.querySelector("[data-menu-none]");
  const btnNoneSecondRef = document.querySelector("[data-menu-none-second]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");


  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    btnNoneRef.classList.toggle("is-none");
    btnNoneSecondRef.classList.toggle("is-none");
  });
  menuBtnRef.addEventListener("click", toggleMenu);
  function toggleMenu() {
    document.body.classList.toggle("menu-open");
  }
  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    btnNoneRef.classList.toggle("is-none");
    btnNoneSecondRef.classList.toggle("is-none");
    document.body.classList.toggle("menu-open");
  });
})();