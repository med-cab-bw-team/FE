import React from "react";

const LoginForm = () => {





  
  {
    /* -------- BUTTON STATE --------------- */
  }

  const [buttonOn, setButtonOn] = useState(true);

  {
    /* -------- HANDLE CHANGE FUNCTION --------------- */
  }

  const handleChanges = (e) => {
    e.persist();
  };

  {
    /* -------- ON SUBMIT FUNCTION --------------- */
  }
  const onSubmitForm = (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
      <form onSubmit={handleChanges}>
        {/* -------- USERNAME --------------- */}
        <label htmlFor="username">
          username:
          <input
            name="username"
            id="username"
            type="text"
            value=""
            placeholder="username, please!"
            onChange={handleChanges}
          />
        </label>
        <br></br>

        {/* -------- PASSWORD --------------- */}
        <label htmlFor="password">
          password:
          <input
            username="password"
            id="password"
            type="text"
            value=""
            placeholder="please enter a password."
            onChange={handleChanges}
          />
        </label>

        <br></br>

        <button type="submit" disabled={buttonOn}>
          submit:
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
