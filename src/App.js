import "./App.scss";
import Modal from "./portals/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(true);
  const toggler = () => setOpen(!isOpen);

  return (
    <>
      <button className="button" onClick={toggler}>
        Mostar modal
      </button>

      <Modal {...{ isOpen, toggler }} />
    </>
  );
}

export default App;
