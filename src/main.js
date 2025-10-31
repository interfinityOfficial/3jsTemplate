import * as THREE from 'three';
import { addDefaultMeshes } from './meshes';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

camera.position.z = 5;

const meshes = {};

let angle = 0;

function init() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('three-container').appendChild(renderer.domElement);

  window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };

  meshes.cubeWhite = addDefaultMeshes();
  meshes.cubeRed = addDefaultMeshes(0xff0000);
  scene.add(meshes.cubeWhite);
  scene.add(meshes.cubeRed);

  animate();
}

function animate() {
  renderer.render(scene, camera);
  meshes.cubeWhite.position.x = Math.sin(angle) * 2;
  meshes.cubeWhite.position.y = Math.cos(angle) * 2;
  angle += 0.01;
  // meshes.cubeWhite.rotation.x = angle;
  // meshes.cubeWhite.rotation.y = angle;
  // meshes.cubeWhite.rotation.z = angle;

  meshes.cubeRed.rotation.x = angle;
  meshes.cubeRed.rotation.y = angle;
  meshes.cubeRed.rotation.z = angle;
  requestAnimationFrame(animate);
}

init();