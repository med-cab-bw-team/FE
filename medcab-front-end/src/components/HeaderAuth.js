import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 2px solid rgba(0, 0, 0, 0.0975);
  margin: 0%;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
`;

const NavHeader = styled.div`
padding-left: 2.5%;
display: flex;
flex-direction: row;
width: 50%;

text-align:left;
a{
  font-size: 2rem;
  font-weight: bold;
text-decoration:none;
color: black;
margin-top:25px;
}

 
 img{
  max-height: 100px;
   padding: 2%;
   width:50%;
   max-width: 100px;
   border-radius: 25px;
 }
`;

const NavRight = styled.a`
width:22.5%;
margin-right: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${'' /* border: 3px solid green; */}
  a{
    border: 1px solid black;
    border-radius: 10px;
    text-decoration: none;
    color:white;
    background-color: #009760;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    padding-right:5%;
    padding-left:5%;
    &:hover{
      border: 1px solid #009760;
      background-color: white;
      color:green;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;



function HeaderAuth() {
  return (
    <Nav>
   
      <NavHeader>
         <img src="https://cdn.pixabay.com/photo/2017/04/30/19/42/cannabis-2273795_1280.png"/>
        <a  href="/" > The MedCab </a>
      </NavHeader>
 
     
          <NavRight>
           <a href="/weed4me"> Weed4me </a> 
           <a href="/update"> Update </a> 
          </NavRight>
    </Nav>
  );
}
 
export default HeaderAuth;