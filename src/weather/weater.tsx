/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from "react";
import back from "./landscape-3369304_1280.jpg";
import "./weather.css";
import day from "./GST CAM 942-06.jpg";
import { url } from "inspector";
const Weather: React.FC = () => {
  const [inputData, setInputData] = useState("");
  const [allData, setAllData] = useState<any | undefined>();
  const [img, setImg] = useState<string>("");
  async function getWeather() {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=bc61a394b5254be38c891041232408&q=${inputData}=no`
    )
      .then(async (res) => {
        if (res.ok) {
          let data = await res.json();
          setAllData(data);
          // console.log(data);
        } else {
          setAllData(undefined);
          alert("Error");
        }
      })

      // .catch((err) => console.log(err));
    
    }
    useEffect(()=>{
      if(! allData){
        setImg("./72.jpg")
      }else{
      if (allData.current.is_day === 0) {
        setImg ("./72.jpg")
      }
      if(allData.current.is_day === 1) {
        setImg(day)
    }}
  },[allData]);
  console.log(img);
  return (

    <div className="base">
      <div className="img-base" style={{backgroundImage: `url(${img})`} }>
        <div className="blur"></div>
        <div className="img2"
        style={{backgroundImage: `url(${img})`} }
        >
          <div className="searchBox">
            <input
              onChange={(e) => setInputData(e.target.value)}
              className="searchInput"
              type="text"
              name=""
              placeholder="Search city..."
            />
            <button className="searchButton" onClick={getWeather}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <g clipPath="url(#clip0_2_17)">
                  <g filter="url(#filter0_d_2_17)">
                    <path
                      d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      shapeRendering="crispEdges"
                    ></path>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_2_17"
                    x="-0.418549"
                    y="3.70435"
                    width="29.7139"
                    height="29.7139"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_17"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_17"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <clipPath id="clip0_2_17">
                    <rect
                      width="28.0702"
                      height="28.0702"
                      fill="white"
                      transform="translate(0.403503 0.526367)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <>
    {allData && (
      <>
                <div className="glass">
                  <div className="awe">
                   <img className="icon"src={allData.current.condition.icon}></img>
                    <p className="p"> {allData.current.condition.text}</p>
                    <p className="p1">{allData.current.temp_c}</p>
                  </div>
                  <div className="awe2">
                    <p className="p3">location : {allData.location.name}</p>
                    <p className="p3">country : {allData.location.country}</p>
                  </div>
                  <p className="p2">  {allData.location.localtime}</p>
              
                </div>
                </>
            )}
          </>
        </div>
      </div>
    </div>

  );
};
export default Weather;
