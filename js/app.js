async function loadHTML() {
    const response = await fetch("https://oscarcruzdiaz.vercel.app/");
    const html = await response.text();

    document.querySelector("#projects").innerHTML = html;
}
