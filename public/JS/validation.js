function validate() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    if(name.length < 5)
    {
        alert("name should contain minimum 5 characters");
    }
    else if(id!=(isNaN)){
        alert("please enter valid number");
    }
    else{
            alert("entered Successfully")
            window.location = '/';
        }
}