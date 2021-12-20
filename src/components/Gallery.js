import React from 'react'
import styled from 'styled-components'
import { Heart } from '@styled-icons/bootstrap/Heart'
import Vegan from '../assets/vegan-icon.svg';
import Compositable from '../assets/compositable-icon.svg';
import Additive from '../assets/additive-icon.svg';
import UK from '../assets/uk-icon.svg';
import ProductFront from '../assets/product-front.png';
import ProductBack from '../assets/product-back.png';

import Parallax from 'react-rellax'


function Gallery() {
  return (
    <div>
      <Container>
        <LeftSide>
          <ProductWrapper>
            <img src={ProductFront} alt="" />
          </ProductWrapper>
        </LeftSide>
        <RightSide>
          <Parallax speed={ 10 }>
            <TitleCWrapper>
              <p>Bed time Bliss</p>
              <div>
                <HeartIcon />
                <HeartIcon />
                <HeartIcon />
                <HeartIcon />
                <HeartIcon />
                <a href='#ad'>8 Reviews</a>
              </div>
            </TitleCWrapper>
            <span>Refill supplements for your 50ml eco glass jar</span>
            <p>
            Bedtime Bliss is a unique blend of 5-HTP, Magnesium and Vitamin B6, teamed with carefully selected calming botanicals for brighter waking days and deeper-sleeping nights. <a href="#sd">Read more</a>
            </p>
            <TableDesc>
              <Header>
                <p>Food supplement</p>
                <span>+ 5-HTP  + Magnesium  + Chamomile  + Lavender</span>
                <a href="#a">View all ingredients</a>
              </Header>
              <Cotent>
                <LeftContent>90 capsules</LeftContent>
                <RightContent>3 months supply</RightContent>
              </Cotent>
            </TableDesc>
            <ButtonGroup>
              <Button>
                Buy once / <strong> £12.99</strong>
              </Button>
              <Button>
                Subscribe / <strong> £10.80</strong>
              </Button>
              <div>
                <p>
                  <b>Subscribe and Save</b>
                </p>
                <p> 10% saving. Flexible deliveries. Cancel any time.</p>
              </div>
            </ButtonGroup>
            <IconsWrapper>
              <Icon>
                <img src={Vegan} alt="" />
                <p>Vegan</p>
              </Icon>
              <Icon>
                <img src={Compositable} alt="" />
                <p>Compositable Pouch</p>
              </Icon>
              <Icon>
                <img src={Additive} alt="" />
                <p>Additive Free</p>
              </Icon>
              <Icon>
                <img src={UK} alt="" />
                <p>UK Made</p>
              </Icon>
            </IconsWrapper>
          </Parallax>
        </RightSide>
      </Container>
      <Container2>
        <LeftSide2>
          <ProductWrapper>
            <img src={ProductBack} alt="" />
          </ProductWrapper>
        </LeftSide2>
          <RightSide2>
          </RightSide2>
      </Container2>
      <Container3>
        <LeftSide3>
        </LeftSide3>
        <RightSide3></RightSide3>
      </Container3>
      <Container4>
        <LeftSide4>
        </LeftSide4>
        <RightSide4></RightSide4>
      </Container4>
    </div>
  )
}

export default Gallery

const Container = styled.div`
  height: calc(100vh - 246px);
  display: flex;
  justify-content: center;
`
const Container2 = styled(Container)`
`
const Container3 = styled.div`
  height: calc(100vh - 246px);
  display: flex;
  justify-content: center;
`
const Container4 = styled(Container3)`
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
const LeftSide2 = styled(LeftSide)`
`
const LeftSide3 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/product-detail.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`
const LeftSide4 = styled(LeftSide3)`
  background-image: url('/images/product-mkt.jpg');
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
  width: 100%;
  padding: 20px;
  background-color: #393753;

  span {
    color: #A0A5BF;
    font-size: 18px;
  }
  p {
    color: white;
    font-size: 24px;
    letter-spacing: 2.4px;
    a {
      color: white;
    }
  }

`
const RightSide2 = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #393753;
`

const RightSide3 = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #393753;
`
const RightSide4 = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #393753;
`

const TitleCWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Ravioli', serif;
    color: white;
    font-size: 60px;
  }
  div {
    margin-left: 16px;
    height: 91px;
    display: flex;
    align-items: center;

    a {
      margin-top: 20px;
      color: white;
    }
  }
`

const HeartIcon = styled(Heart)`
  margin-top: 20px;
  color: #fff;
  width: 20px;
  margin-right:8px;
  cursor: pointer;
`
const TableDesc = styled.div`
  text-transform: uppercase;
`
const Header = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #505072;
  p {
    margin-top: 0;
    text-align: center;
    font-size: 18px;
  }
  a {
    margin-top: 12px;
    color: white;
    text-transform: none;
    font-size: 18px;
  }

`

const Cotent = styled.div`
  background-color: white;
  display: flex;
  height: 75px;
`

const LeftContent = styled.div`
  width: 100%;
  border-right: solid 1px #505072;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #393753;
  letter-spacing: 2.2px;
`

const RightContent = styled(LeftContent)`
  border-right: none;
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 20px;

  div {
    width: 200px;
    p {
      margin-top: 2px;
      margin-bottom: 0;
      color: white;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
    }
  }
`

const Button = styled.div`
  border-radius: 50%;
  background-color: white;
  height: 60px;
  width: 200px;
  color: #393753;
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

const IconsWrapper = styled.div`
  display: flex;
`

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  img {
    height: 32px;
    /* z-index: 1; */
  }
  p {
    color: white;
    font-size: 14px;
  }
`