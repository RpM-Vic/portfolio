

interface IButtonGithub {
  link: string;
}

export const ButtonDemo = ({ link }: IButtonGithub) => {
  return (
    <button
      className="
      m-4 max-w-96
      group relative
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
    >
      <a
        href={link}
        className="flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className="
            absolute inset-0 
            bg-gradient-to-r 
            from-purple-600 
            to-blue-500
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        ></span>
        <span className="relative z-10 flex items-center">
          <span className="ml-2">Ver demo online</span>
        </span>
      </a>
    </button>
  );
};
