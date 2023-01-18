import  '../../../assets/style/style.css'; 
import myimg from '../../../assets/img/vb.jpg'

function Adver() {
     return(
          <>
          <div className='container1'>
               <div className="row1">
                    <div className="left-side">
                         <img src={myimg}></img>
                    </div>
                    <div className="right-side">
                         <h1>Gym and Fitness</h1>
                         <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                        
   <div className='flex'>
     <div className='one'>
     <h2>350</h2>
     <h5>Members</h5>
     </div>
     <div className='two'>
     <h2>16</h2>
     <h5>Classes</h5>
     </div>
     <div className='three'>
     <h2>8</h2>
    <h5> Awards</h5>
    </div>
   </div>
                    </div>
               </div>
          </div>
          </>
     )
}

export default Adver;