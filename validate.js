function validate()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var passsword = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;

    var reg = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]$/;
    var reg1 = /^[0-9]+$/;
    
    if(name.length == 0)
    {
        alert("Enter your name");
    }
    else if(email.length == 0)
    {
        alert("Enter your email address");
    }
    else if(contact.length == 0)
    {
        alert("Enter your contact number");
    }
    else if(passsword.length == 0)
    {
        alert("Enter your password");
    }
    else if(dob.length == 0)
    {
        alert("Enter your DOB");

    }
    else if(address.length == 0)
    {
        alert("Enter your address");
    }
    else if(!email.match("reg"))
    {
        alert("Enter valid email address");
    }
}