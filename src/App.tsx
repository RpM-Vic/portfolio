
function App() {

  return (
    <>
      <div className="flex flex-col justify-center m-10">
        <div className="flex flex-row">
          <img src="171376323.jpg" alt="my pic" className="w-60" />
          <div>
            <p>Aquí va mi nombre completo</p>
            <p>Desarrollador web full stack MERN</p>
            <p>Ciencia, tecnología, libertad</p>
          </div>
        </div>
        <hr />
        <div>
          <h2>Experiencia</h2>
          <div className="flex flex-row">
            <img src="171376323.jpg" alt="logo empresa" className="w-60" />
            <div>
              <p>Empresa muy importante</p>
              <p>Puesto: Auxilar de coordinación, almacen y compras </p>
              <p>Tiempo: 2023-2024</p>
              <li>Creación de aplicacón web de gestion de inventario de quimicos.   </li> 
              <li>Creación de aplicación web para generación de hojas de ruta.</li>
              <li>Creación de aplicación web de consultas sql de codigos de producto.</li>
              <p>(En la sección de proyectos explico más detalladamente)</p>
              <p>Tenía otras funciones administrativas pero siento que no suman al perfil de desarrollador de sofrware</p>
              <li>Diseño de instructivos de mantenimiento.</li>
              <li>Calculo de indicadores de clave mttr, mtbf</li>
              <li>Seguimiento de mantenimiento autonomo</li>
              
              
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <p>Otra empresaEmpresa muy importante</p>
              <p>Puesto: Técnico en mantenimiento industrial</p>
              <p>Tiempo: 2019-2023</p>
              <li>Sin experiencia relacionada con sofware. Solo para mencionar que en el trabajo disponia de una 
                computadora con internet y mucho tiempo libre lo que me permitía estudiar mucho.
              </li>
              <li>Algunas veces atendí proveedores extrangeros hablando en inglés
              </li>
            </div>
            <img src="171376323.jpg" alt="logo empresa" className="w-60" />
          </div>

        </div>
        <hr />
        <div>
          <h2>Productos</h2>
          <div className="flex flex-row">
            <img src="171376323.jpg" alt="link a la página de mi producto" className="w-60" />
            <div>
              <p>Aplicación web full stack</p>
              <p>
                El backend está desarrollado con bun.js para generar executables, el framework de back end es express, 
                la base de datos está en  sqlite, ya está normalizada, se utiliza dependency-injection 
                para adaptarse a más bases de datos, por la similitud con node.js en caso de ser necesario se puede
                utilizar node.js como gestor de paquetes para tener un despligue más fluido en las plataformas 
                convencionales, el fronend está hecho en vite con react, se generan archivos html separados para ser
                enrutados y renderizados desde el backend, lo que permite tener un mejor control de
                las rutas protegidas. 
                Se cuenta con autenticación de dos pasos, sesiones con jsonwebtokens en las cookies,
                rate-limit, protección contra CSRF, dependency-injection, etc.
                </p>
            </div>

          </div>
        </div>
        <hr />
        <h2>Proyectos</h2>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <img src="171376323.jpg" alt="link a proyecto 1" className="w-60" />  
            <div>
              <p>Está es una versión similar a la aplicación realizada para el control de 
                quimicos, solo tiene alguna cosas menos para que cualquier persona de internet
                pueda hecharle un vistazo y se de una idea de la funcionalidad general
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <p>Otro to-do list, ya se que a nadie le importan los todo list,
                son repetitivos y no resuleven problemas reales.
                Lo tengo más que nada para demostrar conocimiento de fronend.
                Este está basado en un challenge de frontend mentor.
                Tiene unas cosas extras como uso de tailwind para los estilos,
                cambiar entre modo oscuro y claro, uso de zustand para control de estados,
                se adapta a varios tamaños de pantalla, etc.
              </p>
            </div>
            <img src="171376323.jpg" alt="link a proyecto 2" className="w-60" />  
          </div>
        </div>

        <hr />
        <h2>Tecnologías</h2>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <img src="171376323.jpg" alt="imagen de tecnologias" className="w-60" />  
            <div>
              <p>Lás que más utilizo son:</p>
              <p>Html, css, javascript, typescript, vs-code</p> 
              <p>Backend: Node, bun, expess, postman, next</p>
              <p>Fronend: Next otra vez, react, vite, tailwind, </p>
              <p>Base de datos: MongoDb, sqlite, google sheets</p>
              <p>Control de versiones: git, github</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <p>Conocimientos desactualizados de la escuela hace muchos años cuando no existian los LLMs.</p>
              <p>Python tkinker, c pic c compiler, c++ qt,</p> 
              <p>matlab, solidworks, autocad, robot-studio,</p>
              <p>labview, plc tia-portal codesys</p>
            </div>
            <img src="171376323.jpg" alt="otra imagen de tecnologias" className="w-60" />  
          </div>

        </div>

        <hr />
        <h2>Habilidades</h2>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <img src="171376323.jpg" alt="habilidades" className="w-60" />
            <div>
              <p>Español: Lengua materna</p>
              <p>Inglés intermedio-avanzado, un b2 en cerf aprox</p>
              <p>Mecanografía: 260 pulsos efectivos por minuto aprox</p>
            </div>

          </div>

        </div>




      </div>
    </>
  )
}

export default App
