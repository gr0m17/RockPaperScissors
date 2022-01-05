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
  return (
    <div className="App">
      <video>
        <source src={RPS_V09}></source>
      </video>
    </div>
  );
}

export default App;

//todo
//1) make the player play the videos, then at the end of one video, play the next video in the queue
//2) make buttons that change the video queue.
//3) make the buttons only work during the button window
