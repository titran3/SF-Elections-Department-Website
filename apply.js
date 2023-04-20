  function sendEmail() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
  
    let body = "First Name: " + firstName + "<br>" +
               "Last Name: " + lastName + "<br>" +
               "Email: " + email;
  
    Email.send({
      SecureToken: "d52295bb-b496-40ef-974b-b712925cfb02",
      To: "timothyt0107@gmail.com",
      From: "timothyt0107@gmail.com",
      Subject: "SF Pre-registration Form Completed",
      Body: body,
    }).then((message) => alert(message));
}
