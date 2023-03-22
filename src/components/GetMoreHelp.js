import styled from "styled-components"
export default function GetMoreHelp() {
    return (
        <Wrap>
            <div className="container">
            <h1 className="mb-5">Need Help</h1>
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
                        <label htmlFor="client Email" className="form-label">Enquiry</label>
                        <input type="enquiry" className="form-control" id="client Email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4" id="form-check">
                        <input type="checkbox" className="form-check-input  my-2" id="isclient" />
                        <label className="form-check-label mx-2 mt-1" htmlFor="isclient">Check Again</label>
                        <div id="emailHelp" className="form-text my-4">We'll never share your email and Phone number with anyone else.</div>
                    </div>
                    <div className="button"></div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
        </Wrap>
    )
}

const Wrap = styled.div`
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