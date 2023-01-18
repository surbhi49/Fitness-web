import '../../../assets/style/style.css';
import pic1 from "../../../assets/img/billionphotos1.jpg";
import pic2 from "../../../assets/img/billionphotos2.jpg";
import pic3 from '../../../assets/img/billionphotos3.jpg'

function Category(){
     return(
          <>
        <div className="wrapper">
          
          <div className='title'>
          <h1>Why Us</h1>
         <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        </div>
         <div className='wrapper-container'>
          <div className="same1">
          <img src={pic1}></img>
          <div className='text'><h2>Trainings</h2>
          <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
         <span>learn more</span></div> 
          </div>
          <div className="same2">
          <img src={pic2}></img>
          <div className='text'><h2>Our Gym</h2>
          <p> Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          <span>learn more</span>  </div>
          </div>
          <div className="same3">
          <img src={pic3}></img>
          <div className='text'><h2>Coach Care</h2>
          <p> Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          <span>learn more</span>
          </div>
          </div>
         </div>
         </div>
          </>
     )
}
export default Category;