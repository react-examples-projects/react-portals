import { createPortal } from "react-dom";
import { BiArrowBack, BiX } from "react-icons/bi";
import { useState } from "react";

function Modal({ toggler, isLoading, isError, data }) {
  const [form, setForm] = useState({
    email: "",
    country: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((d) => ({ ...d, [name]: value }));
  };

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
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>

          <div className="modal-group">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              className="modal-input"
              value={form.country}
              onChange={handleChange}
              disabled={isLoading}
              required
            >
              {isLoading ? (
                <option>Loading...</option>
              ) : (
                data.map((country) => (
                  <option value={country.alpha2Code} key={country.alpha2Code}>
                    {country.name}
                  </option>
                ))
              )}
            </select>
          </div>
        </form>

        <div className="modal-buttons">
          <button className="button success" disabled={isLoading}>
            Continue
          </button>
          <button className="button trans">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default function Wrapper({ isOpen, toggler, ...args }) {
  if (isOpen) {
    return createPortal(
      <Modal toggler={toggler} {...args} />,
      document.getElementById("modals")
    );
  }

  return null;
}
