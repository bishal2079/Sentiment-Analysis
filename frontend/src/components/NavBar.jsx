import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar bg-blue-300">
      <div class="flex justify-between item-center  ">
        <div className="flex-1"></div>
        <Link to="/"
          className="btn btn-ghost normal-case text-xl"
          
        >
          Home
        </Link>
        
        <Link to="/About" className="btn btn-ghost normal-case text-xl">About</Link>
        <Link to="/Contact" className="btn btn-ghost normal-case text-xl">Contact</Link>
      </div>
      
    </nav>
  );
}
