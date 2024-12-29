document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.querySelector(".nav-button");
    const navCollapse = document.querySelector("#navbarNav");

    // Add event listener for the nav-button (open)
    navButton.addEventListener("click", () => {
        navCollapse.classList.toggle("show"); // Toggle the menu
        if (navCollapse.classList.contains("show")) {
            navCollapse.appendChild(closeButton); // Add close button when menu opens
        }
    });
});

// const navLinks = document.querySelector(".nav-links");

    // navButton.addEventListener("click", () => {
    //     navLinks.classList.toggle("visible");

//

    // navButton.addEventListener("click", () => {
    //     if (navCollapse.classList.remove("show")) {
    //         // Menu is closed; open it
    //         navCollapse.classList.add("show");
    //     } 
    //     else if (navCollapse.classList.contains("show")) {
    //         // Menu is open; close it
    //         navCollapse.classList.remove("show");
    //     } 

//

    //const closeButton = document.createElement("button"); // Create the close button
    //closeButton.innerText = "Close Menu";
    //closeButton.classList.add("btn", "btn-danger", "close-nav-button"); // Add styles to the close button

    // // Add event listener for the close button
    // closeButton.addEventListener("click", () => {
    //     navCollapse.classList.remove("show"); // Close the menu
    //     if (navCollapse.contains(closeButton)) {
    //         navCollapse.removeChild(closeButton); // Remove the close button
    //     }
    // });