/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 .\my_animated_mewtwo.glb -m
Author: dinomaster (https://sketchfab.com/dinomaster)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/my-animated-mewtwo-14997155c81a42238cf2162358d8de62
Title: my animated mewtwo
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/my_animated_mewtwo.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} userData={{ name: 'Sketchfab_model' }}>
          <group name="root" userData={{ name: 'root' }}>
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'GLTF_SceneRootNode' }}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]} userData={{ name: 'Sketchfab_model_0' }}>
                <group name="root_1" userData={{ name: 'root_1' }}>
                  <group name="GLTF_SceneRootNode_2" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'GLTF_SceneRootNode_2' }}>
                    <group name="RootNode_0_3" userData={{ name: 'RootNode_0_3' }}>
                      <group name="pm0150_00_1_4" userData={{ name: 'pm0150_00_1_4' }}>
                        <group name="Origin_2_5" userData={{ name: 'Origin_2_5' }}>
                          <group name="Waist_3_6" position={[0, 1.12, 0]} rotation={[-0.18, 0.08, 1.56]} userData={{ name: 'Waist_3_6' }}>
                            <group name="GLTF_created_0_7" userData={{ name: 'GLTF_created_0_7' }}>
                              <group name="GLTF_created_0" userData={{ name: 'GLTF_created_0' }}>
                                <primitive object={nodes.GLTF_created_0_rootJoint} />
                                <group name="Object_95_95_correction" userData={{ name: 'Object_95_95_correction' }}>
                                  <group name="Object_95_95" userData={{ name: 'Object_95_95' }} />
                                </group>
                                <group name="Object_96_96_correction" userData={{ name: 'Object_96_96_correction' }}>
                                  <group name="Object_96_96" userData={{ name: 'Object_96_96' }} />
                                </group>
                                <group name="Object_97_97_correction" userData={{ name: 'Object_97_97_correction' }}>
                                  <group name="Object_97_97" userData={{ name: 'Object_97_97' }} />
                                </group>
                                <skinnedMesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.Material_35} skeleton={nodes.Object_100.skeleton} userData={{ name: 'Object_100' }} />
                                <skinnedMesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials.Material_36} skeleton={nodes.Object_103.skeleton} userData={{ name: 'Object_103' }} />
                                <skinnedMesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.Material_37} skeleton={nodes.Object_106.skeleton} userData={{ name: 'Object_106' }} />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/my_animated_mewtwo.glb')
