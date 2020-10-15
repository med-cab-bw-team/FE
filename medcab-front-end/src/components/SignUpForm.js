// input for First name, last name, email, age ( can only sign up if 21 and older )

import React from "react";

const SignUpForm = () => {
  
    return (
    <div>
      <form onSubmit="">
        {/* -------- USERNAME --------------- */}
        <label htmlFor="username">
          username:
          <input
            name="username"
            id="username"
            type="text"
            value=""
            placeholder="username, please!"
            onChange=""
            data-cy=""
          />
        </label>
        <br></br>

        {/* -------- FIRST NAME --------------- */}

        <label htmlFor="firstname">
          last name:
          <input
            name="firstname"
            id="firstname"
            type="text"
            value=""
            placeholder="first name, please!"
            onChange=""
            data-cy=""
          />
        </label>

        {/* -------- LAST NAME --------------- */}

        <label htmlFor="lastname">
          last name:
          <input
            name="lastname"
            id="lastname"
            type="text"
            value=""
            placeholder="last name, please!"
            onChange=""
            data-cy=""
          />
        </label>

        <br></br>
        {/* -------- EMAIL --------------- */}
        <label htmlFor="email">
          e-mail:
          <input
            name="email"
            id="email"
            type="email"
            value=""
            placeholder="email here, please."
            onChange=""
            data-cy="email"
          />
        </label>

        {/* -------- PASSWORD --------------- */}
        <label htmlFor="password">
          password:
          <input
            username="password"
            id="password"
            type="text"
            value=""
            placeholder="please enter a password."
            onChange=""
            data-cy="password"
          />
        </label>

        <label htmlFor="terms" className="terms">
          21 or older? {""}
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked=""
            onChange=""
          />
        </label>
        <br></br>
        <button type="submit" disabled="">
          submit:
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
