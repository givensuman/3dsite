Download gltf or glb files
    - blendswap.com
    - sketchfab.com
  
  if you can't find a .glb or .gltf, .blend works fine if you import into Blender and export as .glb

Verify model
    - gltf.report
    - gltf-viewer.donmccurdy.com/

Add to ./public folder

Run `npx gltfjsx ./public/<model_name>.glb`

Add new .js component to ./src/models

Import into Scene.jsx

Optionally use `gltf-pipeline` for draco-compression