import  '../../assets/style/style.css'; 



function validate(e){  
     e.preventDefault();
     var name = document.getElementById("input1").value; 
     var mail = document.getElementById("input2").value; 
     var password = document.getElementById("input3").value; 
       
      if (name==null || name==""){  
          alert("Please enter your name");  
         return false;
      }
        else if (mail==null || mail==""){  
      alert("mail can't be blank");  
     return false;
     }else if(password.length<6 || password==""){  
          alert("Password must be at least 6 characters long.") ;  
      return false;
     }
}
function Footer(){
    
     return(
          <>
          <div className='bg-color'>
               <div className='middle-div'>
                    <h1>Join our newsletter</h1>
                    <form  onSubmit={validate} name="myform" method='post' action='/action.php' >  
                    <input id="input1" type="text"  name="mail" placeholder="Enter your name" /><br/>
<input id="input2" type="text"  name="mail" placeholder="Enter your email" /><br/>
<input id="input3" type="password" name="password" placeholder='Enter your 6 digit password'/><br/> 
 
<button className='submit'>Submit</button>
</form>  
                    <div className='icons'>
                         <h3>Follow Us</h3>

                    </div>
               </div>
          </div>
          <div className='footer'>
               <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          <a href='#'>Website Templete </a> created with <a href='#'>Software Builder</a>
          </div>
          </>
     )
}
export default Footer;