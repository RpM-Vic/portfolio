import { ButtonDemo } from './components/ButtonDemo';
import { ButtonGithub } from './components/ButtonGithub';
import { Card } from './components/Card';
import { useImageCache } from './hooks/useImageCache';

export function AppEnglish() {
  useImageCache(['vicpic.webp','main.png','quimicos.png'])
  return (
    <div className="flex flex-col justify-center p-10 bg-radial-[at_50%_75%] from-sky-00 via-black to-gray-600 to-90%">
      {/* Presentation Section */}
      <div className="flex flex-col md:flex-row items-center mb-10">
        <img src="vicpic.webp" alt="my pic" className="w-60 h-60 object-cover rounded-lg shadow-lg" />
        <div className="md:ml-6 p-4 md:mt-0">
          <p className="text-2xl font-bold text-white">Víctor Uriel Martínez Pérez</p>
          <p className="text-white">Full Stack MERN Web Developer</p>
          <p className="text-white mt-2">Mechatronics Engineer</p>
          <p className="text-white mt-2">León Institute of Technology 2014-2019</p>
          <p className="text-white mt-2">Professional license: 12158842</p>
          <p className="text-white mt-2">Science, technology, freedom</p>
          <p className="text-white mt-2">
            <a href="mailto:&#114;&#112;&#109;&#46;&#118;&#105;&#99;&#46;&#100;&#101;&#118;&#101;&#108;&#111;&#112;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
              &#114;&#112;&#109;&#46;&#118;&#105;&#99;&#46;&#100;&#101;&#118;&#101;&#108;&#111;&#112;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
            </a>
          </p>
        </div>
      </div>
      <hr className="my-10" />

      {/* Experience Section */}
      <h2 className="text-3xl font-bold mb-6">Experience</h2>


            <div className='flex justify-center items-center'>
        <ButtonGithub link='https://github.com/RpM-Vic/mttologPremium'/>
        <ButtonGithub description='Documentacion' link='https://deepwiki.com/RpM-Vic/mttologPremium'/>
        <ButtonDemo link='https://mttolog-premium.vercel.app'/>
      </div>
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0wmOxGlFcbqnPaqgZQkVFpin2zVWT_Z0ZA&s"
        title="Bydsa"
        subtitle="Position: Maintenance technician"
        description="Date: 2025"
        link='https://mttolog-premium.vercel.app/'
        listItems={[
          "Design, create and deploy full stack web application to manage logs and preventive maintenances",
          "Graphql, Neon posgreSQL, CSS animations and more "
        ]}
        reverse
      />

      <div className='flex justify-center items-center'>
        <ButtonGithub link='https://www.upwork.com/freelancers/~01b35bc65eb7c1f768' description='Upwork profile'/>
      </div>
      <Card
        image="data:image/png;base64,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"        
        title="Upwork"
        subtitle="Position: Web developer freelancer"
        description="Duration: 2025"
        link='https://www.upwork.com/freelancers/~01b35bc65eb7c1f768'
        listItems={[
          "Design, creation and deployment of tailored web applications",
          "Check out the reviews at my upwork profile"
        ]}
      />

      <Card
        image="https://mexicoindustry.com/admin/images/empresas/empresas_logos/waldaschaff-automotive-mexico-s-de-r-l-de-c-v.jpg"
        title="Waldaschaff Automotive"
        subtitle="Position: Coordination and Warehouse Assistant"
        description="Duration: 2023-2024"
        listItems={[
          "Development of web application for chemical inventory management.",
          "Development of web application for route sheet generation.",
          "Development of web application for product code queries.",
          "Created Excel macro for bulk file renaming.",
          "Designed maintenance manuals.",
          "Calculate key perfomance indicators (MTTR, MTBF).",
          "Tracked autonomous maintenance activities."
        ]}
        reverse
      />
      <Card
        image="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/fd8ce755032fe3ac007053ec44ff997e"
        title="Envases Universales"
        subtitle="Position: Industrial Maintenance Technician"
        description="Duration: 2019-2023"
        listItems={[
          "No software-related. ",
          "At work, I had a computer with internet and plenty of free time which allowed me to study extensively.",
          "Occasionally assisted foreign suppliers by communicating in English.",
          `Diagnose and fix of mechanical, electrical and hydraulic failures without AI
          to do the job`
        ]}
      />
      <hr className="my-10" />

      {/* Products Section */}
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className='flex justify-center items-center'>
        <ButtonGithub link='https://github.com/RpM-Vic/inventoryfrontend'/>
        <ButtonDemo link='https://inventoryadvertising.vercel.app/'/>
      </div>

      <Card
        image="main.png"
        link='https://inventoryadvertising.vercel.app/'
        title="All-in-One Inventory Management System"
        description="Controls inputs, outputs, edits, barcode scanning, user management, etc."
        listItems={[
          "Product available for purchase, also available for custom adjustments. Request a free quote.",
          `Backend developed with bun.js to generate executables, using Express framework, 
          SQLite database (already normalized), 
          uses dependency-injection for future PostgreSQL adaptation.`,
          "Designed to run on local network without installation.",
          `Frontend originally built with Vite, but migrated to Next.js`,
          `Generates separate HTML files to be routed and rendered from backend, 
          allowing better control of protected routes.`,
          `Features include two-factor authentication, session management with 
          JWT cookies, rate-limiting, CSRF protection, transactions, etc.`
        ]}
      />
      <hr className="my-10" />

      {/* Projects Section */}
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className='flex justify-center items-center'>
        <ButtonGithub link='https://github.com/RpM-Vic/quimicos'/>
        <ButtonDemo link='https://chatbot-backend2-two.vercel.app//'/>
      </div>

      <Card
        image="quimicos.png"
        link="https://chatbot-backend2-two.vercel.app//"
        title="Chemical Control System"
        description="This is a similar version to the application I created
        for chemical control at Waldaschaff, with some features removed
        to make it more interactive and testable outside production."
        listItems={[
          "Application developed in Next.js (both backend and frontend).",
          "Uses MongoDB Atlas for database.",
          `The application was used daily by all maintenance, warehouse, 
          robotics and CNC staff (approx. 40 people).`,
          `Daily automated email reports with inventory summary and consumption, 
          in this case simulated using a Discord webhook to a server I also created.`
        ]}
      />

      <div className='flex justify-center items-center'>
        <ButtonGithub link='https://github.com/RpM-Vic/chatbotBackend2'/>
        <ButtonDemo link='https://chatbot-backend2-two.vercel.app//'/>
      </div>

      <Card
        image="quimicos.png"
        link="https://chatbot-backend2-two.vercel.app/"
        title="Chatbot with llama 4"
        description="This is a similar version of the application I made for an upwork client in US"
        listItems={[
          "Typescript in the frontend and the backend",
          "The full version is private so I can't share it here, this was just the first MVP that I showed to the client", 
          `The full version is a software as a service using stripe to manage payments, chatGPT for the chatbot,
          it has a sophicticated middleware to update the session of the users using and hybrid approach checking the cookies in each request, 
          and checking the database only after 1 hour`
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
        description="Yet another to-do list - I know nobody cares about to-do apps, they're repetitive and don't solve real problems. I mainly keep this to demonstrate frontend knowledge. Based on a Frontend Mentor challenge. Uses Tailwind for styling, dark/light mode toggle, Zustand for state management, responsive design, localStorage persistence, etc."
        reverse
      />
      <hr className="my-10" />

      {/* Technologies Section */}
      <h2 className="text-3xl font-bold mb-6">Technologies</h2>
      <Card
        image="https://gurzu.com/img/gurzu/mern-stack-01.webp"
        title="Most Used Technologies"
        listItems={["HTML, CSS, JavaScript, TypeScript, VS Code",
          "Backend: Node, bun, Express, Postman, Next.",
          "Frontend: Next.js, React, Vite, Tailwind.",
          "Databases: MongoDB, SQLite, Google Sheets.",
          "Version Control: Git, GitHub"]}
      />
      <Card
        image="tecleon.jpg"
        title="Extras"
        description="Technologies I used in university before LLMs (somewhat rusty with these)"
        listItems={["Python Tkinter, C PIC C Compiler, C++ Qt, MATLAB, SolidWorks, NX, AutoCAD, Robot Studio, LabVIEW, PLC (TIA Portal, CODESYS)",
          "English B2 CERF aprox"
        ]}
        reverse
      />
      <hr className="my-10" />

      {/* Skills Section */}
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <Card 
        image='171376323.jpg' 
        title='Services' 
        listItems={[
          "Real time notifications",
          "Forms",
          "Landing pages",
          "Payment gateways",
          "Chat bots",
          "LLM integrations",
          "Inventory management",
          "Web portfolios",
        ]}
      />
      <Card 
        image='171376323.jpg' 
        title='Soft Skills' 
        listItems={[
          "Continuous learning",
          "Critical and self-critical thinking",
          "Strict discipline",
          "Pedagogical emotional management",
        ]}
        reverse
      />
      <Card 
        image='171376323.jpg' 
        title='Other Skills' 
        listItems={[
          "Touch typing: 260 keystrokes per minute",
          "I won 2 math contests at state level"
        ]}
      />
    </div>
  );
}