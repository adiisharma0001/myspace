import React from 'react'
import styled from 'styled-components'
import Card from './Card'

export default function Content(props) {
  return (
    <Container>
      <h1>{props.head}</h1>
      {props.data.map(element =>
        <Card element={element} />
      )}
    </Container>
  )
}

const Container = styled.div`

h1{
    margin-top: 56px;
    margin-bottom: 5y0px;
    padding: 10px;
    text-align: center;
    color: whitesmoke;
    background-color: black;
    font-family: Arial, Helvetica, sans-serif;
}
`


























































































































































































































