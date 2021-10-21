window.onload = function(){

    let btn = document.querySelector(".btn:nth-child(2)");

    btn.addEventListener("click",function(event){
        let e  = document.querySelector("#email").value;
        let m = document.querySelector(".message");
        const echeck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        console.log("button clicked");
        if (e.length != 0 && e.includes("@") && echeck.test(e)){

			m.textContent = "Thank you! Your email address " + e + " has been added to our mailing list!";

		}
		else{
            
			m.textContent = "Please enter a valid email address";
            
		}
        event.preventDefault();


   });
}

