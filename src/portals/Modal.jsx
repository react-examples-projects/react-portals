import { createPortal } from "react-dom";
import { BiArrowBack, BiX } from "react-icons/bi";

function Modal({ toggler }) {
  return (
    <div className="modal animate__animated animate__fadeInUp animate__fast">
      <div className="modal-header">
        <button className="button">
          <BiArrowBack style={{ fontSize: "1.5rem" }} />
        </button>

        <button className="button trans" onClick={toggler}>
          <BiX style={{ fontSize: "1.5rem" }} />
        </button>
      </div>

      <div className="modal-body">
        <h1 className="modal-title">Create a post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          temporibus quasi accusamus esse, iusto dignissimos ratione maxime
          pariatur blanditiis illum placeat itaque.
        </p>

        <form autoComplete="off">
          <div className="modal-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              className="modal-input"
              name="email"
              id="email"
              required
            />
          </div>
        </form>

        <div className="modal-buttons">
          <button className="button success">Continue</button>
          <button className="button trans">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default function Wrapper({ isOpen, toggler }) {
  if (isOpen) {
    return createPortal(
      <Modal toggler={toggler} />,
      document.getElementById("modals")
    );
  }

  return null;
}
