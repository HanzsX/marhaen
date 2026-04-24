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
   To provide strategic legal assistance in both ligation and nonlitigation matters
   <br>
   To uphold the principles of justice by prioritizing public interest in accordance with salus populi suprema lex esto
   <br>
   To act as a proactive legal partner in identifying, preventing, and managing clients'legal risks
   <br>
   To build long-term client relationships  based on professionalism, integrity, and trust.
    `;
  }
}
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});