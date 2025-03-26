// Password
document.getElementById('submissionForm').addEventListener("submit", function(event) {
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  if (password.includes(username)) {
    event.preventDefault();
    alert("Your password cannot contain your username.");
  }
});

// Name varification
document.getElementById('name').addEventListener('input', function() {
   let name = this.value;
   const missing = [];

   let hasLower = /[a-z]/.test(name);
   if (!hasLower) {
       missing.push("Please format as directed (John Doe)");
   }

   let hasUpper =/[A-Z]/.test(name);
   if (!hasUpper) {
       missing.push("Please format as directed (John Doe)");
   }

   let output = "";

    if (missing.length > 0) {
        output = "<strong>Missing: </strong>";
        for (let i = 0; i < missing.length - 1; i++)
            output += missing[missing.length] + ", ";
        output += missing[missing.length - 1];
    }
    document.getElementById('nameMessage').innerHTML += output;

});

// password
document.getElementById('password').addEventListener("input", function() {
    let password = this.value;

    const missing = [];
    if (password.length < 8)
        missing.push("8-Character minimum");

    let hasLower = /[a-z]/.test(password);
    if (!hasLower) {
        missing.push("lower-case letter");
    }

    let hasUpper = /[A-Z]/.test(password);
    if (!hasUpper) {
        missing.push("upper-case letter");
    }

    let hasNum = /[0-9]/.test(password);
    if (!hasNum) {
        missing.push("missing number");
    }

    let hasSpecial = /[!@#$%]/.test(password);
    if (!hasSpecial) {
        missing.push("special character: !, @, #, $, %");
    }


    let output = "";
    if (missing.length > 0) {
        output = "<strong>Missing: </strong>";
        for (let i = 0; i < missing.length - 1; i++)
            output += missing[missing.length] + ", ";
        output += missing[missing.length - 1];
    }
    document.getElementById('passwordMessage').innerHTML = output;

    let passStrength = "";
    if (password.length < 8) {
        passStrength = "Weak";
    }
    else if (password.length === 8) {
        passStrength = "Medium";
    }
    else {
        passStrength = "Strong";
    }

    document.getElementById('passwordStrength').textContent = passStrength;


});

function escapeHTML(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeHTMLInput(input) {
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function displayComment(event) {
    event.preventDefault();
    let userInput = document.getElementById("userInput").value;
    let commentDiv = document.getElementById("comments");

    let newComment = document.createElement("p");


    newComment.innerHTML = escapeHTML(userInput);
    commentDiv.appendChild(newComment);
}

// username
document.getElementById('username').addEventListener('input', function() {
   const username = this.value;
   const message = document.getElementById('usernameMessage');
   const need = /^[a-zA-Z0-9_]{4, 20}$/;

   if (need.test(username)) {
       message.textContent = "Valid";
       message.style.color = "green";
   }
   else {
       message.textContent = "Invalid: Username 4-20 characters (letters, numbers, & underscores)";
       message.style.color = "red";
   }
});

document.getElementById('submissionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const sanitizedData = {
        name: escapeHTMLInput(name),    // key, value
        phone: escapeHTMLInput(phone),
        email: escapeHTMLInput(email),
        comment: escapeHTMLInput(comment),
        username: escapeHTMLInput(username),
        password: escapeHTMLInput(password)

});