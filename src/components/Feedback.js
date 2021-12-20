import React from 'react'
import styled from 'styled-components'
import { Heart } from '@styled-icons/bootstrap/Heart'

function Feedback() {
  return (
    <Container>
      <div>Our customers say...</div>
      <FeedbackWrapper>
        <TopRow>
          <Left>
            <Rating>
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
            </Rating>
            <Title>I love this product!!!!</Title>
            <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and Read More
            </Description>
            <Date>12 September 2021</Date>
          </Left>
          <Right>
            <Rating>
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
            </Rating>
            <Title>I love this product!!!!</Title>
            <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and Read More
            </Description>
            <Date>12 September 2021</Date>
          </Right>
        </TopRow>
        <BottomRow>
        <LeftBottom>
            <Rating>
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
            </Rating>
            <Title>I love this product!!!!</Title>
            <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and Read More
            </Description>
            <Date>12 September 2021</Date>
          </LeftBottom>
          <RightBottom>
            <Rating>
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
            </Rating>
            <Title>I love this product!!!!</Title>
            <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and Read More
            </Description>
            <Date>12 September 2021</Date>
          </RightBottom>
        </BottomRow>
      </FeedbackWrapper>
    </Container>
  )
}

export default Feedback

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: #E6E6F0;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    font-size: 84px;
    color: #393753;
    text-align: center;
  }
`
const FeedbackWrapper = styled.div`
  max-width: 1200px;
`

const TopRow = styled.div`
  display: flex;
`

const BottomRow = styled(TopRow)`

`

const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 382px;
  border-right: solid 1px white;
  border-bottom: solid 1px white;

`

const LeftBottom = styled(Left)`
  border-bottom: none;

`

const Right = styled(Left)`
  border-right: none;
  align-items: start;
  padding-left: 20px;

`
const RightBottom = styled(Right)`
  border-bottom: none;

`

const Title = styled.h2`
  font-size: 18px;
  `

const Description = styled.p`
  margin-bottom: 0;
  font-size: 16px;
  text-align: start;
`

const Date = styled.span`
  font-size: 12px;
  color: gray;
`

const Rating = styled.div`
 display: flex;
`

const HeartIcon = styled(Heart)`
  margin-top: 20px;
  color: #393753;
  width: 20px;
  margin-right:8px;
  cursor: pointer;
`