import React from 'react'
import styled from 'styled-components'
import Body from '../assets/body-icon.svg';
import Mind from '../assets/mind-icon.svg';
import Wolrd from '../assets/world-icon.svg';


export default function Care() {
  return (
    <Container>
      <Wrapper>
        <CareSection>
          <img src={Body} alt="" />
          <div>Your body</div>
          <p>Nourish your body with the nutrients it needs. We won’t compromise on quality.</p>
        </CareSection>
        <CareSection>
          <img src={Mind} alt="" />
          <div>Your mind</div>
          <p>You only feel good when the whole of you feels good – and that includes your head.</p>
        </CareSection>
        <CareSection>
          <img src={Wolrd} alt="" />
          <div>Your world</div>
          <p>Always sustainably sourced, vegan and ethically packaged to protect our planet.</p>
        </CareSection>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  padding: 40px 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Wrapper = styled.div`
  min-width: 1200px;
  display: flex;
  justify-content: space-between;
`

const CareSection= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  max-width: 350px;

  img {
    width: 169px;
  }

  div {
    font-size: 40px;
    font-family: 'Ravioli', serif;
    color: #393753;
  }

  p {
    margin-top: 0;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: gray;
  }
`