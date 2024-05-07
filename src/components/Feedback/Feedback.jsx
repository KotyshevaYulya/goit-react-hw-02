import css from "./Feedback.module.css"

export default function Feedback({ rating: { good, neutral, bad }, totalFeedback, percentFeedback }) {
    return (
        <div  className={css.feedbackSection}>
        <ul>
            <li>Good: { good }</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Postive: {percentFeedback}%</li>
        </ul>
        </div>
    )
}