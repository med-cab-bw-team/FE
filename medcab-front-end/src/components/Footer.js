import React from 'react';
import styled from 'styled-components'
import {useHistory} from 'react-router-dom';

const Foot = styled.div `
    color: red;
    
    position: fixed; 
            padding: 10px 10px 0px 10px; 
            bottom: 0; 
            width: 100%; 
            height: 40px;
            background: rgb(0, 151, 96, .75);
`

export const Footer = () => {
    const history = useHistory();

    const handleChanges = (e) => {
        e.persist();
        window.localStorage.clear(); 
        history.push('/')
        
      };


    return(
        <Foot>
        <button onClick={handleChanges}> Sign out </button>
         © Weed Weed Weed 2020
        </Foot>
    )
}
