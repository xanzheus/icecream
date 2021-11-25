(() => {
  const refs = {
    openOrderBtn: document.querySelector('[data-order-open]'),
    openOrderSecBtn: document.querySelector('[data-order-open-second]'),
    openOrder3Btn: document.querySelector('[data-order-open-3]'),
    openOrder4Btn: document.querySelector('[data-order-open-4]'),
    openOrder5Btn: document.querySelector('[data-order-open-5]'),
    closeOrderBtn: document.querySelector('[data-order-close]'),
    order: document.querySelector('[data-order]'),
  };

  refs.openOrderBtn.addEventListener('click', toggleOrder);
  refs.openOrderSecBtn.addEventListener('click', toggleOrder);
  refs.openOrder3Btn.addEventListener('click', toggleOrder);
  refs.openOrder4Btn.addEventListener('click', toggleOrder);
  refs.openOrder5Btn.addEventListener('click', toggleOrder);
  refs.closeOrderBtn.addEventListener('click', toggleOrder);

  function toggleOrder() {
    document.body.classList.toggle("order-open");
    refs.order.classList.toggle('is-hidden');
  }
})();