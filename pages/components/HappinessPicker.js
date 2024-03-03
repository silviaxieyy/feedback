import React from "react";

export default function HappinessPicker(props) {
  const emojiScores = ["😦", "😞", "😐", "🙂", "😁"];
  
  return (
    <>
     <div className="review-buttons">
        {
          emojiScores.map((emoji, index) => (
            <button 
              key={index} 
              onClick={() => props.handleReviewClick(index)}
              style={{backgroundColor: props.reviewRank === index ? "blue" : " "}}
            >
              {emoji}
            </button>
          ))
        }
      </div>
    </>
  )
}