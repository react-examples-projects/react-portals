import "./App.scss";
import Modal from "./portals/Modal";
import { useState } from "react";
import { getCountries } from "./helpers/requests";
import { useQuery } from "react-query";

function App() {
  const query = useQuery("countries", getCountries);
  const [isOpen, setOpen] = useState(true);
  const toggler = () => setOpen(!isOpen);

  return (
    <>
      <button className="button" onClick={toggler}>
        Mostar modal
      </button>

      <Modal {...{ isOpen, toggler, ...query }} />
    </>
  );
}

export default App;
