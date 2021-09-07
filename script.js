let add_innovator_btn = document.getElementById("add-innovator-btn");
let innovator_details_form = document.querySelector("form");
let data_table = document.querySelector("table");
console.log(innovator_details_form);


// all the currently available innovators 
let innovators = {
    Albin:{
        "first-name": "Albin",
        "last-name": "Karmoh",
        "contact": "0886774324",
        "img-url": "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/208859859_1042977262775342_8768454891018076801_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFFI7Kr5yzAHgCJdCscT0bTl10zwJ_DQduXXTPAn8NB2yg7RCL1yTwgZcx66X2xN4dxCGqPu6Jm9_Pt1gYkfEWZ&_nc_ohc=m5_v33kogXoAX_K2X5C&_nc_ht=scontent-cdt1-1.xx&oh=3508282f4c734fe65a59f20a5efb6267&oe=615BC1EF"
    },
    Ben:{
        "first-name": "Ben",
        "last-name": "Ngafaun",
        "contact": "0886774324",
        "img-url": "https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/240609928_227257042655087_7982180109129324433_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeESamkNI-aYTQezbbq3n3bymq96jevsAy2ar3qN6-wDLaesoyS21rI6D5qveiE8hxcQXb1ID7EFjnPcT3b2a_eR&_nc_ohc=O25G8P2WyVIAX-uRQ0w&_nc_ht=scontent-cdg2-1.xx&oh=1304bc9e170d251050a125a143a2e179&oe=613AF842"
    },
    Boakai:{
        "first-name": "Boakai",
        "last-name": "Kamara",
        "contact": "0886774324",
        "img-url": "https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/233669538_1749012318627709_853180708515058583_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGPTMC6G9f5cDYozxD-JM7Sr1OP4HILD4SvU4_gcgsPhHkZZ_2KDeyBFDz5Clxzp2IhM2475l3a2G4V6I0n_S8Y&_nc_ohc=kIxX-jB800sAX8hDQe_&tn=T3amXvgHqe-NJ4tL&_nc_ht=scontent-cdt1-1.xx&oh=c76824969e0ef6052cc8ad877e8dc5d2&oe=613AF28C"
    },
    Joseph:{
        "first-name": "Joseph",
        "last-name": "Gbakbutu",
        "contact": "0886774324",
        "img-url": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/228569206_1199388670486826_4317714475282674623_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFW_GiZ7SrVMHTs0Sgcw3G2PzPvcQU9JsA_M-9xBT0mwGW4jCGn6RtnQIUyl7s0dYZULZKdxT8CszYCCuGNsw6u&_nc_ohc=9qPcrsO0H2QAX_okBxm&_nc_oc=AQnFwLxLvAokUBK49jHwciX8WX1bmyw95kHxayy8WLVyrZu3MUBxqPjdHAa4cQyUfXc&_nc_ht=scontent-cdg2-1.xx&oh=b9cbef2482544302c60c0f0587b3ccc5&oe=615BF750"
    },
    James:{
        "first-name": "James",
        "last-name": "Kumateh",
        "contact": "0886774324",
        "img-url": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/101534792_694827054648012_1251067421490413568_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEz5aka0XHR7IzWBXX45vcrHwOa3dDNylwfA5rd0M3KXFsvrNI3Sgx6HV7ZK7gw_LTjryuVtstj0apJ2bGtT7Tg&_nc_ohc=chzgEAw_mbsAX_It090&_nc_ht=scontent-cdg2-1.xx&oh=9f89e2f52562605943749f3615cc4ca5&oe=615A7292"
    }
}
console.log(innovators);


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


//displays all the data from the innovators object into the HTML
function displayInnovatorsData(){
    //convert the innovators obj to an array
    let innovators_obj_values = Object.values(innovators);

    // loop through the newly created array 
    for(let i=0; i < innovators_obj_values.length; i++){
        //create a tbody HTML element
        let tbody = document.createElement("tbody");
        //add children element to the tbody element that was created
        tbody.innerHTML = ` 
            <tr>
            <td>${i+1}</td>
            <td>${innovators_obj_values[i]["first-name"]}</td>
            <td>${innovators_obj_values[i]["last-name"]}</td>
            <td>${innovators_obj_values[i]["contact"]}</td>
            <td><a href="${innovators_obj_values[i]["img-url"]}" target="_blank">View Image</a></td>
            <td>
                <button class = "edit-btn">EDIT</button>
                <button class = "delete-btn">DELETE</button>
            </td>
            </tr>
        `
        //add the tbody element to the html document
        data_table.insertAdjacentElement("beforeend", tbody);
    }
}




// invoke function
add_innovator_btn.addEventListener("click", showForm);
displayInnovatorsData();