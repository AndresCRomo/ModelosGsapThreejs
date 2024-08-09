import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
camera.position.z = 5;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ambientlight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientlight);



const AxesHelper = new THREE.AxesHelper(5);
scene.add(AxesHelper);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();



const loader = new GLTFLoader();
loader.load("src/assets/3dmodels/hiphop/album-Hiphop.gltf", (gltf) => {
  const model = gltf.scene;
  model.scale.set(30, 30, 30);
  


  scene.add(model);

  function animate() {
    requestAnimationFrame(animate);
    
    renderer.render(scene, camera);
  }
  animate();
}, undefined, (error) => {
  console.error("Error al Cargar el modelo:",error);
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});
/*

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xffff00, 1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 5, 11);
camera.lookAt(0, 0, 0);

const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshBasicMaterial({
  color: 0x555555,
  side: THREE.DoubleSide,
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.position.y = -10;
scene.add(ground);

const ambientlight = new THREE.AmbientLight(0xffffff, 1);
ambientlight.position.set(0, 70, 0);
scene.add(ambientlight);

const light = new THREE.SpotLight(0xffffff, 1, 70, 0.7, 0);
light.position.set(0, 30, 0);
scene.add(light);

const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load(
  "src/assets/3dmodels/12_vinyl_record/textures/REC0002_Textures_normal.png"
);
const metalTexture = textureLoader.load(
  "src/assets/3dmodels/12_vinyl_record/textures/REC0002_Textures_metallicRoughness.png"
);
const baseTexture = textureLoader.load(
  "src/assets/3dmodels/12_vinyl_record/textures/REC0002_Textures_baseColor.png"
);

baseTexture.wrapS = THREE.RepeatWrapping;
baseTexture.wrapT = THREE.RepeatWrapping;
baseTexture.rotation = Math.PI / 2; // Rota la textura 90 grados

let disc;

loader.load(
  "src/assets/3dmodels/12_vinyl_record.glb",
  function (gltf) {
    disc = gltf.scene;

    disc.scale.set(50, 50, 50);
    disc.rotation.set(0, 1.2, Math.PI / 2);

    disc.traverse(node=>{
    if(node.isMesh){
      node.material.map=baseTexture;
      node.material.normalMap=normalTexture;
      node.material.roughnessMap= metalTexture;
      node.material.metalnessMap= metalTexture;
      
    } 
  })
    scene.add(disc);
    animate();
    animateDisc();
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.enablePan = true;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 0, 0);
controls.update();

function animateDisc() {
  gsap.to(disc.rotation, {
    duration: 4,
    z: Math.PI * 2,
    repeat: -1,
    ease: "none",
  });
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();*/



createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <BrowserRouter>
      
    </BrowserRouter>
  </React.StrictMode>,
);
