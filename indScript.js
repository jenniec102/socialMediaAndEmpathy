// javascript for index.html

// from https://github.com/dixonandmoe/rellax
var rellax = new Rellax('.rellax', {
  center: true
});

// $('.parallax-window').parallax({
//     // position: bottom bottom,
//     bleed: 10
// });

// $('#pic2').parallax({
//   imageSrc: 'https://jayclouse.com/wp-content/uploads/2018/02/9d13fa77-8778-45ba-8a49-4edc3ec818a2-1024x785-1.jpg',
//   naturalWidth: 745,
//   naturalHeight: 570,
//   speed: 0.5,
//   bleed: 10
// });

// $('#pic2').parallax({
//   imageSrc: 'https://cdn.searchenginejournal.com/wp-content/uploads/2020/10/how-to-add-emojis-to-title-tags-meta-descriptions-in-wordpress-5f8efa328bf9d.png',
//   naturalWidth: 745,
//   naturalHeight: 570,
//   speed: 0.5,
//   bleed: 10
// });
//
// $('#pic3').parallax({
//   imageSrc: 'https://philadelphiapsychology.org/wp-content/uploads/2017/09/headlineImage.adapt_.1460.high_.facial_expression2_040414.1397364643241.jpg',
//   naturalWidth: 745,
//   naturalHeight: 570,
//   speed: 0.5,
//   bleed: 10
// });

// from https://simpleparallax.com/
var image = document.getElementsByClassName('parallax-pic');
new simpleParallax(image, {
  delay: 0.5,
  scale: 1.5,
  overflow: true,
});
