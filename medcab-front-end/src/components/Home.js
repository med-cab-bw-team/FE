import React from 'react';
import {CarouselImg} from "./carousel"
import HeaderAuth from './HeaderAuth'
import styled from 'styled-components'
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import Card from './Card'
import img from '../images/loginPic.jpg'
import {connect} from 'react-redux'




const StyledRoot = styled.div`
  padding: 50px 12px;
`

const StyledContainer = styled.div`
  max-width: 550px;
  width:35%;
  margin: auto;
  color: black;
`

const HomeDiv = styled.div `
background-image: url(${img}) ; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment:fixed;
  margin-bottom: 45px;

`;
const Home = (props) => {

  

  const onCommentClick = () => alert('You clicked comments')
  const onLikesClick = () => alert('You clicked comments')
  const onViewsClick = () => alert('You clicked comments')

  const buttons = [
    {
      label: (
        <>
          <FaCommentAlt /> 0 Comments
        </>
      ),
      onClick: onCommentClick,
    },
    {
      label: (
        <>
          <FaThumbsUp /> 242 Likes
        </>
      ),
      onClick: onLikesClick,
    },
    {
      label: (
        <>
          <FaRegEye /> 187288 Views
        </>
      ),
      onClick: onViewsClick,
    },
  ]


    return (
        <HomeDiv>
            <HeaderAuth/>
            <CarouselImg /> 
            <StyledRoot>
      <StyledContainer>
        {props.recommendations.map(recommendation => {
          console.log(recommendation.Strain);
          return(
          <Card
          title={recommendation.Strain}
          description={recommendation.Description}
          type={recommendation.Type}
          flavor={recommendation.Flavor}
          effects={recommendation.Effects}
          actions={buttons}
        />
        )})}
        <Card
          title=" Lambda Kush "
          description=" Lambda Kush is best known by developers and helps those who are seconds away of smashing through their computer screens. This strain has a potency level that will get you high as a kite. Beware that once you indulge in the strain you may not remember what you were coding.  ."
          actions={buttons}
        />
      </StyledContainer>
    </StyledRoot>
        </HomeDiv>
    )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    recommendations: state.recommendation.recommendations
  }
}

export default connect(mapStateToProps, {})(Home);