import logo from "./logo.svg";
import "./App.css";
import RPS_V03 from "./video/RPS_V03.mp4";
import RPS_V04 from "./video/RPS_V04.mp4";
import RPS_V05 from "./video/RPS_V05.mp4";
import RPS_V06 from "./video/RPS_V06.mp4";
import RPS_V07 from "./video/RPS_V07.mp4";
import RPS_V08 from "./video/RPS_V08.mp4";
import RPS_V09 from "./video/RPS_V09.mp4";
import RPS_V10 from "./video/RPS_V10.mp4";
import RPS_V11 from "./video/RPS_V11.mp4";
import RPS_V12 from "./video/RPS_V12.mp4";
import RPS_V13 from "./video/RPS_V13.mp4";
import RPS_V14 from "./video/RPS_V14.mp4";

function App() {
  let videoPlayer = document.getElementById("videoWindow");
  console.log(videoPlayer);
  const VIDEO_ARRAY = [
    RPS_V03,
    RPS_V03,
    RPS_V03,
    RPS_V04,
    RPS_V05,
    RPS_V06,
    RPS_V07,
    RPS_V08,
    RPS_V09,
    RPS_V09,
    RPS_V10,
    RPS_V11,
    RPS_V12,
    RPS_V13,
    RPS_V14,
  ];
  let currentVideo = 0;
  const rockHandler = () => {
    videoPlayer = document.getElementById("videoWindow");
    const cpuChoice = Math.floor(Math.random() * 3) + 3;
    currentVideo = cpuChoice;
  };
  const paperHandler = () => {
    videoPlayer = document.getElementById("videoWindow");
    const cpuChoice = Math.floor(Math.random() * 3) + 7;
    currentVideo = cpuChoice;
  };
  const scissorHandler = () => {
    videoPlayer = document.getElementById("videoWindow");
    const cpuChoice = Math.floor(Math.random() * 3) + 11;
    currentVideo = cpuChoice;
  };

  const endedHandler = (event) => {
    videoPlayer = document.getElementById("videoWindow");
    videoPlayer.autoplay = true;
    videoPlayer.src = VIDEO_ARRAY[currentVideo];
    videoPlayer.load();
    console.log(event);
    currentVideo++;
  };
  const playHandler = () => {
    videoPlayer = document.getElementById("videoWindow");
    videoPlayer.play();
  };
  return (
    <div className="App">
      <video
        width="800"
        id="videoWindow"
        onEnded={endedHandler}
        autoPlay={"autoplay"}
      >
        <source src={RPS_V03}></source>
      </video>
      <div>
        <button onClick={rockHandler}>ROCK</button>
        <button onClick={paperHandler}>PAPER</button>
        <button onClick={scissorHandler}>SCISSORS</button>
      </div>
      <div>
        <button onClick={playHandler}>PLAY</button>
      </div>
    </div>
  );
}

export default App;

//todo
//1) make the player play the videos, then at the end of one video, play the next video in the queue
//2) make buttons that change the video queue.
//3) make the buttons only work during the button window
