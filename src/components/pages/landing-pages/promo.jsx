import '../../../assets/style/style.css'; 
import addimg from '../../../assets/img/min.jpg'



function Promo(){
      return(

          <>

<div  className='background-img'  >
     <div className='add-img'>
          <img src={addimg}></img>
     <div className='position'>
          <h1>Free fitness training</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vitae ex mollitia, reiciendis soluta iure ipsum tempore, animi error saepe molestiae sunt perferendis ad harum. Quae suscipit dignissimos harum at.
               Mollis aliquam ut porttitor leo a diam. Ac tortor vitae purus faucibus ornare. Sapien faucibus et molestie ac feugiat. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.</p>
     <from>
          <input type="text" placeholder=' Your mail' /><br></br><button className='submit1'>contact us</button>
     </from>
</div>
     </div>

</div>

</>
)
}
export default Promo;