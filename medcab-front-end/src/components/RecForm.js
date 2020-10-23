//3 text inputs for strings
// Symptom, strain-(sativa, indica, hybrid), & flavor
import React, {useState} from 'react';
import {useHistory} from "react-router";
import styled from "styled-components";
import HeaderAuth from './HeaderAuth';
import {connect} from 'react-redux';

import {recommendStart, recommendation} from '../actions/actions';

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





 const RecForm = (props) => {
    const history = useHistory();

    const handleChanges = e => {
      props.recommendStart(e);
    };


    const handleSubmit = e => {
        e.preventDefault();
        props.recommendation('`I am feeling ${props.symptom}, I need ${props.strain}, and I prefer the flavor ${props.flavor}`');
         setTimeout(()=>{
          /* console.log(recommendation.dispatch) */
          console.log(props.recommendations)
    },1500)  
    
    }

    



    return(
        <div>
        <HeaderAuth/>
        <RecStyled>
            <form onSubmit={handleSubmit}>
                <label htmlFor= "Symptom">
                    Please describe your symptom: 
                    <input 
                    type ="text"
                    name="symptom"
                    placeholder = "Ex: backpain"
                    value = {props.symptom}
                    onChange = {handleChanges}
                    />
                </label>
                <br></br>
                <br></br>
                <label htmlFor= "flavor">
                    Choose a flavor: 
                    <input 
                    type ="text"
                    name="flavor"
                    placeholder = "Flavor?"
                    value = {props.flavor}
                    onChange = {handleChanges}
                    />
                </label>
                <br></br>
                <br></br>
                <label htmlFor= "strain">
                    Choose a Strain:
                   <select name='strain' id='strain' onChange = {handleChanges}> 
                       <option value="sativa"> Sativa </option>
                       <option value="hybrid"> Hybrid </option>
                       <option value="indica"> Indica </option>
                   </select>
                </label>
                <br></br>

                <ButtonStyling type="submit" disabled="">
            submit {""}
          </ButtonStyling>
            </form>
        </RecStyled>
       <div> SMOKE THiS: 
            {props.recommendations.map((data) => (
            <div> { data.Strain}</div>
          ))}
      </div>
        </div>


    )

}
const mapStateToProps = (state) => {
  return {
    symptom: state.recommendation.symptom,
    strain: state.recommendation.strain,
    flavor: state.recommendation.flavor,
    recommendations: state.recommendation.recommendations
  }
}

export default connect(mapStateToProps, {recommendStart, recommendation })(RecForm);