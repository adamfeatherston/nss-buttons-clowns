import { PartyList } from "./PartyList.js"
import { RequestForm } from "./RequestForm.js"
//module to generate HTML of the entire page
//function to generate HTML from RequestForm and PartyList
export const Clowns = () => {
    return `
        <h1>Buttons and Lollipop the Clowns</h1>
        <h2>Book a clown today: "They all book down here!"</h2>
        <section class="requestForm">
            ${RequestForm()}
        </section>

        <section class="partyRequests">
            <h3>Parties Requested</h3>
            ${PartyList()}
        </section>
    `
}