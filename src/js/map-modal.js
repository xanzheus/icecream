(() => {
  const refs = {
    openModalMapBtn: document.querySelector('[data-modal-map-open]'),
    closeModalMapBtn: document.querySelector('[data-modal-map-close]'),
    modalMap: document.querySelector('[data-modal-map]'),
  };

  var deviceWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
  if (deviceWidth < 768) {
    window.open("https://g.page/goitua?share");
  }
  else {
    refs.openModalMapBtn.addEventListener('click', toggleModal);
    refs.closeModalMapBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    document.body.classList.toggle("read-open");
    refs.modalMap.classList.toggle('is-hidden');
  }
}
})();