//https://developers.google.com/youtube/v3/quickstart/js
const api = '';
const output =  document.querySelector('.output');
const searchTerm = document.querySelector('input');
const btn = document.querySelector('button');
searchTerm.setAttribute('value','test');
btn.addEventListener('click',ySearch);



function ySearch(e) {
    let search = searchTerm.value;
    search = encodeURIComponent(search);
    const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key=' + api + '&q='+search+'&maxResults=20';
   output.textContent = url;
   
/*    fetch(url).then(function (rep) {
        return rep.json()
    }).then(function (data) {
        console.log(data);
    })*/
}