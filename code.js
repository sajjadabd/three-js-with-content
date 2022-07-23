const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth / 2, window.innerHeight / 2 );
renderer.setClearColor(0xffffff, 0);

const renderer2 = new THREE.WebGLRenderer();
renderer2.setSize( window.innerWidth / 2, window.innerHeight / 2 );
renderer2.setClearColor(0xffffff, 0);

document.getElementById('three1').appendChild( renderer.domElement );
document.getElementById('three2').appendChild( renderer2.domElement );

function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
	renderer.render( scene, camera );
  renderer2.render( scene, camera );
}
animate();