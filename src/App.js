import "./styles.css";
import { useState } from "react";

const App = () => {
  const [error, setError] = useState(false);

  const setModal = () => {
    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  return (
    <div>
      {error && <div className="hola">HOLA</div>}
      <button
        onClick={() => {
          setError(true);
          setModal();
        }}
      >
        Hola
      </button>
    </div>
  );
};

export default App;

/* 2 veces abajo */
