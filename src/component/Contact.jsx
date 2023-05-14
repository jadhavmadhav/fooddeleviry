import { useState } from "react";
import BottomButton from "./buttons/BottomButton";
import { useNavigate } from "react-router-dom";


const Contact = () => {
    const [textarea, setTextarea] = useState()
    const Navigate = useNavigate()

    const handleChangeTextarea = (e) => {
        setTextarea(e.target.value)
    }
    return (
        <>
            <div className='login-container'>
                <h1 className='login-header'><button onClick={() => Navigate(-1)} className="contact-back-button">&#x2190;</button> Contact</h1>
                <input placeholder='Name' className="login-login-field" />
                <input placeholder='Email address' className="login-login-field" />
                <select className="contact-selection-field" >
                    <option disabled>select question ...</option>
                    <option>I have a question about...</option>
                    <option>I have a question 2</option>
                    <option>I have a question 3</option>
                    <option>I have a question 4</option>
                    <option>I have a question 5</option>
                </select>
                <textarea
                    placeholder="Tell us more"
                    className="contact-textarea"
                    defaultValue={textarea}
                    onChange={handleChangeTextarea}
                />
                <h6 className="textarea-length" >{textarea?.length ? textarea.length : 0}/250</h6>
            </div>
            <BottomButton name="Send" />

        </>
    );
}

export default Contact;
