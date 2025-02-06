document.getElementById("takeoff").addEventListener("click", function() {
    document.getElementById("status").textContent = "Houston, we have liftoff!";
});

document.getElementById("abort").addEventListener("mouseenter", function() {
    this.style.backgroundColor = "red";
});

document.getElementById("abort").addEventListener("mouseleave", function() {
    this.style.backgroundColor = "";
});

document.getElementById("abort").addEventListener("click", function() {
    let confirmAbort = confirm("Are you sure you want to abort the mission?");
    if (confirmAbort) {
        document.getElementById("status").textContent = "Mission aborted! Space shuttle returning home.";
    }
});
