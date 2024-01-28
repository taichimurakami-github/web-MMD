<script lang="ts">
  // import svelteLogo from "./assets/svelte.svg";
  // import viteLogo from "/vite.svg";
  // import Counter from "./lib/Counter.svelte";
  import * as THREE from "three";

  // @ts-ignore
  import { MMDLoader } from "three/addons/loaders/MMDLoader";
  // import WebGPURenderer from "three/examples/jsm/renderers/webgpu/WebGPURenderer.js";

  // https://threejs.org/docs/#examples/en/loaders/MMDLoader
  // https://github.com/hanakla/three-mmd-loader/tree/master

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // const renderer = new WebGPURenderer();
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new MMDLoader();
  console.log(loader.load);

  const handleOnError = (error: ErrorEvent) => {
    console.log(error);
  };

  const handleOnProgress = (progress: ProgressEvent) => {
    console.log(progress);
  };

  const handleOnLoad = (mesh: THREE.Mesh) => {
    console.log(mesh);
    scene.add(mesh);
  };

  loader.load(
    "assets/mmd/Hakari_Atsuko/Hakari_Atsuko.pmx",
    handleOnLoad,
    // function (mesh) {
    //   console.log(mesh);
    //   scene.add(mesh);
    // },
    handleOnProgress,
    handleOnError
  );
</script>

<main>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Web-MMD</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p> -->
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
