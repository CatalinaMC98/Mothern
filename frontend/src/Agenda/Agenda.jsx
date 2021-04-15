import { withRouter } from 'react-router-dom';
import './Agenda.css';
import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import { useUser, useMessaging, useFirestore } from 'reactfire';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { DateTimePicker } from '@material-ui/pickers';
function Agenda(props) {
  const PUBLIC_VAPID_KEY =
    'BGUFszf55f2NtTl0KW1eWjmM9gs000O43kRKRMgUwIn_NadJObUeFZ7xHnfNo9AAYXMEdLPOIv96jqFbfG5wtNY';

  const { data: user } = useUser();
  const [centro, setCentro] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [fecha, setFecha] = useState(new Date());

  const firestore = useFirestore();

  const [citas, setCitas] = useState([]);

  useEffect(() => {
    firestore
      .collection('userinfo')
      .doc(user?.uid)
      .get()
      .then((response) => {
        setCitas(response.data().citas || []);
      });
  }, [user]);

  const messaging = useMessaging();

  const [creating, setCreating] = useState(false);

  const handleCreate = () => {
    setCreating(false);

    const newCitas = [...citas];

    newCitas.push({
      centro: centro,
      especialidad: especialidad,
      fecha: fecha,
    });

    setCitas(newCitas);

    //Persistir nueva cita
    firestore
      .collection('userinfo')
      .doc(user?.uid)
      .update({ citas: newCitas })
      .then(() => {
        console.log('persisted agendas');
      })
      .catch((err) => {
        console.log(err);
      });

    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging
      .getToken({ vapidKey: PUBLIC_VAPID_KEY })
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          console.log('Current Token for FCM');
          console.log(currentToken);
          firestore
            .collection('userinfo')
            .doc(user?.uid)
            .collection('pushtokens')
            .doc(currentToken)
            .set({
              active: true,
            })
            .then(() => {
              console.log('persisted token for user');
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          // Show permission request UI
          console.log(
            'No registration token available. Request permission to generate one.'
          );
          // ...
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
  };

  return (
    <React.Fragment>
      {creating && (
        <div>
          <div
            className="curtain"
            onClick={() => {
              setCreating(false);
            }}
          ></div>
          <div
            className="dropUpCard"
            style={{
              minHeight: 400,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: 24,
                marginBottom: 20,
              }}
            >
              NUEVA CITA
            </div>
            <div
              style={{
                maxWidth: 300,
                width: '70vw',
                height: 64,
                borderRadius: 16,
                marginBottom: 20,
                backgroundColor: '#EDF9FF',
              }}
            >
              <TextField
                style={{
                  border: 'none',
                  width: 'calc(100% - 10px)',
                  marginLeft: 5,
                }}
                InputProps={{ inputProps: { maxLength: 100 } }}
                label="Especialidad Medica"
                defaultValue={''}
                name="especialidad"
                onChange={(e) => {
                  setEspecialidad(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                maxWidth: 300,
                width: '70vw',
                height: 64,
                borderRadius: 16,
                marginBottom: 20,
                backgroundColor: '#EDF9FF',
              }}
            >
              <TextField
                style={{
                  border: 'none',
                  width: 'calc(100% - 10px)',
                  marginLeft: 5,
                }}
                label="Centro médico"
                InputProps={{ inputProps: { maxLength: 100 } }}
                defaultValue={''}
                name="centro"
                onChange={(e) => {
                  setCentro(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                maxWidth: 300,
                width: '70vw',
                height: 64,
                borderRadius: 16,
                marginBottom: 20,
                backgroundColor: '#EDF9FF',
              }}
            >
              <DateTimePicker
                style={{
                  border: 'none',
                  marginTop: 15,
                  width: 'calc(100% - 10px)',
                  marginLeft: 5,
                }}
                value={fecha}
                onChange={(val) => {
                  setFecha(val);
                }}
              ></DateTimePicker>
            </div>

            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                backgroundColor: '#EDF9FF',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 11,
              }}
              onClick={handleCreate}
            >
              OK
            </div>
          </div>
        </div>
      )}
      <div
        className="micuerpoContainer"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className="micuerpoHeader"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ position: 'relative', top: -30, left: -78 }}>
            <div id="Group_11">
              <div id="Group_9">
                <div id="Group_1">
                  <svg
                    className="Path_1"
                    viewBox="254.431 2506.68 21.139 14.209"
                  >
                    <path
                      id="Path_1"
                      d="M 258.0166625976563 2507.054443359375 L 258.0166625976563 2508.927490234375 L 258.0701904296875 2508.927490234375 C 258.5692443847656 2508.214599609375 259.1719970703125 2507.66064453125 259.8764343261719 2507.2685546875 C 260.5808410644531 2506.87646484375 261.3882751464844 2506.679931640625 262.298095703125 2506.679931640625 C 263.1717529296875 2506.679931640625 263.9704895019531 2506.849853515625 264.6929931640625 2507.1875 C 265.4161376953125 2507.52734375 265.9640197753906 2508.124755859375 266.3386535644531 2508.981201171875 C 266.7487182617188 2508.375 267.306640625 2507.840087890625 268.0110473632813 2507.375732421875 C 268.7154846191406 2506.911376953125 269.5497131347656 2506.679931640625 270.5130004882813 2506.679931640625 C 271.2441711425781 2506.679931640625 271.921875 2506.76904296875 272.5466918945313 2506.947509765625 C 273.1708374023438 2507.1259765625 273.7059936523438 2507.410888671875 274.1522216796875 2507.8037109375 C 274.5977478027344 2508.196533203125 274.9462585449219 2508.70947265625 275.19580078125 2509.34228515625 C 275.4453430175781 2509.97509765625 275.5704345703125 2510.738525390625 275.5704345703125 2511.63037109375 L 275.5704345703125 2520.888916015625 L 271.7713623046875 2520.888916015625 L 271.7713623046875 2513.04833984375 C 271.7713623046875 2512.5849609375 271.7526245117188 2512.14794921875 271.7171936035156 2511.7373046875 C 271.6817016601563 2511.3271484375 271.5833740234375 2510.970458984375 271.4228515625 2510.666748046875 C 271.2622680664063 2510.36376953125 271.0254516601563 2510.122802734375 270.7137451171875 2509.944580078125 C 270.4019470214844 2509.766357421875 269.9778442382813 2509.6767578125 269.4426574707031 2509.6767578125 C 268.9075012207031 2509.6767578125 268.4746704101563 2509.779052734375 268.1448669433594 2509.984619140625 C 267.8150634765625 2510.18994140625 267.5561828613281 2510.45751953125 267.3688659667969 2510.787353515625 C 267.1815795898438 2511.1171875 267.05712890625 2511.4921875 266.9942321777344 2511.9111328125 C 266.9313659667969 2512.33056640625 266.9005737304688 2512.75439453125 266.9005737304688 2513.181884765625 L 266.9005737304688 2520.888916015625 L 263.100830078125 2520.888916015625 L 263.100830078125 2513.128662109375 C 263.100830078125 2512.718505859375 263.0914916992188 2512.3125 263.0747375488281 2511.9111328125 C 263.0560607910156 2511.509765625 262.9804382324219 2511.139892578125 262.8466186523438 2510.80078125 C 262.7135314941406 2510.462158203125 262.4900817871094 2510.18994140625 262.1776428222656 2509.984619140625 C 261.865234375 2509.779052734375 261.4056701660156 2509.6767578125 260.7995910644531 2509.6767578125 C 260.6216125488281 2509.6767578125 260.3848266601563 2509.717041015625 260.0904846191406 2509.79736328125 C 259.796142578125 2509.877197265625 259.510498046875 2510.029296875 259.2341613769531 2510.252197265625 C 258.9572448730469 2510.4755859375 258.7210693359375 2510.79638671875 258.5250549316406 2511.215576171875 C 258.3290710449219 2511.634521484375 258.230712890625 2512.183349609375 258.230712890625 2512.861328125 L 258.230712890625 2520.888916015625 L 254.4309692382813 2520.888916015625 L 254.4309692382813 2507.054443359375 L 258.0166625976563 2507.054443359375 Z"
                    ></path>
                  </svg>
                  <svg className="Path_2" viewBox="313.03 2501.04 8.885 18.116">
                    <path
                      id="Path_2"
                      d="M 321.9145812988281 2505.1875 L 321.9145812988281 2507.7294921875 L 319.1310119628906 2507.7294921875 L 319.1310119628906 2514.579833984375 C 319.1310119628906 2515.221923828125 319.2387084960938 2515.650146484375 319.4521179199219 2515.8642578125 C 319.6661682128906 2516.078369140625 320.0943298339844 2516.185302734375 320.7365417480469 2516.185302734375 C 320.9505615234375 2516.185302734375 321.1559753417969 2516.176513671875 321.3526611328125 2516.158447265625 C 321.5486450195313 2516.140625 321.7352905273438 2516.11376953125 321.9145812988281 2516.078369140625 L 321.9145812988281 2519.021728515625 C 321.5928039550781 2519.0751953125 321.2362060546875 2519.11083984375 320.8435668945313 2519.12890625 C 320.4508361816406 2519.146240234375 320.0675354003906 2519.15576171875 319.6929321289063 2519.15576171875 C 319.104248046875 2519.15576171875 318.5463562011719 2519.115478515625 318.0204772949219 2519.034423828125 C 317.4940185546875 2518.954833984375 317.0310974121094 2518.799072265625 316.6290588378906 2518.567138671875 C 316.2283325195313 2518.33544921875 315.9112243652344 2518.0048828125 315.6791076660156 2517.57666015625 C 315.4476623535156 2517.148681640625 315.3319396972656 2516.5869140625 315.3319396972656 2515.89111328125 L 315.3319396972656 2507.7294921875 L 313.0299987792969 2507.7294921875 L 313.0299987792969 2505.1875 L 315.3319396972656 2505.1875 L 315.3319396972656 2501.0400390625 L 319.1310119628906 2501.0400390625 L 319.1310119628906 2505.1875 L 321.9145812988281 2505.1875 Z"
                    ></path>
                  </svg>
                  <svg
                    className="Path_3"
                    viewBox="329.03 2499.36 12.978 19.105"
                  >
                    <path
                      id="Path_3"
                      d="M 332.8297119140625 2499.360107421875 L 332.8297119140625 2506.55810546875 L 332.9100036621094 2506.55810546875 C 333.3916625976563 2505.755126953125 334.007080078125 2505.171142578125 334.7563781738281 2504.805419921875 C 335.5055847167969 2504.440185546875 336.2367553710938 2504.256591796875 336.9505920410156 2504.256591796875 C 337.9674377441406 2504.256591796875 338.8009338378906 2504.395263671875 339.4525146484375 2504.671630859375 C 340.1034545898438 2504.948486328125 340.6165466308594 2505.331787109375 340.9911193847656 2505.822021484375 C 341.3657531738281 2506.313232421875 341.6286926269531 2506.909912109375 341.7805480957031 2507.615234375 C 341.9317016601563 2508.320068359375 342.0079650878906 2509.100341796875 342.0079650878906 2509.95654296875 L 342.0079650878906 2518.465576171875 L 338.2082824707031 2518.465576171875 L 338.2082824707031 2510.652099609375 C 338.2082824707031 2509.51025390625 338.0296020507813 2508.65869140625 337.673095703125 2508.096435546875 C 337.3158569335938 2507.53466796875 336.6830444335938 2507.253662109375 335.7731628417969 2507.253662109375 C 334.7383117675781 2507.253662109375 333.989013671875 2507.5615234375 333.5254821777344 2508.1767578125 C 333.0612182617188 2508.792236328125 332.8297119140625 2509.805419921875 332.8297119140625 2511.214111328125 L 332.8297119140625 2518.465576171875 L 329.030029296875 2518.465576171875 L 329.030029296875 2499.360107421875 L 332.8297119140625 2499.360107421875 Z"
                    ></path>
                  </svg>
                  <svg
                    className="Path_4"
                    viewBox="351.75 2506.68 13.804 14.556"
                  >
                    <path
                      id="Path_4"
                      d="M 356.4862976074219 2517.57080078125 C 357.0569152832031 2518.1240234375 357.8770751953125 2518.400146484375 358.9480895996094 2518.400146484375 C 359.7147521972656 2518.400146484375 360.375 2518.208984375 360.9282531738281 2517.82470703125 C 361.4808044433594 2517.441650390625 361.8199768066406 2517.03515625 361.9444274902344 2516.607421875 L 365.2892761230469 2516.607421875 C 364.7540893554688 2518.2666015625 363.9339294433594 2519.452392578125 362.8280944824219 2520.166259765625 C 361.7216491699219 2520.880126953125 360.3836975097656 2521.235595703125 358.8142700195313 2521.235595703125 C 357.7258911132813 2521.235595703125 356.7445068359375 2521.062744140625 355.8701477050781 2520.714599609375 C 354.9964599609375 2520.36669921875 354.2559509277344 2519.871826171875 353.6498718261719 2519.22900390625 C 353.0431213378906 2518.586669921875 352.5741577148438 2517.82080078125 352.2443542480469 2516.92822265625 C 351.91455078125 2516.03662109375 351.75 2515.055419921875 351.75 2513.985107421875 C 351.75 2512.95068359375 351.9192199707031 2511.98681640625 352.2584228515625 2511.094970703125 C 352.5968627929688 2510.203369140625 353.0785827636719 2509.431884765625 353.703369140625 2508.7802734375 C 354.3275146484375 2508.12939453125 355.0720825195313 2507.6162109375 355.937744140625 2507.2421875 C 356.802734375 2506.8671875 357.7613220214844 2506.679931640625 358.8142700195313 2506.679931640625 C 359.9909973144531 2506.679931640625 361.0172119140625 2506.9072265625 361.890869140625 2507.3623046875 C 362.7652587890625 2507.81689453125 363.4837036132813 2508.428466796875 364.045654296875 2509.194580078125 C 364.6075744628906 2509.96240234375 365.0129699707031 2510.8369140625 365.2624816894531 2511.817626953125 C 365.5120239257813 2512.798828125 365.6016540527344 2513.824462890625 365.53076171875 2514.894775390625 L 355.5497131347656 2514.894775390625 C 355.6032409667969 2516.12548828125 355.9149780273438 2517.01806640625 356.4862976074219 2517.57080078125 Z M 360.7810668945313 2510.292236328125 C 360.3255004882813 2509.793212890625 359.6344604492188 2509.543212890625 358.7066040039063 2509.543212890625 C 358.1005249023438 2509.543212890625 357.5961303710938 2509.6455078125 357.1954040527344 2509.850830078125 C 356.7940368652344 2510.05615234375 356.4729309082031 2510.3095703125 356.2314147949219 2510.61328125 C 355.9912719726563 2510.9169921875 355.8213195800781 2511.23828125 355.7229614257813 2511.57666015625 C 355.6253051757813 2511.916015625 355.567138671875 2512.21875 355.5497131347656 2512.486572265625 L 361.7310485839844 2512.486572265625 C 361.5517272949219 2511.52294921875 361.2359313964844 2510.7919921875 360.7810668945313 2510.292236328125 Z"
                    ></path>
                  </svg>
                  <svg
                    className="Path_5"
                    viewBox="375.709 2506.68 8.911 14.209"
                  >
                    <path
                      id="Path_5"
                      d="M 379.3214721679688 2507.054443359375 L 379.3214721679688 2509.623291015625 L 379.3749694824219 2509.623291015625 C 379.5528259277344 2509.194580078125 379.7937316894531 2508.79833984375 380.0980834960938 2508.4326171875 C 380.4011535644531 2508.067138671875 380.7483520507813 2507.7548828125 381.1410522460938 2507.49609375 C 381.5330200195313 2507.23779296875 381.9524536132813 2507.037353515625 382.3987121582031 2506.893798828125 C 382.8442077636719 2506.75146484375 383.3084716796875 2506.679931640625 383.7901306152344 2506.679931640625 C 384.0396423339844 2506.679931640625 384.31591796875 2506.724609375 384.6196594238281 2506.8134765625 L 384.6196594238281 2510.345703125 C 384.4410095214844 2510.3095703125 384.2269592285156 2510.27880859375 383.9774780273438 2510.252197265625 C 383.7272338867188 2510.224853515625 383.4864196777344 2510.212158203125 383.2549743652344 2510.212158203125 C 382.5592651367188 2510.212158203125 381.9705505371094 2510.328369140625 381.4888916015625 2510.55908203125 C 381.0072326660156 2510.7919921875 380.6192321777344 2511.108642578125 380.3248901367188 2511.509765625 C 380.0305480957031 2511.9111328125 379.8204650878906 2512.379638671875 379.696044921875 2512.91455078125 C 379.5709533691406 2513.44970703125 379.5087280273438 2514.02978515625 379.5087280273438 2514.654052734375 L 379.5087280273438 2520.888916015625 L 375.7089538574219 2520.888916015625 L 375.7089538574219 2507.054443359375 L 379.3214721679688 2507.054443359375 Z"
                    ></path>
                  </svg>
                  <svg
                    className="Path_6"
                    viewBox="391.988 2506.68 12.979 14.209"
                  >
                    <path
                      id="Path_6"
                      d="M 395.60107421875 2507.054443359375 L 395.60107421875 2508.981201171875 L 395.6813354492188 2508.981201171875 C 396.1630249023438 2508.17822265625 396.7864990234375 2507.594482421875 397.554443359375 2507.228271484375 C 398.3210754394531 2506.86328125 399.1058044433594 2506.679931640625 399.9085998535156 2506.679931640625 C 400.9260559082031 2506.679931640625 401.7595825195313 2506.818115234375 402.4104919433594 2507.094482421875 C 403.0614318847656 2507.371826171875 403.5751953125 2507.7548828125 403.9491577148438 2508.245361328125 C 404.324462890625 2508.736083984375 404.5867309570313 2509.3330078125 404.7391967773438 2510.0380859375 C 404.8897399902344 2510.742919921875 404.9666442871094 2511.52294921875 404.9666442871094 2512.379638671875 L 404.9666442871094 2520.888916015625 L 401.1662292480469 2520.888916015625 L 401.1662292480469 2513.074951171875 C 401.1662292480469 2511.93310546875 400.9876403808594 2511.08154296875 400.6310424804688 2510.519775390625 C 400.2745056152344 2509.957763671875 399.6416320800781 2509.6767578125 398.7311401367188 2509.6767578125 C 397.6962890625 2509.6767578125 396.947021484375 2509.984619140625 396.4834899902344 2510.60009765625 C 396.0198364257813 2511.215576171875 395.7877197265625 2512.228271484375 395.7877197265625 2513.636962890625 L 395.7877197265625 2520.888916015625 L 391.9879455566406 2520.888916015625 L 391.9879455566406 2507.054443359375 L 395.60107421875 2507.054443359375 Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div id="Group_10_cb">
                <svg
                  className="Path_15_cc"
                  viewBox="-3795.121 2203.999 15.451 18.466"
                >
                  <path
                    id="Path_15_cc"
                    d="M -3787.41748046875 2222.458251953125 C -3790.6650390625 2222.3603515625 -3793.0166015625 2220.839111328125 -3794.4365234375 2217.9189453125 C -3795.08837890625 2216.5771484375 -3795.2333984375 2215.1259765625 -3795.04296875 2213.653076171875 C -3794.7099609375 2211.069580078125 -3793.90771484375 2208.6328125 -3792.6630859375 2206.344970703125 C -3792.28955078125 2205.658935546875 -3791.85791015625 2205.0078125 -3791.26171875 2204.48828125 C -3790.8896484375 2204.164794921875 -3790.4873046875 2203.907470703125 -3789.9521484375 2204.029541015625 C -3789.61376953125 2204.10693359375 -3789.361328125 2204.3154296875 -3789.19677734375 2204.592041015625 C -3788.28857421875 2206.114013671875 -3786.849609375 2206.973876953125 -3785.33154296875 2207.7392578125 C -3784.16845703125 2208.325927734375 -3782.982421875 2208.87109375 -3781.953125 2209.69091796875 C -3780.72998046875 2210.664794921875 -3780.02001953125 2211.932861328125 -3779.77490234375 2213.467041015625 C -3779.2548828125 2216.717041015625 -3780.68896484375 2219.79443359375 -3783.52685546875 2221.4521484375 C -3784.71630859375 2222.147705078125 -3786.00830078125 2222.516357421875 -3787.41748046875 2222.458251953125 Z M -3784.216796875 2212.212646484375 C -3784.2021484375 2211.67626953125 -3784.43505859375 2211.27587890625 -3784.865234375 2210.984619140625 C -3785.755859375 2210.381591796875 -3787.12158203125 2210.737548828125 -3787.63134765625 2211.702392578125 C -3787.9228515625 2212.253662109375 -3787.84619140625 2212.919677734375 -3787.41943359375 2213.375244140625 C -3786.8583984375 2213.973876953125 -3786.1669921875 2214.03369140625 -3785.43408203125 2213.7900390625 C -3784.8330078125 2213.590087890625 -3784.15380859375 2212.934814453125 -3784.216796875 2212.212646484375 Z"
                  ></path>
                </svg>
                <svg
                  className="Path_16_cd"
                  viewBox="-3714.566 2278.758 1.835 1.488"
                >
                  <path
                    id="Path_16_cd"
                    d="M -3713.496337890625 2278.7587890625 C -3713.27392578125 2278.74853515625 -3713.030517578125 2278.806396484375 -3712.8564453125 2279.01953125 C -3712.651123046875 2279.27099609375 -3712.703125 2279.67431640625 -3712.97607421875 2279.931396484375 C -3713.32373046875 2280.258056640625 -3713.738525390625 2280.316650390625 -3714.176513671875 2280.166748046875 C -3714.513916015625 2280.051513671875 -3714.64697265625 2279.71630859375 -3714.51708984375 2279.387451171875 C -3714.36669921875 2279.0048828125 -3713.982421875 2278.75830078125 -3713.496337890625 2278.7587890625 Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <img
          style={{
            position: 'absolute',
            left: 30,
            top: 25,
          }}
          src="Path_1046.png"
          onClick={() => {
            props.history.push('/');
          }}
        ></img>
        <div className="micuerpoCard">
          <div
            style={{
              height: 32,
            }}
          >
            <img
              style={{
                width: 157,
                height: 22,
                marginLeft: 40,
                marginTop: 3,
              }}
              src="AGENDA.png"
            ></img>
          </div>
          <div
            style={{
              height: 20,
            }}
          >
            <img
              style={{
                width: 105,
                height: 19,
                marginLeft: 40,
                marginTop: 3,
              }}
              src="citas.png"
            ></img>
          </div>
          {citas.map((cita, index) => {
            return (
              <div
                key={index}
                className="cardAgenda shadow2"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #ACE4FE',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: 13,
                    fontWeight: 'bold',
                  }}
                >
                  <div style={{ marginTop: 22, marginLeft: 22 }}>
                    {cita.especialidad}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      marginLeft: 'auto',
                      marginTop: 10,
                      marginRight: 10,
                    }}
                  >
                    {cita.fecha instanceof Date && (
                      <div>
                        {cita.fecha.toLocaleDateString([], {
                          weekday: 'short',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    )}
                    {!(cita.fecha instanceof Date) && (
                      <div>
                        {cita.fecha.toDate().toLocaleDateString([], {
                          weekday: 'short',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    )}
                    {cita.fecha instanceof Date && (
                      <div style={{ fontSize: 18, fontWeight: 'regular' }}>
                        {cita.fecha.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    )}
                    {!(cita.fecha instanceof Date) && (
                      <div style={{ fontSize: 18, fontWeight: 'regular' }}>
                        {cita.fecha.toDate().toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    marginTop: 'auto',
                    marginBottom: 10,
                    marginLeft: 22,
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: 14,
                    fontWeight: 'light',
                    height: 40,
                    width: 200,
                  }}
                >
                  {cita.centroMedico}
                </div>
              </div>
            );
          })}
          <div
            style={{
              height: 60,
              borderRadius: '0 0 13px 13px',
              backgroundColor: '#EDF9FF',
              marginBottom: 40,
              position: 'relative',
            }}
          >
            <div
              style={{
                height: 60,
                width: '100%',
                position: 'absolute',
              }}
            >
              <div
                style={{
                  height: 60,
                  width: '100%',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    height: 60,
                    borderRadius: '0 0 13px 13px',
                    backgroundColor: '#ACE4FE',
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 92,
                    fontSize: 60,
                  }}
                  onClick={() => {
                    setFecha(new Date());
                    setCreating(true);
                  }}
                >
                  <AddRoundedIcon
                    style={{ fill: '#626262' }}
                    fontSize="inherit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Agenda);
