var VideoUrl = "https://www.googleapis.com/youtube/v3/videos/";

fetch(VideoUrl + `?part=snippet&type=video&maxResults=10&key=AIzaSyA2zCj0pIUF7sICarxKM1QECU44H8clcUA&regionCode=FR&chart=mostPopular`).then(res => res.json()).then((infoData) => {
    fetch(VideoUrl + `?part=player&type=video&maxResults=10&key=AIzaSyA2zCj0pIUF7sICarxKM1QECU44H8clcUA&regionCode=FR&chart=mostPopular`).then(res => res.json()).then((VideoData) => {
        console.log(VideoData);
        console.log(infoData);
        for (var i = 0;i<= VideoData.items.length;i++ ){
            document.querySelector('.content').innerHTML += `       <div class="card text-white bg-dark mb-3" >

  <div class="card-body">
    
  <a href="https://www.youtube.com/embed/oVPalWgFkXE" target="_blank"><img
    src="${infoData.items[i].snippet.thumbnails.standard.url}"
    class="card-img-top"
    alt="..."
  /></a>
  <br><br>
    <h5 class="card-title text-center">${infoData.items[i].snippet.localized.title}</h5>
    
    <br>
    <br>
   <table class="table text-center">
    <thead class="table-light text-center
        <tr>
            <td>Property</td>
            <td>Value</td>
        </tr>
    </thead>

    <tbody class="text-white">
        <tr>
            <td text-center>
                Description
            </td>
            <td>
                ${infoData.items[i].snippet.localized.description}
            </td>
        </tr>
        <tr>
            <td text-center>
                Published
            </td>
            <td>
                ${infoData.items[i].snippet.publishedAt}
            </td>
        </tr>
    </tbody>
</table>
  </div>
</div>`
        }
    })
});
