import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/mini-logo-white.svg';
import Vegan from '../assets/vegan-icon.svg';
import Compositable from '../assets/compositable-icon.svg';
import AF from '../assets/af-icon.svg';
import Bowl from '../assets/bowl-icon.svg';

function Label() {
  return (
    <Container>
      <img src={Logo} alt="" />
      <LabelWrapper>
        <div>Bedtime Bliss</div>
        <p>
        Sleep. We just can’t get enough! If you wake in the morning feeling like you haven’t had a single wink, it’s time to invest in the quality of your sleep. Good quality sleep – and plenty of it – is essential for both our mental and physical wellbeing. And our mood of couse – as any sleep-deprived person can attest. Goodbye grumpy grouch. Hello brighter new day.
        </p>
        <p>
        Choose our eco refill option for Nutrify Bedtime Bliss Supplements and care for yourself while also caring for the environment.
        </p>
        <InstructionsContainer>
          <Instuction>
            <strong>Capsule Size</strong>
            <p>Size 00 23.3mm in length</p>
          </Instuction>
          <Instuction>
            <strong>No of Capsules/Pack</strong>
            <p>90 Capsules</p>
          </Instuction>
          <Instuction>
            <strong>Supply Length</strong>
            <p>3 Months</p>
          </Instuction>
          <LastInstuction>
            <strong>Dosage</strong>
            <p>1 Capsule a day. Preferably taken while you wind down in the evening</p>
          </LastInstuction>
        </InstructionsContainer>
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
                <img src={AF} alt="" />
                <p>Allergen Free</p>
              </Icon>
              <Icon>
                <img src={Bowl} alt="" />
                <p>100% Natural Excipients</p>
              </Icon>
        </IconsWrapper>
        <Details>
          <Ingredients>
            <strong>Ingredients</strong>
            <p>Vitamin B6, Chamomile Extract, 5-Hydroxytryptophan, Magnesium Citrate, Lemon Balm Extract, Lavender Extract, Pyridoxine HCl. Bulking Agents: TBC HMPC Capsule
            </p>
          </Ingredients>
          <Allergens>
            <strong>Capsule Size</strong>
            <p>There are no allergens in this product according to the UK Mandated Allergen Regulation. </p>
          </Allergens>
        </Details>
        <Cautions>
            <strong>Cautions and Warnings</strong>
            <p>If you are pregnant, breastfeeding, taking medication or due for surgery, please consult your healthcare practitioner before use. Not intended
            </p>
            <p>for use by persons under the age of 18 years old. Discontinue use and consult a doctor if adverse reactions occur. This product should not be 
            </p>
            <p>used as a substitute for a balanced and varied diet or a healthy lifestyle. This product is not intended to cure, prevent, diagnose or treat any 
            </p>
            <p>diseases. The ingredients in this product may vary slightly in colour and appearance but this will not affect the overall quality of the product. 
            </p>
            <p>Storage: Store in a cool, dark place out of direct sunlight. Do not store above 25°C. Store out of the immediate reach of children.
            </p>
        </Cautions>
      </LabelWrapper>
    </Container>
  )
}

export default Label

const Container = styled.div`
  width: 100vw;
  padding: 40px 0;
  background-color: #393753;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
      width: 100px;
    }
`

const LabelWrapper = styled.div`
  width: 1200px;
  max-width: 1200px;

  margin-top: 40px;
  padding: 20px 30px;
  background-color: #E6E6F0;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 84px;
    font-family: 'Ravioli', serif;
    color: #393753;
  }
  p {
    font-weight: 400;
    color: #393753;
    letter-spacing: 2.2px;
  }
`

const InstructionsContainer = styled.div`
  margin-top: 40px;
  border-top: solid 1px #393753;
  border-bottom: solid 1px #393753;

`

const Instuction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  border-right: solid 1px #393753;
  width: 100%;
  padding: 0 10px;
  strong {
    font-size: 18px;
    font-family: 'Rota';
  }
  p {
    font-weight: 400;
    color: #393753;
    font-size: 16px;
    font-family: 'Rota';
  }
`

const LastInstuction = styled(Instuction)`
  border-right: none;
`

const IconsWrapper = styled.div`
  display: flex;
  height: 150px;

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
    color: #393753;
    font-family: 'Rota';

    font-size: 14px;
  }
`
const Details = styled(InstructionsContainer)`
  margin-top: 0;

`
const Ingredients = styled(Instuction)`
  /* border-right: none; */
`
const Allergens = styled(LastInstuction)`
  /* border-right: none; */
`

const Cautions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  strong {
    margin-top: 20px;
    font-size: 18px;
    font-family: 'Rota';
  }

  p {
    font-weight: 400;
    color: #393753;
    font-size: 16px;
    text-align: center;
    font-family: 'Rota';
  }
`