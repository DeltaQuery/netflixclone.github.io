import JoinButton from "../JoinButton/JoinButton"
import "./MoreToWatch.css"

export const MoreToWatch = () => {
  return (
    <section className="moreToWatchContainer">
        <h2>There’s even more to watch.</h2>
        <h3>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</h3>
        <JoinButton
        size="lg"
        type="moreToWatch"
        />
    </section>
  )
}
