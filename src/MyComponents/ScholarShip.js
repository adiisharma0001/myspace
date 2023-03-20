import '../MyCSS/Component.css'
export default function ScholarShip() {
    let myStyle = {
        // margin: "100px 30px",

    }
    return (
        <div style={myStyle} >
            <h1>About the ScholarShips</h1>

            <div className="PScholar">
                <h2>Private Scholar Ships</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eligendi tenetur fugit sunt quisquam dolorem pariatur repellat obcaecati reiciendis enim dolor quod, porro iusto tempore sequi. Delectus at quidem libero.
                    Iusto mollitia voluptatum eos sunt, ullam commodi, laboriosam optio fugit voluptate totam impedit. Necessitatibus, asperiores. Tempore eligendi consectetur repudiandae mollitia quisquam? Eligendi sequi earum necessitatibus? Illo exercitationem est a veniam?</p>
                <button className="btn.sm">Read More</button>
            </div>

            <div className="SScholar">
                <h2>State Scholar Ships</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eligendi tenetur fugit sunt quisquam dolorem pariatur repellat obcaecati reiciendis enim dolor quod, porro iusto tempore sequi. Delectus at quidem libero.
                    Iusto mollitia voluptatum eos sunt, ullam commodi, laboriosam optio fugit voluptate totam impedit. Necessitatibus, asperiores. Tempore eligendi consectetur repudiandae mollitia quisquam? Eligendi sequi earum necessitatibus? Illo exercitationem est a veniam?</p>
                <button className="btn.sm">Read More</button>
            </div>

            <div className="NScholar">
                <h2>National Scholar Ships</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eligendi tenetur fugit sunt quisquam dolorem pariatur repellat obcaecati reiciendis enim dolor quod, porro iusto tempore sequi. Delectus at quidem libero.
                    Iusto mollitia voluptatum eos sunt, ullam commodi, laboriosam optio fugit voluptate totam impedit. Necessitatibus, asperiores. Tempore eligendi consectetur repudiandae mollitia quisquam? Eligendi sequi earum necessitatibus? Illo exercitationem est a veniam?</p>
                <button className="btn.sm">Read More</button>
            </div>

        </div>
    )
}
