
               function pageRedirect() 
                 {
                 window.location.href = "C:\\Users\\Anu\\Desktop\\Koshish Website\\KOSHISH_ATTENDANCE_FE\\user\\home page\\homepage.html";

                 
                 }
            function pageRedirect1()
            {
                 window.location.href = "C:\\Users\\Anu\\Desktop\\Koshish Website\\KOSHISH_ATTENDANCE_FE\\admin\\Admin_page\\Admin_page.html";
                 
             
            }
            
        
 
         
      
            function welcome()
            {
                var unname = document.getElementById("username");
                var pname = document.getElementById("pass");

                if(pname.value.trim() =="" || unname.value.trim() == ""){
                    alert("Donot left blank both the things"); 

                    return false;    
                }
                else {
                    if(pname.value.trim() == "Koshish" && unname.value.trim() == "User" ){
                        alert("Welcome User",pageRedirect());
                        return true;
                    }
                    
                    else if(pname.value.trim() == "Family" && unname.value.trim() == "Admin" ){
                        alert("Welcome Admin",pageRedirect1());
                        return true;
                    }
                    return true;
                   
                }


            }

          
           
        
