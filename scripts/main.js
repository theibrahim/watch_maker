// Variables Section

// Function Section
// function domShowcase(tagname, content) {
//   document.querySelector(tagname).innerHTML = content;
// }
// function changeCss(tagname, value) {
//   document.querySelector(tagname).style = value;
// }
// // Arrays Section
// let i = 0;
// let image = ['one.jpg', 'two.jpg', 'three.jpg'];
// function slideshow() {
//   document.querySelector('.img').src = image[i];
//   setTimeout = ('slideshow', 3000);
// }
// window.onload = slideshow();
// Loops
var i = 0;
var image = ['img/4.jpg', 'img/2.jpg', 'img/3.jpg'];
function slideshow() {
  document.querySelector('.back-img').src = image[i];
  if (i < 2) {
    i++;
  } else {
    i = 0;
  }
  console.log(i);
  setTimeout('slideshow()', 2000);
}
// document.querySelector('.backgroundimg').style.backgroundImage ="url('../img/pizza.jpg')";
window.onload = slideshow();
