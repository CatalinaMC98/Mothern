import { withRouter } from "react-router-dom";
import "./Inicial.css";
import { useRef, useEffect, useState } from "react";
function Inicial(props) {
  const containerRef = useRef();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
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
  return (
    <div className="container" ref={containerRef}>
      <img
        id="Path_1054"
        src="Path_1054.png"
        style={{ width: containerSize.width, height: containerSize.height }}
      />

      <div
        id="Grupo_11"
        style={{
          left: (containerSize.width - 199) / 2,
          top: containerSize.height * 0.2248,
        }}
      >
        <img id="Rectangle_65" src="Rectangle_65.png" />

        <div id="Group_17">
          <div id="Group_16">
            <div id="Grupo_9">
              <div id="Grupo_1">
                <svg
                  className="Trazado_1"
                  viewBox="-1991.64 1199.113 38.875 26.13"
                >
                  <path
                    id="Trazado_1"
                    d="M -1985.0498046875 1199.803344726563 L -1985.0498046875 1203.24755859375 L -1984.951416015625 1203.24755859375 C -1984.09130859375 1201.990478515625 -1982.955322265625 1200.947143554688 -1981.6298828125 1200.197875976563 C -1980.263671875 1199.458984375 -1978.729736328125 1199.086181640625 -1977.177734375 1199.115478515625 C -1975.658447265625 1199.097290039063 -1974.15478515625 1199.415771484375 -1972.77392578125 1200.049072265625 C -1971.387939453125 1200.731689453125 -1970.30810546875 1201.908325195313 -1969.745849609375 1203.347045898438 C -1968.925537109375 1202.169555664063 -1967.88037109375 1201.166015625 -1966.6708984375 1200.395141601563 C -1965.298828125 1199.51953125 -1963.697265625 1199.073974609375 -1962.07080078125 1199.115478515625 C -1960.806640625 1199.104370117188 -1959.548828125 1199.270385742188 -1958.33154296875 1199.60791015625 C -1957.241455078125 1199.903686523438 -1956.232666015625 1200.442749023438 -1955.37939453125 1201.182495117188 C -1954.522216796875 1201.957641601563 -1953.864501953125 1202.928344726563 -1953.46044921875 1204.011596679688 C -1952.96923828125 1205.358642578125 -1952.73388671875 1206.785278320313 -1952.7685546875 1208.218872070313 L -1952.7685546875 1225.2421875 L -1959.75390625 1225.2421875 L -1959.75390625 1210.82568359375 C -1959.75390625 1209.97265625 -1959.78662109375 1209.169799804688 -1959.853271484375 1208.415283203125 C -1959.900146484375 1207.729248046875 -1960.08349609375 1207.060424804688 -1960.39501953125 1206.447021484375 C -1960.692626953125 1205.88818359375 -1961.14501953125 1205.427001953125 -1961.69873046875 1205.119018554688 C -1962.422119140625 1204.75732421875 -1963.2265625 1204.587768554688 -1964.03466796875 1204.626708984375 C -1964.866943359375 1204.588623046875 -1965.693359375 1204.785034179688 -1966.4208984375 1205.192504882813 C -1967.013671875 1205.556030273438 -1967.504150390625 1206.063720703125 -1967.84765625 1206.66845703125 C -1968.2041015625 1207.307861328125 -1968.4384765625 1208.008666992188 -1968.539794921875 1208.733764648438 C -1968.65478515625 1209.507202148438 -1968.712890625 1210.28759765625 -1968.712890625 1211.069702148438 L -1968.712890625 1225.240478515625 L -1975.698974609375 1225.240478515625 L -1975.698974609375 1210.971923828125 C -1975.698974609375 1210.218383789063 -1975.714599609375 1209.471801757813 -1975.74658203125 1208.73291015625 C -1975.772705078125 1208.03369140625 -1975.91357421875 1207.343383789063 -1976.166259765625 1206.691040039063 C -1976.40673828125 1206.0732421875 -1976.837646484375 1205.548217773438 -1977.396484375 1205.190795898438 C -1978.170166015625 1204.764282226563 -1979.049072265625 1204.568725585938 -1979.9306640625 1204.625 C -1980.372802734375 1204.643188476563 -1980.810546875 1204.717529296875 -1981.234619140625 1204.846435546875 C -1981.8115234375 1205.012573242188 -1982.347900390625 1205.298095703125 -1982.80908203125 1205.68310546875 C -1983.372314453125 1206.166748046875 -1983.81884765625 1206.772338867188 -1984.11279296875 1207.4541015625 C -1984.509033203125 1208.412841796875 -1984.693359375 1209.44580078125 -1984.653564453125 1210.482299804688 L -1984.653564453125 1225.243041992188 L -1991.639892578125 1225.243041992188 L -1991.639892578125 1199.806884765625 L -1985.0498046875 1199.803344726563 Z"
                  ></path>
                </svg>
                <svg
                  className="Trazado_2"
                  viewBox="-1908.333 1191.103 16.339 33.303"
                >
                  <path
                    id="Trazado_2"
                    d="M -1891.996704101563 1198.724365234375 L -1891.996704101563 1203.396362304688 L -1897.111694335938 1203.396362304688 L -1897.111694335938 1215.991577148438 C -1897.492309570313 1217.24169921875 -1896.787231445313 1218.563842773438 -1895.537841796875 1218.944458007813 C -1895.0888671875 1219.081176757813 -1894.608642578125 1219.081176757813 -1894.15966796875 1218.944458007813 C -1893.765991210938 1218.944458007813 -1893.388793945313 1218.928955078125 -1893.027099609375 1218.895141601563 C -1892.68017578125 1218.863891601563 -1892.3349609375 1218.814697265625 -1891.994018554688 1218.747192382813 L -1891.994018554688 1224.159790039063 C -1892.645629882813 1224.264404296875 -1893.303100585938 1224.329345703125 -1893.963256835938 1224.35693359375 C -1894.684814453125 1224.389038085938 -1895.389892578125 1224.405395507813 -1896.078491210938 1224.40625 C -1897.107299804688 1224.409790039063 -1898.135131835938 1224.33544921875 -1899.153442382813 1224.18310546875 C -1900.052368164063 1224.059326171875 -1900.920166015625 1223.767822265625 -1901.711791992188 1223.323120117188 C -1902.452392578125 1222.893188476563 -1903.057983398438 1222.263305664063 -1903.45849609375 1221.506225585938 C -1903.923095703125 1220.540771484375 -1904.14208984375 1219.4765625 -1904.097045898438 1218.406372070313 L -1904.097045898438 1203.400634765625 L -1908.3330078125 1203.400634765625 L -1908.3330078125 1198.728759765625 L -1904.1005859375 1198.728759765625 L -1904.1005859375 1191.10302734375 L -1897.111694335938 1191.10302734375 L -1897.111694335938 1198.728759765625 L -1891.996704101563 1198.724365234375 Z"
                  ></path>
                </svg>
                <svg
                  className="Trazado_3"
                  viewBox="-1885.586 1188.709 23.863 35.131"
                >
                  <path
                    id="Trazado_3"
                    d="M -1878.599609375 1188.708984375 L -1878.599609375 1201.9462890625 L -1878.45166015625 1201.9462890625 C -1877.661865234375 1200.56103515625 -1876.480834960938 1199.43994140625 -1875.056762695313 1198.723510742188 C -1873.806518554688 1198.083251953125 -1872.426635742188 1197.738037109375 -1871.0224609375 1197.714721679688 C -1869.453002929688 1197.662719726563 -1867.8896484375 1197.92236328125 -1866.42236328125 1198.477783203125 C -1865.309692382813 1198.92333984375 -1864.333740234375 1199.652709960938 -1863.593139648438 1200.593139648438 C -1862.869873046875 1201.570678710938 -1862.374145507813 1202.697143554688 -1862.141479492188 1203.889404296875 C -1861.850708007813 1205.306518554688 -1861.710571289063 1206.748901367188 -1861.723510742188 1208.195556640625 L -1861.723510742188 1223.840454101563 L -1868.709838867188 1223.840454101563 L -1868.709838867188 1209.473266601563 C -1868.601684570313 1207.845947265625 -1868.942504882813 1206.221069335938 -1869.693603515625 1204.774536132813 C -1870.350219726563 1203.741455078125 -1871.514770507813 1203.22509765625 -1873.187133789063 1203.22509765625 C -1875.090454101563 1203.22509765625 -1876.467895507813 1203.789916992188 -1877.320068359375 1204.921630859375 C -1878.17138671875 1206.052368164063 -1878.598022460938 1207.914306640625 -1878.599609375 1210.50634765625 L -1878.599609375 1223.839599609375 L -1885.586059570313 1223.839599609375 L -1885.586059570313 1188.712524414063 L -1878.599609375 1188.708984375 Z"
                  ></path>
                </svg>
                <svg
                  className="Trazado_4"
                  viewBox="-1853.285 1199.106 25.385 26.777"
                >
                  <path
                    id="Trazado_4"
                    d="M -1844.576171875 1219.138427734375 C -1842.218505859375 1220.986328125 -1838.961181640625 1221.17333984375 -1836.408935546875 1219.605590820313 C -1835.548095703125 1219.095092773438 -1834.888671875 1218.30517578125 -1834.5400390625 1217.367309570313 L -1828.389526367188 1217.367309570313 C -1829.373168945313 1220.41796875 -1830.882080078125 1222.599975585938 -1832.915283203125 1223.91064453125 C -1835.130126953125 1225.2724609375 -1837.6953125 1225.955932617188 -1840.295166015625 1225.877197265625 C -1842.14404296875 1225.90576171875 -1843.980834960938 1225.58056640625 -1845.708618164063 1224.919555664063 C -1847.253784179688 1224.32080078125 -1848.648559570313 1223.388061523438 -1849.791381835938 1222.188110351563 C -1850.931640625 1220.96826171875 -1851.810791015625 1219.528564453125 -1852.375732421875 1217.957397460938 C -1852.997802734375 1216.221923828125 -1853.305786132813 1214.389404296875 -1853.2841796875 1212.545776367188 C -1853.300537109375 1210.732299804688 -1852.983154296875 1208.931030273438 -1852.349731445313 1207.231811523438 C -1851.173095703125 1204.034912109375 -1848.722900390625 1201.4697265625 -1845.5849609375 1200.147705078125 C -1843.91259765625 1199.43994140625 -1842.111206054688 1199.086181640625 -1840.295166015625 1199.109497070313 C -1838.33642578125 1199.062744140625 -1836.394897460938 1199.49365234375 -1834.639526367188 1200.364013671875 C -1833.074462890625 1201.164306640625 -1831.71875 1202.317626953125 -1830.677124023438 1203.73388671875 C -1829.627563476563 1205.182250976563 -1828.867919921875 1206.819946289063 -1828.439697265625 1208.557250976563 C -1827.976806640625 1210.404418945313 -1827.810668945313 1212.314697265625 -1827.946533203125 1214.214599609375 L -1846.298706054688 1214.214599609375 C -1846.197509765625 1216.481323242188 -1845.622924804688 1218.122680664063 -1844.576171875 1219.138427734375 Z M -1836.6796875 1205.7548828125 C -1837.693725585938 1204.768676757813 -1839.083129882813 1204.266845703125 -1840.494140625 1204.37841796875 C -1841.452026367188 1204.3447265625 -1842.404541015625 1204.539306640625 -1843.273193359375 1204.944213867188 C -1843.95751953125 1205.279052734375 -1844.562255859375 1205.757446289063 -1845.0458984375 1206.345825195313 C -1845.469848632813 1206.8701171875 -1845.787353515625 1207.472290039063 -1845.981201171875 1208.118530273438 C -1846.1455078125 1208.662719726563 -1846.252807617188 1209.223510742188 -1846.299560546875 1209.791015625 L -1834.933715820313 1209.791015625 C -1835.1318359375 1208.310668945313 -1835.736572265625 1206.914306640625 -1836.6796875 1205.755737304688 L -1836.6796875 1205.7548828125 Z"
                  ></path>
                </svg>
                <svg
                  className="Trazado_5"
                  viewBox="-1819.223 1199.115 16.385 26.129"
                >
                  <path
                    id="Trazado_5"
                    d="M -1812.5810546875 1199.8037109375 L -1812.5810546875 1204.527587890625 L -1812.482421875 1204.527587890625 C -1812.151977539063 1203.735107421875 -1811.703735351563 1202.996215820313 -1811.152709960938 1202.337768554688 C -1810.602416992188 1201.671630859375 -1809.9560546875 1201.092041015625 -1809.234497070313 1200.616088867188 C -1808.517333984375 1200.143676757813 -1807.739501953125 1199.770874023438 -1806.921875 1199.508666992188 C -1806.0947265625 1199.245727539063 -1805.2314453125 1199.11328125 -1804.363525390625 1199.114990234375 C -1803.845336914063 1199.12451171875 -1803.332275390625 1199.207641601563 -1802.83837890625 1199.36083984375 L -1802.83837890625 1205.854858398438 C -1803.167114257813 1205.7890625 -1803.560668945313 1205.732788085938 -1804.019287109375 1205.681762695313 C -1804.459716796875 1205.63330078125 -1804.903442382813 1205.609008789063 -1805.347412109375 1205.608154296875 C -1806.46337890625 1205.576171875 -1807.572509765625 1205.794189453125 -1808.594360351563 1206.24755859375 C -1809.441284179688 1206.642944335938 -1810.1767578125 1207.244262695313 -1810.734741210938 1207.995239257813 C -1811.2919921875 1208.767822265625 -1811.684692382813 1209.647705078125 -1811.890747070313 1210.57861328125 C -1812.127685546875 1211.628173828125 -1812.244506835938 1212.70263671875 -1812.236694335938 1213.77978515625 L -1812.236694335938 1225.244262695313 L -1819.223022460938 1225.244262695313 L -1819.223022460938 1199.80810546875 L -1812.5810546875 1199.8037109375 Z"
                  ></path>
                </svg>
                <svg
                  className="Trazado_6"
                  viewBox="-1796.082 1199.107 23.865 26.134"
                >
                  <path
                    id="Trazado_6"
                    d="M -1789.435668945313 1199.802612304688 L -1789.435668945313 1203.345458984375 L -1789.287719726563 1203.345458984375 C -1788.489135742188 1201.949951171875 -1787.288208007813 1200.827026367188 -1785.843505859375 1200.121948242188 C -1784.495483398438 1199.465209960938 -1783.016845703125 1199.120849609375 -1781.517578125 1199.113891601563 C -1779.948120117188 1199.062133789063 -1778.384643554688 1199.320678710938 -1776.917358398438 1199.876098632813 C -1775.804809570313 1200.320922851563 -1774.828857421875 1201.051025390625 -1774.088256835938 1201.992431640625 C -1773.364868164063 1202.970092773438 -1772.868286132813 1204.096557617188 -1772.635620117188 1205.289672851563 C -1772.345825195313 1206.705932617188 -1772.20556640625 1208.148193359375 -1772.2177734375 1209.5947265625 L -1772.2177734375 1225.240600585938 L -1779.205810546875 1225.240600585938 L -1779.205810546875 1210.873413085938 C -1779.09765625 1209.246948242188 -1779.437622070313 1207.6220703125 -1780.189453125 1206.175537109375 C -1780.84521484375 1205.141723632813 -1782.009887695313 1204.625122070313 -1783.68310546875 1204.6259765625 C -1785.586547851563 1204.6259765625 -1786.9638671875 1205.191772460938 -1787.816040039063 1206.323486328125 C -1788.667358398438 1207.454223632813 -1789.093872070313 1209.316162109375 -1789.095581054688 1211.907348632813 L -1789.095581054688 1225.241455078125 L -1796.08203125 1225.241455078125 L -1796.08203125 1199.80517578125 L -1789.435668945313 1199.802612304688 Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div id="Grupo_10">
              <svg
                className="Trazado_15"
                viewBox="-1942.403 1189.783 28.444 33.929"
              >
                <path
                  id="Trazado_15"
                  d="M -1928.221069335938 1223.702392578125 C -1934.190795898438 1223.522338867188 -1938.516723632813 1220.72607421875 -1941.127807617188 1215.356811523438 C -1942.26806640625 1212.91015625 -1942.655639648438 1210.180419921875 -1942.243041992188 1207.513061523438 C -1941.635620117188 1202.800415039063 -1940.151977539063 1198.24365234375 -1937.866943359375 1194.076049804688 C -1937.219848632813 1192.79296875 -1936.346801757813 1191.637084960938 -1935.29052734375 1190.661987304688 C -1934.684936523438 1189.988037109375 -1933.777221679688 1189.670532226563 -1932.882690429688 1189.8193359375 C -1932.294311523438 1189.955200195313 -1931.790771484375 1190.332397460938 -1931.4931640625 1190.857543945313 C -1929.824340820313 1193.655639648438 -1927.177734375 1195.237182617188 -1924.386596679688 1196.644775390625 C -1922.197631835938 1197.623291015625 -1920.116088867188 1198.825805664063 -1918.174682617188 1200.232666015625 C -1915.99267578125 1201.942260742188 -1914.557373046875 1204.430541992188 -1914.169799804688 1207.175659179688 C -1913.14794921875 1213.033813476563 -1915.906127929688 1218.904907226563 -1921.06787109375 1221.857788085938 C -1923.221313476563 1223.157348632813 -1925.707763671875 1223.79833984375 -1928.221069335938 1223.702392578125 Z M -1922.337890625 1204.863891601563 C -1922.29296875 1203.950317382813 -1922.750610351563 1203.085083007813 -1923.530029296875 1202.606689453125 C -1925.255249023438 1201.555541992188 -1927.506469726563 1202.102294921875 -1928.5576171875 1203.827392578125 C -1928.577514648438 1203.8603515625 -1928.597534179688 1203.893188476563 -1928.615600585938 1203.926147460938 C -1929.159790039063 1204.928833007813 -1929.003295898438 1206.166870117188 -1928.226196289063 1207.001831054688 C -1927.29443359375 1208.003662109375 -1925.83154296875 1208.309936523438 -1924.576049804688 1207.764038085938 C -1923.469604492188 1207.397094726563 -1922.22021484375 1206.192016601563 -1922.336181640625 1204.863891601563 L -1922.337890625 1204.863891601563 Z"
                ></path>
              </svg>
              <svg
                className="Trazado_16"
                viewBox="-1924.97 1205.924 3.378 2.744"
              >
                <path
                  id="Trazado_16"
                  d="M -1922.993041992188 1205.930053710938 C -1922.545776367188 1205.888549804688 -1922.107055664063 1206.067626953125 -1921.817260742188 1206.409301757813 C -1921.446899414063 1206.94140625 -1921.542236328125 1207.667358398438 -1922.036987304688 1208.085205078125 C -1922.621826171875 1208.654418945313 -1923.487060546875 1208.824096679688 -1924.244018554688 1208.517822265625 C -1924.790893554688 1208.345703125 -1925.09375 1207.762451171875 -1924.921508789063 1207.215698242188 C -1924.90673828125 1207.170776367188 -1924.890380859375 1207.12744140625 -1924.870483398438 1207.085083007813 C -1924.549560546875 1206.343627929688 -1923.79931640625 1205.882446289063 -1922.993041992188 1205.930053710938 Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Cuidado_materno_a_todo_momento"
        style={{
          left: (containerSize.width - 141) / 2,
          top: containerSize.height * 0.8125,
        }}
      >
        <span>
          Cuidado materno
          <br />a todo momento
        </span>
      </div>
      <svg
        className="Rectangle_126"
        style={{
          left: (containerSize.width - 213) / 2,
          top: containerSize.height * 0.4647,
        }}
      >
        <rect
          id="Rectangle_126"
          rx="30"
          ry="30"
          x="0"
          y="0"
          width="213"
          height="144"
        ></rect>
      </svg>
      <svg
        className="Rectangle_125"
        style={{
          left: (containerSize.width - 213) / 2,
          top: containerSize.height * 0.4647 - 4,
        }}
      >
        <rect
          id="Rectangle_125"
          rx="30"
          ry="30"
          x="0"
          y="0"
          width="213"
          height="144"
        ></rect>
      </svg>
      <svg
        className="Line_4"
        viewBox="0 0 164 2"
        style={{
          left: (containerSize.width - 166) / 2,
          top: containerSize.height * 0.4647 + 68,
        }}
      >
        <path id="Line_4" d="M 0 0 L 164 0"></path>
      </svg>
      <div
        onClick={() => {
          props.history.push("/login");
        }}
        id="INICIAR_SESIN"
        style={{
          left: (containerSize.width - 135) / 2,
          top: containerSize.height * 0.4647 + 94,
        }}
      >
        <span>INICIAR SESIÓN</span>
      </div>
      <div
        onClick={() => {
          props.history.push("/register");
        }}
        id="REGISTRARSE"
        style={{
          left: (containerSize.width - 117) / 2,
          top: containerSize.height * 0.4647 + 24,
        }}
      >
        <span>REGISTRARSE</span>
      </div>
    </div>
  );
}

export default withRouter(Inicial);
