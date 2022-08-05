import Card from './ui/card'
import classes from './meetups/Meetupitem.module.css'
import { useContext} from 'react'
// import FavoritesContext from '../store/favorite-context'

function MeetupItem(props){
    return( <li className={classes.item}>
    <Card>
        <div className={classes.image}>
            <img src={props.image} alt ={props.title} />
        </div>
        <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.desc}</p>
        </div>
        <div className={classes.actions}>
            <button>To Favorites</button>
        </div>
        </Card>
    </li>)
}

export default MeetupItem