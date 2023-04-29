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

// import React from "react";

// export default function FeedBackOptions({ options, onLeaveFeedback}) {
//    return (
//       <>
//       {options.map(label => {
//          return <button key={label} onClick={onLeaveFeedback}></button>
//       })}
//       </>
//    )
// }