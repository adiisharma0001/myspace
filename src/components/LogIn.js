import styled from "styled-components"
export default function LogIn() {
    return (
        <Wrapper >
            
            <div className="container">
            <h1 className="mb-4">Log In</h1>
                <form>
                    <div className="mb-4">
                        <label htmlor="client Email" className="form-label">Email ID</label>
                        <input type="name" className="form-control" id="client Email" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="clientphone" className="form-label">Passward</label>
                        <input type="phone" className="form-control" id="clientphone" />
                    </div>

                    <div className="mb-4" id="form-check">
                        <input type="checkbox" className="form-check-input my-2" id="isclient" />
                        <label className="form-check-label mx-2 mt-1" htmlFor="isclient">Remember Password</label>
                    </div>
                    <div className="button1 "></div>
                    <button type="submit" className="btn btn-primary mb-4">Log In</button>

                    <p>If you do not have Account then Click Here</p>
                    <div className="button2 mb-4"></div>
                    <button type="submit" className="btn btn-primary">Click Here for Sign In</button>

                </form>
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
padding: 20px;

.container{
    width: 500px;
}
`