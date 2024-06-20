import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex flex-col items-center justify-center max-w-full md:max-w-6xl px-2 md:px-6 py-12 mx-auto md:flex-row rounded-md">
      
      <nav className="z-10">
        <ul className="flex flex-row items-center px-6 py-3 text-indigo-300 bg-indigo-900 rounded-full pl-1">
          <li className="pr-8">            
            <Link to="/#" className="bg-slate-100 px-10 py-3 text-indigo-800 rounded-full">Blog</Link>
          </li>
          <li className="pr-8">
            <a href="#">
              LinkedIn
            </a>
          </li>
          <li className="pr-8">
            <a href="" target="_blank">
              Twitter
            </a>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}
