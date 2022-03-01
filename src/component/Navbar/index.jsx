import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [ theme, setTheme ] = useState(("theme" in localStorage) ? localStorage.theme : "dark");

    useEffect(() => {
        if (!("theme" in localStorage)) {
            localStorage.theme = theme;
            document.documentElement.classList.add("dark");
        }
        else {
            if (localStorage.theme === "dark") {
                document.documentElement.classList.add("dark");
            }
            else {
                document.documentElement.classList.remove("dark");
            }
        }

    }, [theme])

    const toggleTheme = () => {
        if (theme === "dark") {
            localStorage.theme = "light";
            setTheme("light");
        }
        else {
            localStorage.theme = "dark";
            setTheme("dark");
        }
    }

    return (
        <div className="relative bottom-0 flex justify-center dark:text-white z-10">
            {/* <div className="fixed bottom-8 rounded-full flex justify-center items-center backdrop-blur w-16 h-16 bg-slate-200/30 border border-slate-900/20">
                <FontAwesomeIcon icon={faBars} />
            </div> */}
            <div className="fixed bottom-8 rounded-lg flex gap-8 px-8 items-center backdrop-blur h-16 font-semibold text-lg bg-slate-200/60 border border-slate-900/10 dark:bg-neutral-900/70">
                <a className="hover:text-orange-500" href="#home">Home</a>
                <a className="hover:text-orange-500" href="#workreel">Work Reel</a>
                <a className="hover:text-orange-500" href="#contact">Contact</a>
                <button onClick={toggleTheme} className="font-semibold flex items-center gap-1 hover:text-orange-500">
                    <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
                    {theme === "dark" ? "Light" : "Dark"}
                </button>
            </div>
        </div>
    );
}

export default Navbar;