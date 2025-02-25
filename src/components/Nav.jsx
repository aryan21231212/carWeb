import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
   <Container>
    <div>
        <h1>EV-olution</h1>
    </div>
    <div className='content'>
        <h3>Home</h3>
        <h3>Explore</h3>
        <h3>About</h3>
        <h3>Contact</h3>
    </div>
   </Container>
  )
}

export default Nav

const Container = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    height: 100px;
    padding: 2rem;
    align-items: center;

    .content{
        display: flex;
        gap: 3rem;
        margin-right: 4rem;
    }
    h3{
        font-weight: 500;
    }
    h3:hover{
        padding: 0px 5px;
        background-color: white;
        color: black;
        border-radius: 9px;
    }
    h1{
        font-size: 40px;
        font-weight: 500;
    }
`