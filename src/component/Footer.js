import "./Footer.css";

function Footer() {
      

    return (
        <footer className = "footer-clean">
            <div className="container">
                <div className="row-justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Programing Languages</h3>
                        <ul>
                            <li>react project</li>
                            <li>Python</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Contact</h3>
                        <ul>
                            <li>Mail: mosti94@hotmail.com</li>
                            <li>Phone: 95242854</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Information</h3>
                        <ul>
                            <li><a href="https://no.linkedin.com/in/mostafa-mohammedi-525aab1a0?trk=people-guest_people_search-card">LInkedin</a></li>
                            <li><a href="https://github.com/mohmos94?tab=repositories">Github</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3 id="> copyright">Mostafa Mohammedi © 2022</h3>
                    </div>
                </div>
        

            </div>
        </footer>
    )
}

export default Footer;