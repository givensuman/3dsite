import { useEffect, useRef } from "react"
import styled from '@emotion/styled'
import Typed from "typed.js"

const Wrapper = styled.div`
  padding-left: 2%;
  overflow: scroll;
  height: 100%;
  background-color: #282C34;
`

const Span = styled.span`
  font-size: 1%;

  .comment {
    color: #ABB2Bf;
  }

  .const {
    color: #C678DD;
  }

  .obj {
    color: #E5C07B;
  }

  .method {
    color: #61AFEF;
  }

  .property {
    color: #56B6C2;
  }

  .key {
    color: #E06C75;
  }
`
//const planeGeometry = new THREE.PlaneGeometry(100, 100, 10, 10)
const Typing = () => {
    const el = useRef()
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
`
<span class='comment'>// Create plane mesh</span>
<br>
<span class='const'>const</span> <span class='obj'>planeGeometry</span> = <span class='const'>new</span> <span class='obj'>THREE</span>.<span class='method'>PlaneGeometry</span>(<span class='property'>100</span>, <span class='property'>100</span>, <span class='property'>10</span>, <span class='property'>10</span>)
<br>
<span class='const'>const</span> <span class='obj'>planeMaterial</span> = <span class='const'>new</span> <span class='obj'>THREE</span>.<span class='method'>MeshStandardMaterial</span>({
  <span class='key'>map</span>: <span class='const'>planeTexture</span>,
  <span class='key'>side</span>: <span class='obj'>THREE</span>.<span class='key'>DoubleSide</span>
})
<br>
<span class='const'>const</span> <span class='obj'>planeMesh</span> = <span class='const'>new</span> <span class='obj'>THREE</span>.<span class='method'>Mesh</span>(<span class='const'>planeGeometry</span>, <span class='const'>planeMaterial</span>)
<br>
<span class='const'>planeMesh</span>.<span class='key'>receiveShadow</span> = <span class='property'>true</span>
<br>
<span class='const'>scene</span>.<span class='method'>add</span>(<span class='const'>planeMesh</span>)
<br>
<br>
<span class='comment'>// Create ball mesh</span>
<br>
<span class='const'>const</span> <span class='obj'>ballGeometry</span> = <span class='const'>new</span> <span class='obj'>THREE</span>.<span class='method'>SphereGeometry</span>()
<br>
<span class='const'>const</span> <span class='obj'>ballMaterial</span> = <span class='const'>new</span> <span class='obj'>THREE</span>.<span class='method'>MeshStandardMaterial</span>({
  <span class='key'>map</span>: <span class='const'>ballTexture</span>
})
<br>
<span class='const'>const</span> <span class='obj'>ballMesh</span> = <span class='const'>new</span> <span class='obj'>THREE</span>.<span class='method'>Mesh</span>(<span class='const'>ballGeometry</span>, <span class='const'>ballMaterial</span>)
<br>
<span class='const'>ballMesh</span>.<span class='key'>castShadow</span> = <span class='property'>true</span>
<br>
<span class='const'>ballMesh</span>.<span class='key'>position</span>.<span class='key'>z</span> += <span class='property'>0.4</span>
<br>
<span class='const'>scene</span>.<span class='method'>add</span>(<span class='const'>ballMesh</span>)
<br>
<br>
<span class='method'>render</span>()
<br>
            `],
            typeSpeed: 10
        })

        return () => typed.destroy()
    }, [])    

    return (
      <Wrapper>
        <Span ref={el}></Span>
      </Wrapper>
    )
}

export default Typing