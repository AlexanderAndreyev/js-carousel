(function() {
  let carousels = document.getElementsByClassName('carousel');

  let left = carousels[0].getElementsByClassName('left')[0],
      right = carousels[0].getElementsByClassName('right')[0],
      wrapper = carousels[0].getElementsByClassName('wrapper')[0],
      imgs = wrapper.getElementsByTagName('img'),
      bubblesContainer = carousels[0].getElementsByClassName('bubbles')[0],
      currentImgIndex = 0,
      width = 500,
      bubbles = [];

  for (let i = 0; i < imgs.length; i++) {
    let bubble = document.createElement('span');
    bubble.classList.add('bubble');
    bubblesContainer.appendChild(bubble);
    bubbles.push(bubble);

    bubble.addEventListener('click', function() {
      currentImgIndex = i;
      changeImg();
    });
  }

  function changeImg() {
    wrapper.style.left = -width * currentImgIndex + 'px';

    bubbles.forEach(function(bubble, i) {
      if (i === currentImgIndex) {
        bubble.classList.add('active');
      } else {
        bubble.classList.remove('active');
      }
    });
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

  changeImg();

})();
