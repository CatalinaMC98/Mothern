import { withRouter } from "react-router-dom";
import "./MiCuerpo.css";
import Slider from "react-slick";
import TextField from "@material-ui/core/TextField";
import { useRef, useState } from "react";
function MiCuerpo(props) {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(6);
  const [settingPeso, setSettingPeso] = useState(false);
  const [tempPeso, setTempPeso] = useState(0);
  const [semanas, setSemanas] = useState([
    {
      numero: 1,
      peso: 120,
      imc: 1,
    },
    {
      numero: 1,
      peso: undefined,
      imc: 50.3,
    },
    {
      numero: 1,
      peso: 120,
      imc: 1,
    },
    {
      numero: 1,
      peso: 120,
      imc: 1,
    },
    {
      numero: 1,
      peso: 120,
      imc: 1,
    },
    {
      numero: 1,
      peso: 120,
      imc: 1,
    },
    {
      numero: 1,
      peso: 120,
      imc: 1,
    },
  ]);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    swipeToSlide: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    initialSlide: semanas.length - 1,
  };
  const handlePesoChange = () => {
    let semanasTemp = [...semanas];
    semanasTemp[currentSlide].peso = tempPeso;
    semanasTemp[currentSlide].imc = 0;
    //TODO calcular imc y guardar en firebase
    setSemanas(semanasTemp);
    setSettingPeso(false);
  };

  const calcPesoGraph = () => {
    return (
      <div
        style={{ width: "100vw", height: "100vw", backgroundColor: "red" }} //Caceres se encarga
      ></div>
    );
  };
  const calcIMCGraph = () => {
    return (
      <div
        style={{ width: "100vw", height: "100vw", backgroundColor: "red" }} //Caceres se encarga
      ></div>
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
          <div
            className="dropUpCard"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 24,
                marginBottom: 44,
              }}
            >
              Mi Peso
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 171,
                  height: 64,
                  borderRadius: 16,
                  backgroundColor: "#EDF9FF",
                }}
              >
                <TextField
                  style={{
                    border: "none",
                    width: 160,
                    marginLeft: 5,
                  }}
                  label="Peso"
                  type="number"
                  defaultValue={
                    semanas[currentSlide].peso === undefined
                      ? 0
                      : semanas[currentSlide].peso
                  }
                  name="peso"
                  onChange={(e) => {
                    setTempPeso(e.target.value);
                  }}
                />
              </div>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  backgroundColor: "#EDF9FF",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 11,
                }}
                onClick={handlePesoChange}
              >
                OK
              </div>
            </div>
          </div>
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
                  setTempPeso(
                    semanas[currentSlide].peso === undefined
                      ? 0
                      : semanas[currentSlide].peso
                  );
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
