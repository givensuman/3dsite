import { useEffect, useRef } from "react"
import Typed from "typed.js"


const Typing = () => {
    const el = useRef()
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
`
// Create plane mesh
const planeGeometry = new THREE.PlaneGeometry(100, 100, 10, 10)
const planeMaterial = new THREE.MeshStandardMaterial({
  map: planeTexture,
  side: THREE.DoubleSide
})
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
planeMesh.receiveShadow = true
scene.add(planeMesh)

// Create ball mesh
const ballGeometry = new THREE.SphereGeometry()
const ballMaterial = new THREE.MeshStandardMaterial({
  map: ballTexture
})
const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial)
ballMesh.castShadow = true
ballMesh.position.z += 0.4
scene.add(ballMesh)

render()
            `],
            typeSpeed: 10
        })

        return () => typed.destroy()
    }, [])    

    return (
        <>
        <pre ref={el}></pre>
        </>
    )
}

export default Typing