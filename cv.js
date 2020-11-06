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
        let course_desc=document.createElement("p");
        course_desc.textContent="Course at nackademin";
        me.before(course_desc);  
    })
    
})