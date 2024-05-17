//Use Context Hook
/* import { useContext, useState } from "react";
import "./App.css";

const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={"App ${theme}"}>
        <MyComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  const { theme, toogleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toogleTheme}>Toggle Theme</button>
    </div>
  );
} */

// Use Effect Hook
import { useState, useEffect } from "react";
import "./App.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "You clicked ${count} times";
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times{" "}
      </button>
    </div>
  );
}

//Use State Hook
/* import { useState } from "react";
import "./App.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
 */
