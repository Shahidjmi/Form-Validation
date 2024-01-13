const Form = document.getElementById("myform")
const password = document.getElementById("Password")
const confirmpassword = document.getElementById("confirmPassword")
// console.log(password)
// console.log(confirmpassword)
const hesitate = document.querySelector(".hesitate")


Form.addEventListener("submit",function(event){
    //we need to write the logic to check password wether matching or not
    event.preventDefault()
    IsPasswordMatched = false
    
if(password.value === confirmpassword.value){
    IsPasswordMatched = true
    hesitate.innerText = "Password matched"

    //logic to get all details
      
    const Data = {
        fullname: event.target[0].value,
        phonenumber: event.target[1].value,
        email: event.target[2].value,
        url: event.target[3].value,
        password: event.target[4].value,
        confirmpassword: event.target[5].value,
    }

    console.log(Data)



}
else{
    IsPasswordMatched = false
    hesitate.innerText = "Password don't matched"

}
})


