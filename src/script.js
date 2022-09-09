import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { Group } from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const texture = textureLoader.load('/textures/door/color.jpg')
const ao = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const dispMap = textureLoader.load('/textures/door/height.jpg')
const metalness = textureLoader.load('/textures/door/metalness.jpg')
const roughnes = textureLoader.load('/textures/door/roughness.jpg')
const normal = textureLoader.load('/textures/door/normal.jpg')
const alpha = textureLoader.load('/textures/door/alpha.jpg')

const bricktext = textureLoader.load('/textures/bricks/color.jpg')
const brickambientOcclusion = textureLoader.load('/textures/bricks/ambientOcclusion.jpg')
const bricknormal = textureLoader.load('/textures/bricks/normal.jpg')
const brickroughness = textureLoader.load('/textures/bricks/roughness.jpg')

const grasstext = textureLoader.load('/textures/grass/color.jpg')
const grassambientOcclusion = textureLoader.load('/textures/grass/ambientOcclusion.jpg')
const grassnormal = textureLoader.load('/textures/grass/normal.jpg')
const grassroughness = textureLoader.load('/textures/grass/roughness.jpg')
grasstext.repeat.set(8,8)
grassambientOcclusion.repeat.set(8,8)
grassnormal.repeat.set(8,8)
grassroughness.repeat.set(8,8)

grasstext.wrapS = THREE.RepeatWrapping
grassambientOcclusion.wrapS = THREE.RepeatWrapping
grassnormal.wrapS = THREE.RepeatWrapping
grassroughness.wrapS = THREE.RepeatWrapping

grasstext.wrapT = THREE.RepeatWrapping
grassambientOcclusion.wrapT = THREE.RepeatWrapping
grassnormal.wrapT = THREE.RepeatWrapping
grassroughness.wrapT = THREE.RepeatWrapping

// FOG
const fog = new THREE.Fog('#262837',5,10)
scene.fog = fog


/**
 * House
 */
const house = new THREE.Group()
scene.add(house)

const walls = new THREE.Mesh( 
    new THREE.BoxBufferGeometry(4,2.5,4),              // 4(x) is length, 2.5(y) is height, 4(z) is width
    new THREE.MeshStandardMaterial({
        map: bricktext,
        aoMap: brickambientOcclusion,
        normalMap: bricknormal,
        roughness: brickroughness
    })
)
walls.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array,2));
walls.position.y = 2.5/2
house.add(walls)

const roof = new THREE.Mesh(
    new THREE.ConeBufferGeometry(3.5,1,4),        // 3.5(x) is length of each side , 1(y) is height, 4 is no. of segments
    new THREE.MeshStandardMaterial({'color':0xb35f45}) 
)
roof.position.y = 2.5 + 0.5
roof.rotation.y = Math.PI * 1/4
house.add(roof)

const door = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(2.2,2.2,100,100),
    new THREE.MeshStandardMaterial({
        'map': texture,
        'transparent': true,
        'alphaMap' : alpha,
        'aoMap' : ao,
        'displacementMap' : dispMap,
        displacementScale: 0.2,
        normalMap: normal,
        metalnessMap : metalness,
        roughnessMap : roughnes
    })
)
door.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array,2));
door.position.y = 1
door.position.z = 4/2 + 0.01
house.add(door)

const bushGeometry = new THREE.SphereBufferGeometry(1,16,16)
const bushMaterial = new THREE.MeshStandardMaterial({'color' : 0x89c854})

const bush1 = new THREE.Mesh( bushGeometry, bushMaterial)
bush1.position.set(0.8,0.2,2.5)
bush1.scale.set(0.5,0.5,0.5)

const bush2 = new THREE.Mesh( bushGeometry, bushMaterial)
bush2.position.set(0.8+0.5,0.1,2.5)
bush2.scale.set(0.25,0.25,0.25)

const bush3 = new THREE.Mesh( bushGeometry, bushMaterial)
bush3.position.set(-0.8,0.2,2.5)
bush3.scale.set(0.35,0.35,0.35)

const bush4 = new THREE.Mesh( bushGeometry, bushMaterial)
bush4.position.set(-1,0.1,2.8)
bush4.scale.set(0.125,0.125,0.125)

house.add(bush1,bush2,bush3,bush4)

const graves = new THREE.Group()
scene.add(graves)
const graveGeometry = new THREE.BoxBufferGeometry(0.6,0.8,0.2)
const graveMaterial = new THREE.MeshStandardMaterial({'color' : 0xb2b6b1})

for( let i=0; i<50; i++)
{

    const angle =  Math.random() * Math.PI * 2;
    const radius = 3 + Math.random() * 6
    const x =  Math.sin(angle) * radius
    const z =  Math.cos(angle) *radius

    const gr = new THREE.Mesh(graveGeometry, graveMaterial)
    gr.position.set(x,0.3,z)
    gr.rotation.y = Math.random() * 1
    gr.rotation.z = Math.random() * 0.3
    gr.castShadow = true
    graves.add(gr)

}

// Temporary sphere
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshStandardMaterial({ roughness: 0.7 })
)
sphere.position.y = 1
// scene.add(sphere)



// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ 
        map: grasstext,
        aoMap: grassambientOcclusion,
        roughnessMap : grassroughness,
        normalMap: grassnormal
    })
)
floor.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array,2));
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
scene.add(floor)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.12)
moonLight.position.set(4, 5, - 2)


gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
scene.add(moonLight)

const doorLight = new THREE.PointLight('#ff7d46',1,7)
doorLight.position.set(0,2.2,2.7)
house.add(doorLight)




  // Ghosts
const ghost1 = new THREE.PointLight('#ff0000',2,3)
scene.add(ghost1)

const ghost2 = new THREE.PointLight('#ff0000',2,3)
scene.add(ghost2)



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

window.addEventListener('dblclick',()=> {
    if(!document.fullscreenElement)
    {
        canvas.requestFullscreen()
    }
    else{
        document.exitFullscreen()
    }
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#262837')

/**
 * Text
 */

const fontloader = new FontLoader()

fontloader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (fonts)=>{
        
        const geometry = new TextGeometry(
            'Shivang Was Here',
            {
                font: fonts,
                size: 0.5,
                height: 0.2,
                curveSegments: 6,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 2
            }
        )
        console.log('huehue')
        const material = new THREE.MeshBasicMaterial({color: 0xff0000})
        const text = new THREE.Mesh( geometry, material)
        text.position.set(-6,0.3,-7.5)
        scene.add(text)  
        text.castShadow = true
        geometry.center()
        
    }
)


// shadows

renderer.shadowMap.enabled = true
renderer.shadowMap.type - THREE.PCFSoftShadowMap
moonLight.castShadow = true
doorLight.castShadow = true
walls.castShadow = true
bush1.castShadow = true
bush2.castShadow = true
bush3.castShadow = true
bush4.castShadow = true
floor.receiveShadow = true

doorLight.shadow.mapSize.width = 256
doorLight.shadow.mapSize.height = 256
doorLight.shadow.camera.far = 7

moonLight.shadow.mapSize.width = 256
moonLight.shadow.mapSize.height = 256
moonLight.shadow.camera.far = 7

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Ghost running
    const angle1 = elapsedTime * 0.4
    ghost1.position.x = Math.sin(angle1) * 6
    ghost1.position.z = Math.cos(angle1) * 6
    ghost1.position.y = Math.sin(angle1  * 2) 

    const angle2 = -(elapsedTime * 0.8)
    ghost2.position.x = Math.sin(angle2) * 5
    ghost2.position.z = Math.cos(angle2) * 5
    ghost2.position.y = Math.sin(angle1  * 2) 


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

// Shivang Was Here