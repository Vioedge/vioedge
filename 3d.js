// 3d.js

// Initialize the scene
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-model-viewer').appendChild(renderer.domElement);

// Import OBJLoader2
import { OBJLoader2 } from './three.js/examples/jsm/loaders/OBJLoader2.js';


// Create an instance of the OBJLoader2
const loader = new OBJLoader2();

// Load your 3D model
loader.load('https://raw.githubusercontent.com/Vioedge/vioedge.github.io/main/matrix.obj', (object) => {
    scene.add(object);
    animate(); // Call animate() after the model is loaded.
});

// Add lighting if necessary
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Animation/rendering loop
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
