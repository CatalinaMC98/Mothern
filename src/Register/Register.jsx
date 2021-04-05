import { withRouter } from "react-router-dom";
import "./Register.css";
import { useRef, useEffect, useState } from "react";
import { useAuth } from "reactfire";
import "firebase/auth";
import firebase from "firebase/app";

function Register(props) {
  const containerRef = useRef();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCopy, setPasswordCopy] = useState("");

  const auth = useAuth();

  const handleResize = () => {
    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });
  };
  useEffect(() => {
    // Pone un listener para escuchar los cambio en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const registerWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);
  };

  return (
    <div className="container" ref={containerRef}>
      <img
        id="Path_1054"
        src="Path_1054.png"
        style={{ width: containerSize.width, height: containerSize.height }}
      />

      <svg
        className="Line_1"
        viewBox="0 0 114 1"
        style={{
          left: (containerSize.width - 114) / 2,
          top: containerSize.height * 0.805,
        }}
      >
        <path id="Line_1" d="M 0 0 L 114 0"></path>
      </svg>
      <div
        id="CREAR_CUENTA"
        style={{
          left: (containerSize.width - 141) / 2,
          top: containerSize.height * 0.2533,
        }}
      >
        <span>CREAR CUENTA</span>
      </div>
      <div
        id="Email"
        style={{
          left: (containerSize.width - 292) / 2 + 17,
          top: containerSize.height * 0.3463,
        }}
      >
        <span>Email</span>
      </div>
      <div
        id="Contrasea"
        style={{
          left: (containerSize.width - 292) / 2 + 17,
          top: containerSize.height * 0.4542,
        }}
      >
        <span>Contraseña</span>
      </div>
      <div
        id="Confirma_contrasea"
        style={{
          left: (containerSize.width - 292) / 2 + 17,
          top: containerSize.height * 0.5592,
        }}
      >
        <span>Confirma contraseña</span>
      </div>
      <svg
        className="Rectangle_130"
        style={{
          left: (containerSize.width - 292) / 2,
          top: containerSize.height * 0.4542 + 30,
        }}
      >
        <rect
          id="Rectangle_130"
          rx="16"
          ry="16"
          x="0"
          y="0"
          width="292"
          height="33"
        ></rect>
      </svg>
      <input
        name="clave"
        type="password"
        className="input-filler"
        style={{
          backgroundColor: "white",
          left: (containerSize.width - 292) / 2 + 12,
          top: containerSize.height * 0.5592 + 28,
          width: 263,
          height: 28,
          fontSize: 18,
          border: "none",
          position: "absolute",
          zIndex: 5,
        }}
        placeholder="Confirme su contraseña"
        onChange={(e) => {
          setPasswordCopy(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            register();
          }
        }}
      />
      <svg
        className="Rectangle_132"
        style={{
          left: (containerSize.width - 292) / 2,
          top: containerSize.height * 0.5592 + 30,
        }}
      >
        <rect
          id="Rectangle_132"
          rx="16"
          ry="16"
          x="0"
          y="0"
          width="292"
          height="33"
        ></rect>
      </svg>
      <input
        name="email"
        className="input-filler"
        style={{
          backgroundColor: "white",
          left: (containerSize.width - 292) / 2 + 12,
          top: containerSize.height * 0.3463 + 28,
          width: 263,
          height: 28,
          fontSize: 18,
          border: "none",
          position: "absolute",
          zIndex: 5,
        }}
        type="email"
        placeholder="Ingrese su correo electrónico"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div
        id="Group_118"
        style={{
          left: (containerSize.width - 292) / 2,
          top: containerSize.height * 0.3463 + 26,
        }}
      >
        <svg className="Rectangle_15">
          <rect
            id="Rectangle_15"
            rx="16"
            ry="16"
            x="0"
            y="0"
            width="292"
            height="33"
          ></rect>
        </svg>
        <svg className="Rectangle_129">
          <rect
            id="Rectangle_129"
            rx="16"
            ry="16"
            x="0"
            y="0"
            width="292"
            height="33"
          ></rect>
        </svg>
      </div>

      <input
        name="clave"
        type="password"
        className="input-filler"
        style={{
          backgroundColor: "white",
          left: (containerSize.width - 292) / 2 + 12,
          top: containerSize.height * 0.4542 + 28,
          width: 263,
          height: 28,
          fontSize: 18,
          border: "none",
          position: "absolute",
          zIndex: 5,
        }}
        placeholder="Ingrese su contraseña"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <svg
        className="Rectangle_131"
        style={{
          left: (containerSize.width - 292) / 2,
          top: containerSize.height * 0.4542 + 26,
        }}
      >
        <rect
          id="Rectangle_131"
          rx="16"
          ry="16"
          x="0"
          y="0"
          width="292"
          height="33"
        ></rect>
      </svg>
      <svg
        className="Rectangle_133"
        style={{
          left: (containerSize.width - 292) / 2,
          top: containerSize.height * 0.5592 + 26,
        }}
      >
        <rect
          id="Rectangle_133"
          rx="16"
          ry="16"
          x="0"
          y="0"
          width="292"
          height="33"
        ></rect>
      </svg>
      <svg
        className="Rectangle_18"
        style={{
          left: (containerSize.width - 150) / 2,
          top: containerSize.height * 0.7226,
          cursor: "pointer",
        }}
      >
        <rect
          onClick={register}
          id="Rectangle_18"
          rx="16"
          ry="16"
          x="0"
          y="0"
          width="150"
          height="33"
        ></rect>
      </svg>
      <div
        id="CREAR"
        style={{
          left: (containerSize.width - 61) / 2,
          top: containerSize.height * 0.7226 + 5,
          cursor: "pointer",
        }}
      >
        <span>CREAR</span>
      </div>
      <img
        id="Grupo_11"
        src="Grupo_11.png"
        style={{
          left: (containerSize.width - 149) / 2,
          top: containerSize.height * 0.1214,
        }}
      />

      <img
        id="Image_5"
        src="Image_5.png"
        style={{
          left: (containerSize.width - 35) / 2,
          top: containerSize.height * 0.8905,
        }}
        onClick={registerWithGoogle}
      />

      <div
        id="Conectar_con_Google"
        style={{
          left: (containerSize.width - 165) / 2,
          top: containerSize.height * 0.847,
        }}
        onClick={registerWithGoogle}
      >
        <span>Conectar con Google</span>
      </div>
    </div>
  );
}

export default withRouter(Register);
