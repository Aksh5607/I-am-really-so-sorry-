// --- 1. Mood Changer Logic ---
function changeMood(color) {
    document.body.style.backgroundColor = color;
}

// --- 2. Compliment Generator ---
const compliments = [
    "Your smile is the first thing I look for in a room.",
    "You are the most patient person I have ever known.",
    "I love how your mind works—you see beauty in everything.",
    "The way you care for people is so inspiring.",
    "I miss the way you laugh at the smallest things.",
    "You are the strongest person I know."
];

function showCompliment() {
    const textElement = document.getElementById("compliment-text");
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.innerHTML = random;
        textElement.style.opacity = 1;
    }, 200);
}

// --- 3. Heart Trail Effect ---
document.addEventListener('mousemove', function(e) {
    let heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '12px';
    heart.style.zIndex = '9999';
    heart.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = 'translateY(-20px) scale(1.5)';
        heart.style.opacity = '0';
        setTimeout(() => heart.remove(), 500);
    }, 50);
});


// --- 1. Together Counter Logic ---
function updateCounter() {
    const startDate = new Date("January 1, 2023"); // CHANGE THIS to your actual start date
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    
    const counterElement = document.getElementById("together-counter");
    if (counterElement) {
        counterElement.innerHTML = `${days} Days and ${hours} Hours`;
    }
}

// Update every hour
setInterval(updateCounter, 3600000);
window.addEventListener('load', updateCounter);

// --- 2. Tab Visibility Change ---
// This changes the browser tab title when she leaves the page!
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = "Please come back... ❤️";
    } else {
        document.title = "A Private Space | For You";
    }
});

function setGreeting() {
    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 12) greeting = "Good Morning, My Sunshine ☀️";
    else if (hour < 18) greeting = "Good Afternoon, Beautiful ✨";
    else greeting = "Good Evening, My Love 🌙";
    
    document.getElementById('greeting').innerHTML = greeting;
}
window.addEventListener('load', setGreeting);

// This makes the browser tab "blink" with a heart
let heartToggle = true;
setInterval(() => {
    if (heartToggle) {
        document.title = "❤️ Aksh loves you";
    } else {
        document.title = "💖 Always & Forever";
    }
    heartToggle = !heartToggle;
}, 2000);