<video id="homevideo" width="100%" autoplay onended="run()">
  <source src="app/video1.mp4" type="video/mp4" />
  <source src="app/video2.mp4" type="video/mp4" />
</video>;

video_count = 1;
videoPlayer = document.getElementById("homevideo");

function run() {
  video_count++;
  if (video_count == 4) video_count = 1;
  var nextVideo = "app/video" + video_count + ".mp4";
  videoPlayer.src = nextVideo;
  videoPlayer.play();
}
