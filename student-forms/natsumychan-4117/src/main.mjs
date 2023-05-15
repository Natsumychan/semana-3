// Import our custom CSS
import './bootstrap.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

const preventSubmit= document.getElementById("submit")
preventSubmit.addEventListener("submit", (event)=>{
 event.preventDefault()
 return alert("It works!!")
})
 
