// Initialize the scene
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-model-viewer').appendChild(renderer.domElement);

// Load your 3D model using a loader (assuming your model is named "model.obj")
const loader = new THREE.OBJLoader();
loader.load('model.obj', (object) => {
    scene.add(object);
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
