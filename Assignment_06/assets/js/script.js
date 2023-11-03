window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('homePage');
    loadingScreen.style.display = 'none';

});

const myfunction = () => {
    const loadingScreen = document.getElementById('loading_page');
    loadingScreen.style.display = 'none';
}

$('#btn').on('click', function(){
    const loadingScreen = document.getElementById('homePage');
    loadingScreen.style.display = 'block';
    myfunction();

});
