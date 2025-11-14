import * as THREE from 'three';
import { manager } from './manager';
import { addDefaultMeshes } from './meshes';
import { addAmbientLight, addPointLight, addKeyLight, addRimLight } from './lights';
import Model from './model';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

camera.position.z = 5;

const loadingManager = manager();

const meshes = {};
const mixers = [];

const clock = new THREE.Clock();

function init() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('three-container').appendChild(renderer.domElement);

  window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };

  // meshes.cubeWhite = addDefaultMeshes();
  // meshes.cubeRed = addDefaultMeshes(0xff0000);
  // scene.add(meshes.cubeWhite);
  // scene.add(meshes.cubeRed);

  scene.add(addAmbientLight());
  scene.add(addPointLight({ x: 1, y: 1, z: 1 }));
  scene.add(addKeyLight({ x: 1, y: 1, z: 1 }));
  scene.add(addRimLight({ x: 1, y: 1, z: 1 }));

  instances();
  animate();
}

function instances() {
  const flowers = new Model({
    name: 'flowers',
    url: 'flowers.glb',
    scene: scene,
    meshes: meshes,
    scale: new THREE.Vector3(2, 2, 2),
    position: new THREE.Vector3(0, -0.8, 3),
    animationState: true,
    mixers: mixers,
    manager: loadingManager,
  });

  flowers.init();
}

function animate() {
  const delta = clock.getDelta();
  for (const mixer of mixers) {
    mixer.update(delta);
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;

  meshes.flowers.rotation.y = x * Math.PI;
  meshes.flowers.rotation.x = y * Math.PI;
});

init();