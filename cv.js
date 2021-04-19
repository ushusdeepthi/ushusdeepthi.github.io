document.addEventListener("DOMContentLoaded",()=>{
    let prof_pic=document.getElementById('prof_pic')
    let about_me=document.getElementById("me__heading");
    let about_education=document.getElementById("education__heading");
    let about_interests=document.getElementById("interests__heading");
    let me=document.getElementById("me");
    let education=document.getElementById("education");
    let interests=document.getElementById("interests");
        about_me.addEventListener("click",()=>{
        me.hidden=false;
        education.hidden=true;
        interests.hidden=true;
        prof_pic.src="./images/prof_pic.jpg"

        
    })
    
    about_education.addEventListener("click",()=>{
        me.hidden=true;
        education.hidden=false;
        interests.hidden=true;
        prof_pic.src="./images/nackademin_img.png"

    })

    about_interests.addEventListener("click",()=>{
        me.hidden=true;
        education.hidden=true;
        interests.hidden=false;
        prof_pic.src="./images/prof_pic.jpg"
    })

})