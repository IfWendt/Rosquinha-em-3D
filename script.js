// Cria a cena
const scene = new THREE.Scene();

// Cria a câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 7;

// Cria o renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cria a geometria da rosquinha
const geometry = new THREE.TorusGeometry(2, 1, 16, 100);

// Cria o material da rosquinha
const material = new THREE.MeshBasicMaterial({ color: 0x000ff });

// Cria a malha da rosquinha
const torus = new THREE.Mesh(geometry, material);

// Adiciona a rosquinha à cena
scene.add(torus);

// Função de animação
function animate() {
  requestAnimationFrame(animate);

  // Rotaciona a rosquinha
  torus.rotation.x += 0.02;
  torus.rotation.y += 0.02;

  // Renderiza a cena
  renderer.render(scene, camera);
}

// Inicia a animação
animate();
