// Set up the scene
$(document).ready(function(){

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(

        45, window.innerWidth/window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    camera.position.z = 70;

    // Create sphere

    var sphere = new THREE.Mesh(

    new THREE.SphereGeometry(5, 50, 50),

    new THREE.MeshLambertMaterial({

        color: 0xffd700
    }));    
    scene.add(sphere);

    // Create cube
    var cube = new THREE.Mesh(

    new THREE.CubeGeometry(7, 7, 7),

    new THREE.MeshLambertMaterial({

        color: 0xff0000
    }));

    cube.position.x = 10;
    cube.position.z = 15;


    scene.add(cube);



    // Create cone
    var cone = new THREE.Mesh(

    new THREE.CylinderGeometry(0, 5, 10, 50, 50, false),

    new THREE.MeshLambertMaterial({

        color: 0xc0c0c0
    }));

    cone.position.x = -10;
    cone.position.z = 15;    

    scene.add(cone);


    // Create cylinder    
    var cylinder = new THREE.Mesh(

    new THREE.CylinderGeometry(2.5, 2.5, 10, 50, 50, false),

    new THREE.MeshLambertMaterial({

        color: 0xff8c00
    }));

    cylinder.position.x = -30;

    scene.add(cylinder);


    // Create rectangular block
    var rect = new THREE.Mesh(

    new THREE.CubeGeometry(5, 10, 5),

    new THREE.MeshLambertMaterial({

        color: 0x00ffff

    }));

    rect.position.x = 7;

    rect.position.y = 15;
    scene.add(rect);

    // Create torus
    var torus = new THREE.Mesh(

    new THREE.TorusGeometry(5, 2, 10, 8),

    new THREE.MeshLambertMaterial({

        color: 0xFF00FF
    }));

    torus.position.x = -20;
    torus.position.y = 17;

    torus.position.z = -10;
    scene.add(torus);

    // Create torus knot
    var tknot = new THREE.Mesh(

    new THREE.TorusKnotGeometry(5, 1, 100, 100, 6, 10, 1),

    new THREE.MeshLambertMaterial({

        color: 0xf4a460
    }));

    tknot.position.x = 30;   

    scene.add(tknot);

    // Create pyramid
    var pyramid = new THREE.Mesh(

    new THREE.CylinderGeometry(0, 7, 10, 3, 1),

    new THREE.MeshLambertMaterial({

        color: 0x00ff00
    }));

    pyramid.position.x = 25;
    pyramid.position.y = 15;
    

    scene.add(pyramid);

            
    // Create floor
    plane1 = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshLambertMaterial({

        color: 0x1a1a1a
    }));

    plane1.position.z = -20;
    plane1.rotation.x = -45;
    scene.add(plane1);

    // Create left wall
    plane2 = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshLambertMaterial({

        color: 0x2f4f4f
    }));

    plane2.position.z = -20;
    plane2.rotation.y = 45;
    plane2.position.x = -76;
    plane2.position.y = 10;
    scene.add(plane2);

    // Create right wall
    plane3 = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshLambertMaterial({

        color: 0x2f4f4f

    }));

    plane3.position.z = -20;
    plane3.rotation.y = -45;
    plane3.position.x = 76;
    plane3.position.y = 10;
    scene.add(plane3);

    // Create back wall
    plane4 = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshLambertMaterial({

        color: 0x2f4f4f

    }));

    plane4.position.z = -63;
    plane4.position.y = 10;
    scene.add(plane4);

    // Create directional lighting
    
var directionalLight = new THREE.DirectionalLight(0xffffff);

        directionalLight.position.set(1, 1, 1);

    scene.add(directionalLight);


    // Create ambient lighting
    var ambientLight = new THREE.AmbientLight(0x708090);

    scene.add(ambientLight);


        // render and move stuff around
    
    function render() {

        requestAnimationFrame(render);

        sphere.rotation.x += 0.01;

        sphere.rotation.y += 0.01;
	

        cube.rotation.x += 0.02;

        cube.rotation.y += 0.01;

        cube.rotation.z += 0.01;


        cone.rotation.x -= 0.01;

        cone.rotation.y -= 0.02;

        cone.rotation.z -= 0.01;

	cylinder.rotation.x += 0.01;

        cylinder.rotation.y += 0.01;

        cylinder.rotation.z += 0.02;

	rect.rotation.x -= 0.01;

        rect.rotation.y -= 0.01;

        rect.rotation.z -= 0.01;


        torus.rotation.x += 0.01;

        torus.rotation.y += 0.01;

        torus.rotation.z += 0.01;

        pyramid.rotation.x += 0.01;

        pyramid.rotation.y -= 0.02;

        pyramid.rotation.z += 0.01;

	tknot.rotation.x += 0.02;

        tknot.rotation.y += 0.02;

        tknot.rotation.z += 0.02;              
    
    	renderer.render(scene, camera);

    }

    // Call render function
    render();

});