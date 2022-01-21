$(document).ready(function () {
    //zmienne
    var start = true;
    var mixers = [];
    var x = $(window).width();
    var y = $(window).height();
    var scene = new THREE.Scene();
    var kat = 0;//poruszanie kamerą 
    var camera = new THREE.PerspectiveCamera(
        45, // kąt patrzenia kamery (FOV - field of view)
        x / y, // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
        0.1, // minimalna renderowana odległość
        10000 // maxymalna renderowana odległość
    );
    var renderer = new THREE.WebGLRenderer();


    camera.position.set(150, 150, 150);
    camera.lookAt(scene.position);
    renderer.setClearColor(0x000000);
    renderer.setSize(x, y);
    $("#root").append(renderer.domElement);

  
    var klik = [];
    var clickedVect; // wektor określający punkt kliknięcia
    var directionVect; // wektor określający kierunek ruchu playera
    var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
    var mouseVector = new THREE.Vector2() // ten wektor czyli pozycja w przestrzeni 2D na ekranie(x,y) wykorzystany będzie do określenie pozycji myszy na ekranie a potem przeliczenia na pozycje 3D
    
    var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    

    $(document).mousedown(function (event) {
//miejsce  nan reja
         
    })
   
    //Linie osi wspolrzednych
    /*
        var axes = new THREE.AxesHelper(1000);
        scene.add(axes);
    */
    //Powierzchnia
    // var geo = new THREE.PlaneGeometry(200, 200, 0);
    // var mata = new THREE.MeshNormalMaterial({
    //     side: THREE.DoubleSide,
    // })
    // var powierzchnia = new THREE.Mesh(geo, mata);
    // powierzchnia.rotation.x += (Math.PI / 2);
    // scene.add(powierzchnia);
   
var fire  =  new Fire();
scene.add(fire.getFireCont());
    // var player = new Player();
    // player.getPlayerCont().position.set(0,0,0);;
    // scene.add(player.getPlayerCont())
  
    
      
    
 //   console.log(player.getPlayerCont().position.clone().distanceTo(clickedVect))
    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
  
        fire.updateFire() 
        camera.lookAt(scene.position)

    }
    render();
});
