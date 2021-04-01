import { withRouter } from "react-router-dom";
import "./Login.css";
import { useRef, useEffect, useState } from "react";
function Login(props) {
  const containerRef = useRef();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const login = () => {
    console.log("login");
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
          top: containerSize.height * 0.811,
        }}
      >
        <path id="Line_1" d="M 0 0 L 114 0"></path>
      </svg>
      <div
        id="INICIAR_SESIN_"
        style={{
          left: (containerSize.width - 139) / 2,
          top: containerSize.height * 0.2713,
        }}
      >
        <span>INICIAR SESIÓN</span>
      </div>
      <div
        id="Email"
        style={{
          left: (containerSize.width - 292) / 2 + 17,
          top: containerSize.height * 0.4062,
        }}
      >
        <span>Email</span>
      </div>
      <div
        id="Contrasea"
        style={{
          left: (containerSize.width - 292) / 2 + 17,
          top: containerSize.height * 0.5202,
        }}
      >
        <span>Contraseña</span>
      </div>
      <svg
        className="Rectangle_19"
        onClick={login}
        style={{
          left: (containerSize.width - 150) / 2,
          top: containerSize.height * 0.7136,
          cursor: "pointer",
        }}
      >
        <rect
          id="Rectangle_19"
          rx="16"
          ry="16"
          x="0"
          y="0"
          width="150"
          height="33"
        ></rect>
      </svg>
      <div
        id="INICIAR"
        style={{
          left: (containerSize.width - 67) / 2,
          top: containerSize.height * 0.7136 + 6,
          cursor: "pointer",
        }}
      >
        <span>INICIAR</span>
      </div>
      <img
        id="Grupo_11"
        src="Grupo_11.png"
        style={{
          left: (containerSize.width - 149) / 2,
          top: containerSize.height * 0.1214,
        }}
      />
      <input
        name="email"
        className="input-filler"
        style={{
          backgroundColor: "white",
          left: (containerSize.width - 292) / 2 + 12,
          top: containerSize.height * 0.4062 + 28,
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
        id="Group_119"
        style={{
          left: (containerSize.width - 292) / 2,
          top: containerSize.height * 0.4062 + 26,
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
          top: containerSize.height * 0.5202 + 28,
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
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            login();
          }
        }}
      />
      <div
        id="Group_120"
        style={{
          left: (containerSize.width - 292) / 2,
          top: containerSize.height * 0.5202 + 26,
        }}
      >
        <svg className="Rectangle_15_bc">
          <rect
            id="Rectangle_15_bc"
            rx="16"
            ry="16"
            x="0"
            y="0"
            width="292"
            height="33"
          ></rect>
        </svg>
        <svg className="Rectangle_129_bd">
          <rect
            id="Rectangle_129_bd"
            rx="16"
            ry="16"
            x="0"
            y="0"
            width="292"
            height="33"
          ></rect>
        </svg>
      </div>
      <img
        id="Image_7"
        src="Image_7.png"
        style={{
          left: (containerSize.width - 35) / 2,
          top: containerSize.height * 0.901,
        }}
      />

      <div
        id="Iniciar_sesin_con_Google"
        style={{
          left: (containerSize.width - 197) / 2,
          top: containerSize.height * 0.85,
        }}
      >
        <span>Iniciar sesión con Google</span>
      </div>
    </div>
  );
}

export default withRouter(Login);
