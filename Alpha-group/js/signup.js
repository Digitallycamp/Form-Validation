// if(document.location.pathname === ' index.html'){



// }else(document.location.pathname === ' signup.html')
// {


// }

let signUpForm = document.querySelector('.signupForm')
let msgElem = document.querySelector('.message');
let msg = null;

//Adding a event listener to the form
signUpForm.addEventListener('submit', function(event){
    event.preventDefault(); // Prevent refresh when submit button is hit this actually compulsory
    // console.log(event)
    let username = event.currentTarget.username.value.trim();
    let useremail = event.currentTarget.useremail.value.trim();
    let userpass = event.currentTarget.userpass.value.trim();
    let agree = event.currentTarget.agree.checked;

    if(username && useremail && userpass && agree){
            //sucess message
            msgElem.style.display='block';
            msgElem.textContent='Sign up sucessful';
            msgElem.classList.add('success');
            removeMessage()
            signUpForm.reset()
           
     let userData = {
        username :username ,
        useremail : useremail,
        userpass: userpass,
        agree:agree,

}
let dbData = JSON.stringify(userData);
localStorage.setItem('items',dbData  )
// if(localStorage.getItem('items') === null){
//     localStorage.setItem('items',dbData  )
// }else{
//     let curretData = localStorage.getItem('items');
//     curretData.push([...curretData, localStorage.setItem('items',dbData  ) ]) 

// }


           
    }else{
        // error
        msgElem.style.display='block'
        msgElem.textContent='Fields can not be empty'
        msgElem.classList.add('error')
        removeMessage()
        return 
    }

    // checking input lenth
    if(userpass.length < 8){
        msgElem.style.display='block'
        msgElem.textContent= 'Password is too short'
        msgElem.classList.add('error')
        removeMessage()
        return
    }




  
    
    
})//end of event listener

function removeMessage(){
    setTimeout(()=> {
        msgElem.style.display='none';
    }, '3000');
}

data = JSON.parse()
