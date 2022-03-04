import { Navbar, Footer } from "../../component";
import { Landing, WorkReel, Contact } from "../../modules";
import { useEffect, useState } from "react";

const Home = () => {

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
        <div>
            <Navbar toggle={toggleTheme} mode={theme}/>
            <Landing />
            <WorkReel />
            <Contact />
            <Footer mode={theme} />
        </div>
    )
}

export default Home;