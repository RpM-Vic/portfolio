import { ButtonDemo } from './components/ButtonDemo';
import { ButtonGithub } from './components/ButtonGithub';
import {Card} from './components/Card';
import { useImageCache } from './hooks/useImageCache';

export function AppSpanish() {
  useImageCache(['vicpic.webp','main.png','quimicos.png'])
  return (
    <div className="flex flex-col justify-center p-10  bg-radial-[at_50%_75%] from-sky-00 via-black to-gray-600 to-90%">
      {/* Sección de Presentación */}
      <div className="flex flex-col md:flex-row items-center mb-10">
        <img src="vicpic.webp" alt="my pic" className="w-60 h-60 object-cover rounded-lg shadow-lg" />
        <div className="md:ml-6 p-4 md:mt-0">
          <p className="text-2xl font-bold text-white">Víctor Uriel Martínez Pérez</p>
          <p className=" text-white">Desarrollador web full stack MERN</p>
          <p className="text-white mt-2">Ingeniero en mecatrónica</p>
          <p className="text-white mt-2">Tecnológico de León 2014-2019</p>
          <p className="text-white mt-2">Cédula profesional: 12158842</p>
          <p className="text-white mt-2">Ciencia, tecnología, libertad</p>
          <p className="text-white mt-2">        <a href="mailto:&#114;&#112;&#109;&#46;&#118;&#105;&#99;&#46;&#100;&#101;&#118;&#101;&#108;&#111;&#112;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
          &#114;&#112;&#109;&#46;&#118;&#105;&#99;&#46;&#100;&#101;&#118;&#101;&#108;&#111;&#112;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
        </a></p>
        </div>
      </div>
      <hr className="my-10" />

      {/* Sección de Experiencia */}
      <h2 className="text-3xl font-bold mb-6">Experiencia</h2>


      <div className='flex justify-center items-center'>
        <ButtonGithub link='https://github.com/RpM-Vic/mttologPremium'/>
        <ButtonGithub description='Documentacion' link='https://deepwiki.com/RpM-Vic/mttologPremium'/>
        <ButtonDemo link='https://mttolog-premium.vercel.app'/>
      </div>
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0wmOxGlFcbqnPaqgZQkVFpin2zVWT_Z0ZA&s"
        title="Bydsa"
        subtitle="Puesto: Técnico en mantenimiento"
        description="Tiempo: 2025"
        link='https://mttolog-premium.vercel.app/'
        listItems={[
          "Diseño, creación y despliegue de aplicación web full stack para gestion de bitacora y mantenimientos preventivos",
          "Graphql, Neon posgreSQL, animaciones CSS y más, "
        ]}
        reverse
      />

      <div className='flex justify-center items-center'>
        <ButtonGithub link='https://www.upwork.com/freelancers/~01b35bc65eb7c1f768' description='Perfil de upwork'/>
      </div>
      <Card
        image="data:image/png;base64,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"        
        title="Upwork"
        subtitle="Puesto: Desarrollador web freelancer"
        description="Tiempo: 2025"
        link='https://www.upwork.com/freelancers/~01b35bc65eb7c1f768'
        listItems={[
          "Diseño, creación y despliegue de páginas web hechas a la medida",
          "Hecha un vistazo a las reseñas de mis clientes en mi perfil de upwork"
        ]}
      />

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
        reverse        
      />
      <Card
        image="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/fd8ce755032fe3ac007053ec44ff997e"
        title="Envases Universales"
        subtitle="Puesto: Técnico en mantenimiento industrial"
        description="Tiempo: 2019-2023"
        listItems={[
          "No especifico de sofware. En el trabajo disponía de una computadora con internet y mucho tiempo libre lo que me permitía estudiar mucho.",
          "Algunas veces atendí proveedores extranjeros hablando en inglés.",
          `Diagnostico y reparación de fallas mecánicas, hidraulicas, eléctricas, 
          electrónicas, de parametros de proceso sin que la IA pudiera hacerme el trabajo`
        ]}
      />
      <hr className="my-10" />

      {/* Sección de Productos */}
      <h2 className="text-3xl font-bold mb-6">Productos</h2>
      <div className='flex justify-center items-center'>
        <ButtonGithub link='https://github.com/RpM-Vic/inventoryfrontend'/>
        <ButtonDemo link='https://inventoryadvertising.vercel.app/'/>
      </div>

      <Card
        image="main.png"
        link='https://inventoryadvertising.vercel.app/'
        title="Todo en uno gestion de inventarios, "
        description="Control de entradas, salidas, ediciones, lector de codigo de barras, gestion de usuarios etc."
        listItems={[
          "Producto a la venta, tambien estoy disponible para hacer ajustes a la medida. Pide un presupuesto sin compromiso",
          `El backend está desarrollado con bun.js para generar ejecutables, el framework de backend es Express, 
          la base de datos está en SQLite, ya está normalizada, 
          se utiliza dependency-injection para adaptarse a posgres a futuro. `,
          "Está diseñado para correr en la red local sin instalación.",
          `El frontend está hecho originalmente en vite, pero lo tuve que migrar a next.js`,
          `Se generan archivos HTML separados para ser enrutados y renderizados desde el backend, 
          lo que permite tener un mejor control de las rutas protegidas.`,
          `Se cuenta con autenticación de dos pasos, sesiones con 
          jsonwebtokens en las cookies, rate-limit, protección contra CSRF, transacciones, etc.`
        ]}
      />
      <hr className="my-10" />

      {/* Sección de Proyectos */}
      <h2 className="text-3xl font-bold mb-6">Proyectos</h2>

      <div className='flex justify-center items-center'>
        <ButtonGithub link='https://github.com/RpM-Vic/chatbotBackend2'/>
        <ButtonDemo link='https://chatbot-backend2-two.vercel.app//'/>
      </div>

      <Card
        image="quimicos.png"
        link="https://chatbot-backend2-two.vercel.app/"
        title="Chatbot con llama 4"
        description="Esta es una version demo de una aplicación que hice para un cliente en US"
        listItems={[
          "Typescript en el frontend y el backend",
          "La version completa es privada así que no la puedo compartir por aquí",
          `La version completa es son SAAS que utiliza stripe para gestionar los pagos, chatGPT para el chatbot, 
          utiliza un sofisticado middleware para actualizar la sesion de los usuarios usando una combinacion de estrategias, revisando las cooquies en cada petición
          y revisando la base de datos solo una vez por hora`,
        ]}
      />

      <div className='flex justify-center items-center'>
        <ButtonGithub link='https://github.com/RpM-Vic/quimicos'/>
        <ButtonDemo link='https://quimicos-a79c9vk68-rpm-vics-projects.vercel.app/'/>
      </div>

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

      <div className='flex justify-center items-center'>
        <ButtonGithub link='https://github.com/RpM-Vic/frontendMentorTodo'/>
        <ButtonDemo link='https://frontend-mentor-todo-theta.vercel.app/'/>
      </div>
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
        listItems={[
          "Python tkinter, c pic c compiler, c++ qt, matlab, solidworks, nx, autocad, robot-studio, labview, plc tia-portal codesys",
          "Inglés intermedio-avanzado, B2 en CERF aprox"
      ]}
        reverse
      />
      <hr className="my-10" />

      {/* Sección de Habilidades */}
      <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
      <Card 
        image='171376323.jpg' 
        title='Servicios' 
        listItems={[
          "Notificaciones en tiempo real",
          "Formularios",
          "Landing pages",
          "Pasarelas de pago",
          "Integración de LLMs",
          "Chat bots",
          "Gestion de inventarios",
          "Portafolios web",
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
          "Gané 2 concursos de matematicas a nivel estado"
        ]}
      />

    </div>
  );
}
