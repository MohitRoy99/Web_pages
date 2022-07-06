const nav = document.getElementById('mid') ;


const hamIcon = () =>{
   nav.classList.toggle('active') ;
   const icon = document.getElementById('hamburger-icon');
   icon.textContent = icon.textContent == "menu" ? "menu_open" : "menu";
}