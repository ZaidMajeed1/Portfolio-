document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".animated-text", { opacity: 1, y: -20, duration: 1 });
    gsap.from(".project-card", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.3 });
    gsap.from(".skills-list span", { opacity: 0, y: 20, duration: 1, stagger: 0.2 });

    // THREE.js 3D Objects
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Change background color to black

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 400);
    document.getElementById("three-container").appendChild(renderer.domElement);

    const sphereGeometry = new THREE.SphereGeometry();
    const cubeGeometry = new THREE.BoxGeometry();
    const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);

    const material = new THREE.MeshStandardMaterial({ color: 0x00c6ff, metalness: 0.5, roughness: 0.1 });

    const sphere = new THREE.Mesh(sphereGeometry, material);
    const cube = new THREE.Mesh(cubeGeometry, material);
    const torus = new THREE.Mesh(torusGeometry, material);

    sphere.position.x = -2;
    cube.position.x = 0;
    torus.position.x = 2;

    scene.add(sphere, cube, torus);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();

    // Adjust Three.js on Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / 400;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, 400);
    });
});