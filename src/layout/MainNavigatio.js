import {Link} from 'react-router-dom'

import classes from './MainVavigation.module.css' 


function MainNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React MeetUps</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All MeetUps</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">New MeetUps</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation