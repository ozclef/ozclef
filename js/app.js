//    const response = await fetch("app");
//  async function loadHTML(){
const app = document.getElementById("app");
async function loadApp(){
    // return `
    app.innerHTML() = `
    <header>
			<div><strong><a href="/">
			Os - Dev
			</a></strong></div>	
		<nav>
			<a href="#/feed">Feed</a>		
		</nav>
	</header>
	<div class="container">
		<div class="layout">
			<aside>
      </aside>
	  <main>
	  </main>
	  <aside>
	  </aside>
			<!--- DIV DE LAYOUT   ---------->
		</div>
    `;
}

/*
loadApp ();
    return await loadHTML("https://oscarcruzdiaz.vercel.app/index.html");
    return await res.text();
}


async function loadHTML() {
    const res = await fetch();
    //const html = await response.text();
    const url = "https://oscarcruzdiaz.vercel.app/";

    //document.querySelector("https://oscarcruzdiaz.vercel.app").innerHTML = html;
}
*/
