import './style.css';
import * as THREE from 'three';
import { LoadingManager, Mesh } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'


// /**
//  * Base
//  */
// // Canvas
// const canvas = document.querySelector('canvas.webgl')


// // Sizes
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// // Cursor
// const cursor = {
//     x: 0,
//     y: 0
// }

// // Scene
// const scene = new THREE.Scene()

// //textures
// const loadingManager = new THREE.LoadingManager()
// const textureLoader = new THREE.TextureLoader(loadingManager)
// const texture = textureLoader.load('/textures/checkerboard-1024x1024.png')
// const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
// const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
// const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
// const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
// const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
// const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
// const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
// const matcapTexture = textureLoader.load('/matcaps/1.png')
// const gradientTexture = textureLoader.load('/gradient/5.jpg')


// // Object

// // const mesh = new THREE.Mesh(
// //     new THREE.BoxBufferGeometry(1, 1, 1, 2, 2, 2),
// //     new THREE.MeshBasicMaterial({ color: 0xff0000 })
// // )




// // CHANGE IN MATERIALS

// //********************   Mesh Basic Material

// // const material = new THREE.MeshBasicMaterial()
// // material.color =  new THREE.Color(0x00ff00)
// // material.wireframe = true
// // material.transparent  = true
// // material.opacity = 0.7
// // material.alphaMap = doorAlphaTexture
// // material.side = THREE.DoubleSide


// //********************   Mesh Normal Material

// // const material = new THREE.MeshNormalMaterial()
// // material.wireframe = true
// // material.flatshading = true
// // material.map = doorColorTexture
// // material.transparent = true
// // material.opacity = 0.6


// //********************   Mesh Matcap Material

// // const material = new THREE.MeshMatcapMaterial()
// // material.map = matcapTexture


// //********************   Mesh Matcap Material
// // const material = new THREE.MeshDepthMaterial()


// //********************   Mesh Phong Material

// //LIGHTS 
// const al = new THREE.AmbientLight(0xffffff, 0.5)
// const pl = new THREE.PointLight(0xffffff, 0.5)
// pl.position.x = 2
// pl.position.y = 3
// pl.position.z = 4 
// scene.add(al,pl)

// // const material = new THREE.MeshPhongMaterial()
// // material.shininess = 1000
// // material.specular = new THREE.Color( 0xff0000 )


// //********************   Mesh Phong Material
// // const material = new THREE.MeshToonMaterial()
// // material.gradientMap = gradientTexture

// //********************   Mesh Standard Material
// const material = new THREE.MeshStandardMaterial()
// material.map = doorColorTexture
// material.aoMap = doorAmbientOcclusionTexture
// material.aoMapIntensity = 3
// material.displacementMap = doorHeightTexture
// material.displacementScale = 0.05
// material.side = THREE.DoubleSide
// material.metalnessMap = doorMetalnessTexture



// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(1, 1, 100, 100),
//     material
// )

// plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(plane.geometry.attributes.uv.array,2))


// const sphere = new THREE.Mesh(
//     new THREE.SphereBufferGeometry(0.5,16,16),
//     material
// )
// sphere.position.x = -1.5
// // sphere.geometry.setAttribute('uv2', new THREE.BufferAttribute(sphere.geometry.attributes.uv.array,2))

// const torus = new THREE.Mesh(
//     new THREE.TorusBufferGeometry(0.3,0.2,64,128),
//     material
// )
// torus.position.x = 1.5
// // torus.geometry.setAttribute('uv2', new THREE.BufferAttribute(torus.geometry.attributes.uv.array,2))


// scene.add(plane,sphere,torus)



// //Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// // const aspectRatio = sizes.width / sizes.height
// // const camera = new THREE.OrthographicCamera(- 1 * aspectRatio, 1 * aspectRatio, 1, - 1, 0.1, 100)
// camera.position.z = 3
// scene.add(camera)


// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true
// controls.autoRotate = true

// // Renderer
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)


// // Animate
// const clock = new THREE.Clock()

// const tick = () =>
// {
//     // const elapsedTime = clock.getElapsedTime()

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)
    

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()


// // renderer.render(scene, camera)






//--------------------------------------------------------------------------------------- CONTROLS-----------------------------------------------------------------------------------------------------

// IMPORT
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enable = false;
// controls.enableDamping = true
// controls.autoRotate = true
// controls.autoRotateSpeed = 3
// controls.dampingFactor = 0.5
// controls.keys = {
// 	LEFT: 'ArrowLeft', //left arrow
// 	UP: 'ArrowUp', // up arrow
// 	RIGHT: 'ArrowRight', // right arrow
// 	BOTTOM: 'ArrowDown' // down arrow
// controls.minPolarAngle = 6  // matlab ki Math.PI se zayda ja hi nahi sakte
// controls.minAzimuthAngle = 6  // matlab ki Math.PI se zayda ja hi nahi sakte
// controls.rotateSpeed = 2      // SPEED OF ROTATION OF A CAMERA 




//--------------------------------------------------------------------------------------- DEBUG UI-----------------------------------------------------------------------------------------------------

//IMPORT
// import * as dat from 'dat.gui';
// import gsap from'gsap';

// CODES
// const gui = new GUI()
// const cubeFolder = gui.addFolder('Cube')
// cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2)
// cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2)
// cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2)
// cubeFolder.open()
// const cameraFolder = gui.addFolder('Camera')
// cameraFolder.add(camera.position, 'z', 0, 10)
// cameraFolder.open()

// const parameters = {
//     color: 0x00ff00,
//     spin : () => {
//        gsap.to(mesh.rotation, {  duration:1,y: mesh.rotation.y + 10})
//        gsap.to(mesh.rotation, {  duration:1, delay:1, x: mesh.rotation.x + 10 })
//        gsap.to(mesh.rotation, {  duration:1, delay:2, z: mesh.rotation.z + 10 })
//        gsap.to(mesh.position, {  duration:1, delay:3, x: mesh.position.x + 1 })
//        gsap.to(mesh.position, {  duration:1, delay:4, y: mesh.position.y + 1 })
//        gsap.to(mesh.position, {  duration:1, delay:5, z: mesh.position.z + 1 })
//     }
// }
// AFTER MESH CREATION
// gui.add(mesh.position, 'y')
//    .min(-2)
//    .max(2)
//    .step(0.01)
//    .name('huehuehue')
  

//    gui.add(mesh,'visible')
//    gui.add(material,'wireframe')
//    gui.addColor( parameters,'color' )
//       .onChange( () => {
//         material.color.set(parameters.color)
//       })

//     gui.add(parameters,'spin')



// ##############################################################################  Textures ###############################################################################################
//textures
// const loadingManager = new THREE.LoadingManager()
// const textureLoader = new THREE.TextureLoader(loadingManager)

// texture.repeat.x = 4
// texture.wrapS = THREE.MirroredRepeatWrapping

// texture.repeat.y = 3
// texture.wrapT = THREE.MirroredRepeatWrapping

// // texture.rotation = Math.PI * 0.25
// texture.center.x = 0.1
// texture.center.y = 0.1
// // texture.generateMipmaps = false

// texture.minFilter = THREE.NearestFilter




// MY CODE__________________________________________________________________________________________________</>

// SCENE
const scene = new THREE.Scene();

// Debug
const gui = new dat.GUI()

// SIZES
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// RESIZING

window.addEventListener( 'resize', ()=>{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width,sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
console.log(window.devicePixelRatio)

window.addEventListener('dblclick',()=> {
    if(!document.fullscreenElement)
    {
        canva.requestFullscreen()
    }
    else{
        document.exitFullscreen()
    }
})


// TEXTURE 
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () =>{

}
loadingManager.onLoad = () =>{
    
}
loadingManager.onProgress = () =>{
    
}
loadingManager.onError = () =>{
    
}
const textureLoader = new THREE.TextureLoader(loadingManager)
const cubeTextureLoader = new THREE.CubeTextureLoader
const texture = textureLoader.load('/textures/door/color.jpg')
const ao = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const dispMap = textureLoader.load('/textures/door/height.jpg')
const metalness = textureLoader.load('/textures/door/metalness.jpg')
const roughnes = textureLoader.load('/textures/door/roughness.jpg')
const normal = textureLoader.load('/textures/door/normal.jpg')
const alpha = textureLoader.load('/textures/door/alpha.jpg')
const envmap = cubeTextureLoader.load([
    '/textures/environmentMaps/2/px.jpg',
    '/textures/environmentMaps/2/nx.jpg',
    '/textures/environmentMaps/2/py.jpg',
    '/textures/environmentMaps/2/ny.jpg',
    '/textures/environmentMaps/2/pz.jpg',
    '/textures/environmentMaps/2/nz.jpg',
])



// LIGHTS

const ambientLight = new THREE.AmbientLight(0xffffff,0.5)
const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.set(1,2,3)
scene.add(ambientLight,pointLight)


// MATERIALS

// const material = new THREE.MeshStandardMaterial()
// material.flatShading = true

// const material = new THREE.MeshMatcapMaterial()
// const texture1 = textureLoader.load('/matcaps/8.png')
// material.matcap = texture1

// const material = new THREE.MeshPhongMaterial()
// material.specular = new THREE.Color(0x0000ff)


// material.side = THREE.DoubleSide
// material.map = texture
// material.aoMap = ao
// material.displacementMap = dispMap
// material.metalnessMap = metalness
// material.roughnessMap = roughnes
// material.normalMap = normal
// material.transparent = true
// material.alphaMap = alpha
// material.metalness = 0.7
// material.roughness = 0.2
// material.envMap = envmap






// CANVA
const canva = document.querySelector('.webgl')

// MESH 
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial();
const cube = new THREE.Mesh( geometry, material);
scene.add(cube);


// SPEHRE

// const sphere = new THREE.Mesh(
//     new THREE.SphereBufferGeometry(0.5,16,16),
//     material
// )
// sphere.position.x = -1.5
// sphere.geometry.setAttribute('uv2',new THREE.BufferAttribute(sphere.geometry.attributes.uv.array , 2))

// PLANE

// const plane = new THREE.Mesh(
//     new THREE.PlaneBufferGeometry(1,1),
//     material
// )
// plane.geometry.setAttribute('uv2',new THREE.BufferAttribute(plane.geometry.attributes.uv.array , 2))


// Torus

// const torus = new THREE.Mesh(
//     new THREE.TorusBufferGeometry(0.3,0.2,16,32),
//     material
// )
// torus.position.x = 1.5
// torus.geometry.setAttribute('uv2',new THREE.BufferAttribute(torus.geometry.attributes.uv.array , 2))

// scene.add(torus,plane,sphere)


// CAMERA
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)


// RENDERER
const renderer = new THREE.WebGLRenderer({ canvas: canva })
renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)


// CLOCK
 const clock = new THREE.Clock()


// CONTROLS
const controls = new OrbitControls(camera,canva)
controls.enableDamping = true

// GUI ADD ONS
// gui.add( material,'metalness')
// .min(0)
// .max(1)
// .step(0.001)

// gui.add( material,'roughness')
// .min(0)
// .max(1)
// .step(0.001)

// gui.add( material,'aoMapIntensity')
// .min(0)
// .max(10)
// .step(1)

// gui.add( material,'displacementScale')
// .min(0)
// .max(1)
// .step(0.0001)

// gui.add(cube.position,'y', -2,2,0.1)
// gui.add(cube.rotation,'x',0, Math.PI * 2,0.1)
// gui.add(material,'wireframe')




// ANIMATION
function animate(){

 
    requestAnimationFrame(animate)
    renderer.render(scene, camera);
    controls.update()

}
animate()

