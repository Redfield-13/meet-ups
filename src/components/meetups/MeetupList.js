import MeetupItem from '../MeetupItem'
import classes from './MeetupList.module.css'

function MeetUplist(props){
    return (<ul className={classes.list}>
        {props?.meetups?.map((meetup)=> (
            <MeetupItem
             key={meetup.id}
             id={meetup.id} 
             image={meetup.image} 
             title={meetup.title} 
             desc={meetup.desc} 
             address={meetup.address} 

             />
             ))}
    </ul>)
}

export default MeetUplist