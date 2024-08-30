import SignUpPage from "./pages/SignUpPage";
import "./App.css";
import { useState } from "react";

//import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [theme, setTheme] = useState("");

  return (
    <div data-theme={theme}>
      <button
        onClick={() =>
          setTheme((currentTheme) => (currentTheme === "dark" ? " " : "dark"))
        }
      >
        Toggle Mode
      </button>
      <br></br>

      <SignUpPage />
    </div>
  );
};

export default App;
