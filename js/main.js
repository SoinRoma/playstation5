let instance = new vidbg(".video", {
  mp4: "video/PS5.mp4", // URL or relative path to MP4 video
  poster: "video/posterps5.png", // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});
let rellax = new Rellax(".console");
if (document.body.clientWidth < 576) {
  rellax.destroy();
}

AOS.init();
