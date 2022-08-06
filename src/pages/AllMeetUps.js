import MeetupList from '../components/meetups/MeetupList';
import Layout from '../layout/layout';
import {useState , useEffect} from 'react'



function AllMeetUpsPage(){
  const [isLoading,setIsLoading] =  useState(true)
  const [loadedMeetups,setloadedmeetups] = useState()

  useEffect(() =>{
      setIsLoading(true)
    fetch('https://meet-up-react-default-rtdb.firebaseio.com/meetups.json').then(respone =>{
        return respone.json();
     }).then(data =>{
         const meetups = [];
         for (const key in data){
             const meetup ={
                id :key,
                ...data[key]

            };
            meetups.push(meetup);
         }
         setIsLoading(false)
         setloadedmeetups(meetups)
     })

  },[]);

if (isLoading) {
    return(
        <section>
            <p>Loading......</p>
        </section>
    )
}

    return(
       <section>
           <h1>All MeetUps</h1>
           <MeetupList  meetups={loadedMeetups} />
       </section>
    )
}

export default AllMeetUpsPage