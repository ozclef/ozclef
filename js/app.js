//    const response = await fetch("app");
const app = document.getElementById("app");
async function loadHTML("oscarcruzdiaz.vercel.app/index.html"){
    const res = await fetch();
    return await res.text();
}

/*
async function viewApp(){
    return await loadHTML("https://oscarcruzdiaz.vercel.app/index.html");
}


async function loadHTML() {
    //const html = await response.text();
    const url = "https://oscarcruzdiaz.vercel.app/";

    //document.querySelector("https://oscarcruzdiaz.vercel.app").innerHTML = html;
app.innerHTML = html;
}
*/
