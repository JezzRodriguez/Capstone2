
//runs the main function when the page is loaded
window.onload = main;

// runs the function that populates dropdown when the page is loaded
function main() {
    loadMountainsInfo();
}

function loadMountainsInfo() {
    // creates a variable that accesses the select from HTML
    const selectElement = document.querySelector("#mountainselect");

    // runs the function when the element on the select menu is changed
    selectElement.onchange = mountainChange;

    //loops through the array of mountains
    for (const mountainData of mountainsArray){

        //creates empty element
        const option = document.createElement("option");

    //adds to the new element
    option.value = mountainData.name;
    option.innerText = mountainData.name;

    //adds information the the branch that is already on the page
    selectElement.append(option);
}
}
//function that is ran on change event 
function mountainChange() {
    const selectElement = document.querySelector("#mountainselect");
    const mountainInfo = document.querySelector("main");

    //creates variable in order to compare values of selected mountain
    const selectedMountain = selectElement.value;

    //loops through the array of mountains
    for (const mountain of mountainsArray) {

        //if the mountain name in the iteriation of the array matches the mountain the user selcted 
        if (selectedMountain === mountain.name) {

            //then it will display array information using the variable previosly declared to display on HTML page
            mountainInfo.innerHTML = `
                <div class="card transparent-card" >
                    <img src="../images/${mountain.img}" class="card-img-top" alt="Mountain Image">
                    <div class="card-body">
                        <h5 class="card-title">${mountain.name}</h5>
                        <p class="card-text">${mountain.desc}</p>
                        <p class="card-text">Hike difficulty: <strong>${mountain.effort}</strong></p>
                        <p class="card-text">Latitude: ${mountain.coords.lat}</p>
                        <p class="card-text">Longitude: ${mountain.coords.lng}</p>
                    </div>
                </div>
            `;
        }
    }
}
