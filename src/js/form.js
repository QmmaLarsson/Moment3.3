"use strict";

//Variabler
const form = document.getElementById("jobForm");

//Händelsehanterare
form.addEventListener("submit", handleSubmit);

//Funktion för att hantera formulär
async function handleSubmit(event) {
    //Förhindra standardsubmit
    event.preventDefault();

    //Hämta värden från inputfälten
    const companyName = document.getElementById("companyname").value;
    const jobTitle = document.getElementById("jobtitle").value;
    const location = document.getElementById("location").value;
    const startDate = document.getElementById("startdate").value;
    const endDate = document.getElementById("enddate").value;

    if (!companyName.trim() || !jobTitle.trim() || !location.trim() || !startDate.trim()) {
        alert("Fyll i alla obligatoriska fält")
        return;
    }

    await addJob(companyName, jobTitle, location, startDate, endDate);

    //Återställ formuläret
    document.getElementById("companyname").value = "";
    document.getElementById("jobtitle").value = "";
    document.getElementById("location").value = "";
    document.getElementById("startdate").value = "";
    document.getElementById("enddate").value = "";

}

//Funktion för att lägga till information till APIet
async function addJob(companyname, jobtitle, location, startdate, enddate) {
    //Länk till APIet
    const url = "https://moment21dt207g.onrender.com/api/jobs";

    let jobs = {
        companyname: companyname,
        jobtitle: jobtitle,
        location: location,
        startdate: startdate,
        enddate: enddate
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify(jobs)
    });

    const data = await response.json();
    console.log(data);

}