import React from 'react'
import styled from 'styled-components'
import Boottle from '../assets/bottle.png';

function Support() {
  return (
    <Container>
      <LeftSide>
          <ProductWrapper>
            <img src={Boottle} alt="" />
          </ProductWrapper>
        </LeftSide>
        <RightSide>
          <InfoWrapper>
            <Title>Recycle. Refill. Repeat.</Title>
            <Description>
              Pour your supplements from your compostable pouch into our beautiful eco-friendly glass bottles.
            </Description>
            <Subtitle>Need to purchase the bottle ?</Subtitle>
            <Button>
              Buy with starter refilable glass bottle
            </Button>
            <Button>
              Buy replacement glass bottle
            </Button>
          </InfoWrapper>
        </RightSide>
    </Container>
  )
}

export default Support

const Container = styled.div`
  height: calc(100vh - 246px);
  display: flex;
  justify-content: center;
`

const LeftSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/product-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`
const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #393753;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  img {
    height: 600px;
  }
`

const RightSide = styled.div`
  padding: 20px;
  width: 100%;
  background-color: #505171;
`
const InfoWrapper = styled.div`
width: 100%;
height: 100%;
background-color: #E6E6F0;

`

const Title = styled.span`
    font-family: 'Ravioli', serif;
    color: #505072;
    font-size: 92px;
    margin-left: 16px;
`

const Description = styled.p`
    margin-top: 20px;
    margin-bottom: 0;
    color: #505072;
    font-size: 24px;
    margin-left: 16px;

`

const Subtitle = styled.h1`
    font-family: 'Ravioli', serif;
    color: #505072;
  margin-left: 16px;

`

const Button = styled.div`
  border-radius: 50%;
  background-color: white;
  height: 30px;
  width: 300px;
  color: #393753;
  padding:  15px 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 100px;
  cursor: pointer;
  margin-bottom: 16px;
  margin-left: 16px;
  font-size: 14px;
  letter-spacing: 2.2px;
`