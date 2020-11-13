document.addEventListener("DOMContentLoaded",()=>{
    let me=document.getElementById("me");
    let details=document.getElementById("details");
    let course=document.getElementById("course");
    me.addEventListener("click",(e)=>{
        window.location.reload();

    })
    course.addEventListener("click",(e)=>{
       document.getElementById("pic").src="./images/nackademin.png"
       let me_heading= document.getElementById("me_head");
       me_heading.remove();
        let about=document.getElementById("about_desc");
        about.remove();
        e.target.setAttribute("disabled","true");
        let course_head=document.createElement("h4");
        course_head.setAttribute("lang","sv");
        course_head.textContent="Webbutvecklare fullstack opensource";
        let course_desc=document.createElement("p");
        course_desc.textContent="The course provides competance in both frontend and back end webdevelopement with, programming language like javascript & PHP, HTML, CSS and javascript libraries. It is a more updated and practical course and prepare students with most recent technologies and make them ready for a existing market. The education includes: JS programming, frameworks and libraries,backend, Webdevelopement with CMS&PHP,construction and test automation and version management(git).The highlight of the course is two interships during the two year span of the course ";
        
        details.appendChild(course_head);  
        course_head.after(course_desc);
       
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