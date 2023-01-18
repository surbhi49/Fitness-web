import '../../../assets/style/style.css';
import imgs from '../../../assets/img/pushups.png';
import imgg from '../../../assets/img/dubles.png';
import imge from '../../../assets/img/8.png'




function Flexpage() {
     return (
        <>
<section className='middle-part'>
  <div className="margin">
    <div className='flex'>
      <div className="image"><img src={imgs}></img>
      <h2>Personal</h2>
      </div>
      <div className="image"><img src={imgg}></img>
      <h2>Exclusive</h2>
      </div>
      <div className="image"><img src={imge}></img>
      <h2>Yoga</h2>
      </div>
  
      <div className="image"><img src={imgs}></img>
      <h2>Personal</h2>
      </div>
      <div className="image"><img src={imgg}></img>
      <h2>Exclusive</h2>
      </div>
      <div className="image"><img src={imge}></img>
      \ <h2>Yoga</h2>
      </div>
      </div>
    </div>
    </section>
        </>  
     ) 
}

export default Flexpage;