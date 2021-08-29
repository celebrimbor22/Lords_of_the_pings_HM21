const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

emocion = params.result;

document.addEventListener('DOMContentLoaded', (event) => {
    swal({
        title: "Resultados obtenidos: ",
        text: "Tu emocion es "+ emocion,
        icon: "info",
        button: "Entendido",
      });


      switch(emocion){

        case 'neutral': 
            playlist =  <iframe src="https://open.spotify.com/embed/playlist/0Irlk35VY2udpt1kBk0xhS?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        case 'happy':
            playlist =  <iframe src="https://open.spotify.com/embed/playlist/3SgZSLhamfQdUgo0fGptJt?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        case 'sad':
            playlist = <iframe src="https://open.spotify.com/embed/playlist/0auIqTvjrk95HPE6mVGji3?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        case 'angry':
            playlist = <iframe src="https://open.spotify.com/embed/episode/0c6NqF0IEoX1fBypjdUQgK?theme=0" width="90%" height="152" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        case 'fearful':
            playlist = <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVtFO27AQ6dF?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        case 'disgusted':
            playlist = <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4gOolUyeDaQ?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        case 'surprised':
            playlist = <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXd9zR7tdziuQ?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        default: 
            playlist = <p> undefined emotion, can not get a playlist</p>
        
        }
        $("playlist").replacewith(playlist);
  })



  
