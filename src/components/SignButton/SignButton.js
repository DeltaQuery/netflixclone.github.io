import "./SignButton.css"

export default function SignButton({size}) {
  return (
    <button className={ "sButton " + (size === "md" ? "sButtonMd" : "sButtonLg") }>SIGN UP</button>
  )
}
