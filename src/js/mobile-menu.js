(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuNatRef = document.querySelector("[data-menu-nat]");
  const btnNoneRef = document.querySelector("[data-menu-none]");
  const btnNoneSecondRef = document.querySelector("[data-menu-none-second]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  const mobileBtnClose1 = document.querySelector("[data-menu-close-1]");
  const mobileBtnClose2 = document.querySelector("[data-menu-close-2]");
  const mobileBtnClose3 = document.querySelector("[data-menu-close-3]");
  const mobileBtnClose4 = document.querySelector("[data-menu-close-4]");
  const mobileBtnClose5 = document.querySelector("[data-menu-close-5]");


  menuBtnRef.addEventListener("click", () => {
    mobileMenuNatRef.classList.toggle("is-open");
    btnNoneRef.classList.toggle("is-none");
    btnNoneSecondRef.classList.toggle("is-none");
  });
  menuBtnRef.addEventListener("click", toggleMenu);
  function toggleMenu() {
    document.body.classList.toggle("menu-open-nat");
  }

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuNatRef.classList.toggle("is-open");
    btnNoneRef.classList.toggle("is-none");
    btnNoneSecondRef.classList.toggle("is-none");
    document.body.classList.toggle("menu-open-nat");
  });

  mobileBtnClose1.addEventListener("click", () => {
    mobileMenuNatRef.classList.toggle("is-open");
    btnNoneRef.classList.toggle("is-none");
    btnNoneSecondRef.classList.toggle("is-none");
    document.body.classList.toggle("menu-open-nat");
  });

  mobileBtnClose2.addEventListener("click", () => {
    mobileMenuNatRef.classList.toggle("is-open");
    btnNoneRef.classList.toggle("is-none");
    btnNoneSecondRef.classList.toggle("is-none");
    document.body.classList.toggle("menu-open-nat");
  });

  mobileBtnClose3.addEventListener("click", () => {
    mobileMenuNatRef.classList.toggle("is-open");
    btnNoneRef.classList.toggle("is-none");
    btnNoneSecondRef.classList.toggle("is-none");
    document.body.classList.toggle("menu-open-nat");
  });

  mobileBtnClose4.addEventListener("click", () => {
    mobileMenuNatRef.classList.toggle("is-open");
    btnNoneRef.classList.toggle("is-none");
    btnNoneSecondRef.classList.toggle("is-none");
    document.body.classList.toggle("menu-open-nat");
  });

  mobileBtnClose5.addEventListener("click", () => {
    mobileMenuNatRef.classList.toggle("is-open");
    btnNoneRef.classList.toggle("is-none");
    btnNoneSecondRef.classList.toggle("is-none");
    document.body.classList.toggle("menu-open-nat");
  });

})();