// log in
const submit = document.getElementById('submit');
submit.addEventListener('click',function(){
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if(email.value == "akashchakrabortty2000@gmail.com" && password.value == "akash"){
     window.location.href = 'inside.html';
    }
    else{
        alert('Invalid input');
    }
})
