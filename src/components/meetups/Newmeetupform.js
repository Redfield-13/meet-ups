import {useRef} from 'react';

import Card from '../ui/card'
import classes from './Newmeetupform.module.css'

function NewMeetupForm(probs){
    const titleinputref = useRef()
    const imageinputref = useRef()
    const addressinputref = useRef()
    const descinputref = useRef()
    function SubmitHandler(event){
        event.preventDefault();
        const enteredtitle = titleinputref.current.value;
        const enteredimage = imageinputref.current.value;
        const enteredaddress = addressinputref.current.value;
        const entereddesc = descinputref.current.value;

        const meetUpData={
            title:enteredtitle,
            image:enteredimage,
            address:enteredaddress,
            desc:entereddesc,
        };
       probs.onAddMeetup(meetUpData);

    }
    return(
        <Card>
            <form className={classes.form} onSubmit={SubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">MeetUp Title</label>
                    <input type="text" required id="title" ref={titleinputref}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">MeetUp Image</label>
                    <input type="url" required id="image" ref={imageinputref}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressinputref}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows='5' ref={descinputref}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add MeetUp</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm