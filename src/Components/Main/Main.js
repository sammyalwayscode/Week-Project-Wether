import React from "react";
import "./Main.css";
import { Input } from "antd";
import { RadiusUprightOutlined } from "@ant-design/icons";
import { MoreOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
// import CloudIcon from "@material-ui/icons/Cloud";
import Storm from "../Images/storm.png";
import Drop from "../Images/drop.png";
import Rain from "../Images/rain.png";
import Wind from "../Images/wind.png";
import Stormy from "../Images/stormyy.png";
import Wind1 from "../Images/wind-1.png";

const api = {
  key: "86bc6cc191ce845406cbaaefa419f1aa",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Main() {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}, ${year}`;
  };

  return (
    <div className="GeneralDiv">
      <div className="SubGeneralDiv">
        <div className="WetherDivMain">
          <div className="WeatherUp">
            <div className="HeaderSearch">
              <RadiusUprightOutlined
                style={{ color: "#fff", fontSize: "20px" }}
              />
              <Input
                placeholder="Know Your Weather"
                style={{ width: "230px" }}
              />
              <MoreOutlined style={{ color: "#fff", fontSize: "20px" }} />
            </div>

            <div
              style={{
                color: "#fff",
                marginTop: "5px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              New York, USA
            </div>
            <img src={Storm} alt="Tunderstorm" style={{ width: "100px" }} />
            <div
              style={{
                fontSize: "50px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              21<sup style={{ fontSize: "30px" }}>0</sup>c
            </div>
            <div style={{ color: "#fff", fontSize: "18px", fontWeight: "600" }}>
              TunderStorm
            </div>
            <div> {dateBuilder(new Date())} </div>
            <hr />
            <div className="OtherWether">
              <div className="OtherContent">
                <img src={Wind} alt="Wind" width="23px" />
                <div>15km/h</div>
                <div style={{ fontWeight: "lighter" }}>Wind</div>
              </div>
              <div className="OtherContent">
                <img src={Drop} alt="Wind" width="16px" />
                <div>15km/h</div>
                <div style={{ fontWeight: "lighter" }}>Humidity</div>
              </div>
              <div className="OtherContent">
                <img src={Rain} alt="Wind" width="20px" />
                <div>15km/h</div>
                <div style={{ fontWeight: "lighter" }}>COR</div>
              </div>
            </div>
          </div>
          <div className="WeatherDown">
            <div style={{ marginTop: "10px", color: "#ffffff" }}>Today</div>
            <div className="Days">
              <div className="Day1">
                <div>
                  15<sup>0</sup>
                </div>
                <img src={Stormy} alt="Wind" width="20px" />
                <div style={{ fontWeight: "lighter" }}>10:00</div>
              </div>
              <div className="Day2">
                <div>
                  15<sup>0</sup>
                </div>
                <img src={Rain} alt="Wind" width="20px" />
                <div style={{ fontWeight: "lighter" }}>Now</div>
              </div>
              <div className="Day1">
                <div>
                  15<sup>0</sup>
                </div>
                <img src={Stormy} alt="Wind" width="20px" />
                <div style={{ fontWeight: "lighter" }}>12:00</div>
              </div>
              <div className="Day1">
                <div>
                  15<sup>0</sup>
                </div>
                <img src={Wind1} alt="Wind" width="20px" />
                <div style={{ fontWeight: "lighter" }}>13:00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="CalenderDivMain">Calender</div>
      </div>
    </div>
  );
}

export default Main;
