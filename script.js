const mode = document.querySelector('.mode')
mode.addEventListener('click', function(){
    document.body.classList.toggle('theme')
    if (document.body.classList.contains('theme')){
        mode.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'
    }else{
        mode.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
    }
})