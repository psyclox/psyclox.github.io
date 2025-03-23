@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: radial-gradient(circle, #141e30, #243b55);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.container {
    background: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease-in-out;
}

.container:hover {
    transform: scale(1.02);
}

.title {
    font-size: 36px;
    font-weight: bold;
    animation: fadeIn 1s ease-in-out;
}

.subheading {
    font-size: 18px;
    margin-bottom: 15px;
    opacity: 0.9;
}

.content {
    font-size: 16px;
    text-align: left;
    margin-top: 10px;
    line-height: 1.6;
    animation: slideIn 1s ease-in-out;
}

.methodology {
    margin-top: 20px;
    padding: 15px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
}

.methodology h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.methodology ul {
    list-style-type: none;
    text-align: left;
}

.methodology li {
    padding: 8px 0;
    display: flex;
    align-items: center;
    font-size: 16px;
}

.methodology li::before {
    content: "✔";
    margin-right: 10px;
    color: #00ff99;
}

.learn-more {
    margin-top: 20px;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: white;
    transition: 0.3s ease-in-out;
}

.learn-more:hover {
    background: linear-gradient(135deg, #0072ff, #00c6ff);
    transform: translateY(-3px);
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
}

/* Mouse-following animation */
body::before {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    pointer-events: none;
    transition: transform 0.1s ease-out;
}
