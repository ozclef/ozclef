async function loadHTML() {
    const response = await fetch("...");
    const html = await response.text();

    document.querySelector("#projects").innerHTML = html;
}
