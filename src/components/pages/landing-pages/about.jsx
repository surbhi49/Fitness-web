import '../../../assets/style/style.css';
import photo from '../../../assets/img/billionphotos.png'



function About(){
 return(
     <>
     <div className='box'>
          <div className="left-box">
               <img src={photo}></img>
          </div>
          <div className="right-box">
               <h1>About Club</h1>
               <p>Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus.</p>
               <span>Image from <a href='#'>Billionphoto</a></span>
               <div className="button2">
                    <button>READ MORE</button>
               </div>
          </div>
     </div>
     </>
 )
}
export default About;