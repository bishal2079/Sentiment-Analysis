import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Copyright from "./copyright";
export default function Contact() {

    const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "light");
  };



    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
      }, [theme]);
    
    return (
       <div>
        <NavBar toggleTheme={toggleTheme} />
        <div >
            <h1 className="flex justify-center text-2xl font-bold mt-5 py-1 px-3">
            contact details 
            </h1>
            <div className="contact">
                This project was made by:
                <ul>
                    <li>
                        Bishal sharma 
                        
                    </li>
                    <li>
                        Yubraj Upadhya  
                    </li>
                    <li>
                       Parash Thapa 
                    </li>
                </ul>
            </div>
        </div>
        <Copyright></Copyright>
       </div>
    )
}