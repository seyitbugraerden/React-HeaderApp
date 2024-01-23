import { useState } from "react";
import arrow from "./Assets/arrow_btn.png";
import image1 from "./Assets/image1.png";
import image2 from "./Assets/image2.png";
import image3 from "./Assets/image3.png";
import video1 from "./Assets/video1.mp4";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  return (
    <>
      <nav className="header">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="navbar-brand">EV-olution</div>
            <div>
              <a href="">Anasayfa</a>
              <a href="">Keşfet</a>
              <a href="">Hakkımızda</a>
              <a href="">İletişim</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="text-area">
        <div className="container position-relative">
          <h2>
            Indulge <br /> Your Passion
          </h2>
          <h3>
            Daha Fazlasını Keşfet <img src={arrow} alt="" />
          </h3>
          <button
            className={value === 1 ? "active" : ""}
            onClick={() => {
              setValue(1);
            }}
          ></button>
          <button
            className={value === 2 ? "active" : ""}
            onClick={() => {
              setValue(2);
            }}
          ></button>
          <button
            className={value === 3 ? "active" : ""}
            onClick={() => {
              setValue(3);
            }}
          ></button>{" "}
          <br />
          <i
            onClick={() => {
              setValue(4);
            }}
            class="bi bi-play"
          ></i>
        </div>
      </div>

      <img className={value === 1 ? "fade-in" : "d-none"} src={image1} alt="" />
      <img className={value === 2 ? "fade-in" : "d-none"} src={image2} alt="" />
      <img className={value === 3 ? "fade-in" : "d-none"} src={image3} alt="" />
      <video
        className={value === 4 ? "background fade-in" : "d-none"}
        autoPlay
        loop
        muted
      >
        <source src={video1} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
