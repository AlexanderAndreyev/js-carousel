(function() {
  let carousels = document.getElementsByClassName('carousel');

  let left = carousels[0].getElementsByClassName('left')[0],
      right = carousels[0].getElementsByClassName('right')[0],
      wrapper = carousels[0].getElementsByClassName('wrapper')[0],
      imgs = wrapper.getElementsByTagName('img'),
      bubbles = carousels[0].getElementsByClassName('bubbles')[0],
      currentImgIndex = 0,
      width = 500;

  function changeImg() {
    wrapper.style.left = -width * currentImgIndex + 'px';
  }

  right.addEventListener('click', function() {
    currentImgIndex++;

    if (currentImgIndex >= imgs.length) {
      currentImgIndex = 0;
    }

    changeImg();

  });

  left.addEventListener('click', function() {
    currentImgIndex--;

    if (currentImgIndex < 0) {
      currentImgIndex = imgs.length - 1;
    }

    changeImg();

  });
})();
