const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);
const app={
    songs:{
        name:"Có hẹn với thanh xuân",
        singer:"Monstar",
        path:"./assets/music/song1.mp3",
        image:"./assets/img/song1.jpg"
    },
    render: function() {
        const htmls=this.songs.map(song => {
            return `
                <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                <i class="fas fa-ellipsis-h"></i>
                </div>
                </div>
            `
        })
        $(".playlist").innerHTML = htmls.join('');
    },
    start: function() {
        this.render();
    }
}

app.start()