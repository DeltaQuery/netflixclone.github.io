import LanguageInput from "../LanguageInput/LanguageInput"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="mainFooter">
      <a>Questions? Contact us.</a>
      <ul className="footerList">
        <li>FAQ</li>
        <li>Help Center</li>
        <li>Account</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Ways to Watch</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <li>Speed Test</li>
        <li>Legal Notices</li>
        <li>Only in Netflix</li>
      </ul>
      <LanguageInput />
    </footer>
  )
}
