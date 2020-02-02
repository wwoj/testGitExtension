const LOCALNAME = "tablePeopleStorage";
var allPersons = [];

window.onload = () => {
    const peopleTable = document.getElementById("peopleTable");
    const personContainer = document.querySelector("tbody");


    const nameFromInput = document.getElementById('nameInput');
    const surnameFromInput = document.getElementById('surnameInput');
    const genderFromInput = document.getElementsByTagName("select")[0];
    const mobileFromInput = document.getElementById("mobileInput");
    const emailFromInput = document.getElementById("emailInput");
    let submitButton = document.getElementsByTagName("button")[0];


    generateList(sourceArray, personContainer);

    submitButton.addEventListener('click', () => {

        var person = {
            name: nameFromInput.value,
            surname: surnameFromInput.value,
            gender: genderFromInput.value,
            mobile: mobileFromInput.value,
            email: emailFromInput
        }
        //let tableBody = document.querySelector("tbody");
        //tableBody.innerHTML = ""
        generateList(sourceArray, personContainer);





    });

    var form = document.querySelector("form")

    form.onsubmit = (elem) => {

        elem.preventDefault();
    }
}






/////// Genereting table
function generateList(tab, parent) {
    parent.innerHTML = "";
    //var body = document.createElement("tbody");
    tab.forEach((elem) => {
        var tr1 = document.createElement("tr");
        for (var key in elem) {
            var valueElement = elem[key];
            console.log("Wartosc " + key + "Druga ", valueElement);
            createTD(tr1, valueElement);
        }
        console.log(parent);
        parent.appendChild(tr1);
    });

}

let testList = [{
        name: "Wojtek1222312",
        surname: "Wojcik",
        gender: "male",
        phone: 123123123,
        mail: "wojcik.wojtek@yahoo.pl"
    },
    {
        name: "Wojtek1",
        surname: "Wojcik12",
        gender: "male",
        phone: 123123123,
        mail: "wojcik.wojtek@yahoo.pl"
    },
    {
        name: "Wojtek2sadsad",
        surname: "Wojcik123",
        gender: "male",
        phone: 123123123,
        mail: "wojcik.wojtek@yahoo.pl"
    }
];

var testJson = JSON.stringify(testList);
console.log(testJson);

var sourceArray = JSON.parse(testJson);
console.log(sourceArray);

function createTD(destination, value) {
    let td = document.createElement("td");
    td.innerText = value;
    destination.appendChild(td);
}