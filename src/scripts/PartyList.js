import { deleteRequest, getClowns, getParties, getRequests } from "./dataAccess.js";
//module for HTML of the list of parties that have been requested
const clowns = getClowns()
const convertRequestToListElement = (request) => {
    let html = `
    <li>Request Date: ${request.partyDate}</li>
    <li>ParentName: ${request.parentName}</li>
    <li>Child Name: ${request.childName}</li>
    <li>Number Attending: ${request.numberAttending}</li>
    <li>Party Address: ${request.partyAddress}</li>
    <li>Party Length: ${request.partyLength}</li>
    <select class="clowns" id="clowns">
    <option value="">Choose which clown performed</option>
    ${clowns.map(
        clown => {
            return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
        }
    ).join("")}
        </select>
    <button class="request__delete"
    id="request--${request.id}">
    Delete
    </button>
    `
    return html
}
export const PartyList = () => {
    const requests = getRequests()
    // const parties = getParties()
    // const clowns = getClowns()
    
    let html = `
    <ul>
    ${requests.map(convertRequestToListElement).join("")}
    </ul>`
    return html
}

const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

//following to be used once MVP is met for better .css
// //function that "listens" for a user to click on "delete" button and invoke the DELETE function

// <select class="parties" id="parties">
// <label class ="date" for="partyDate">Request Date: ${request.partyDate}</label>
// <label class ="parent" for="parentName">ParentName: ${request.parentName}</label>
// <label class ="parent" for="childName">Child Name: ${request.childName}</label>
// <label class ="parent" for="numberAttending">NUmber of Kids Attending: ${request.numberAttending}</label>
// <label class ="parent" for="partyAddress">Party Address: ${request.partyAddress}</label>
// <label class ="parent" for="partyLength">Lenght of Party: ${request.partyLength}</label>
// </select>