//https://developers.google.com/youtube/v3/quickstart/js
const api ='';


function ySearch(e){
    const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q=test&maxResults=20';
    document.querySelector('.output').textContent = url;
    fetch(url).then(function(rep){
        return rep.json()
    }).then(function(data){
        console.log(data);
    })
}