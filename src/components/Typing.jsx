import React from 'react'
import styled from '@emotion/styled'
import Typist from 'react-typist'

const StyledTypist = styled(Typist)`
    font-size: 6px;
    padding: 5px 5px;

    pre {
        margin: 0;
    }
`

const Typing = () => {
    return (
        <StyledTypist
        cursor={{
            show: false
        }}
        >
<pre>import * as THREE from 'three'</pre>
<Typist.Delay ms={800} />
<pre>{`
// Create plane mesh
const planeGeometry = new THREE.PlaneGeometry(100, 100, 10, 10)
const planeMaterial = new THREE.MeshStandardMaterial({
  map: planeTexture,
  side: THREE.DoubleSide
})
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
planeMesh.receiveShadow = true
scene.add(planeMesh)
`}</pre>
<Typist.Delay ms={800} />
<Typist.Delay ms={800} />
<pre>{`
// Create ball mesh
const ballGeometry = new THREE.SphereGeometry()
const ballMaterial = new THREE.MeshStandardMaterial({
  map: ballTexture
})
const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial)
ballMesh.castShadow = true
ballMesh.position.z += 0.4
scene.add(ballMesh)
`}</pre>
<br />
<Typist.Delay ms={800} />
<pre>render()</pre>
        </StyledTypist>
    )
}

export default Typing