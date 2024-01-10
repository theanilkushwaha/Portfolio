import logo from '../images/IMG_20230501_123600 (2).jpg'

function Navbar() {
    return (
        <>
            <div id="container">
                <div id="left_container">
                    <img src={logo} alt="img" />
                    <div className="bio">
                        <h2>Anil Kumar Kushwaha</h2>
                        <h4>Software Developer</h4>

                    </div>
                </div>
                <div id="right_container">
                    <div className='first'>
                        <strong><p>EMAIL</p></strong>
                        <p>anilkushwaha8989@gmail.com</p>
                    </div>
                    <div>
                        <strong><p>CV</p></strong>
                        <a href="https://drive.google.com/file/d/1LO_QA7QafIoJB9H0nCPlphaBaKi-zyTA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Download
                        </a>
                    </div>
                </div>

                <div className='sec'>
                    <strong><p>LOCATION</p></strong>
                    <p>Jabalpur</p>
                    <strong><p>STATUS</p></strong>
                    <p>Open for Opportunities</p>
                </div>
            </div>


        </>
    )
}

export default Navbar;