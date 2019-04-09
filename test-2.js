/* global THREE, dat, $ */
// once everything is loaded, we run our Three.js stuff.		
$(function () {
	
	// create a scene, that will hold all our elements such as objects, cameras and lights.
	var scene   = new THREE.Scene();
	
	// create a camera, which defines where we're looking at.
	var camera  = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	
	// create a render and set the size
	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0xEEEEEE));
	renderer.setSize(window.innerWidth, window.innerHeight);
// 	renderer.shadowMap.enabled = true;
// 	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	// create the ground plane
	var planeGeometry   = new THREE.PlaneGeometry(200, 30, 1, 1);
	var planeMaterial   = new THREE.MeshLambertMaterial({color: 0x6b6b6b});
	
	var plane   = new THREE.Mesh(planeGeometry, planeMaterial);
// 	plane.receiveShadow  = true;
    // position the plane
	plane.position.x    = 0;
	plane.position.y    = -20;
	plane.position.z    = 0;
	
	// add the plane to the scene
	scene.add(plane);	

    // instantiate a loader
    // var loader = new THREE.SVGLoader();

    // load a SVG resource
    // loader.load('data/car.svg', function ( paths ) {

    //     	var obj = new THREE.SVGObject(paths);
    //     	scene.add( obj );
    
    // 	},
    // 	// called when loading is in progresses
    // 	function ( xhr ) {    
    // 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );    
    // 	},
    // 	// called when loading has errors
    // 	function ( error ) {    
    // 		console.log( 'An error happened' );    
    // 	}
    // );



	// position and point the camera to the center of the scene
	camera.position.x = 0;
	camera.position.y = 10;
	camera.position.z = 70;
	camera.lookAt(scene.position);
	
	// add subtle ambient lighting
	var ambientLight = new THREE.AmbientLight(0xffffff);
	scene.add(ambientLight);
	
	// add spotlight for the shadows
// 	var spotLight = new THREE.SpotLight(0xffffff);
// 	spotLight.position.set( -40, 60, -10 );
// 	spotLight.castShadow = true;
// 	spotLight.shadow.mapSize.width = 1024; // default is 512
// 	spotLight.shadow.mapSize.height = 1024; // default is 512
// 	scene.add( spotLight );
	
	// add the output of the renderer to the html element
	$("#WebGL-output").append(renderer.domElement);
		
	function render() {
		
		// render using requestAnimationFrame
		// requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	
	render();
});