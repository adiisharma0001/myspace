export default function GetMoreHelp () {
    let myStyle = {
        // margin: "100px 30px"

    }
    return (
        <div style={myStyle} >
        <h1>Need Help</h1>
        <div className="PScholar">
            <form>
                
                <div className="mb-3">
                    <label htmlor="client Email" className="form-label">Name</label>
                    <input type="name" className="form-control" id="client Email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="client Email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="client Email" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="clientphone" className="form-label">Phone Number</label>
                    <input type="phone" className="form-control" id="clientphone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="client Email" className="form-label">Enquiry</label>
                    <input type="enquiry" className="form-control" id="client Email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3" id="form-check">
                    <input type="checkbox" className="form-check-input" id="isclient" />
                    <label className="form-check-label" htmlFor="isclient">Check Again</label>
                    <div id="emailHelp" className="form-text">We'll never share your email and Phone number with anyone else.</div>
                </div>
                <div className="button"></div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    </div>
)
}
