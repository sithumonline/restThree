import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [theme, setTheme] = useState(("theme" in localStorage) ? localStorage.theme : "dark");

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
        <div className="relative flex justify-center dark:text-white z-10">
            {/* <div className="fixed bottom-8 rounded-full flex justify-center items-center backdrop-blur w-16 h-16 bg-slate-200/30 border border-slate-900/20">
                <FontAwesomeIcon icon={faBars} />
            </div> */}
            <div className="fixed top-0 w-full flex justify-between gap-8 px-8 sm:px-16 items-center backdrop-blur-lg h-16 font-semibold text-md bg-slate-200/70 border border-slate-900/10 dark:bg-neutral-900/80">
                <div className="flex gap-10">
                    <a className="hover:text-orange-500" href="#home">Home</a>
                    <a className="hover:text-orange-500" href="#workreel">Work</a>
                    <a className="hover:text-orange-500" href="#contact">Contact</a>
                </div>
                <div>
                <button onClick={toggleTheme} className="font-semibold flex items-center gap-1 hover:text-orange-500">
                    <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} />
                    <span className="hidden sm:block">{theme === "dark" ? "Dark" : "Light"}</span>
                </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;