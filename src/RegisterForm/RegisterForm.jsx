import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./RegisterForm.css";
import { DatePicker } from "@material-ui/pickers";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";
import Create from "./create/Create";
const PurpleSwitch = withStyles({
  switchBase: {
    color: lightBlue[100],
    "&$checked": {
      color: lightBlue[200],
    },
    "&$checked + $track": {
      backgroundColor: lightBlue[200],
    },
  },
  checked: {},
  track: {},
})(Switch);

function RegisterForm(props) {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState({
    name: "",
    mDate: new Date(),
    birth: new Date(),
    height: 0,
    bloodLetterType: "",
    bloodSignType: "",
    weightBefore: 0,
    currentWeight: 0,
    tuber: false,
    diab: false,
    hiper: false,
    pre: false,
    ciru: false,
    infer: false,
    cardio: false,
    prefAlim: "",
  });

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      console.log(info);
    }
  };

  const goBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  };
  const calcTitle = () => {
    if (step === 1) {
      return "Tu información personal";
    } else if (step === 2) {
      return "Información personal";
    } else {
      return "Finalización";
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setInfo({
      ...info,
      [name]: event.target.value,
    });
  };

  const handleChangeCheck = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.checked });
  };
  const calcForm = () => {
    if (step === 1) {
      return (
        <div>
          <TextField
            style={{
              border: "none",
              width: "calc(100% - 66px)",
            }}
            label="Nombre Completo"
            defaultValue={info.name}
            name="name"
            onChange={handleChange}
          />
          <div className="lblForm">Fecha de la última menstruación</div>
          <DatePicker
            style={{ marginTop: 5 }}
            value={info.mDate}
            onChange={(val) => {
              console.log(val.toLocaleDateString());
              let inf = info;
              inf.mDate = val;
              setInfo(inf);
            }}
          />
          <div className="lblForm">Fecha de nacimiento</div>
          <DatePicker
            style={{ marginTop: 5 }}
            value={info.birth}
            onChange={(val) => {
              console.log(val.toLocaleDateString());
              let inf = info;
              inf.birth = val;
              setInfo(inf);
            }}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="lblForm">Estatura (m)</div>
              <TextField
                style={{
                  marginTop: 10,
                  border: "none",
                  width: 100,
                }}
                type="number"
                name="height"
                defaultValue={info.height}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="lblForm" style={{ marginLeft: 33 }}>
                Grupo sanguíneo
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <FormControl
                  style={{ width: 50, marginTop: 10, marginLeft: 35 }}
                >
                  <NativeSelect
                    value={info.bloodLetterType}
                    name="bloodLetterType"
                    onChange={handleChange}
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="0">O</option>
                  </NativeSelect>
                  <FormHelperText></FormHelperText>
                </FormControl>
                <FormControl
                  style={{ width: 50, marginTop: 10, marginLeft: 10 }}
                >
                  <NativeSelect
                    value={info.bloodSignType}
                    name="bloodSignType"
                    onChange={handleChange}
                  >
                    <option value="+">+</option>
                    <option value="-">-</option>
                  </NativeSelect>
                  <FormHelperText></FormHelperText>
                </FormControl>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="lblForm">Peso pregestacional (kg)</div>
              <TextField
                style={{
                  marginTop: 15,
                  border: "none",
                  width: 60,
                }}
                type="number"
                name="weightBefore"
                defaultValue={info.weightBefore}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="lblForm">Peso actual (kg)</div>
              <TextField
                style={{
                  marginTop: 10,
                  border: "none",
                  width: 60,
                }}
                type="number"
                name="currentWeight"
                defaultValue={info.currentWeight}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      );
    } else if (step === 2) {
      return (
        <div>
          <div
            className="lblForm"
            style={{
              width: "100%",
              borderBottom: "1px solid #626262",
              paddingBottom: 5,
              marginTop: 70,
            }}
          >
            Antecedentes
          </div>
          <div className="checkBoxCont">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Tuberculosis
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.tuber}
                    onChange={handleChangeCheck}
                    name="tuber"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Diabetes
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.diab}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="diab"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Hipertensión
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.hiper}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="hiper"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Preclamsia
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.pre}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="pre"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Cirugía pélvica
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.ciru}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="ciru"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Infertilidad
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.infer}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="infer"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Cardio/nefropatía
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.cardio}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="cardio"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="lblForm"
            style={{
              width: "100%",
              borderBottom: "1px solid #626262",
              paddingBottom: 5,
              marginTop: 15,
            }}
          >
            Hábitos
          </div>
          <div className="lblForm">Preferencias alimenticias</div>
          <FormControl style={{ width: "100%", marginTop: 10 }}>
            <NativeSelect
              value={info.prefAlim}
              name="prefAlim"
              onChange={handleChange}
            >
              <option value="Vegetariano">Vegetariano</option>
              <option value="Vegano">Vegano</option>
              <option value="Omnívoro">Omnívoro</option>
            </NativeSelect>
            <FormHelperText></FormHelperText>
          </FormControl>
          <div className="lblForm">Consumo de suplementos</div>
          <div style={{ width: 250, marginTop: 10, marginBottom: 20 }}>
            <Create />
          </div>
          <div className="checkBoxCont">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Alcohol
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.Alcohol}
                    onChange={handleChangeCheck}
                    name="Alcohol"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Drogas
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.Drogas}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="Drogas"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBottom: 15,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Cigarrillo
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.Cigarrillo}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="Cigarrillo"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return "Finalización";
    }
  };
  return (
    <div className="formContainerRegister">
      <div className="goBackRegisterForm">
        <img
          className="registerFormGoBack"
          src="Path_1020.png"
          onClick={goBack}
          style={{ visibility: step === 1 ? "hidden" : "visible" }}
        />
        <div className="registerFormGoBackTitle">{calcTitle()}</div>
      </div>
      <div className="paddingRegisterForm"></div>
      <div className="registerFormContainer">{calcForm()}</div>
      <div className="registerFormFooter">
        <img className="registerFormDots" src={`dots_${step}.png`} />
        <div className="RegisterRectangle_18" onClick={handleNext}>
          <div id="SIGUIENTE">
            <span>SIGUIENTE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RegisterForm);
