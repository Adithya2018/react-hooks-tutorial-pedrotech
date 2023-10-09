import { createContext, useState } from 'react';
import './App.css';
import ReducerTutorial from './ReducerTutorial';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App" id={theme}>
        <ReducerTutorial/>
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
