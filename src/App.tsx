import {Card} from './components/Card';

function App() {
  return (
    <div className="flex flex-col justify-center p-10  bg-radial-[at_50%_75%] from-sky-00 via-black to-gray-600 to-90%">
      {/* Sección de Presentación */}
      <div className="flex flex-col md:flex-row items-center mb-10">
        <img src="171376323.jpg" alt="my pic" className="w-60 h-60 object-cover rounded-lg shadow-lg" />
        <div className="md:ml-6 p-4 md:mt-0">
          <p className="text-2xl font-bold text-white">Víctor Uriel Martínez Pérez</p>
          <p className=" text-white">Desarrollador web full stack MERN</p>
          <p className="text-white mt-2">Ingeniero en mecatrónica</p>
          <p className="text-white mt-2">Tecnológico de León 2014-2019</p>
          <p className="text-white mt-2">Ciencia, tecnología, libertad</p>
          <p className="text-white mt-2">        <a href="mailto:&#114;&#112;&#109;&#46;&#118;&#105;&#99;&#46;&#100;&#101;&#118;&#101;&#108;&#111;&#112;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
          &#114;&#112;&#109;&#46;&#118;&#105;&#99;&#46;&#100;&#101;&#118;&#101;&#108;&#111;&#112;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
        </a></p>
        </div>
      </div>
      <hr className="my-10" />

      {/* Sección de Experiencia */}
      <h2 className="text-3xl font-bold mb-6">Experiencia</h2>
      <Card
        image="https://mexicoindustry.com/admin/images/empresas/empresas_logos/waldaschaff-automotive-mexico-s-de-r-l-de-c-v.jpg"        title="Waldaschaff Automotive"
        subtitle="Puesto: Auxiliar de coordinación y almacén"
        description="Tiempo: 2023-2024"
        listItems={[
          "Creación de aplicación web de gestión de inventario de químicos.",
          "Creación de aplicación web para generación de hojas de ruta.",
          "Creación de aplicación web de consultas de códigos de producto.",
          "Creación de macro en excel para cambiar nombres de archivos masivamente.",
          "Diseño de instructivos de mantenimiento.",
          "Cálculo de indicadores clave MTTR, MTBF.",
          "Seguimiento de mantenimientos autónomos."
        ]}
      />
      <Card
        image="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/fd8ce755032fe3ac007053ec44ff997e"
        title="Envases Universales"
        subtitle="Puesto: Técnico en mantenimiento industrial"
        description="Tiempo: 2019-2023"
        listItems={[
          "Sin experiencia relacionada con software. En el trabajo disponía de una computadora con internet y mucho tiempo libre lo que me permitía estudiar mucho.",
          "Algunas veces atendí proveedores extranjeros hablando en inglés."
        ]}
        reverse
      />
      <hr className="my-10" />

      {/* Sección de Productos */}
      <h2 className="text-3xl font-bold mb-6">Productos</h2>
      <Card
        image="main.png"
        link='https://inventoryadvertising.vercel.app/'
        title="Todo en uno gestion de inventarios, "
        description="Control de entradas, salidas, ediciones, lector de codigo de barras, gestion de usuarios etc."
        listItems={[
          "Producto a la venta, tambien estoy disponible para hacer ajustes a la medida. Pide un presupuesto sin compromiso",
          `El backend está desarrollado con bun.js para generar ejecutables, el framework de backend es Express, 
          la base de datos está en SQLite, ya está normalizada, 
          se utiliza dependency-injection para adaptarse a más posgres a futuro. `,
          "Está diseñado para correr en la red local sin instalación.",
          `El frontend está hecho originalmente en vite, pero lo tuve que migrar a next.js`,
          `Se generan archivos HTML separados para ser enrutados y renderizados desde el backend, 
          lo que permite tener un mejor control de las rutas protegidas.`,
          `Se cuenta con autenticación de dos pasos, sesiones con 
          jsonwebtokens en las cookies, rate-limit, protección contra CSRF, dependency-injection, etc.`]}
      />
      <hr className="my-10" />

      {/* Sección de Proyectos */}
      <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
      <Card
        image="quimicos.png"
        link="https://quimicos-a79c9vk68-rpm-vics-projects.vercel.app/"
        title="Control de Químicos"
        description="Esta es una versión similar a la aplicación que creé
        para el control de químicos en Waldaschaff, solo tiene algunas cosas menos
        para poder hacerla más interactiva y poder probarla fuera de producción."
        listItems={[
          "La aplicación está desarrollada en next, tanto el backend como el frontend.",
          "Para la base de datos utiliza Atlas MongoDB.",
          `La aplicación era utilizada diariament por todo el personal de mantenimiento, 
          almacén, robótica y cnc, unas 40 personas aprox.`,
          `Una vez al día se mandaba automaticamente un reporte por correo con un resumen de las
          existencias y consumos, en esté caso se simula utilizando un webhook 
          de discord a un servidor tambien creado por mí.`

        ]}
      />
      <Card
        image="todo.jpg"
        link='https://frontend-mentor-todo-theta.vercel.app/'
        title="To-Do List"
        description="Otro to-do list, ya sé que a nadie le importan los to-do list, son repetitivos y no resuelven problemas reales. Lo tengo más que nada para demostrar conocimiento de frontend. Este está basado en un challenge de Frontend Mentor. Tiene Tailwind para los estilos, cambiar entre modo oscuro y claro, 
        uso de Zustand para control de estados, se adapta a varios tamaños de pantalla, persistencia en localstorage etc."
        reverse
      />
      <hr className="my-10" />

      {/* Sección de Tecnologías */}
      <h2 className="text-3xl font-bold mb-6">Tecnologías</h2>
      <Card
        image="https://gurzu.com/img/gurzu/mern-stack-01.webp"
        title="Tecnologías que más utilizo"
        listItems={["Html, css, javascript, typescript, vs-code",
          "Backend: Node, bun, express, postman, next.",
          "Frontend: Next otra vez, react, vite, tailwind.",
          "Base de datos: MongoDb, sqlite, google sheets.",
          "Control de versiones: git, github"]}
      />
      <Card
        image="tecleon.jpg"
        title="Extras"
        description="Técnologías que utilizaba en la universidad antes de los LLMs, estoy algo oxidado con esto"
        listItems={["Python tkinter, c pic c compiler, c++ qt, matlab, solidworks, nx, autocad, robot-studio, labview, plc tia-portal codesys"]}
        reverse
      />
      <hr className="my-10" />

      {/* Sección de Habilidades */}
      <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
      <Card 
        image='171376323.jpg' 
        title='Idiomas' 
        listItems={[
          "Español: Lengua materna",
          "Inglés intermedio-avanzado, B2 en CERF aprox"
        ]}
      />
      <Card 
        image='171376323.jpg' 
        title='Habilidades blandas' 
        listItems={[
          "Formación continua",
          "Pensamiento critico y autocritico",
          "Disciplina estricta",
          "Gestion pedagógica de emociones",
        ]}
        reverse
      />
      <Card 
        image='171376323.jpg' 
        title='Otras habilidades' 
        listItems={[
          "Mecanográfia 260 pusalciones por minuto",
        ]}
      />

    </div>
  );
}

export default App;