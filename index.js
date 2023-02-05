const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const eMail = document.getElementById("email");
const rMessage = document.getElementById("rmessage");
const submitButton = document.getElementById("submit");
const country = document.getElementById("country");

function printData(){

    alert("RECRUITER INFO:\n" + "Name: " + firstName.value + "\n" + 
    "Last Name: " + lastName.value + "\n" +
    "E mail: " + eMail.value + "\n" + 
    "Based in: " + country.value);
    alert("Your request has been sent!")
}


submitButton.addEventListener("click", async () => {
    printData();
})








