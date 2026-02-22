// ===============================
// SMART COLLEGE EVENT MANAGEMENT
// Frontend Script File
// ===============================


// ===============================
// STUDENT REGISTRATION
// ===============================
document.getElementById("registerForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Registration Successful! (Data will be saved in database later)");
    this.reset();
});


// ===============================
// STUDENT LOGIN
// ===============================
document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Login Successful! (Backend authentication will be added later)");
    this.reset();
});


// ===============================
// SAMPLE EVENT DATA (Temporary)
// ===============================
let events = [
    {
        title: "Tech Fest 2026",
        date: "2026-03-10",
        description: "Annual technical festival of the college."
    },
    {
        title: "Cultural Night",
        date: "2026-03-18",
        description: "Music, dance and drama performances."
    },
    {
        title: "Sports Meet",
        date: "2026-03-25",
        description: "Inter-department sports competition."
    }
];


// ===============================
// DISPLAY EVENTS ON EVENTS PAGE
// ===============================
const eventContainer = document.getElementById("eventContainer");

if(eventContainer){

    function displayEvents(){
        eventContainer.innerHTML = "";

        events.forEach((event, index) => {
            const card = document.createElement("div");
            card.classList.add("event-card");

            card.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p>${event.description}</p>
                <button onclick="registerEvent(${index})">Register</button>
            `;

            eventContainer.appendChild(card);
        });
    }

    displayEvents();
}


// ===============================
// EVENT REGISTRATION
// ===============================
function registerEvent(index){
    alert("Successfully Registered for: " + events[index].title);
}


// ===============================
// ADMIN LOGIN
// ===============================
document.getElementById("adminLoginForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Admin Login Successful!");
    window.location.href = "dashboard.html";
});


// ===============================
// ADD EVENT (ADMIN DASHBOARD)
// ===============================
document.getElementById("addEventForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    const inputs = this.querySelectorAll("input, textarea");

    const newEvent = {
        title: inputs[0].value,
        date: inputs[1].value,
        description: inputs[2].value
    };

    events.push(newEvent);

    alert("Event Added Successfully!");

    this.reset();

    displayAdminEvents();
});


// ===============================
// DISPLAY EVENTS IN ADMIN PANEL
// ===============================
const adminEventList = document.getElementById("adminEventList");

function displayAdminEvents(){
    if(!adminEventList) return;

    adminEventList.innerHTML = "";

    events.forEach((event, index) => {
        const div = document.createElement("div");
        div.classList.add("event-card");

        div.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p>${event.description}</p>
            <button onclick="deleteEvent(${index})">Delete</button>
        `;

        adminEventList.appendChild(div);
    });
}

displayAdminEvents();


// ===============================
// DELETE EVENT (ADMIN)
// ===============================
function deleteEvent(index){
    events.splice(index, 1);
    alert("Event Deleted Successfully!");
    displayAdminEvents();
}