import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './RegisterForm.css';
import { DatePicker } from '@material-ui/pickers';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import Create from './create/Create';
import { useUser, useFirestore } from 'reactfire';

const PurpleSwitch = withStyles({
  switchBase: {
    color: lightBlue[100],
    '&$checked': {
      color: lightBlue[200],
    },
    '&$checked + $track': {
      backgroundColor: lightBlue[200],
    },
  },
  checked: {},
  track: {},
})(Switch);

function RegisterForm(props) {
  const { data: user } = useUser();
  const personalInfoRef = useFirestore().collection('userinfo').doc(user.uid);
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState({
    name: props.userInfo?.name || user.displayName || '',
    mDate: props.userInfo?.mDate?.toDate() || new Date(),
    birth: props.userInfo?.birth?.toDate() || new Date(),
    height: props.userInfo?.height || 1,
    bloodLetterType: props.userInfo?.bloodLetterType || 'A',
    bloodSignType: props.userInfo?.bloodSignType || '+',
    weightBefore: props.userInfo?.weightBefore || 0,
    currentWeight: props.userInfo?.currentWeight || 0,
    tuber: props.userInfo?.tuber || false,
    diab: props.userInfo?.diab || false,
    hiper: props.userInfo?.hiper || false,
    pre: props.userInfo?.pre || false,
    ciru: props.userInfo?.ciru || false,
    infer: props.userInfo?.infer || false,
    cardio: props.userInfo?.cardio || false,
    prefAlim: props.userInfo?.prefAlim || 'Vegetariano',
    suplementos: { inputValue: '', value: props.userInfo?.suplementos || [] },
    alcohol: props.userInfo?.alcohol || false,
    drogas: props.userInfo?.drogas || false,
    cigarrillo: props.userInfo?.cigarrillo || false,
    empleo: props.userInfo?.empleo || 'Tiempo Completo',
    estadoCiv: props.userInfo?.estadoCiv || 'Soltera',
    titulo: props.userInfo?.titulo || 'Ninguna',
    estrato: props.userInfo?.estrato || 1,
    regimen: props.userInfo?.regimen || 'Subsidiado',
    lee: props.userInfo?.lee || false,
    registerForm: true,
  });
  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      //Mandar informaci??n a Firebase
      const infTemp = { ...info, suplementos: info.suplementos.value };
      personalInfoRef
        .set(infTemp)
        .then(() => {
          window.location.href = window.location.href.replace(
            props.location.pathname,
            '/'
          );
        })
        .catch((err) => {
          console.error(err);
        });
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
      return 'Tu informaci??n personal';
    } else if (step === 2) {
      return 'Informaci??n personal';
    } else {
      return 'Finalizaci??n';
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
              border: 'none',
              width: 'calc(100% - 66px)',
            }}
            label="Nombre Completo"
            defaultValue={info.name}
            name="name"
            onChange={handleChange}
          />
          <div className="lblForm">Fecha de la ??ltima menstruaci??n</div>
          <DatePicker
            title={info.mDate}
            style={{ marginTop: 5 }}
            value={info.mDate}
            onChange={(val) => {
              setInfo({ ...info, mDate: new Date(val.toString()) });
            }}
          />
          <div className="lblForm">Fecha de nacimiento</div>
          <DatePicker
            style={{ marginTop: 5 }}
            value={info.birth}
            onChange={(val) => {
              setInfo({ ...info, birth: new Date(val.toString()) });
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="lblForm">Estatura (m)</div>
              <TextField
                style={{
                  marginTop: 10,
                  border: 'none',
                  width: 100,
                }}
                type="number"
                InputProps={{ inputProps: { min: 0, max: 3 } }}
                name="height"
                defaultValue={info.height}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="lblForm" style={{ marginLeft: 33 }}>
                Grupo sangu??neo
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="lblForm">Peso pregestacional (kg)</div>
              <TextField
                style={{
                  marginTop: 15,
                  border: 'none',
                  width: 60,
                }}
                InputProps={{ inputProps: { min: 0, max: 800 } }}
                type="number"
                name="weightBefore"
                defaultValue={info.weightBefore}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="lblForm">Peso actual (kg)</div>
              <TextField
                style={{
                  marginTop: 10,
                  border: 'none',
                  width: 60,
                }}
                InputProps={{ inputProps: { min: 0, max: 800 } }}
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
              width: '100%',
              borderBottom: '1px solid #626262',
              paddingBottom: 5,
              marginTop: 70,
            }}
          >
            Antecedentes
          </div>
          <div className="checkBoxCont">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Hipertensi??n
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.hiper}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="hiper"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Cirug??a p??lvica
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.ciru}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="ciru"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Cardio/nefropat??a
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.cardio}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="cardio"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="lblForm"
            style={{
              width: '100%',
              borderBottom: '1px solid #626262',
              paddingBottom: 5,
              marginTop: 15,
            }}
          >
            H??bitos
          </div>
          <div className="lblForm">Preferencias alimenticias</div>
          <FormControl style={{ width: '100%', marginTop: 10 }}>
            <NativeSelect
              value={info.prefAlim}
              name="prefAlim"
              onChange={handleChange}
            >
              <option value="Vegetariano">Vegetariano</option>
              <option value="Vegano">Vegano</option>
              <option value="Omn??voro">Omn??voro</option>
            </NativeSelect>
            <FormHelperText></FormHelperText>
          </FormControl>
          <div className="lblForm">Consumo de suplementos</div>
          <div style={{ width: 250, marginTop: 10, marginBottom: 20 }}>
            <Create
              state={info.suplementos}
              setState={(state) => {
                setInfo({ ...info, suplementos: state });
              }}
            />
          </div>
          <div className="checkBoxCont">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Alcohol
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.alcohol}
                    onChange={handleChangeCheck}
                    name="alcohol"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Drogas
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.drogas}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="drogas"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 5,
                  marginBottom: 15,
                }}
              >
                <div className="lblForm" style={{ marginTop: 0 }}>
                  Cigarrillo
                </div>
                <div style={{ marginLeft: 40 }}>
                  <PurpleSwitch
                    checked={info.cigarrillo}
                    onChange={handleChangeCheck}
                    color="primary"
                    name="cigarrillo"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="lblForm">Lee y escribe</div>
          <PurpleSwitch
            checked={info.lee}
            onChange={handleChangeCheck}
            color="primary"
            name="lee"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <div className="lblForm" style={{ marginTop: 5 }}>
            Educaci??n
          </div>
          <FormControl style={{ width: 120, marginTop: 10 }}>
            <NativeSelect
              value={info.titulo}
              name="titulo"
              onChange={handleChange}
            >
              <option value="Ninguna">Ninguna</option>
              <option value="Primaria">Primaria</option>
              <option value="Bachiller">Bachiller</option>
              <option value="Pregrado">Pregrado</option>
              <option value="Posgrado">Posgrado</option>
            </NativeSelect>
            <FormHelperText></FormHelperText>
          </FormControl>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="lblForm">Estado civil</div>
              <FormControl style={{ width: 120, marginTop: 10 }}>
                <NativeSelect
                  value={info.estadoCiv}
                  name="estadoCiv"
                  onChange={handleChange}
                >
                  <option value="Soltera">Soltera</option>
                  <option value="Casada">Casada</option>
                  <option value="Divorciada">Divorciada</option>
                  <option value="Viuda">Viuda</option>
                </NativeSelect>
                <FormHelperText></FormHelperText>
              </FormControl>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="lblForm" style={{ marginLeft: 20 }}>
                Empleo
              </div>
              <FormControl
                style={{ width: 160, marginTop: 10, marginLeft: 20 }}
              >
                <NativeSelect
                  value={info.empleo}
                  name="empleo"
                  onChange={handleChange}
                >
                  <option value="Tiempo Completo">Tiempo Completo</option>
                  <option value="Medio Tiempo">Medio Tiempo</option>
                  <option value="Por hora">Por hora</option>
                  <option value="Estudiante">Estudiante</option>
                  <option value="Desempleada">Desempleada</option>
                  <option value="Ama de casa">Ama de casa</option>
                </NativeSelect>
                <FormHelperText></FormHelperText>
              </FormControl>
            </div>
          </div>
          <div className="lblForm">Estrato socioecon??mico</div>
          <FormControl style={{ width: 50, marginTop: 10 }}>
            <NativeSelect
              value={info.estrato}
              name="estrato"
              onChange={handleChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </NativeSelect>
            <FormHelperText></FormHelperText>
          </FormControl>
          <div className="lblForm">R??gimen de salud</div>
          <FormControl style={{ width: 150, marginTop: 10 }}>
            <NativeSelect
              value={info.regimen}
              name="regimen"
              onChange={handleChange}
            >
              <option value={'Subsidiado'}>Subsidiado</option>
              <option value={'Contributivo'}>Contributivo</option>
              <option value={'Vinculado'}>Vinculado</option>
            </NativeSelect>
            <FormHelperText></FormHelperText>
          </FormControl>
        </div>
      );
    }
  };
  return (
    <div className="formContainerRegister">
      <div className="goBackRegisterForm">
        <img
          className="registerFormGoBack"
          src="Path_1020.png"
          onClick={goBack}
          style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
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
