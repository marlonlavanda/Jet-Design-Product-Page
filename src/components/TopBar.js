import React from 'react'
import styled from 'styled-components'


function TopBar() {
  const links = ["Earth friendly", "Cruelty-free", "Unique formulas", "Proven results"]

  return (
    <Container>
      <Menu>
        { links && links.map((link, index) => (
            <a key={index} href="#ad">{link} </a>
          ))
        }
      </Menu>
    </Container>
  )
}

export default TopBar

const Container= styled.div`
  min-height: 70px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #044229;
`

const Menu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  a {
    padding: 0 10px;
    flex-wrap: nowrap;
    color: white;
    text-decoration: none;
    font-family: 'Rota';
    font-size: 18px;
  }
  @media(max-width: 768px){
    display: none;
  }
`