function Statistics({good, neutral, bad, total, PositiveFeedback}) {
    return(
    <><h2>Statistics</h2>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total:{total}</p>
    <p>Positive feedback:{total===0 ? 0 :PositiveFeedback}%</p>
    </>
    )
}
export default Statistics;