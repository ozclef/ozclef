
const app = document.getElementById("app");

async function loadHTML() {
    const response = await fetch("app");
    //const html = await response.text();

    document.querySelector("https://oscarcruzdiaz.vercel.app").innerHTML = html;
app.innerHTML = html;
}
