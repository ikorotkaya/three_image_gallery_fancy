const initGallery = ({ container, images }) => {
  const $container = document.querySelector(container);

  for (let i = 0; i < 3; i++) {
    const $img = document.createElement("img");
    $img.src = images[i];
    $img.classList.add("picture");

    $container.appendChild($img);
  }

  const $imgs = $container.querySelectorAll(".picture");
  const $firstImage = $container.querySelector(".picture");
  const $lastImage = $container.querySelector(".picture:last-child");

  let currentIndex = 0;

  const fixIndex = (index, arr) => {
    if (index < 0) {
      return (index % arr.length === 0 ? 0 : arr.length + index % arr.length)
    } else {
      return index % arr.length;
    }
  }

  const showPhotos = (index) => {
    for (let i = 0; i < 3; i++) {
      const $img = $imgs[i];
      $img.src = images[fixIndex(index + i, images)];
    }
  };

  $firstImage.addEventListener("click", () => {
    currentIndex -= 1;

    showPhotos(currentIndex)
  })

  $lastImage.addEventListener("click", () => {
    currentIndex += 1;

    showPhotos(currentIndex)
  })


  document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === "ArrowRight") {
      currentIndex += 1;

    } else if (keyName === "ArrowLeft") {
      currentIndex -= 1;

    }

    showPhotos(currentIndex);

    console.log(keyName);

  })

}

