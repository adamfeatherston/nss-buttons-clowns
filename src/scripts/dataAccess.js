const applicationState = {
    clowns: [],
    requests: [],
    parties: []
}
//module for importing and exporting data to/from API and modules.

//delcare varible to store objects
//3 objects as empty arrays to get data from database.json
//objects: 1. clowns: (names) 2. requests: (user to input requesting a clown) 3. parties: (user change of information about a request)
//variable to connect with .json server
const API = "http://localhost:8088"
//function to get the clowns from API
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}
//function to export clowns array to modules
export const getClowns = () => {
    return applicationState.clowns.map(plumber => ({ ...plumber }))
}
//function to get the service requests from API and change from json to javascript. 
export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}
//function to export requests from applicationState
export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}
//floowing function saves party requests to permanent state ("POST")
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    //dispatchs customEvent after POST operation (regenerates HTML in main.js)
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
//function that allows user to delete party requests (DELETE)
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
//function to POST parties to application state and return the response. Similar function to sendRequest
export const saveParty = (userCompleteParty) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userCompleteParty)
    }


    return fetch(`${API}/parties`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

//function to get the service parties from API
export const fetchParties = () => {
    return fetch(`${API}/parties`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}

export const getParties = () => {
    return applicationState.parties.map(party => ({ ...party }))
}