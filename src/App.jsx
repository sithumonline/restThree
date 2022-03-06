import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, One } from "./pages";
import { Navbar, Footer } from "./component";

function App() {
  const [theme, setTheme] = useState(
    "theme" in localStorage ? localStorage.theme : "dark"
  );

  useEffect(() => {
    if (!("theme" in localStorage)) {
      localStorage.theme = theme;
      document.documentElement.classList.add("dark");
    } else {
      if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  return (
    <BrowserRouter>
      <div className="pt-20">
        <Navbar toggle={toggleTheme} mode={theme} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/one" component={One} exact />
        </Switch>
        <Footer mode={theme} />
      </div>
    </BrowserRouter>
  );
}

export default App;
