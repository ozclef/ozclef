

//  ///  

const app = document.getElementById("app");

async function loadJSON(path){
  const res = await fetch(path);
  return res.json();
}

async function render(){
  const hash = location.hash || "#/feed";
  const [_, route] = hash.split("/");

///  const profile = await loadJSON("data/profile.json");

//   const profile = await loadJSON("data/profile.json");
const profile = await loadJSON("data/profile.json") || {
    theme:"dark",
    name:"oz clef",
    bio:"Blog website online posting",
    avatar:"/img/ico instituto abi.jpg",
    cover:""
};
	
async function loadJSON(path){
  try{
    const res = await fetch(path);

    if(!res.ok){
      throw new Error(`${path} ${res.status}`);
    }

    return await res.json();

  }catch(err){
    console.warn("No pude cargar:", path);
    return null;
  }
}

	

	

  document.documentElement.className = profile.theme === "light" ? "light" : "";

  let html = `
  <header>
    <div><strong><a href="./">Oscar Cruz Díaz</a></strong></div>
    <nav>
    <a href="#/feed">Feed</a>
    <a href="#/profile">Perfil</a>
    <a href="#/cv">Portafolio-cv</a>
      <a href="#/photos">Fotos</a>
      <a href="#/videos">Videos</a>
      <a href="#/settings">Ajustes</a>
    </nav>
  </header>
  <div class="container">
  `;

  if(route === "feed") html += await viewFeed();
  if(route === "profile") html += viewProfile(profile);	
  if(route === "cv") html += await viewCv();
  if(route === "photos") html += viewPhotos();
  if(route === "videos") html += viewVideos();
  if(route === "settings") html += viewSettings(profile);

  html += `</div>`;
  app.innerHTML = html;
}

async function viewFeed(){
  const feed = await loadJSON("data/feed.json");
  let out = `<div class="card-post"><h2>Feed</h2>`;
 feed.forEach(p=>{
    out += `
    <div class="feed-item" aling-items="column">
      <div>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
	  <br>
      <img  class="thumb" loading="lazy" width="500px" src="${p.img}"> 
	  <br>
        <a class="btn" href="${p.url}" color="black">Abrir</a>
		</div>
      </div>
	  
	  `;
  });
  return out + `</div>`;
}

function viewProfile(p){
  return `
<!---
<div class="cover" style="background-image:url('${p.cover}')"></div>
  <div class="card">
    <img class="profile-pic" src="${p.avatar}">
    <h2>${p.name}</h2>
    <p>${p.bio}</p>
  </div>

  <div class="card-post">
  </div>
----->

  <div class="card">
				  <p>COMPUTACION NEOROMORFICA? wow... mejor que lo Cúantico</p>
			  <iframe width="90%" height="360" src="https://www.youtube.com/embed/3ICERZTE2x8" title="Olvida la Computación Cuántica: Los Chips Neuromorficos son el Futuro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			  </div>

			  <div class="card-post" 			  margin="30px 30px 30px 30px">
			  <!---
			  --->
			  <script async src="https://js.stripe.com/v3/buy-button.js"></script>

<stripe-buy-button
  buy-button-id="buy_btn_1UJsVXE9DKIWSWdFu51CWMkW"
  publishable-key="pk_live_51TsqWWE9DKIWSWdFO36kdZtcOb9cpCw9xPXU8gbQGwYrLiBUyyXM73Nn40Mah0WZpwNypNh54by74fXTGA5HAeNQ00GTBKVUFD"
>
</stripe-buy-button>

<script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1UJt1mE9DKIWSWdFWBrCx0VL"
  publishable-key="pk_live_51TsqWWE9DKIWSWdFO36kdZtcOb9cpCw9xPXU8gbQGwYrLiBUyyXM73Nn40Mah0WZpwNypNh54by74fXTGA5HAeNQ00GTBKVUFD"
>
</stripe-buy-button>
				  
			  </div>
  <iframe src="https://ozclef.github.io/cv-portafolio/" width="97%" height="4503"></iframe>
  `;
}



async function viewCv(){

  return `
	<div class="card-post">	
      <h2>CV</h2>
      <iframe src="/feed/cv.html"
        width="100%"
        height="3000px"
        style="border:none;"
        loading="lazy">
      </iframe>
    </div>

	
  `;
}


function viewPhotos(){
  return `
        <iframe src="/feed/fotos.html"
        width="100%"
        height="6000"
        style="border:none;"
        loading="lazy">
      </iframe>
	  `;
}

function viewVideos(){
  return `
  
  <div class="card">
        <h2>Videos devs en facebook/youtube... </h2>

      <iframe src="/feed/videos.html"
        width="100%"
        height="14000"
        style="border:none;"
        loading="lazy">
      </iframe>
</div>
  `;
}

function viewSettings(p){
  return `
  <div class="card-post"><h2>Ajustes</h2>
    <p>Tema actual: <strong>${p.theme}</strong></p>
    <p>(En próxima versión editable desde UI)</p>
  </div>`;
}

window.addEventListener("hashchange", render);
render();
