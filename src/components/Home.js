import styled from "styled-components"
export default function Home() {
    return (
       <Wrapper>

        <div className="container">
            
          <img class="cross" src="HomeImage.jpg" alt="" width="500"></img>
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 97vw;
dispaly: flex;
justify-content: center;
align-items: center;
margin: 50px 10px;
padding: 60px;

.container{
    width: 500px;
}
`