import {useHistory} from 'react-router-dom';

import NewMeetUpForm from '../components/meetups/Newmeetupform';

function NewMeetUpsPage(){
    const history = useHistory()

    function addMeetUpHandler(meetupData){
        fetch('https://meet-up-react-default-rtdb.firebaseio.com/meetups.json',{
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type' : 'application/json'
            }
        }

        ).then(()=>{
            history.replace('/')
        })
    }
    return(
        <section>
            <h1>Add New MeetUp</h1>
            <NewMeetUpForm  onAddMeetup={addMeetUpHandler}/>
        </section>
    )
}

export default NewMeetUpsPage