import "./JoinButton.css"

export default function JoinButton({size, type}) {
  return (
    <button className={
      "jButton " 
       + (size === "md" ? "jButtonMd" : "jButtonLg ")
       + (type === "moreToWatch" ? "jButtonMore" : "")
      }
      >
      JOIN NOW
      </button>
  )
}
