import { Link } from "react-router-dom"
import "../App.css"

export const Navbar = () => {

  const nav = [
    { title: "Home", to: "/"},
    { title: "Employee List", to: "/employees"},
    { title: "Admin", to: "/admin"},
    { title: "Login", to: "/login"},

  ]
  return (
    <div className="navbar">
     
      {nav.map((el, i) => 
        <Link className="LinkBtn" key={i} to={el.to} > {el.title} </Link>
      )}

    </div>
  );
};
