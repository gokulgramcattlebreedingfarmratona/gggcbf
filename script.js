
            function login (){
                Let username = document.getElementById("username").value;

                Let password2 = document.getElementById("password_user").value;

                Let website_username = "ggcbfratona21";

                Let website_password = "Ratona@2024";

                if(username == website_username && password2 == website_password)
                {
                    window.location="indexuser.html"
                }
                else if(username == "" && password2 == "")
                {
                    alert("please type username and password")
                }
                else if(username == website_username && password2 !== website_password)
                {
                    document.getElementById("username").style.border="1px solid green"
                    document.getElementById("password_user").style.border="1px solid red"
                }
                else if(username !== website_username && password2 == website_password)
                {
                    document.getElementById("username").style.border="1px solid red"
                    document.getElementById("password_user").style.border="1px solid green"
                }
            }
        