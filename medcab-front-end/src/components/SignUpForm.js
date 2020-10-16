// input for First name, last name, email, age ( can only sign up if 21 and older )

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from 'react-redux';
import { registrationStart, register } from '../actions/actions';

const SignUpForm = (props) => {
  // console.log(props);
  // const user = props;
  {
    /* -------- BUTTON STATE --------------- */
  }

  // const [buttonOn, setButtonOn] = useState(true);

  {
    /* -------- HANDLE CHANGE FUNCTION --------------- */
  }

  const handleChanges = (e) => {
    e.persist();
    props.registrationStart(e);
    console.log(props);
  };

  {
    /* -------- ON SUBMIT FUNCTION --------------- */
  }
  const onSubmitForm = (event) => {
    event.preventDefault();
    props.register({username: props.username, password: props.password, email: props.email});
  };
  console.log("signupfrom")

  return (
    <div>
    
      <form onSubmit={onSubmitForm}>
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

        <label htmlFor="firstName">
          first name:
          <input
            name="firstName"
            id="firstname"
            type="text"
            value={props.firstName}
            placeholder="first name, please!"
            onChange={handleChanges}
          />
        </label>

        {/* -------- LAST NAME --------------- */}

        <label htmlFor="lastName">
          last name:
          <input
            name="lastName"
            id="lastname"
            type="text"
            value={props.lastName}
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
            name="password"
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
            checked={props.isOfAge}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <button type="submit" >
          submit:
        </button>
      </form>
    </div>
  );
};
    const mapStateToProps = (state) => {
      // console.log(state);
      return {
        username: state.registration.username,
        email: state.registration.email,
        password: state.registration.password,
        firstName: state.registration.firstName,
        lastName: state.registration.lastName,
        isOfAge: state.registration.isOfAge
      }
    }

export default connect(mapStateToProps, {registrationStart, register})(SignUpForm);
