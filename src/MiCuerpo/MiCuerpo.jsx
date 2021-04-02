import { withRouter } from "react-router-dom";
import "./MiCuerpo.css";
import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@nacaceres/animated-line-chart";

function MiCuerpo(props) {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [settingPeso, setSettingPeso] = useState(false);
  const semanas = [
    {
      numero: 1,
      peso: 120,
      imc: 1,
    },
    {
      numero: 2,
      peso: undefined,
      imc: 50.3,
    },
    {
      numero: 3,
      peso: 110,
      imc: 1,
    },
    {
      numero: 4,
      peso: 140,
      imc: 1,
    },
    {
      numero: 5,
      peso: 120,
      imc: 1,
    },
    {
      numero: 6,
      peso: 110,
      imc: 1,
    },
    {
      numero: 7,
      peso: 120,
      imc: 1,
    },
  ];

  const chartPesoRef = useRef();
  const chartIMCRef = useRef();

  //Peso Chart
  useEffect(() => {
    const runtime = new Runtime();
    //Peso Chart
    const mainPeso = runtime.module(notebook, (name) => {
      if (name === "chart") return new Inspector(chartPesoRef.current);
    });
    const pesoData = [];
    semanas.map((semana) => {
      if (semana.numero !== undefined && semana.peso !== undefined) {
        pesoData.push({ date: semana.numero, value: semana.peso });
      }
    });
    console.log(pesoData);
    mainPeso.redefine("data", pesoData);
    mainPeso.redefine("height", chartPesoRef.current.offsetHeight);
    mainPeso.redefine("axes", ["Semana", "Peso-Kg"]);
    return () => {
      runtime.dispose();
    };
  }, []);

  //IMC Chart
  useEffect(() => {
    const runtime = new Runtime();
    const mainImc = runtime.module(notebook, (name) => {
      if (name === "chart") return new Inspector(chartIMCRef.current);
    });
    const imcData = [];
    semanas.map((semana) => {
      if (semana.numero !== undefined && semana.imc !== undefined) {
        imcData.push({ date: semana.numero, value: semana.imc });
      }
    });
    mainImc.redefine("data", imcData);
    mainImc.redefine("height", chartIMCRef.current.offsetHeight);
    mainImc.redefine("axes", ["Semana", "IMC"]);
    return () => {
      runtime.dispose();
    };
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    swipeToSlide: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const calcPesoGraph = () => {
    return (
      <div style={{ width: "100vw", height: "100vw" }} ref={chartPesoRef}></div>
    );
  };
  const calcIMCGraph = () => {
    return (
      <div style={{ width: "100vw", height: "100vw" }} ref={chartIMCRef}></div>
    );
  };

  return (
    <div
      className="micuerpoContainer"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {settingPeso && (
        <div>
          <div
            className="curtain"
            onClick={() => {
              setSettingPeso(false);
            }}
          ></div>
          <div className="dropUpCard"></div>
        </div>
      )}
      <div
        className="micuerpoHeader"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: 105,
            height: 20,
          }}
          src="Grupo_11.png"
          onClick={() => {
            props.history.push("/");
          }}
        ></img>
      </div>
      <img
        style={{
          position: "absolute",
          left: 30,
          top: 25,
        }}
        src="Path_1046.png"
        onClick={() => {
          props.history.push("/");
        }}
      ></img>
      <div className="micuerpoCard">
        <div
          style={{
            height: 60,
          }}
        >
          <img
            style={{
              width: 105,
              height: 22,
              marginLeft: 40,
              marginTop: 3,
            }}
            src="MI_CUERPO_bf.png"
          ></img>
        </div>
        <div
          style={{
            height: 60,
            borderRadius: "0 0 13px 13px",
            backgroundColor: "#EDF9FF",
            position: "relative",
          }}
        >
          <div
            style={{
              height: 60,
              width: "100%",
              position: "absolute",
            }}
          >
            <div
              style={{
                height: 60,
                width: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: 60,
                  borderRadius: "0 0 13px 13px",
                  backgroundColor: "#ACE4FE",
                  position: "absolute",
                  width: 92,
                }}
              />
              <div
                style={{
                  marginBottom: 40,
                  fontSize: 10,
                  position: "absolute",
                }}
              >
                semana
              </div>
            </div>
          </div>
          <div
            style={{
              display: "block",
              height: 60,
              width: 280,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Slider {...settings} ref={sliderRef} className="slick-slidertest">
              <div></div>
              {semanas.map((semana, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      outline: "none",
                    }}
                    onClick={() => {
                      sliderRef.current.slickGoTo(index);
                    }}
                  >
                    <div
                      className="semanaSliderItem"
                      style={{
                        outline: "none",
                        width: 92,
                        height: 66,
                        zIndex: 5,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>
                );
              })}
              <div></div>
            </Slider>
          </div>
        </div>
        <div
          style={{
            height: 268,
            marginBottom: 40,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="greyCard">
            <div
              style={{
                marginTop: 15,
                height: 128,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: 128,
                  width: 96,
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  position: "relative",
                  cursor: "pointer",
                  marginRight: 5,
                }}
                className="weightCardMiCuerpo"
                onClick={() => {
                  setSettingPeso(true);
                }}
              >
                <div
                  style={{
                    left: 15,
                    bottom: 20,
                    position: "absolute",
                    fontSize: 12,
                  }}
                >
                  Peso (kg)
                </div>
                <div className="pesoMiCuerpoCardIngrey">
                  {semanas[currentSlide].peso === undefined
                    ? "--"
                    : semanas[currentSlide].peso}
                </div>
              </div>
              <div
                style={{
                  height: 128,
                  width: 96,
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "relative",
                  justifyContent: "center",
                  cursor: "pointer",
                  backgroundColor: "white",
                  marginLeft: 5,
                }}
                onClick={() => {
                  setSettingPeso(true);
                }}
                className="weightCardMiCuerpo"
              >
                <div
                  style={{
                    left: 15,
                    bottom: 20,
                    position: "absolute",
                    fontSize: 12,
                  }}
                >
                  IMC (%)
                </div>
                <div className="pesoMiCuerpoCardIngrey">
                  {semanas[currentSlide].imc === undefined
                    ? "--"
                    : semanas[currentSlide].imc}
                </div>
              </div>
            </div>
            <div
              style={{
                height: 41,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontSize: 10,
                fontWeight: "lighter",
                fontStyle: "italic",
                justifyContent: "center",
              }}
            >
              Completa tu seguimiento de esta semana.
            </div>
          </div>
        </div>
        <img
          style={{
            width: 130,
            height: 22,
            marginLeft: 30,
          }}
          src="SEGUIMIENTO.png"
        ></img>
        <div
          style={{
            height: 54,
            borderRadius: "0 0 13px 13px",
            backgroundColor: "#EDF9FF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bolder",
          }}
        >
          PESO
        </div>
        {calcPesoGraph()}
        <div
          style={{
            height: 54,
            marginTop: 50,
            borderRadius: "0 0 13px 13px",
            backgroundColor: "#EDF9FF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bolder",
          }}
        >
          IMC
        </div>
        {calcIMCGraph()}
      </div>
    </div>
  );
}

export default withRouter(MiCuerpo);
