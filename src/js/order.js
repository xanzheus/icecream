(() => {
  const refs = {
    openOrderBtn: document.querySelector('[data-order-open]'),
    openOrderSecBtn: document.querySelector('[data-order-open-second]'),
    closeOrderBtn: document.querySelector('[data-order-close]'),
    order: document.querySelector('[data-order]'),
  };

  refs.openOrderBtn.addEventListener('click', toggleOrder);
  refs.openOrderSecBtn.addEventListener('click', toggleOrder);
  refs.closeOrderBtn.addEventListener('click', toggleOrder);

  function toggleOrder() {
    document.body.classList.toggle("order-open");
    refs.order.classList.toggle('is-hidden');
  }
})();