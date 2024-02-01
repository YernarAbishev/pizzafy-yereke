import footerLogo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <span className="logo"><img src={footerLogo} alt="" className="logo" /> Pizzafy</span>
            <p>&copy; 2024. Author: Yereke</p>
        </div>
    </footer>
  )
}

export default Footer
