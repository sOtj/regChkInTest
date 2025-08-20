debugger; 

// A simple function to get URL parameters.
function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Get the attendee's ID from the URL.
var attendeeId = getUrlParameter('id');

// Put the unique URL for each form here, WITH the entry ID.
// NOTE: These URLs do NOT have the attendee ID at the end yet.
const m1URL = "https://docs.google.com/forms/d/e/1FAIpQLSc8p7-fBft7Hgfz9zgtlsnwQSYxxo-8cj2PVzsiCd3FvW2NWA/viewform?usp=pp_url&entry.699051532=";
const l1URL = "https://docs.google.com/forms/d/e/1FAIpQLScslhmYnxFJV_Of7ieSWtslyzD197P5C5FTTWcSUR6vjrFsvg/viewform?usp=pp_url&entry.699051532=";
const a1URL = "https://docs.google.com/forms/d/e/1FAIpQLSeuEU7vXW7QA6hfxh6zDD5orGfGap5TMF4T2qBcs5dfDRqtmA/viewform?usp=pp_url&entry.699051532=";
const m2URL = "https://docs.google.com/forms/d/e/1FAIpQLScS3VBI5gnu1odA_9DTVqP_wLJj3jhGR5dk7HxOzonyB9C92Q/viewform?usp=pp_url&entry.699051532=";
const l2URL = "https://docs.google.com/forms/d/e/1FAIpQLSdtSq8MmDqDdNjkWdwHdAE10TgG8LRX1zbE29E-V7I3SIXtjA/viewform?usp=pp_url&entry.699051532=";
const a2URL = "https://docs.google.com/forms/d/e/1FAIpQLScwH3G0Gn8EIth5oQC7NJBjr7NzHDa9kKj-3MVO-_Ki6wMlSA/viewform?usp=pp_url&entry.699051532=";
const m3URL = "https://docs.google.com/forms/d/e/1FAIpQLSdbBwKqiakiOYoGVa4WD9KUQFZaI4lzi-97zy5SUGGNqrJapw/viewform?usp=pp_url&entry.699051532=";
const l3URL = "https://docs.google.com/forms/d/e/1FAIpQLSdm29mh-ifaa27syBBkuhP0Kw0lSi_g-_NyK01gmfKEegb4FQ/viewform?usp=pp_url&entry.699051532=";
const a3URL = "https://docs.google.com/forms/d/e/1FAIpQLSfN_etCDMk9je5nH3Y7slWPd5wYPyfVfBPyVT8Gvr4oJ8kJ3A/viewform?usp=pp_url&entry.699051532=";

function runProcedureBasedOnTime() {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Extract current hours and minutes
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    // Define time ranges in minutes since midnight
    const timeAStart = 6 * 60 + 30;     // 07:30
    const timeAEnd = 12 * 60 + 30;      // 12:30

    const timeBStart = 12 * 60 + 40;    // 12:40
    const timeBEnd  = 13 * 60 + 40;     // 13:40

    const timeCStart = 13 * 60 + 50;    // 13:50
    const timeCEnd  = 16 * 60 + 50;     // 16:50

    // Check which time range the current time falls into
    // **CRITICAL FIX**: Replaced single = with triple === for comparison.
    if(currentDay === 2){           // Tuesday
        if (currentMinutes >= timeAStart && currentMinutes <= timeAEnd) {
            window.location.href = m1URL + attendeeId;
        } else if (currentMinutes >= timeBStart && currentMinutes <= timeBEnd) {
            window.location.href = l1URL + attendeeId;
        } else if (currentMinutes >= timeCStart && currentMinutes <= timeCEnd) {
            window.location.href = a1URL + attendeeId;
        } else {
            console.log("No procedure scheduled at this time.");
        } 
    }else if(currentDay === 3){     // Wednesday
        if (currentMinutes >= timeAStart && currentMinutes <= timeAEnd) {
            window.location.href = m2URL + attendeeId;
        } else if (currentMinutes >= timeBStart && currentMinutes <= timeBEnd) {
            window.location.href = l2URL + attendeeId;
        } else if (currentMinutes >= timeCStart && currentMinutes <= timeCEnd) {
            window.location.href = a2URL + attendeeId;
        } else {
            console.log("No procedure scheduled at this time.");
        } 
    }else if(currentDay === 4){     // Thursday
        if (currentMinutes >= timeAStart && currentMinutes <= timeAEnd) {
            window.location.href = m3URL + attendeeId;
        } else if (currentMinutes >= timeBStart && currentMinutes <= timeBEnd) {
            window.location.href = l3URL + attendeeId;
        } else if (currentMinutes >= timeCStart && currentMinutes <= timeCEnd) {
            window.location.href = a3URL + attendeeId;
        } else {
            console.log("No procedure scheduled at this time.");
        }
    }else {
        console.log("No procedure scheduled at this time.");
    }
}

// **CALL THE FUNCTION TO START THE PROCESS**
runProcedureBasedOnTime();