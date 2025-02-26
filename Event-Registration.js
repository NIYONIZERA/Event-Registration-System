//a. Write a function groupByTicketType(participants) that takes an array of participant objects and returns


function groupByTicketType(participants) {
    return participants.reduce((acc, participant) => {
        const { ticketType } = participant;
        if (!acc[ticketType]) {
            acc[ticketType] = [];
        }
        acc[ticketType].push(participant);
        return acc;
    }, {});
}



/* 
b. Write a function findEarlyRegistrations(participants, threshold) that returns an array of participant
names who registered earlier than the given threshold (in minutes). (Use filter.)
*/
function findEarlyRegistrations(participants, threshold) {
    return participants
        .filter(participant => participant.registrationTime < threshold)
        .map(participant => participant.name);
}


/*c. Write a function generateRegistrationDetails(participants) that returns an array of strings, where each
string is a summary of a registration in the format: "[Name] - [Ticket Type] (Registered at [Registration
Time] minutes)". (Use map.)
 */

function generateRegistrationDetails(participants) {
    return participants.map(participant => {
        return `${participant.name} - ${participant.ticketType} (Registered at ${participant.registrationTime} minutes)`;
    });
}

/*d. Write a function sortByRegistrationTime(participants) that sorts the participants by registration time,
earliest to latest. (Use sort.)
 */

function sortByRegistrationTime(participants) {
    return participants.sort((a, b) => a.registrationTime - b.registrationTime);
}


const participants = [
    { name: "Benigne", ticketType: "VIP", registrationTime: 12 },
    { name: "Boris", ticketType: "VIP", registrationTime: 5 },
    { name: "Charlie", ticketType: "VIP", registrationTime: 15 },
    { name: "Teta", ticketType: "regular", registrationTime: 2 },
    { name: "Kenzo", ticketType: "VIP", registrationTime: 10 },
    { name: "Keria", ticketType: "regular", registrationTime: 3 },
    { name: "Munyana", ticketType: "Vvip", registrationTime: 7 },
    { name: "Stella", ticketType: "Vvip", registrationTime: 8 }
];

console.log(groupByTicketType(participants));
console.log(findEarlyRegistrations(participants, 10));
console.log(generateRegistrationDetails(participants));
console.log(sortByRegistrationTime(participants));