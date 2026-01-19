const app = document.getElementById("app");
const puppy = document.getElementById("puppy");
let name = "";

function setMood(mood) {
  puppy.className = "puppy " + mood;
}

function slide1() {
  setMood("");
  app.innerHTML = `
    <h2>Hiiiii 🐾</h2>
    <p>Enter your name</p>
    <input id="nameInput">
    <br><br>
    <button onclick="slide2()">Let’s Play 🎈</button>
  `;
}

function slide2() {
  name = document.getElementById("nameInput").value || "Cutie";
  setMood("");
  app.innerHTML = `
    <h2>Okieee ${name} 😛</h2>
    <p>Truth or Dare?</p>
    <button class="truth" onclick="truth()">Truth</button>
    <button class="dare" onclick="dare()">Dare</button>
  `;
}

function truth() {
  setMood("thinking");
  app.innerHTML = `
    <h2>Truth Time 🤭</h2>
    <p>
      Tell me one thing you like the MOST about me<br>
      and one thing you HATE the most about me.
    </p>
    <p><b>Tell this to the person who sent you this link 💌</b></p>
    <button onclick="cheer()">Done 🙈</button>
  `;
}

function dare() {
  setMood("thinking");
  let time = 10;

  app.innerHTML = `
    <h2>Dare Time 🐶</h2>
    <p>
      Send a voice note explaining our friendship —
      how it started, what it means to you, and why it’s special 💛
    </p>
    <h1 id="timer">10</h1>
  `;

  const interval = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;
    if (time === 0) {
      clearInterval(interval);
      cheer();
    }
  }, 1000);
}

function cheer() {
  setMood("excited");
  app.innerHTML = `
    <h1>YAYYYY 🎉</h1>
    <p>You did AMAZINGGG 🤍</p>
    <p>This was sooo much fun 🐾</p>
    <p>Thanks for playing 😄</p>
  `;
}

slide1();
