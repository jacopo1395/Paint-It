'use strict';

Physijs.scripts.worker = '../js/physijs_worker.js';
Physijs.scripts.ammo = '../js/ammo.js';

    var initScene, render, renderer, scene, camera, box;

    initScene = function() {
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.getElementById( 'viewport' ).appendChild( renderer.domElement );

        scene = new Physijs.Scene;

        camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 1, 1500);

        camera.position.set( 60, 50, 60 );
        camera.lookAt( scene.position );
        scene.add( camera );

        var geometry = new THREE.BoxGeometry(100, 100, 20);
        var material = new THREE.MeshBasicMaterial({ color: 0x888888 })
        // Box
        box = new Physijs.BoxMesh(
            new THREE.CubeGeometry( 5, 5, 5 ),
            new THREE.MeshBasicMaterial({ color: 0x888888 })
        );

        var mesh = new THREE.Mesh(geometry, material);
        scene.add( box );
        scene.add(mesh);

        requestAnimationFrame( render );
    };

    render = function() {
        scene.simulate(); // run physics
        renderer.render( scene, camera); // render the scene
        requestAnimationFrame( render );
    };

    window.onload = initScene();
