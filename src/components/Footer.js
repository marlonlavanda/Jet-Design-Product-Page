import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/mini-logo.svg';
import { Facebook }  from '@styled-icons/boxicons-logos/Facebook'
import { Instagram }  from '@styled-icons/icomoon/Instagram'
import { Twitter }  from '@styled-icons/boxicons-logos/Twitter'
import { Youtube }  from '@styled-icons/boxicons-logos/Youtube'

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
            <h4>COLLECTIONS</h4>
            <li>Supplements</li>
            <li>Beauty & Toiletries</li>
            <li>Dietary</li>
            <li>Food & Drinks</li>
          </ul>
          </SectionsContainer>
          <SectionsContainer>
          <ul>
            <h4>company</h4>
            <li>About Us</li>
            <li>Why Refill</li>
            <li>Sustainability</li>
          </ul>
          </SectionsContainer>
          <SectionsContainer>
          <ul>
            <h4>questions</h4>
            <li>Consultant</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
          </SectionsContainer>
          <SectionsContainer>
          <ul>
            <h4>nutrify hub</h4>
            <li>Health & Wellbeing</li>
            <li>Recipes</li>
          </ul>
          </SectionsContainer>
        </TopRow>
        <BottomRow>
          <RightsContainer>
            <h5>Nutrify 2021</h5>
            <p>Privacy Policy | Terms of use</p>
          </RightsContainer>
          <SocialMedia>
            <h2>Follow us to keep up with</h2>
            <SocialMediaWrapper>
              <LogoCircle>
                <FacebookIcon></FacebookIcon>
              </LogoCircle>
              <LogoCircle>
                <InstagramIcon></InstagramIcon>
              </LogoCircle>
              <LogoCircle>
                <TwitterIcon></TwitterIcon>
              </LogoCircle>
              <LogoCircle>
                <YoutubeIcon></YoutubeIcon>
              </LogoCircle>
              <ButtonGroup>
                <LeftButton>
                  Join our newsletter
                </LeftButton>
                  <RightButton>
                    Sign Up
                  </RightButton>
              </ButtonGroup>
            </SocialMediaWrapper>
          </SocialMedia>
        </BottomRow>
      </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  width: 100vw;
  display: flex;
  min-height: 450px;
  flex: 1;
  justify-content: center;
  /* top: 246px; */
  left: 0;
  right: 0;
  background-color: #F6F6F2;
  `

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  padding: 20px 0;
  `

const TopRow = styled.div`
  display: flex;
  width: 100%;
  `
const LogoContainer = styled.div`
  min-width: 250px;
  margin-top: 20px;

    img {
      width: 100px;
    }
`

const SectionsContainer = styled.div`
width: 950px;
  ul {
    list-style-type: none;
    line-height: 28px;

      h4{
        font-weight: 500;
        letter-spacing: 2.8px;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: #044229;
        text-decoration: underline;
      }

      li {
        font-weight: 400;
        color: gray;
        letter-spacing: 2.2px;
        cursor: pointer;
      }
  }
`
const BottomRow = styled.div`
  display: flex;
  height: 100%;
`

const RightsContainer = styled.div`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: end;

  h5 {
    color: #044229;
    margin-bottom: 0;
  }

  p{
    font-size: 12px;
    color: gray;
    letter-spacing: 2.0px;
  }

`
const SocialMedia = styled.div`
  width: 950px;
  h2 {
    font-weight: 500;
    color: #044229;
    text-transform: uppercase;
    letter-spacing: 2.8px;
  }
`

const SocialMediaWrapper = styled.div`
  display: flex;
`
const LogoCircle = styled.div`
  width: 50px;
  height: 50px;
  border: solid 1px #044229;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`
const FacebookIcon = styled(Facebook)`
  color: #044229;
  width: 26px;
  cursor: pointer;
`

const InstagramIcon = styled(Instagram)`
  color: #044229;
  width: 26px;
  cursor: pointer;
`

const TwitterIcon = styled(Twitter)`
  color: #044229;
  width: 26px;
  cursor: pointer;
`

const YoutubeIcon = styled(Youtube)`
  color: #044229;
  width: 26px;
  cursor: pointer;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const LeftButton = styled.div`
  border: solid 1px #044229;
  border-radius: 50%;
  height: 40px;
  width: 200px;
  color: #044229;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  cursor: pointer;
  margin: 8px;
  font-size: 14px;
  letter-spacing: 2.2px;
`
const RightButton = styled(LeftButton)`
  background-color: #044229;
  width: 125px;
  color: white;
`