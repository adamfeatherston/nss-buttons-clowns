import { sendRequest } from "./dataAccess.js"
//module for rendering HTML of a list where users can input data based upon client parameters. 

export const RequestForm = () => {
       let html = `
        <div class="field">
            <label class="label" for="parentName">Name of Parent requesting Party</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
        <label class="label" for="childName">Name of Child party is for</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="numberAttending">How many children will be attending?</label>
    <input type="number" name="numberAttending" class="input" />
</div>
        <div class="field">
            <label class="label" for="partyAddress">Address of the Party</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyDate">Date needed</label>
        <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyLength">How many hours will the party last?</label>
            <input type="number" name="partyLength" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")
//HTML that allows for user input to make a request. Fields are defined in instructions. 
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {//targeting the button, will perform function when "click" is heard.
        // Get what the user typed into the form fields (lines 33-36)
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAttedance = document.querySelector("input[name='numberAttending']").value
        const userAddress = document.querySelector("input[name='partyAddress']").value
        const userDate = document.querySelector("input[name='partyDate']").value
        const userLength = document.querySelector("input[name='partyLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {//creates request object with 6 properties
            parentName: userParentName, //defined as variables since it will vary what user does.
            childName: userChildName,
            numberAttending: parseInt(userAttedance),
            partyAddress: userAddress,
            partyDate: userDate,
            partyLength: parseInt(userLength)
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})