function FeedbackOptions({clickButtonGood, clickButtonNeutral, clickButtonBad }) {
   return (
   <>
   <button onClick={clickButtonGood}>Good</button>
        <button onClick={clickButtonNeutral}>Neutral</button>
        <button onClick={clickButtonBad}>Bad</button>
   </> 
   )
}
export default FeedbackOptions;