import { React,useState } from "react";
import HappinessPicker from "./HappinessPicker";


export default function Feedback() {
  const [foodRank, setFoodRank] = useState(4);
  const [serviceRank, setServiceRank] = useState(4);
  const [valueRank, setValueRank] = useState(4);
  const [reviewTotalScore, setReviewTotalScore] = useState(12);
  

  const handleFoodClick = (index) => {
    setFoodRank(index);
    totalScore(index, serviceRank, valueRank);
  }
  
  const handleServiceClick = (index) => {
    setServiceRank(index);
    totalScore(foodRank, index, valueRank);
  }

  const handleValueClick = (index) => {
    setValueRank(index);
    totalScore(foodRank, serviceRank, index);
  }

  const totalScore = (foodRank, serviceRank, valueRank) => {
    setReviewTotalScore(foodRank + serviceRank + valueRank);
  }

  return (
    <div className="feedback-form">
      <h2 className="sub-title">Let's know how we did!</h2>
      <div className="rank-type-container">
        <h2>Food</h2>
        <HappinessPicker reviewRank={foodRank} handleReviewClick={handleFoodClick} />
      </div>
      <div className="rank-type-container">
        <h2>Service</h2>
        <HappinessPicker reviewRank={serviceRank} handleReviewClick={handleServiceClick} />
      </div>
      <div className="rank-type-container">
        <h2>Value for money</h2>
        <HappinessPicker reviewRank={valueRank} handleReviewClick={handleValueClick} />
      <h2 className="total-score">Total Score: {reviewTotalScore}/12</h2>
      </div>
    </div>
  );
}