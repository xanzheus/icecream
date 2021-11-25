(() => {
  const refs = {
    openAdamantsBtn: document.querySelector('[data-adamants-open]'),
    closeAdamantsBtn: document.querySelector('[data-adamants-close]'),
    Adamants: document.querySelector('[data-adamants-modal]'),
  };

  refs.openAdamantsBtn.addEventListener('click', toggleRead);
  refs.closeAdamantsBtn.addEventListener('click', toggleRead);

function toggleRead() {
    document.body.classList.toggle("read-open");
    refs.Adamants.classList.toggle('is-hidden');
  }
})();