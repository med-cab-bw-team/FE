// input for First name, last name, email, age ( can only sign up if 21 and older )

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";
import { registrationStart, register } from "../actions/actions";

const StyledH1 = styled.h1`
  border-bottom: 3px solid #029760;
  width: 225px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const ButtonStyling = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  color: white;
  background-color: #009760;
  padding-top: 2%;
padding-bottom: 2%;
padding-right:5%;
padding-left:5%;
&:hover{
  border: 1px solid #009760;
  background-color: white;
  color:green;
  font-size: 1rem;
  font-weight: bold;
`;

const StyledForm = styled.div`
  display: flex;
  border: 1px solid #009760;
  border-radius: 8px;
  flex-direction: column;
  background: #83cf5b;
  width: 500px;
  margin: 0 auto;
  padding-top: 20px;
  justify-content: space-around;
  margin-bottom: 30px;
  img {
    padding: 2%;

    width: 50%;
    height: auto;
    max-width: 25px;
    border-radius: 25px;
  }
`;

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
  console.log("signupfrom");

  return (
    <div>
      <br></br>
      <StyledH1>registration</StyledH1>
      <StyledForm>
        <form onSubmit={onSubmitForm}>
          {/* -------- USERNAME --------------- */}
          <label htmlFor="username">
            username: {""}
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
          <br></br>

          {/* -------- FIRST NAME --------------- */}

          <label htmlFor="firstname">
            last name: {""}
            <input
              name="firstname"
              id="firstname"
              type="text"
              value=""
              placeholder="first name, please!"
              onChange={handleChanges}
            />
          </label>
          <br></br>
          <br></br>
          {/* -------- LAST NAME --------------- */}

          <label htmlFor="lastname">
            last name: {""}
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
          <br></br>
          {/* -------- EMAIL --------------- */}
          <label htmlFor="email">
            e-mail: {""}
            <input
              name="email"
              id="email"
              type="email"
              value={props.email}
              placeholder="email here, please."
              onChange={handleChanges}
            />
          </label>
          <br></br>
          <br></br>
          {/* -------- PASSWORD --------------- */}
          <label htmlFor="password">
            password: {""}
            <input
              username="password"
              id="password"
              type="text"
              value={props.password}
              placeholder="please enter a password."
              onChange={handleChanges}
            />
          </label>
          <br></br>
          <img src="https://webstockreview.net/images/marijuana-clipart-pdf-9.png" />
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
          <img src="https://webstockreview.net/images/marijuana-clipart-pdf-9.png" />
          <br></br>
          <br></br>
          <ButtonStyling type="submit" disabled={buttonOn}>
            submit:
          </ButtonStyling>
        </form>
        <br></br>
      </StyledForm>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    username: state.username,
    email: state.email,
    password: state.password,
  };
};

export default connect(mapStateToProps, { registrationStart, register })(
  SignUpForm
);
