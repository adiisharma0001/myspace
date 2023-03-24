
import styled from "styled-components"
export default function Footer() {

    return (

        <Container className="bg-dark text-light py-3">
            <ul>
                <div className="logo">
                    <a className="nav-link" href="/">Aditya Sharma</a>
                </div>
                <li className="nav-item">
                    <a className="nav-link" href="/">Trendings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Get Help</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Settings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Sign Out</a>
                </li>
            </ul>
        </Container>
    )

}

const Container = styled.div`
.logo{
    display: flex;
    justify-content: center;
    align-item: center;
    background: blue;
    border-radius: 50%;
    padding: 8px;
    color: pink;
    box-shadow: 2px 2px 2px 2px red;
    margin-bottom:20px;
    width:200px;
}
ul{
    display: flex;
    justify-content:center;
    flex-direction:column;

}
li{
    text-decoration:none;
    display:flex;
    justify-content:center;
    margin-block:4px;
}
`

