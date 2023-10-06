import githubLogo from '../assets/images/github.png'
export function Footer() {
  return (
    <footer className="flex items-center justify-center bg-[#525252]  text-white fixed bottom-0 w-full text-[7vw] sm:text-3xl py-2">
      Developed By{" "}
      <a
        className="hover:text-orange-300 hover:underline mx-2"
        target="blank"
        href="https://github.com/Shehroze1995"
      >
         Shehroze
      </a> <a href="https://github.com/Shehroze1995" target='blank'><img className='w-8 fill-current bg-white rounded-full hover:rotate-360 transition duration-500' src={githubLogo}/></a>
    </footer>
  );
}
