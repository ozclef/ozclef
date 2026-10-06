const app = document.getElementById("app");
async function loadHTML(path){
    const res = await fetch(path);
    return await res.text();
}

async function viewApp(){
    return await loadHTML("https://oscarcruzdiaz.vercel.app/");
}
/*


async function loadHTML() {
    const response = await fetch("app");
    //const html = await response.text();
    const url = "https://oscarcruzdiaz.vercel.app/";

    //document.querySelector("https://oscarcruzdiaz.vercel.app").innerHTML = html;
app.innerHTML = html;
}
*/
