import React, { useState } from "react";

import { darkGrayBtnStyle, paraStyle } from "../styles/tailwindStyles";

const Home = ({ history }) => {
  const [value, setValue] = useState("");
  const [toast, setToast] = useState(false);
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (value !== "") {
      history.push(`/groups/${value}`);
    } else {
      setToast(true);
    }
  };

  return (
    <div className={`${paraStyle}`}>
      <p className="m-4 relative">
        Please enter a group ID here to join a group or create a new one:
      </p>
      <form action="" onSubmit={onFormSubmit}>
        <input
          autoFocus
          type="text"
          placeholder={
            toast ? "Text Field can't be empty" : "Enter group name or ID"
          }
          onFocus={() => setToast(false)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-gray-100 p-2 rounded"
        />
        <button type="submit" className={`${darkGrayBtnStyle}`}>
          Go
        </button>
      </form>
    </div>
  );
};

export default Home;
