var camera, controls, scene, renderer;
function attach_renderer(target) {

	var SCREEN_WIDTH = 900, SCREEN_HEIGHT = 400;
	var VIEW_ANGLE = 35, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
	target.appendChild( renderer.domElement );

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE, // Field of view
		ASPECT, // Aspect ratio
		NEAR, // Near plane
		FAR // Far plane
	);
	camera.position.set(6.49435320175,6.49435320175,1.0);
                camera.lookAt( scene.position );
                 // placeholder for the FreeCAD camera
	controls = new THREE.TrackballControls( camera );

	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	controls.keys = [ 65, 83, 68 ];

	var geom = new THREE.Geometry();
                var v0 = new THREE.Vector3(0.188371558588,-2.99408018528,0.5);
                var v1 = new THREE.Vector3(0.188371558588,-2.99408018528,0.0);
                var v2 = new THREE.Vector3(0.927050983125,-2.85316954889,0.0);
                var v3 = new THREE.Vector3(0.927050983125,-2.85316954889,0.5);
                var v4 = new THREE.Vector3(1.60748038494,-2.53298377651,0.5);
                var v5 = new THREE.Vector3(1.60748038494,-2.53298377651,0.0);
                var v6 = new THREE.Vector3(2.90574948339,0.746069661495,0.5);
                var v7 = new THREE.Vector3(3.0,-7.34788079488e-16,0.0);
                var v8 = new THREE.Vector3(2.90574948339,0.746069661495,0.0);
                var v9 = new THREE.Vector3(3.0,-7.34788079488e-16,0.5);
                var v10 = new THREE.Vector3(2.18690588226,-2.05364131779,0.5);
                var v11 = new THREE.Vector3(2.18690588226,-2.05364131779,0.0);
                var v12 = new THREE.Vector3(2.62892004013,1.44526102231,0.5);
                var v13 = new THREE.Vector3(2.62892004013,1.44526102231,0.0);
                var v14 = new THREE.Vector3(2.62892004013,-1.44526102231,0.5);
                var v15 = new THREE.Vector3(2.62892004013,-1.44526102231,0.0);
                var v16 = new THREE.Vector3(2.18690588226,2.05364131779,0.5);
                var v17 = new THREE.Vector3(2.18690588226,2.05364131779,0.0);
                var v18 = new THREE.Vector3(2.90574948339,-0.746069661495,0.5);
                var v19 = new THREE.Vector3(2.90574948339,-0.746069661495,0.0);
                var v20 = new THREE.Vector3(1.60748038494,2.53298377651,0.5);
                var v21 = new THREE.Vector3(1.60748038494,2.53298377651,0.0);
                var v22 = new THREE.Vector3(0.927050983125,2.85316954889,0.5);
                var v23 = new THREE.Vector3(0.927050983125,2.85316954889,0.0);
                var v24 = new THREE.Vector3(0.188371558588,2.99408018528,0.5);
                var v25 = new THREE.Vector3(0.188371558588,2.99408018528,0.0);
                var v26 = new THREE.Vector3(-0.562143943757,2.94686175219,0.0);
                var v27 = new THREE.Vector3(-0.562143943757,2.94686175219,0.5);
                var v28 = new THREE.Vector3(-1.2773378747,2.7144811574,0.5);
                var v29 = new THREE.Vector3(-1.2773378747,2.7144811574,0.0);
                var v30 = new THREE.Vector3(-1.91227196925,2.31153972833,0.0);
                var v31 = new THREE.Vector3(-1.91227196925,2.31153972833,0.5);
                var v32 = new THREE.Vector3(-2.42705098312,1.76335575688,0.5);
                var v33 = new THREE.Vector3(-2.42705098312,1.76335575688,0.0);
                var v34 = new THREE.Vector3(-2.78932945766,1.10437365805,0.5);
                var v35 = new THREE.Vector3(-2.78932945766,1.10437365805,0.0);
                var v36 = new THREE.Vector3(-2.97634410394,0.375999700693,0.0);
                var v37 = new THREE.Vector3(-2.97634410394,0.375999700693,0.5);
                var v38 = new THREE.Vector3(-2.97634410394,-0.375999700693,0.5);
                var v39 = new THREE.Vector3(-2.97634410394,-0.375999700693,0.0);
                var v40 = new THREE.Vector3(-2.78932945766,-1.10437365805,0.5);
                var v41 = new THREE.Vector3(-2.78932945766,-1.10437365805,0.0);
                var v42 = new THREE.Vector3(-2.42705098312,-1.76335575688,0.0);
                var v43 = new THREE.Vector3(-2.42705098312,-1.76335575688,0.5);
                var v44 = new THREE.Vector3(-1.91227196925,-2.31153972833,0.5);
                var v45 = new THREE.Vector3(-1.91227196925,-2.31153972833,0.0);
                var v46 = new THREE.Vector3(-1.2773378747,-2.7144811574,0.5);
                var v47 = new THREE.Vector3(-1.2773378747,-2.7144811574,0.0);
                var v48 = new THREE.Vector3(-0.562143943757,-2.94686175219,0.5);
                var v49 = new THREE.Vector3(-0.562143943757,-2.94686175219,0.0);
                var v50 = new THREE.Vector3(-1.0198783836,1.23282118844,0.5);
                var v51 = new THREE.Vector3(-0.681246866504,1.44772328395,0.5);
                var v52 = new THREE.Vector3(1.40209068807,-0.770805878563,0.5);
                var v53 = new THREE.Vector3(1.54973305781,-0.397903819464,0.5);
                var v54 = new THREE.Vector3(1.6,-3.91886975727e-16,0.5);
                var v55 = new THREE.Vector3(-0.299810103337,1.57165960117,0.5);
                var v56 = new THREE.Vector3(0.100464831247,1.59684276549,0.5);
                var v57 = new THREE.Vector3(-1.294427191,-0.940456403668,0.5);
                var v58 = new THREE.Vector3(-1.0198783836,-1.23282118844,0.5);
                var v59 = new THREE.Vector3(1.54973305781,0.397903819464,0.5);
                var v60 = new THREE.Vector3(-0.681246866504,-1.44772328395,0.5);
                var v61 = new THREE.Vector3(-1.48764237742,-0.588999284295,0.5);
                var v62 = new THREE.Vector3(-0.299810103337,-1.57165960117,0.5);
                var v63 = new THREE.Vector3(0.494427191,1.52169042607,0.5);
                var v64 = new THREE.Vector3(0.857322871966,1.3509246808,0.5);
                var v65 = new THREE.Vector3(1.40209068807,0.770805878563,0.5);
                var v66 = new THREE.Vector3(1.16634980387,1.09527536949,0.5);
                var v67 = new THREE.Vector3(-1.5873835221,-0.200533173703,0.5);
                var v68 = new THREE.Vector3(0.100464831247,-1.59684276549,0.5);
                var v69 = new THREE.Vector3(-1.5873835221,0.200533173703,0.5);
                var v70 = new THREE.Vector3(0.494427191,-1.52169042607,0.5);
                var v71 = new THREE.Vector3(-1.48764237742,0.588999284295,0.5);
                var v72 = new THREE.Vector3(0.857322871966,-1.3509246808,0.5);
                var v73 = new THREE.Vector3(-1.294427191,0.940456403668,0.5);
                var v74 = new THREE.Vector3(1.16634980387,-1.09527536949,0.5);
                var v75 = new THREE.Vector3(-0.681246866504,1.44772328395,0.0);
                var v76 = new THREE.Vector3(-1.0198783836,1.23282118844,0.0);
                var v77 = new THREE.Vector3(1.40209068807,-0.770805878563,0.0);
                var v78 = new THREE.Vector3(1.54973305781,-0.397903819464,0.0);
                var v79 = new THREE.Vector3(1.6,-3.91886975727e-16,0.0);
                var v80 = new THREE.Vector3(0.100464831247,1.59684276549,0.0);
                var v81 = new THREE.Vector3(-0.299810103337,1.57165960117,0.0);
                var v82 = new THREE.Vector3(-1.294427191,-0.940456403668,0.0);
                var v83 = new THREE.Vector3(-1.0198783836,-1.23282118844,0.0);
                var v84 = new THREE.Vector3(1.54973305781,0.397903819464,0.0);
                var v85 = new THREE.Vector3(-0.681246866504,-1.44772328395,0.0);
                var v86 = new THREE.Vector3(-1.48764237742,-0.588999284295,0.0);
                var v87 = new THREE.Vector3(-0.299810103337,-1.57165960117,0.0);
                var v88 = new THREE.Vector3(0.857322871966,1.3509246808,0.0);
                var v89 = new THREE.Vector3(0.494427191,1.52169042607,0.0);
                var v90 = new THREE.Vector3(1.40209068807,0.770805878563,0.0);
                var v91 = new THREE.Vector3(1.16634980387,1.09527536949,0.0);
                var v92 = new THREE.Vector3(-1.5873835221,-0.200533173703,0.0);
                var v93 = new THREE.Vector3(0.100464831247,-1.59684276549,0.0);
                var v94 = new THREE.Vector3(-1.5873835221,0.200533173703,0.0);
                var v95 = new THREE.Vector3(0.494427191,-1.52169042607,0.0);
                var v96 = new THREE.Vector3(-1.48764237742,0.588999284295,0.0);
                var v97 = new THREE.Vector3(0.857322871966,-1.3509246808,0.0);
                var v98 = new THREE.Vector3(-1.294427191,0.940456403668,0.0);
                var v99 = new THREE.Vector3(1.16634980387,-1.09527536949,0.0);
                console.log(geom.vertices)
                geom.vertices.push(v0);
                geom.vertices.push(v1);
                geom.vertices.push(v2);
                geom.vertices.push(v3);
                geom.vertices.push(v4);
                geom.vertices.push(v5);
                geom.vertices.push(v6);
                geom.vertices.push(v7);
                geom.vertices.push(v8);
                geom.vertices.push(v9);
                geom.vertices.push(v10);
                geom.vertices.push(v11);
                geom.vertices.push(v12);
                geom.vertices.push(v13);
                geom.vertices.push(v14);
                geom.vertices.push(v15);
                geom.vertices.push(v16);
                geom.vertices.push(v17);
                geom.vertices.push(v18);
                geom.vertices.push(v19);
                geom.vertices.push(v20);
                geom.vertices.push(v21);
                geom.vertices.push(v22);
                geom.vertices.push(v23);
                geom.vertices.push(v24);
                geom.vertices.push(v25);
                geom.vertices.push(v26);
                geom.vertices.push(v27);
                geom.vertices.push(v28);
                geom.vertices.push(v29);
                geom.vertices.push(v30);
                geom.vertices.push(v31);
                geom.vertices.push(v32);
                geom.vertices.push(v33);
                geom.vertices.push(v34);
                geom.vertices.push(v35);
                geom.vertices.push(v36);
                geom.vertices.push(v37);
                geom.vertices.push(v38);
                geom.vertices.push(v39);
                geom.vertices.push(v40);
                geom.vertices.push(v41);
                geom.vertices.push(v42);
                geom.vertices.push(v43);
                geom.vertices.push(v44);
                geom.vertices.push(v45);
                geom.vertices.push(v46);
                geom.vertices.push(v47);
                geom.vertices.push(v48);
                geom.vertices.push(v49);
                geom.vertices.push(v50);
                geom.vertices.push(v51);
                geom.vertices.push(v52);
                geom.vertices.push(v53);
                geom.vertices.push(v54);
                geom.vertices.push(v55);
                geom.vertices.push(v56);
                geom.vertices.push(v57);
                geom.vertices.push(v58);
                geom.vertices.push(v59);
                geom.vertices.push(v60);
                geom.vertices.push(v61);
                geom.vertices.push(v62);
                geom.vertices.push(v63);
                geom.vertices.push(v64);
                geom.vertices.push(v65);
                geom.vertices.push(v66);
                geom.vertices.push(v67);
                geom.vertices.push(v68);
                geom.vertices.push(v69);
                geom.vertices.push(v70);
                geom.vertices.push(v71);
                geom.vertices.push(v72);
                geom.vertices.push(v73);
                geom.vertices.push(v74);
                geom.vertices.push(v75);
                geom.vertices.push(v76);
                geom.vertices.push(v77);
                geom.vertices.push(v78);
                geom.vertices.push(v79);
                geom.vertices.push(v80);
                geom.vertices.push(v81);
                geom.vertices.push(v82);
                geom.vertices.push(v83);
                geom.vertices.push(v84);
                geom.vertices.push(v85);
                geom.vertices.push(v86);
                geom.vertices.push(v87);
                geom.vertices.push(v88);
                geom.vertices.push(v89);
                geom.vertices.push(v90);
                geom.vertices.push(v91);
                geom.vertices.push(v92);
                geom.vertices.push(v93);
                geom.vertices.push(v94);
                geom.vertices.push(v95);
                geom.vertices.push(v96);
                geom.vertices.push(v97);
                geom.vertices.push(v98);
                geom.vertices.push(v99);
                geom.faces.push( new THREE.Face3(0, 1, 2) );
                geom.faces.push( new THREE.Face3(3, 0, 2) );
                geom.faces.push( new THREE.Face3(4, 3, 2) );
                geom.faces.push( new THREE.Face3(4, 2, 5) );
                geom.faces.push( new THREE.Face3(6, 7, 8) );
                geom.faces.push( new THREE.Face3(6, 9, 7) );
                geom.faces.push( new THREE.Face3(10, 4, 5) );
                geom.faces.push( new THREE.Face3(10, 5, 11) );
                geom.faces.push( new THREE.Face3(12, 8, 13) );
                geom.faces.push( new THREE.Face3(12, 6, 8) );
                geom.faces.push( new THREE.Face3(14, 11, 15) );
                geom.faces.push( new THREE.Face3(14, 10, 11) );
                geom.faces.push( new THREE.Face3(16, 13, 17) );
                geom.faces.push( new THREE.Face3(18, 14, 15) );
                geom.faces.push( new THREE.Face3(16, 12, 13) );
                geom.faces.push( new THREE.Face3(18, 15, 19) );
                geom.faces.push( new THREE.Face3(9, 19, 7) );
                geom.faces.push( new THREE.Face3(9, 18, 19) );
                geom.faces.push( new THREE.Face3(20, 17, 21) );
                geom.faces.push( new THREE.Face3(20, 16, 17) );
                geom.faces.push( new THREE.Face3(22, 21, 23) );
                geom.faces.push( new THREE.Face3(22, 20, 21) );
                geom.faces.push( new THREE.Face3(24, 23, 25) );
                geom.faces.push( new THREE.Face3(24, 25, 26) );
                geom.faces.push( new THREE.Face3(24, 22, 23) );
                geom.faces.push( new THREE.Face3(27, 24, 26) );
                geom.faces.push( new THREE.Face3(28, 26, 29) );
                geom.faces.push( new THREE.Face3(28, 29, 30) );
                geom.faces.push( new THREE.Face3(28, 27, 26) );
                geom.faces.push( new THREE.Face3(31, 28, 30) );
                geom.faces.push( new THREE.Face3(32, 30, 33) );
                geom.faces.push( new THREE.Face3(32, 31, 30) );
                geom.faces.push( new THREE.Face3(34, 33, 35) );
                geom.faces.push( new THREE.Face3(34, 35, 36) );
                geom.faces.push( new THREE.Face3(34, 32, 33) );
                geom.faces.push( new THREE.Face3(37, 34, 36) );
                geom.faces.push( new THREE.Face3(38, 37, 36) );
                geom.faces.push( new THREE.Face3(38, 36, 39) );
                geom.faces.push( new THREE.Face3(40, 38, 39) );
                geom.faces.push( new THREE.Face3(40, 39, 41) );
                geom.faces.push( new THREE.Face3(40, 41, 42) );
                geom.faces.push( new THREE.Face3(43, 40, 42) );
                geom.faces.push( new THREE.Face3(44, 43, 42) );
                geom.faces.push( new THREE.Face3(44, 42, 45) );
                geom.faces.push( new THREE.Face3(46, 44, 45) );
                geom.faces.push( new THREE.Face3(46, 45, 47) );
                geom.faces.push( new THREE.Face3(48, 46, 47) );
                geom.faces.push( new THREE.Face3(48, 47, 49) );
                geom.faces.push( new THREE.Face3(0, 48, 49) );
                geom.faces.push( new THREE.Face3(0, 49, 1) );
                geom.faces.push( new THREE.Face3(28, 50, 51) );
                geom.faces.push( new THREE.Face3(18, 52, 14) );
                geom.faces.push( new THREE.Face3(18, 53, 52) );
                geom.faces.push( new THREE.Face3(18, 54, 53) );
                geom.faces.push( new THREE.Face3(27, 28, 51) );
                geom.faces.push( new THREE.Face3(27, 55, 56) );
                geom.faces.push( new THREE.Face3(27, 51, 55) );
                geom.faces.push( new THREE.Face3(57, 43, 44) );
                geom.faces.push( new THREE.Face3(9, 54, 18) );
                geom.faces.push( new THREE.Face3(57, 44, 58) );
                geom.faces.push( new THREE.Face3(9, 59, 54) );
                geom.faces.push( new THREE.Face3(60, 44, 46) );
                geom.faces.push( new THREE.Face3(60, 58, 44) );
                geom.faces.push( new THREE.Face3(24, 27, 56) );
                geom.faces.push( new THREE.Face3(61, 40, 43) );
                geom.faces.push( new THREE.Face3(61, 43, 57) );
                geom.faces.push( new THREE.Face3(6, 59, 9) );
                geom.faces.push( new THREE.Face3(62, 46, 48) );
                geom.faces.push( new THREE.Face3(62, 48, 0) );
                geom.faces.push( new THREE.Face3(22, 63, 64) );
                geom.faces.push( new THREE.Face3(22, 56, 63) );
                geom.faces.push( new THREE.Face3(22, 24, 56) );
                geom.faces.push( new THREE.Face3(62, 60, 46) );
                geom.faces.push( new THREE.Face3(12, 65, 59) );
                geom.faces.push( new THREE.Face3(12, 66, 65) );
                geom.faces.push( new THREE.Face3(12, 59, 6) );
                geom.faces.push( new THREE.Face3(67, 38, 40) );
                geom.faces.push( new THREE.Face3(67, 40, 61) );
                geom.faces.push( new THREE.Face3(20, 64, 66) );
                geom.faces.push( new THREE.Face3(20, 22, 64) );
                geom.faces.push( new THREE.Face3(16, 20, 66) );
                geom.faces.push( new THREE.Face3(16, 66, 12) );
                geom.faces.push( new THREE.Face3(68, 62, 0) );
                geom.faces.push( new THREE.Face3(69, 37, 38) );
                geom.faces.push( new THREE.Face3(69, 38, 67) );
                geom.faces.push( new THREE.Face3(70, 0, 3) );
                geom.faces.push( new THREE.Face3(70, 68, 0) );
                geom.faces.push( new THREE.Face3(71, 34, 37) );
                geom.faces.push( new THREE.Face3(71, 37, 69) );
                geom.faces.push( new THREE.Face3(72, 3, 4) );
                geom.faces.push( new THREE.Face3(72, 70, 3) );
                geom.faces.push( new THREE.Face3(73, 32, 34) );
                geom.faces.push( new THREE.Face3(73, 34, 71) );
                geom.faces.push( new THREE.Face3(10, 74, 72) );
                geom.faces.push( new THREE.Face3(10, 72, 4) );
                geom.faces.push( new THREE.Face3(50, 32, 73) );
                geom.faces.push( new THREE.Face3(31, 32, 50) );
                geom.faces.push( new THREE.Face3(14, 74, 10) );
                geom.faces.push( new THREE.Face3(14, 52, 74) );
                geom.faces.push( new THREE.Face3(28, 31, 50) );
                geom.faces.push( new THREE.Face3(75, 76, 29) );
                geom.faces.push( new THREE.Face3(15, 77, 19) );
                geom.faces.push( new THREE.Face3(77, 78, 19) );
                geom.faces.push( new THREE.Face3(78, 79, 19) );
                geom.faces.push( new THREE.Face3(75, 29, 26) );
                geom.faces.push( new THREE.Face3(80, 81, 26) );
                geom.faces.push( new THREE.Face3(81, 75, 26) );
                geom.faces.push( new THREE.Face3(45, 42, 82) );
                geom.faces.push( new THREE.Face3(19, 79, 7) );
                geom.faces.push( new THREE.Face3(83, 45, 82) );
                geom.faces.push( new THREE.Face3(79, 84, 7) );
                geom.faces.push( new THREE.Face3(47, 45, 85) );
                geom.faces.push( new THREE.Face3(45, 83, 85) );
                geom.faces.push( new THREE.Face3(80, 26, 25) );
                geom.faces.push( new THREE.Face3(42, 41, 86) );
                geom.faces.push( new THREE.Face3(82, 42, 86) );
                geom.faces.push( new THREE.Face3(7, 84, 8) );
                geom.faces.push( new THREE.Face3(49, 47, 87) );
                geom.faces.push( new THREE.Face3(1, 49, 87) );
                geom.faces.push( new THREE.Face3(88, 89, 23) );
                geom.faces.push( new THREE.Face3(89, 80, 23) );
                geom.faces.push( new THREE.Face3(80, 25, 23) );
                geom.faces.push( new THREE.Face3(47, 85, 87) );
                geom.faces.push( new THREE.Face3(84, 90, 13) );
                geom.faces.push( new THREE.Face3(90, 91, 13) );
                geom.faces.push( new THREE.Face3(8, 84, 13) );
                geom.faces.push( new THREE.Face3(41, 39, 92) );
                geom.faces.push( new THREE.Face3(86, 41, 92) );
                geom.faces.push( new THREE.Face3(91, 88, 21) );
                geom.faces.push( new THREE.Face3(88, 23, 21) );
                geom.faces.push( new THREE.Face3(91, 21, 17) );
                geom.faces.push( new THREE.Face3(13, 91, 17) );
                geom.faces.push( new THREE.Face3(1, 87, 93) );
                geom.faces.push( new THREE.Face3(39, 36, 94) );
                geom.faces.push( new THREE.Face3(92, 39, 94) );
                geom.faces.push( new THREE.Face3(2, 1, 95) );
                geom.faces.push( new THREE.Face3(1, 93, 95) );
                geom.faces.push( new THREE.Face3(36, 35, 96) );
                geom.faces.push( new THREE.Face3(94, 36, 96) );
                geom.faces.push( new THREE.Face3(5, 2, 97) );
                geom.faces.push( new THREE.Face3(2, 95, 97) );
                geom.faces.push( new THREE.Face3(35, 33, 98) );
                geom.faces.push( new THREE.Face3(96, 35, 98) );
                geom.faces.push( new THREE.Face3(97, 99, 11) );
                geom.faces.push( new THREE.Face3(5, 97, 11) );
                geom.faces.push( new THREE.Face3(98, 33, 76) );
                geom.faces.push( new THREE.Face3(76, 33, 30) );
                geom.faces.push( new THREE.Face3(11, 99, 15) );
                geom.faces.push( new THREE.Face3(99, 77, 15) );
                geom.faces.push( new THREE.Face3(76, 30, 29) );
                geom.faces.push( new THREE.Face3(95, 68, 70) );
                geom.faces.push( new THREE.Face3(97, 95, 72) );
                geom.faces.push( new THREE.Face3(95, 70, 72) );
                geom.faces.push( new THREE.Face3(84, 79, 59) );
                geom.faces.push( new THREE.Face3(79, 54, 59) );
                geom.faces.push( new THREE.Face3(99, 97, 74) );
                geom.faces.push( new THREE.Face3(97, 72, 74) );
                geom.faces.push( new THREE.Face3(90, 84, 65) );
                geom.faces.push( new THREE.Face3(84, 59, 65) );
                geom.faces.push( new THREE.Face3(77, 99, 52) );
                geom.faces.push( new THREE.Face3(99, 74, 52) );
                geom.faces.push( new THREE.Face3(91, 90, 66) );
                geom.faces.push( new THREE.Face3(78, 77, 53) );
                geom.faces.push( new THREE.Face3(90, 65, 66) );
                geom.faces.push( new THREE.Face3(77, 52, 53) );
                geom.faces.push( new THREE.Face3(79, 78, 54) );
                geom.faces.push( new THREE.Face3(78, 53, 54) );
                geom.faces.push( new THREE.Face3(88, 91, 64) );
                geom.faces.push( new THREE.Face3(91, 66, 64) );
                geom.faces.push( new THREE.Face3(89, 88, 63) );
                geom.faces.push( new THREE.Face3(88, 64, 63) );
                geom.faces.push( new THREE.Face3(80, 89, 56) );
                geom.faces.push( new THREE.Face3(81, 80, 56) );
                geom.faces.push( new THREE.Face3(89, 63, 56) );
                geom.faces.push( new THREE.Face3(81, 56, 55) );
                geom.faces.push( new THREE.Face3(75, 81, 51) );
                geom.faces.push( new THREE.Face3(76, 75, 51) );
                geom.faces.push( new THREE.Face3(81, 55, 51) );
                geom.faces.push( new THREE.Face3(76, 51, 50) );
                geom.faces.push( new THREE.Face3(98, 76, 73) );
                geom.faces.push( new THREE.Face3(76, 50, 73) );
                geom.faces.push( new THREE.Face3(96, 98, 71) );
                geom.faces.push( new THREE.Face3(94, 96, 71) );
                geom.faces.push( new THREE.Face3(98, 73, 71) );
                geom.faces.push( new THREE.Face3(94, 71, 69) );
                geom.faces.push( new THREE.Face3(94, 69, 67) );
                geom.faces.push( new THREE.Face3(92, 94, 67) );
                geom.faces.push( new THREE.Face3(92, 67, 61) );
                geom.faces.push( new THREE.Face3(86, 92, 61) );
                geom.faces.push( new THREE.Face3(82, 86, 61) );
                geom.faces.push( new THREE.Face3(82, 61, 57) );
                geom.faces.push( new THREE.Face3(83, 82, 58) );
                geom.faces.push( new THREE.Face3(82, 57, 58) );
                geom.faces.push( new THREE.Face3(85, 83, 60) );
                geom.faces.push( new THREE.Face3(83, 58, 60) );
                geom.faces.push( new THREE.Face3(87, 85, 62) );
                geom.faces.push( new THREE.Face3(85, 60, 62) );
                geom.faces.push( new THREE.Face3(93, 87, 68) );
                geom.faces.push( new THREE.Face3(95, 93, 68) );
                geom.faces.push( new THREE.Face3(87, 62, 68) );
                var basematerial = new THREE.MeshBasicMaterial( { color: 0x888888 } );
                var mesh = new THREE.Mesh( geom, basematerial );
                scene.add( mesh );
                var linematerial = new THREE.LineBasicMaterial({linewidth: 1, color: 0x000000,});
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(3.0, -7.34788079488e-16, 0.5));
                wire.vertices.push(new THREE.Vector3(3.0, -7.34788079488e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(3.0, -7.34788079488e-16, 0.5));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(3.0, -7.34788079488e-16, 0.5));
                wire.vertices.push(new THREE.Vector3(3.0, -7.34788079488e-16, 0.5));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(3.0, -7.34788079488e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(3.0, -7.34788079488e-16, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
 // placeholder for the FreeCAD objects

	var light = new THREE.PointLight( 0xFFFF00 );
	light.position.set( -10000, -10000, 10000 );
	scene.add( light );
	renderer.render( scene, camera );
	animate();
};

function animate(){
	requestAnimationFrame( animate );
	render();
};

function render(){
	controls.update();
	renderer.render( scene, camera );
};