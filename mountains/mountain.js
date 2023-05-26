
window.onload = main;

function main() {
    loadMountainsInfo();
}

function loadMountainsInfo() {
    const selectElement = document.querySelector("#mountain");
    selectElement.onchange = mountainChange;

    for (const mountainData of mountainsArray) {
        const option = document.createElement("option");
        option.value = mountainData.name;
        option.innerText = mountainData.name;
        selectElement.append(option);
    }
}

function mountainChange() {
    const selectElement = document.querySelector("#mountain");
    const mountainInfo = document.querySelector("main");
    const currentMountain = selectElement.value;

    for (const mountain of mountainsArray) {
        if (currentMountain === mountain.name) {
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
