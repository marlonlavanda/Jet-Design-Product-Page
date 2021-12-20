import React from 'react'
import styled from 'styled-components'
import { User } from '@styled-icons/boxicons-regular/User'
import { ShoppingBag } from '@styled-icons/material-outlined/ShoppingBag';
import Logo from '../assets/nutrify-logo.svg';

function Header() {
  const links = ["SHOP", "WHY REFIL", "WHY NUTRIFY"]

  return (
    <Container>
      <Nav>
        <Menu>
          { links && links.map((link, index) => (
              <a key={index} href="#ad">{link} </a>
            ))
          }
        </Menu>
        <LogoContainer>
          <img src={Logo} alt="Nutrify logo" />
        </LogoContainer>
        <RightMenu>
          <LeftButton>
              start consultation
          </LeftButton>
          <UserIcon></UserIcon>
          <Bag />
        </RightMenu>
      </Nav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  width: 100vw;
  display: flex;
  height: 176px;
  justify-content: center;
  top: 70px;
  left: 0;
  right: 0;
  `
const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  padding: 0 20px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    color: #333333;
  }
`

const LogoContainer = styled.div`
  width: 230px;
  img {
    width: inherit;
  }
`

const Menu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    text-decoration: none;
    padding: 0 10px;
    flex-wrap: nowrap;
    letter-spacing: 2.2px;
  }
`

const RightMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`
const LeftButton = styled.div`
  background-color: #F6F6F2;
  height: 40px;
  width: 256px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 2.2px;
  margin: 8px;
  margin-right: 32px;
`
const UserIcon = styled(User)`
  color: #333;
  width: 24px;
  margin-right: 16px;
  cursor: pointer;
`
const Bag = styled(ShoppingBag)`
  color: #333;
  height: 24px;
  cursor: pointer;
`