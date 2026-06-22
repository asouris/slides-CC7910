import { Deck, Slide } from '@revealjs/react';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/white.css';


function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Deck
        config={{
          controls: false,
          slideNumber:true,
          navigationMode: 'linear'
        }}
      >
        <Slide>
          <h3>Software minero, pero Open Source</h3>
          <p>Proyecto de Investigación para CC7910</p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Julieta Coloma</p>
            <p>XDD</p>
          </div>
        </Slide>

        <Slide>
          <h2>Contexto</h2>
          <p></p>
        </Slide>

        <Slide backgroundImage="image.png" backgroundOpacity={0.3}>
          <Slide>
            <p>Al cavar una mina</p>
            <h2>¿Cómo me aseguro que no se derrumbe?</h2>
          </Slide>

          <Slide>
            <p>Haciendo experimentos, muchos experimentos...</p>

            <div className="r-stack">
              <img className="fragment fade-in-then-out" src="experiments/1.png" width="500" alt="" />
              <img className="fragment fade-in-then-out" src="experiments/2.png" width="500" alt="" />
              <img className="fragment fade-in-then-out" src="experiments/3.png" width="500" alt="" />
              <img className="fragment fade-in-then-out" src="experiments/4.png" width="500" alt="" />

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <img className="fragment" src="experiments/5.png" width="500" alt="" />

                <div className="fragment">
                  <p>Queremos conocer</p>
                  <ul>
                    <li>Resistencia</li>
                    <li>Elasticidad</li>
                    <li>Porosidad</li>
                  </ul>
                </div>
              </div>
            </div>
          </Slide>

          <Slide>
            <h2>Pero esto no es perfecto</h2>
            <p className="fragment">
              Aunque usemos una roca con la misma composición, lo más probable es que no
              se obtenga el mismo resultado
            </p>
            <p className="fragment">
              Tenemos que repetir los experimentos múltiples veces para lograr predecir
              el comportamiento del material
            </p>
          </Slide>
        </Slide>

        <Slide>
          <h2>¿Solución computina?</h2>
        </Slide>

        <Slide>
          <Slide backgroundVideo="brittle.mp4">
            <h2
              style={{
                backgroundColor: "#f3f3f2",
              }}
            >
              Simulamos el experimento
            </h2>
          </Slide>

          <Slide>
            <h3>Se obtienen curvas esfuerzo-deformación</h3>
            <img
              src="curve.png"
              alt=""
              style={{
                width: "50vw",
              }}
            />
          </Slide>
        </Slide>

        <Slide>
          <h2>¿Cuál es mi problema?</h2>
        </Slide>

        <Slide>
          <Slide>
            <h2>El software propietario</h2>
          </Slide>

          <Slide>
            <h3>Software propietario: 3DEC</h3>
            <ul>
              <li>$$$$$$$</li>
              <li>Licencias virtuales</li>
              <li>API's sin mantención</li>
            </ul>
          </Slide>
        </Slide>

        <Slide>
          <p>
            ¿Es posible utilizar software Open Source para obtener curvas
            esfuerzo-deformación similares a las de 3DEC?
          </p>
        </Slide>

        <Slide autoAnimate>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <h2>Metodología</h2>
          </div>
        </Slide>

        <Slide autoAnimate>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <h2>Metodología</h2>
            <p>1. Se utilizará un estudio como referencia.</p>
          </div>
        </Slide>

        <Slide autoAnimate>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <h2>Metodología</h2>

            <p style={{ textAlign: "left" }}>
              1. Se utilizará un estudio como referencia.
            </p>

            <p style={{ textAlign: "left" }}>
              2. Se realizará una exploración sistemática por las herramientas conocidas.
            </p>
          </div>
        </Slide>

        <Slide autoAnimate>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <h2>Metodología</h2>

            <p style={{ textAlign: "left" }}>
              1. Se utilizará un estudio como referencia.
            </p>

            <p style={{ textAlign: "left" }}>
              2. Se realizará una exploración sistemática por las herramientas conocidas.
            </p>

            <p style={{ textAlign: "left" }}>
              3. Se compararán las curvas de esfuerzo-deformación entre los ensayos.
            </p>
          </div>
        </Slide>

        <Slide autoAnimate>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>1. Referencia</h3>

            <small>
              &ldquo;Estudio del impacto de la forma de los bloques en el comportamiento
              mecánico de muestras de roca usando un modelo DEM a escala de
              laboratorio&rdquo; de Matías Sánchez
            </small>

            <div
              style={{
                width: "50vw",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img src="sanchez.png" alt="" />
              <img src="sanchez2.png" alt="" style={{ height: "300px" }} />
            </div>
          </div>
        </Slide>

        <Slide autoAnimate>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>1. Referencia</h3>

            <small>
              &ldquo;Estudio del impacto de la forma de los bloques en el comportamiento
              mecánico de muestras de roca usando un modelo DEM a escala de
              laboratorio&rdquo; de Matías Sánchez
            </small>

            <div style={{ textAlign: "center" }}>
              <img
                src="types.png"
                alt=""
                style={{
                  width: "50vw",
                }}
              />
            </div>

            <div>
              <small>
                Modelos con mallas de Voronoi y de Tetraédros,
                <br />
                se realizaron 256 simulaciones en total
              </small>
            </div>
          </div>
        </Slide>

        <Slide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>2. Herramientas - problema</h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div
                className="fragment fade-in-then-out"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h3>3DEC</h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "start",
                  }}
                >
                  <p>Primero malla una geometría</p>
                  <p>Luego simula</p>
                </div>
              </div>

              <div
                className="fragment"
                style={{
                  position: "absolute",
                  top: "100px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <img style={{ width: "30vw" }} src="geometry.png" alt="" />
                <img style={{ width: "30vw" }} src="mesh.png" alt="" />
              </div>
            </div>
          </div>
        </Slide>

        <Slide>
          <p>
            Esto es un problema, ya que en el universo Open Source no existe una buena
            alternativa que haga ambos
          </p>

          <p className="fragment">Algunos softwares que sí nos sirven:</p>

          <div
            className="fragment"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <h4>Generadores de mallas</h4>
              <ul>
                <li>Gmsh</li>
                <li>Neper</li>
                <li>TetGen</li>
              </ul>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <h4>Simuladores</h4>
              <ul>
                <li>Yade</li>
                <li>Granoo</li>
                <li>OpenFDEM</li>
              </ul>
            </div>
          </div>
        </Slide>

        <Slide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>2. Herramientas - solución</h3>

            <div style={{ textAlign: "start" }}>
              <p>Exploración sistemática por los distintos malladores</p>

              <ul className="fragment">
                <li>Gmsh: 128 ensayos con Voronoi, 128 ensayos con tetraédros</li>
                <li>TetGen: 128 ensayos con tetraédros</li>
                <li>Neper: 128 ensayos con Voronoi</li>
              </ul>

              <p className="fragment">Simulación en Yade</p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>3. Evaluación</h3>

            <p>
              Se compararán las curvas de esfuerzo-deformación entre los ensayos.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img style={{ width: "30vw" }} src="sanchez.png" alt="" />
              <p>!=</p>
              <img
                style={{
                  width: "30vw",
                  filter: "blur(6px) grayscale(1)",
                }}
                src="sanchez.png"
                alt=""
              />
              <p>?</p>
            </div>
          </div>
        </Slide>

        <Slide backgroundVideo="brittle.mp4">
          <div
            style={{
              backgroundColor: "#fff",
            }}
          >
            <h2>muchas Gracias</h2>
            <p>por escuchar</p>
          </div>
        </Slide>


      </Deck>
    </div>
  );
}

export default App
