import "./LanguageInput.css"
import { BiGlobe } from "react-icons/bi"

export default function LanguageInput() {
    return (
        <div className="languageInputContainer">
            <BiGlobe
                className="languageIcon"
                size="20"
                fill="var(--gray-second-color)"
            />
            <select name="select" className="languageInput">
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
            </select>
        </div>
    )
}
