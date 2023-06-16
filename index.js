let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList='';
        menuVisible = false;
    }else{
        document.getElementById('nav').classList ='responsive';
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById('nav').classList = '';
    menuVisible = false;
}
function efectoHabilidades(){
    let skills = document.getElementById('skills');
    let distacia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distacia_skills >= 300){
        let habilidades = document.getElementsByClassName('progreso');
        habilidades[0].classList.add('javascript');
        habilidades[1].classList.add('htmlcss');
        habilidades[2].classList.add('react');
        habilidades[3].classList.add('comunicacion');
        habilidades[4].classList.add('trabajoenequipo');
        habilidades[5].classList.add('dedicacion');
    }
}
window.onscroll = function(){
    efectoHabilidades();
}