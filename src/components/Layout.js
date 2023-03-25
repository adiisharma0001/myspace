import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import styled from 'styled-components'
import Footer from './Footer'
export default function Layout() {
  return (
    <Container>
      <Head><Header/></Head>
      <Content>
      <Outlet/>
      <Footer/>
      </Content>
    </Container>
  )
}

const Container = styled.div`
`

const Head = styled.div`
position: fixed;
width: 100vw;
z-index: 100;
margin: 0;
`
const Content = styled.div`
position: absolute;
top: 32px;
`

const Foot = styled.div`
position: absolute;
bottom: 0px;
`