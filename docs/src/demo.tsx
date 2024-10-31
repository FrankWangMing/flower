import React, {useCallback, useEffect, useRef} from 'react'
import {Scene} from "../../src";
import {Cell} from "../../src/model/cell";
import {Buffer, Geometry} from "../../src/model/geometry";
import {Material} from "../../src/material";
import cubeJson from '../../public/cube.json'
export  default  ()=>{
    const ref = useRef()
    const scene = new Scene()
    useEffect(()=>{
        if(ref.current){
            scene.mount(ref.current)
            const buffer = new Buffer(cubeJson)
            const cell = new Cell({
                geometry:new Geometry(buffer),
                material:new Material()
            })
            scene.add(cell)
            scene.build()
            function render(){
                scene.render()
                requestAnimationFrame(render)
            }
            scene.render()

        }
    },[ref])


    return <div ref={ref}></div>
}
