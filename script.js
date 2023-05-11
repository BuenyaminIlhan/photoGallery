const imageArray = [
    '/img/20181020_181841.jpg',
    '/img/20221008_093059.jpg',
    '/img/20221008_093203.jpg',
    '/img/20221008_120550.jpg',
    '/img/IMG_20210621_193324.jpg',
    '/img/IMG_20210621_193725.jpg',
    '/img/IMG_9808.JPG',
    '/img/IMG_9809.JPG'
  ];
  
  
  function render() {
    const container = document.getElementById('container');
    let imagesHTML = '';
  
    // Schleife über das Bild-Array
    for (let i = 0; i < imageArray.length; i++) {
      const imagePath = imageArray[i];
  
      // Hinzufügen des Bild-HTML-Tags zum String
      imagesHTML += '<img src="' + imagePath + '">';
    }
  
    // Setzen des innerHTML des Containers mit den Bildern
    container.innerHTML = imagesHTML;
  }
  
  // Aufruf der Funktion
  render();
  