import '../../../assets/style/style.css';
import background from "../../../assets/img/dsczv.jpg";
 import img from '../../../assets/img/billion.png';
 


function Home(){
     return (
<div className='bg-img'> 
       
     <div className='container-div'>
           <div className='left'>
               <div className='line'></div>
               <h1>Life is Motion</h1>
               <h4>Gyms, Day Spas, Trainers</h4>
               <p>In this day in age, keeping fit has become one of the top activities for someone to do in their free time. A popular way to stay in shape is by going to the gym, with multiple different types of workouts you can do, from weight lifting to light cardio.</p>
               <span> Image from < a href='#'>BillionPhoto </a></span>
               <div className='button'> 
                <button>Read more</button></div>
           
           </div>
           <div className='Right'>
               <img src={img}></img>
           </div>
     </div>

       
     </div>      
    
     )
}

export default Home;