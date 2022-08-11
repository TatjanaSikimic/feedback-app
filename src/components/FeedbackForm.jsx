import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useState } from "react"
import {useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
    const [text,setText] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    const [rating,setRating] = useState(10)

    //feedbackEdit = objekat i boolean
    const {addFeedback, feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        console.log('Hello')
        if(feedbackEdit.edit === true)
        {
            console.log("aa")
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {

        setText(e.target.value)
        if (text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length <= 10){
            setMessage('The text must be at least 10 characters')
            setBtnDisabled(true)
        }
        else{
            setMessage(null)
            setBtnDisabled(false)

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length > 10)
        {
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true){
                
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else {
            addFeedback(newFeedback)
            }
            // addFeedback(newFeedback)
            console.log(newFeedback)
            setText('')
        }

    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={setRating} selected={rating}/>
                {/* <RatingSelect select={(rating) => {setRating(rating);console.log("select")}}/> */}
                <div className="input-group">
                    <input type="text" onChange={handleTextChange} placeholder="Write a review" value={text} />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
  )
}

export default FeedbackForm