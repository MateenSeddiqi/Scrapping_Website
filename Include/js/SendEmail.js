

document.getElementById("contact_form").addEventListener("submit",  (e) => {
    e.preventDefault();

    emailjs.send("service_vpf5cbm","template_b1uf0d8",{
        first_name: document.querySelector("#first_name").value,
        last_name: document.querySelector("#last_name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        message: document.querySelector("#message").value,
        }).then(response => {
            console.log("Succes!", response.status);
            alert("Thanks for you Message!");
        },(error) =>{
            console.log(error);
            alert("Sending Failed!");
        })
    e.target.reset();
});