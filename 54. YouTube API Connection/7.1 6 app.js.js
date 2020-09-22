//https://developers.google.com/youtube/v3/quickstart/js
const api = '';
const output = document.querySelector('.output');
const searchTerm = document.querySelector('input');
const btn = document.querySelector('button');
searchTerm.setAttribute('value', 'test');
btn.addEventListener('click', ySearch);

function ySearch(e) {
    let search = searchTerm.value;
    search = encodeURIComponent(search);
    const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key=' + api + '&q=' + search + '&maxResults=20';
    //output.textContent = url;
    fetch(url).then(function (rep) {
        return rep.json()
    }).then(function (data) {
        console.log(data);
        let data1 = data.items.map(function (x) {
            return {
                title: x.snippet.title
                , des: x.snippet.description
                , img: x.snippet.thumbnails.default.url
                , id: x.id.videoId
                , x: x
            }
        })
        show(data1);
    })
}

function show(data) {
    console.log(data);
    console.log(data.length);
    data.forEach(function (video) {
        console.log(video);
        let div = document.createElement('div');
        div.classList.add('box');
        let temp = document.createTextNode(video.des);
        let span = document.createElement('span');
        span.innerHTML = '<a href="http://www.youtube.com/watch?v=' + video.id + '" target="_blank">' + video.title + '</a>';
        div.appendChild(span);
        div.appendChild(temp);
        output.appendChild(div);
    })
}