import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { loginStart, login } from '../actions/actions';

const StyledH1 = styled.h1`
  border-bottom: 3px solid #029760;
  width: 150px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

// const NavRight = styled.a`
// width:22.5%;
// margin-right: 5%;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   ${'' /* border: 3px solid green; */}
//   a{
//     border: 1px solid black;
//     border-radius: 10px;
//     text-decoration: none;
//     border-radius: 10px;
//     background-color: #009760;
//     padding-top: 2.5%;
//     padding-bottom: 2.5%;
//     padding-right:5%;
//     padding-left:5%;
//     &:hover{
//       border: 1px solid #009760;
//       background-color: white;
//       color:green;
//       font-size: 1.2rem;
//       font-weight: bold;
//     }
//   }
// `;

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

const LoginForm = (props) => {
  {
    /* -------- BUTTON STATE --------------- */
  }

  // const [buttonOn, setButtonOn] = useState(true);

  {
    /* -------- HANDLE CHANGE FUNCTION --------------- */
  }

  const handleChanges = (e) => {
    e.persist();
    props.loginStart(e);
  };

  {
    /* -------- ON SUBMIT FUNCTION --------------- */
  }
  const onSubmitForm = (event) => {
    event.preventDefault();
    props.login({username: props.username, password: props.password});
  };

  return (
    <div>
      <br></br>
      <StyledH1>login</StyledH1>
      <StyledForm>
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
          <br></br>

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

          <br></br>
          <img src="https://webstockreview.net/images/marijuana-clipart-pdf-9.png" />
          <ButtonStyling type="submit" disabled="">
            submit: {""}
          </ButtonStyling>
          <img src="https://webstockreview.net/images/marijuana-clipart-pdf-9.png" />
        </form>
        <br></br>
      </StyledForm>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    password: state.login.password,
    isLoggedIn: state.login.isLoggedIn
  }
}

export default connect(mapStateToProps, {loginStart, login})(LoginForm);
