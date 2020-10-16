// input for First name, last name, email, age ( can only sign up if 21 and older )

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from 'react-redux';
import { registrationStart, register } from '../actions/actions';

const SignUpForm = (props) => {
  {
    /* -------- BUTTON STATE --------------- */
  }

  const [buttonOn, setButtonOn] = useState(true);

  {
    /* -------- HANDLE CHANGE FUNCTION --------------- */
  }

  const handleChanges = (e) => {
    e.persist();
    props.registrationStart(e);
  };

  {
    /* -------- ON SUBMIT FUNCTION --------------- */
  }
  const onSubmitForm = (event) => {
    event.preventDefault();
    props.register();
  };
  console.log("signupfrom")

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
            value={props.username}
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
            value={props.email}
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
            value={props.password}
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
    const mapStateToProps = (state) => {
      return {
        username: state.username,
        email: state.email,
        password: state.password
      }
    }

export default connect(mapStateToProps, {registrationStart, register})(SignUpForm);
