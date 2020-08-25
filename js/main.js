var instance = new vidbg(".video", {
  mp4: "video/PS5.mp4", // URL or relative path to MP4 video
  webm: "video/PS5.webm", // URL or relative path to webm video
  poster: "video/posterps5.jpg", // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});
var rellax = new Rellax(".console");
if (document.body.clientWidth < 576) {
  rellax.destroy();
}

AOS.init();
