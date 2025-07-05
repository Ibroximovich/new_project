// let elX = document.querySelector(".btn-x")

// function HandleBtn(){
//    let elOpen = document.querySelector(".open-div")
//     let elHero = document.querySelector(".heros")
//     elOpen.classList.toggle("hidden")
//     elHero.classList.toggle("hidden")
//     elX.innerHTML = `<svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M19 5L5 19" stroke="#343A3F" stroke-linecap="round" stroke-linejoin="round"/>
//             <path d="M5 5L19 19" stroke="#343A3F" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         `
//      elX.classList.add("bg-[#F4F4F4]")   
// }


let elX = document.querySelector(".btn-x");

function HandleBtn() {
    let elOpen = document.querySelector(".open-div");
    let elHero = document.querySelector(".heros");

    elOpen.classList.toggle("hidden");
    elHero.classList.toggle("hidden");


    if (elOpen.classList.contains("hidden")) {
        elX.innerHTML = ` <svg width="25"  height="25"  viewBox="0 0 38 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="38" height="2" rx="1" fill="white" />
                  <rect y="14" width="38" height="2" rx="1" fill="white" />
                  <rect y="7" width="24" height="2" rx="1" fill="white" />
                </svg>`
        elX.classList.remove("bg-[#F4F4F4]");
    } else {
        elX.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M19 5L5 19" stroke="#343A3F" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 5L19 19" stroke="#343A3F" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        elX.classList.add("bg-[#F4F4F4]");
    }
}



