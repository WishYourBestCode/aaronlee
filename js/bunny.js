function init() {
    const animateSprite = (target, frameNo, frameSize) => {
      let i = 0;
      setInterval(function () {
        target.style.margin = `0px ${-(i * frameSize)}px`;
        if (i === frameNo) {
          i = 0;
        } else {
          i++;
        }
      }, 250);
    };
  
    const wrapper = document.querySelector('.wrapper');
  
    const createNewSprite = () => {
      const sprite = document.createElement('div');
      const frameSize = 200;
      sprite.classList.add('sprite_wrapper');
      sprite.style.width = `${frameSize}px`;
  
      const spriteInside = document.createElement('div');
      spriteInside.classList.add('sprite_inner');
      spriteInside.style.height = `${frameSize}px`;
      spriteInside.style.width = `${frameSize}px`;
      spriteInside.innerHTML = bunnySvg('#7CEAEC');
  
      const randomTop = Math.ceil(Math.random() * 100) + 10;
      sprite.style.right = `-${frameSize}px`;
      sprite.style.bottom = `calc(${0}%)`;
      sprite.style.zIndex = frameSize * randomTop;
      const life = Math.ceil(Math.random() * 5) + 2;
      sprite.style.transition = `${life}s`;
      sprite.appendChild(spriteInside);
      wrapper.appendChild(sprite);
      animateSprite(spriteInside, 2, frameSize);
  
      setTimeout(() => {
        sprite.style.right = '100vw';
      }, 10);
  
      setTimeout(() => {
        wrapper.removeChild(sprite);
      }, life * 1000);
    };
  
    let intervalId = setInterval(() => {
      createNewSprite();
    }, 1000);
  
    wrapper.cleanup = function () {
      clearInterval(intervalId);
      wrapper.innerHTML = '';
    };
  
    wrapper.reInit = function () {
      wrapper.cleanup();
      intervalId = setInterval(() => {
        createNewSprite();
      }, 1000);
    };
  
    return {
      cleanup: wrapper.cleanup,
      reInit: wrapper.reInit,
    };
  }
  
  console.log('Bunny script loaded and executed');
  const bunnyControl = init();
  
  // Example usage:
  // bunnyControl.cleanup();  // To clear the bunnies
  // bunnyControl.reInit();   // To re-initialize the bunnies
  