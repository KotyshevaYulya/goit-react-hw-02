import css from "./App.module.css";
import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";



export default function App() {
    const [rating, setRating] = useState(() => {
        const saveRating = localStorage.getItem("my-rating");
        if (saveRating !== null) {
            return JSON.parse(saveRating);
        }
        return {
        good: 0,
        neutral: 0,
        bad: 0
    }
    });  
    
    useEffect(() => {
        localStorage.setItem("my-rating", JSON.stringify(rating))
    }, [rating])

    const updateFeedback = (feedbackType) => {
        setRating({
            ...rating,
            [feedbackType]: rating[feedbackType] + 1,
        })
    };

    const handleReset = () => {
         setRating({
        good: 0,
        neutral: 0,
        bad: 0
    });
     };

    const totalFeedback = rating.good + rating.neutral + rating.bad;

    const percentFeedback = Math.round((rating.good / totalFeedback) * 100);

    return (
        <div className={css.AppContainer}>
            <Description />
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} handleReset={ handleReset } />
            {totalFeedback > 0 ? (<Feedback rating={rating} totalFeedback={totalFeedback} percentFeedback={percentFeedback} />):(<Notification />)}
        </div>
    )
}

