document.addEventListener("DOMContentLoaded",()=>{
    let me=document.getElementById("me");
    let course=document.getElementById("course");
    me.addEventListener("click",(e)=>{
        window.location.reload();

    })
    course.addEventListener("click",(e)=>{
       document.getElementById("image").src="./images/nackademin.png"
        let about=document.getElementById("about_desc");
        about.remove();
        e.target.setAttribute("disabled","true");
        let course_desc=document.createElement("p");
        course_desc.setAttribute("lang","sv");
        course_desc.textContent="Webbutvecklare fullstack opensource";
        me.before(course_desc);  
    })
    let submit=document.getElementById("submit");
    submit.addEventListener("click",(e)=>{
        let name= document.getElementById("your_name").value;
        let subject= document.getElementById("your_subject").value;
        checkError(name,subject);

       
    /*
        let email= document.getElementById("your_email").value;
        let text=document.getElementById("your_text").value;
        if(name===""&& email=="" && subject=="" && text=="") alert("Please enter the input fields");
        else if(name=="") alert("Enter your name");
        else if(email=="") alert("Enter your email id");
        else if(subject=="") alert("Enter the Subject");
        else confirm("Your message has been sent");*/
    })
    function checkError(name,subject){
        let letters=/^[A-Za-z ]+$/
        if(name.match(letters) && subject.match(letters))  return true;
        else{
            alert("Enter valid characters in the name/subject input");
            return false;
        }
    }   
})
