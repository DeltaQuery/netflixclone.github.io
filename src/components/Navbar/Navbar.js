import "./Navbar.css"
import JoinButton from "../JoinButton/JoinButton"
import SignButton from "../SignButton/SignButton"

const netflixDesktopLogo = require("../../resources/logos/netflixdesktop.png")
const netflixMobileLogo = require("../../resources/logos/netflixmobile.png")

export default function Navbar() {
  return (
<nav>
  <picture>
    <source srcSet={netflixDesktopLogo} alt="Netflix Desktop Logo" media="(min-width:600px)" width="110px" height="30px" />
    <img src={netflixMobileLogo} alt="" width="28.8px" height="40px" />
  </picture>
  <div>
    <span className="slogan">UNLIMITED TV SHOWS & MOVIES</span>
    <JoinButton
    size="md"
    />
    <SignButton
    size="md"
    />
  </div>
</nav>

  )
}
