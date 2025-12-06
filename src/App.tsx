import { useEffect, useRef, useState } from "react";
import { AppEnglish } from "./AppEnglish";
import { AppSpanish } from "./AppSpanish";
import { animate, createScope, createSpring, Scope } from "animejs";

function App() {
  const [userLanguage, setUserLanguage] = useState<string>(navigator.language.split('-')[0]);
  const root=useRef(null)
  const scope=useRef<Scope>(null)

  useEffect(() => {
  
    scope.current = createScope({ root }).add( () => {
    
      // Created a bounce animation loop
      animate('img', {
        scale: [
          { to: 1.25, ease: 'inOut(3)', duration: 600 },
          { to: 1, ease: createSpring({ stiffness: 300 }) }
        ],
        loop: true,
        loopDelay: 250,
      });
            
    });
    
      return () => scope.current?.revert()
    

  }, []);
  
  return (
    <div ref={root}>
      <button
        className="
          absolute top-4 right-4
          group
          overflow-hidden
          rounded-lg 
          bg-gray-500 
          px-6 py-3
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:bg-gray-900
          hover:shadow-xl
          hover:-translate-y-1
          active:translate-y-0
          active:shadow-md
        "
        onClick={() => {
          setUserLanguage(prev => prev === "en" ? "es" : "en");
        }}
      >
        <span
          className="
            absolute inset-0 
            rounded-lg 
            bg-gradient-to-r 
            from-purple-600 
            to-blue-500
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        ></span>
        <span className="relative z-10">
          {userLanguage == "en" ? "Versión en Español" : "English version"}
        </span>
      </button>
      
      {userLanguage === 'es' ? <AppSpanish /> : <AppEnglish />}
    </div>
  );
}

export default App;