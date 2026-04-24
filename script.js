// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function(){
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");

  if(nav.classList.contains("active")){
    toggle.innerHTML = "✕";
  } else {
    toggle.innerHTML = "☰";
  }
});

// TIMELINE CLICK
function toggleDetail(el){
  document.querySelectorAll(".timeline-item").forEach(item=>{
    if(item !== el) item.classList.remove("active");
  });
  el.classList.toggle("active");
}
function showVM(type, el){

  // ubah active tab
  document.querySelectorAll(".vm-item").forEach(item=>{
    item.classList.remove("active");
  });
  el.classList.add("active");

  // isi text
  const text = document.getElementById("vm-text");

  if(type === "visi"){
    text.innerHTML = `
    To deliver comprehensive, accurate, and solution oriented legal services 
    tailored to achieve the best outcomes for our clients.
    <br>
    To become a leading law firm recognized for trustworthiness, professionalism, 
    and integrity, upholding justice while prioritizing the public interest 
    as the foundation of every legal service.
  </div>
    `;
  } else {
   text.innerHTML = `
    <ul class="vm-list">
        <li>To provide strategic legal assistance in both litigation and non-litigation matters</li>
        <li>To uphold the principles of justice by prioritizing public interest</li>
        <li>To act as a proactive legal partner in identifying and managing legal risks</li>
        <li>To build long-term client relationships based on professionalism and trust</li>
    </ul>
`;
  }
}
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});

let currentIndex = 0;
const items = document.querySelectorAll(".gallery-item");

function updateGallery() {
  items.forEach((item, index) => {
    item.classList.remove("active");

    if (index === currentIndex) {
      item.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0; // balik ke awal
  }
  updateGallery();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = items.length - 1; // ke terakhir
  }
  updateGallery();
}

// init
updateGallery();