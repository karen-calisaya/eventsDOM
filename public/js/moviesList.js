window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    /* let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    } */
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='black';
   /*  moviesListTitulo.style.backgroundColor = 'teal'; */
    moviesListTitulo.style.padding = '20px';


    let img = document.querySelector('img')
    img.addEventListener('mouseover', () => {
        body.style.backgroundColor = 'lightgrey';
    })
    img.addEventListener('mouseout', () => {
        body.style.backgroundColor = 'lightblue';
    })
    
}