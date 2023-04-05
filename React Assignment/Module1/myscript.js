function RegAPI() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let mobile = document.getElementById('mobile').value;

    const data = { username: name, email: email, password: pwd, mobile: mobile }
    console.log(data);
    fetch('http://localhost/api/registration_api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({ allData: data })
    }).then(res => res.json()).then((Response) => {
        console.log(Response);
        if (Response.Code == 1) {
            localStorage.setItem('userid', Response.Data)
        }
        else {
            console.log("Something went wrong!");
        }
    }).catch((ErrHandl) => {
        console.log(ErrHandl);
    })
}
