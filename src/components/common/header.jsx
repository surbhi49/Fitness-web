import '../../assets/style/style.css';
import { Link } from 'react-router-dom';


function Head() {

     return (
       <>
       
     
        <nav className="navbar bg-light fixed-top">
     <div className="container-fluid">
       <a className="navbar-brand" href="#">LOGO</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
         <div className="offcanvas-header">
           <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div className="offcanvas-body">
           <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
           <li className="nav-item">
             <Link className="nav-link" to={'/'}>Home</Link>
             </li>
             <li className="nav-item">
             <Link className="nav-link" to={'/flexpage'}>Services</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to={'/about'}>About</Link>
             </li>
             <li className="nav-item dropdown">
             <Link className="nav-link" to={'/promo'}>Promotion</Link>
             </li>
             <li className="nav-item dropdown">
             <Link className="nav-link" to={'/adver'}>Advertisment</Link>
             </li>
             <li className="nav-item dropdown">
             <Link className="nav-link" to={'/cate'}>Category</Link>
             </li>
            </ul>
         </div>
       </div>
     </div>
   </nav>  
 
       </>
     
    ) 
}
   
    export default Head;
   