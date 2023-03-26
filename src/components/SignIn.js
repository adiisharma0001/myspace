import styled from "styled-components"
export default function SignIn() {

    return (
        <Wrapper>
            
            <div className="container">
                <h1 className="mb-5">SignIn</h1>
                <form>
                    <div className="mb-4">
                        <label htmlor="client Email" className="form-label">Name</label>
                        <input type="name" className="form-control" id="client Email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="client Email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="client Email" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="clientphone" className="form-label">Phone Number</label>
                        <input type="phone" className="form-control" id="clientphone" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="client Email" className="form-label">Enter your Passward</label>
                        <input type="enquiry" className="form-control" id="client Email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="client Email" className="form-label">Re-Enter your Passward</label>
                        <input type="enquiry" className="form-control" id="client Email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text mt-4">We'll never share your email and Phone number with anyone else.</div>
                    </div>
                    <div className="button"></div>
                    <button type="submit" className="btn btn-primary">Submit</button>
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