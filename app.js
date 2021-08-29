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
        $("playlist").replaceWith('<iframe src="https://open.spotify.com/embed/playlist/0Irlk35VY2udpt1kBk0xhS?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>');
            break;
        case 'happy':
        $("playlist").replaceWith('<iframe src="https://open.spotify.com/embed/playlist/0Irlk35VY2udpt1kBk0xhS?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>');
            break;
        case 'sad':
        $("playlist").replaceWith('<iframe src="https://open.spotify.com/embed/playlist/0auIqTvjrk95HPE6mVGji3?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>');
            break;
        case 'angry':
            $("playlist").replaceWith('<iframe src="https://open.spotify.com/embed/episode/0c6NqF0IEoX1fBypjdUQgK?theme=0" width="90%" height="152" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>');
            break;
        case 'fearful':
            $("playlist").replacWwith('<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVtFO27AQ6dF?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>');
            break;
        case 'disgusted':
            $("playlist").replaceWith('<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4gOolUyeDaQ?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'); 
            break;
        case 'surprised':
            $("playlist").replaceWith('<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXd9zR7tdziuQ?theme=0" width="90%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>');    
            break;
        default: 
        $("playlist").replaceWith('<p> undefined emotion, can not get a playlist</p>);
                
        }

  })



  
