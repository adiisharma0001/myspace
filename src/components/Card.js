import React from 'react'
import styled from 'styled-components'

export default function Card(props) {
  return (
    <Box>
      <h2>{props.element.title}</h2>
       <div className='c-content'>
        {props.element.details}
        <br/>
        <button>Read More</button>
       </div>
    </Box>
  )
}

const Box = styled.div`
margin: 40px 15px;
border: 1px solid grey;
padding: 15px;
border-radius: 5px;

h2{
    margin: 0;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 10px;
    color: red;
}
.c-content{
    margin:0;
    padding: 0;
}

button{
    margin-top: 20px;
    margin-bottom: 0px;
    background: wheat;
    border:none;
    border-radius: 2px;
    box-shadow: 1px 1px 1px 1px grey;

    :hover{
        background: orange;
        box-shadow: 2px 2px 2px 2px grey;
    }
}
`
