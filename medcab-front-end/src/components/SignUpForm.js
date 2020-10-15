// input for First name, last name, email, age ( can only sign up if 21 and older )

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SignUpForm = () => {
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

        {/* -------- FIRST NAME --------------- */}

        <label htmlFor="firstname">
          last name:
          <input
            name="firstname"
            id="firstname"
            type="text"
            value=""
            placeholder="first name, please!"
            onChange={handleChanges}
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
            onChange={handleChanges}
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
            onChange={handleChanges}
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
            onChange={handleChanges}
          />
        </label>

        <label htmlFor="terms" className="terms">
          21 or older? {""}
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked=""
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

export default SignUpForm;
