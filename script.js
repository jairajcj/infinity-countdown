// Set the launch dates for today (Feb 25, 2026)
const saleStart = new Date('February 25, 2026 19:15:00').getTime();
const saleEnd = new Date('February 25, 2026 21:15:00').getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    let targetDate, phaseText;

    if (now < saleStart) {
        // Phase 1: Counting down to the start of sales
        targetDate = saleStart;
        phaseText = "TICKET SALES START IN";
    } else if (now < saleEnd) {
        // Phase 2: Sales are live, counting down to the end
        targetDate = saleEnd;
        phaseText = "HAPPY HOURS END IN";
        document.querySelector('h2.event-title').innerText = "SALES ARE LIVE!";
    } else {
        // Phase 3: Sales have ended
        clearInterval(timer);
        document.querySelector('h1.event-title').innerText = "TICKET SALES CLOSED";
        document.querySelector('h2.event-title').innerText = "SEE YOU AT THE LAUNCH!";
        document.getElementById('countdown').innerHTML = "<div class='time-block' style='width: 100%'><span class='time-number'>SOLD OUT</span></div>";
        return;
    }

    const distance = targetDate - now;
    document.querySelector('h1.event-title').innerText = phaseText;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}, 1000);

// Initialize Particles.js
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#00ffd2", "#ff2d95", "#9b51e0"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
}

// Button Click Feedback
document.getElementById('notify-btn').addEventListener('click', () => {
    const email = document.getElementById('email-input').value;
    if (email) {
        alert('Thank you! We will notify you at ' + email);
        document.getElementById('email-input').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});
