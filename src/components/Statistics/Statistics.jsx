function Statistics({good, neutral, bad, total, positiveFeedback}) {
    return(
    <>
    <h2>Statistics</h2>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total:{total}</p>
    <p>Positive feedback:{positiveFeedback}%</p>
    </>
    )
}
export default Statistics;

// total===0 ? 0 :positiveFeedback