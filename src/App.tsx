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
          "Creación de macro en excel para hacer bulk-operations.",
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
        image="171376323.jpg"
        title="Todo en uno gestion de inventarios, "
        description="Control de entradas, salidas, ediciones, lector de codigo de barras, gestion de usuarios etc."
        listItems={[
          "Producto a la venta, tambien estoy disponible para hacer ajustes a la medida. Pide un presupuesto sin compromiso",
          `El backend está desarrollado con bun.js para generar ejecutables, el framework de backend es Express, 
          la base de datos está en SQLite, ya está normalizada, 
          se utiliza dependency-injection para adaptarse a más bases de datos o gestores (node.js) a futuro. `,
          "Está diseñado para correr en la red local sin instalación.",
          `El frontend está hecho en Vite con React`,
          `Se generan archivos HTML separados para ser enrutados y renderizados desde el backend, 
          lo que permite tener un mejor control de las rutas protegidas.`,
          `Se cuenta con autenticación de dos pasos, sesiones con 
          jsonwebtokens en las cookies, rate-limit, protección contra CSRF, dependency-injection, etc.`]}
      />
      <hr className="my-10" />

      {/* Sección de Proyectos */}
      <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
      <Card
        image="171376323.jpg"
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
        image="171376323.jpg"
        title="To-Do List"
        description="Otro to-do list, ya sé que a nadie le importan los to-do list, son repetitivos y no resuelven problemas reales. Lo tengo más que nada para demostrar conocimiento de frontend. Este está basado en un challenge de Frontend Mentor. Tiene Tailwind para los estilos, cambiar entre modo oscuro y claro, uso de Zustand para control de estados, se adapta a varios tamaños de pantalla, etc."
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
        image="data:image/jpeg;base64,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"
        title="Conocimientos desactualizados"
        description="Técnologías que utilizaba en la universidad antes de los LLMs"
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