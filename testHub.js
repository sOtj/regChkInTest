var now = new Date();
var day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
var hour = now.getHours();
var minute = now.getMinutes();

// Example check for Day 1, Morning Session
if (day === 0 && hour >= 7 && (hour < 12 || (hour === 12 && minute <= 30))) {
    window.location.href = "https://forms.gle/P73Bkw6EGxXsGfZx7";
}

// Example check for Day 1, Lunch
else if (day === 0 && hour >= 12 && (hour < 13 || (hour === 13 && minute <= 40))) {
    window.location.href = "https://forms.gle/dyePjFWjNNzi3kf59";
}

// Example check for Day 1, Afternoon Session
else if (day === 0 && hour >= 13 && (hour < 16 || (hour === 16 && minute <= 30))) {
    window.location.href = "https://forms.gle/Hv2txRmBex2n1epq6";
}

// ... Add more conditions for Day 2, Day 3, etc.
// Add a final else statement for times when check-in is not open.
else {
    window.location.href = "URL_for_a_message_page_like_Check_In_Not_Available";

}
