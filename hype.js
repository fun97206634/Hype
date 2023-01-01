function getdata(){
		    	// console.log("Hello Mello");

		    	var getusername = document.getElementById("name").value;
		    	// console.log(getusername);

		    	var replace = document.getElementById("replacename");

		    	replace.textContent = ` ${getusername} `;

		    	document.getElementById("name").value = "";
		    	document.getElementById("email").value = "";
		    	document.getElementById("password").value = "";
	    	
		    }

function login(){
	var username = document.getElementById('su');
	var btn = document.getElementById('btnsu');


	username.textContent= `Name`;
	btn.textContent=`Log In`;
}

function signup(){
	var username = document.getElementById('su');
	var btn = document.getElementById('btnsu');

	username.textContent= `Username`;
	btn.textContent=`Sign Up`;
}








let month = new Date().getMonth();

      let today;
      switch(month){
      	case 0:
      	   today = "January";
      	   break;
      	case 1:
      	 today = "February";
      	 break;
        case 2 :
          today = "March";
          break;
        case 3 :
          today = "April";
          break;
        case 4 : 
          today = "May";
          break;
        case 5 :
          today = "June";
          break;
         case 6 :
          today = "July";
          break;
         case 7 :
          today = "August";
          break;
         case 8 :
          today = "September";
          break;
         case 9 :
          today = "October";
          break;
         case 10 :
          today = "November";
          break;
        default :
           today = "December";
           break;         	   
      }
      let getscreen = document.getElementById("year");
      
			let year=new Date().getFullYear();
			
				let cp = ` ${today},${year} `;

					getscreen.innerHTML = cp;


