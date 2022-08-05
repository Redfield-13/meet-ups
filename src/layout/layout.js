import MainNavigation from './MainNavugatio'
import classes from './Layout.module.css'


function Layout(probs){
    return(
        <div>
            <MainNavigation />
            <main className={classes.main}>
{probs.children}
            </main>
        </div>
    )
}

export default Layout