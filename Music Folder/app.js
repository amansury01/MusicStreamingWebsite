const music=new Audio('Audio/audio1.mp3');
music.play()




const songs=[
    {
        id:1,
        songName:`On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/img1.jpeg"
    },
    {
        id:2,
        songName:`Calm Down<br>
        <div class="subtitle">Rema</div>`,
        poster: "img/CALM DOWN.jpeg"
    },
    {
        id:3,
        songName:`Night Changes<br>
        <div class="subtitle">One Direction</div>`,
        poster: "img/NIGHT CHANGES.jpg"
    },
    {
        id:4,
        songName:`Believer<br>
        <div class="subtitle">Imagine Dragon</div>`,
        poster: "img/BELIEVER.jpg"
    },
    {
        id:5,
        songName:`Perfect<br>
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "img/perfect.jpg"
    },
    {
        id:6,
        songName:`Shape of You<br>
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "img/SHAPE OF YOU.jpeg"
    },
    {
        id:7,
        songName:`Despacito<br>
        <div class="subtitle">Luis Fonsi</div>`,
        poster: "img/DESPACITO.jpg"
    },
    {
        id:8,
        songName:`Closer<br>
        <div class="subtitle">The Chainsmoker</div>`,
        poster: "img/CLOSER.jpg"
    },
    {
        id:9,
        songName:`Taki Taki<br>
        <div class="subtitle">Dj Snake</div>`,
        poster: "img/TAKI TAKI.jpg"
    },
    {
        id:10,
        songName:`Cheap Thrills<br>
        <div class="subtitle">Sia</div>`,
        poster: "img/CHEAP THRILLS.jpg"
    },
    {
        id:11,
        songName:`Let Me Love You<br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "img/LET ME LOVE YOU.jpg"
    },
    {
        id:12,
        songName:`Maharani<br>
        <div class="subtitle">Arpit Bala</div>`,
        poster: "img/MAHARANI.jpg"
    },
    {
        id:13,
        songName:`Lakk Nu Hila<br>
        <div class="subtitle">GD47</div>`,
        poster: "img/LAKK NU HILA.jpg"
    },
    {
        id:14,
        songName:`Waka Waka<br>
        <div class="subtitle">Shakira</div>`,
        poster: "img/WAKA WAKA.jpg"
    },
]
Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})
let masterPlay =document.getElementById('masterPlay');
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
    }else{

    }
})
// let masterPlay = document.getElementById('masterPlay');

// masterPlay.addEventListener('click', () => {
//     music.play();
// });


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});



pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -=330;
});