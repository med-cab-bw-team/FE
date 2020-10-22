import React, {useState} from 'react';
import {useHistory} from "react-router";
import styled from "styled-components";
import HeaderAuth from './HeaderAuth';
import {connect} from 'react-redux';


const RecStyled = styled.div `

 display: flex;
  border: 1px solid #009760;
  border-radius: 8px;
  flex-direction: column;
  background: rgb(0, 151, 96, .75);
  width: 50%;
  padding: 5%;
  padding-bottom: 10%;
  padding-top: 1%;
  
  margin: 0 auto;
  padding-top: 20px;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-top:50px;
  text-align: center;
  margin-top: 10%;


`;
const ButtonStyling = styled.button`
  font-size: 1rem;
  margin-top: 25px; 
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





 const UpdateForm = (props) => {
    const history = useHistory();


    const handleChanges = e => {
      
    };


    const handleSubmit = e => {
        e.preventDefault();
        
          /* setTimeout(()=>{
      history.push('/')
    },1500)  */
    }

    return(
        <div>
        <HeaderAuth/>
        <RecStyled>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Enter Current Email:
                <input
                name="email"
                id="email"
                type="email"
                 /* value={} */
                placeholder="*EMAIL REQUIRED*"
              
                />
            </label>

                <br></br>
                <br></br>
                <label htmlFor="password">
                Enter New Password:
                <input
                name="password"
                id="password"
                type="password"
                 /* value={} */
                placeholder="Password"
                onChange={handleChanges}
                />
            </label>
               

                <ButtonStyling type="submit" disabled="">
            submit {""}
          </ButtonStyling>



            </form>
        </RecStyled>
        </div>


    )


}
const mapStateToProps = (state) => {
  return {

  }
}

export default UpdateForm;

 /* export default connect(mapStateToProps, {})(UpdateForm); */