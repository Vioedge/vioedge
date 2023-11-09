// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight1.position.set(0, 1, 0);
scene.add(directionalLight1);

// ...

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight2.position.set(0, -1, 0);
scene.add(directionalLight2);


// Load the 3D model
const loader = new THREE.GLTFLoader();
let model;

loader.load('scene.gltf', (gltf) => {
    model = gltf.scene;
    scene.add(model);
    model.position.set(0, 0, 0); // Set the model's position
});



// Set camera position
camera.position.z = 5;

// Add lighting
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);

    // Add any animations or interactivity here

    renderer.render(scene, camera);
};

animate();
