import { fetchRequests } from "./dataAccess.js"
import { Clowns } from "./Clowns.js"
import { fetchClowns } from "./dataAccess.js"
//module for rendering all HTML
//this page fetches data from API and stores in application state before converting to HTML.
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = Clowns()
            }
        )
}

render()

//renders regenerated HTML when event has happened that changes the state.
document.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
    )
    
    // const render = () => {
    //     fetchRequests().then(
    //         () => {
    //                 mainContainer.innerHTML = Clowns()
    //             }
    //         )
    // }