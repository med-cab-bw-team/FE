import React, {useState} from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { loginStart, login } from '../actions/actions';
import {useHistory} from 'react-router-dom';
import { bindActionCreators } from "redux";
import {axiosWithAuth} from '../api/axiosWithAuth';
import Header from './Header'


const StyledH1 = styled.h1`
  border-bottom: 3px solid #029760;
  width: 150px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const ButtonStyling = styled.button`
  font-size: 1rem;
    ${'' /* border: 1px solid black;  */}
  border-radius: 35px;
  color: #009760;
  background-color: white;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-right:10%;
  padding-left:10%;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
  font-family: inherit;
  font-weight: 700;
&:hover{
  border: 1px solid #009760;
  background-color: white;
  color:green;
  box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
  transform: translate(0, -5px);
`;

const StyledForm = styled.div`
  display: flex;
  border: 1px solid #009760;
  border-radius: 8px;
  flex-direction: column;
  background: rgb(0, 151, 96, .55);
  width: 50%;
  padding-bottom: 10%;
  padding-top: 1%;
  margin: 0 auto;
  padding-top: 20px;
  justify-content: space-around;
  margin-bottom: 30px;
  padding-top:50px;

  img {
    padding: 2%;
    width: 50%;
    height: auto;
    max-width: 25px;
    border-radius: 25px;
  }
`;

const LoginForm = (props) => {
  const history = useHistory();
  const loginState = useState({
        username:"",
        password:""
    });

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
    setTimeout(()=>{
      history.push('/weed4me')
    },1500)
  };

  return (
    
    <div>
    <Header/>
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
              type="password"
              value={props.password}
              placeholder="please enter a password."
              onChange={handleChanges}
            />
          </label>

          <br></br>
          <img src="https://webstockreview.net/images/marijuana-clipart-pdf-9.png" />
          <ButtonStyling type="submit" disabled="">
            submit {""}
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
