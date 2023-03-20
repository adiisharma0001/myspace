export default function LogIn() {
    let myStyle = {
        margin: "100px 30px"

    }
    return (
        <div style={myStyle} >
            <h1>Log In</h1>
            <div className="PScholar">
                <form>

                    <div className="mb-3">
                        <label htmlor="client Email" className="form-label">Email ID</label>
                        <input type="name" className="form-control" id="client Email" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="clientphone" className="form-label">Passward</label>
                        <input type="phone" className="form-control" id="clientphone" />
                    </div>

                    <div className="mb-3" id="form-check">
                        <input type="checkbox" className="form-check-input" id="isclient" />
                        <label className="form-check-label" htmlFor="isclient">Remember Password</label>
                    </div>
                    <div className="button1"></div>
                    <button type="submit" className="btn btn-primary">Log In</button>

                    
                    <div className="button2"></div>
                    <button type="submit" className="btn btn-primary">Click Here for Sign In</button>

                </form>
            </div>

        </div>
    )
}
