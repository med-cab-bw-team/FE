import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  border: 1px solid black;
  padding: 25px 12px 18px;
  background: linear-gradient(green);
  background: rgb(0, 151, 96, .85);
  color: black;
  border-radius: 25px;

  img{
      width: 100%;
      border-radius: 20px;
  }
`

const Title = styled.h2`
  font-weight: 300;
  color: black;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Date = styled.div`
  color: black;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

const Description = styled.p`
  color: black;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const Actions = styled.div`
  color: black;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`

const Action = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: green;
  }
`

const Card = ({
  title,
  description,
  comments,
  likes,
  views,
  actions,
}) => (
  <StyledContainer>
  <img src="https://cdn.pixabay.com/photo/2018/11/07/19/00/bud-3801028_1280.jpg"/>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Actions>
      {actions.map(({ label }) => (
        <Action>{label}</Action>
      ))}
    </Actions>
  </StyledContainer>
)

export default Card