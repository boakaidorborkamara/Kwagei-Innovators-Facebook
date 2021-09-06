let add_innovator_btn = document.getElementById("add-innovator-btn");
let innovator_details_form = document.querySelector("form");
console.log(innovator_details_form);

// change the display value of the innovator_details_form to none
function showForm(){
    if(innovator_details_form !== "block"){
        innovator_details_form.style.display = "block";
    }
}

// change the display value of the innovator_details_form to block
function hideForm(){
    if(innovator_details_form !== "none"){
        innovator_details_form.style.display = "none";
    }
}


// all the currently available innovators 
let innovators = {
    Albin:{
        "first-name": "Albin",
        "last-name": "Karmoh",
        "contact": "0886774324",
        "img-url": "www.imageurl.com"
    },
    Ben:{
        "first-name": "Ben",
        "last-name": "Ngafaun",
        "contact": "0886774324",
        "img-url": "www.imageurl.com"
    },
    Boakai:{
        "first-name": "Boakai",
        "last-name": "Kamara",
        "contact": "0886774324",
        "img-url": "www.imageurl.com"
    },
    Joseph:{
        "first-name": "Joseph",
        "last-name": "Gbakbutu",
        "contact": "0886774324",
        "img-url": "www.imageurl.com"
    },
    James:{
        "first-name": "James",
        "last-name": "Kumateh",
        "contact": "0886774324",
        "img-url": "www.imageurl.com"
    }
}

console.log(innovators);


// invoke function
add_innovator_btn.addEventListener("click", showForm);