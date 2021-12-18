import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/mini-logo.svg';

function Footer() {
  return (
    <Container>
      <Wrapper>
        <TopRow>
          <LogoContainer>
            <img src={Logo} alt="Nutrify logo" />
          </LogoContainer>
          <SectionsContainer>
          <ul>
            <h5>COLLECTIONS</h5>
            <li>Supplements</li>
            <li>Beauty & Toiletries</li>
            <li>Dietary</li>
            <li>Food & Drinks</li>
          </ul>
          </SectionsContainer>
        </TopRow>
      </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  width: 100vw;
  display: flex;
  min-height: 300px;
  flex: 1;
  justify-content: center;
  position: fixed;
  top: 246px;
  left: 0;
  right: 0;
  background-color: #F6F6F2;
  `

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  padding: 0 20px;
`

const TopRow = styled.div`
  display: flex;
`
const LogoContainer = styled.div`
  width: 230px;
`

const SectionsContainer = styled.div`
/* background-color: red; */
ul {
  list-style-type: none;
  line-height: 24px;
  h5{
    font-weight: 400;
    letter-spacing: 2.2px;
    margin-bottom: 10px;
  }
  }

`