import {useEffect, useState} from "react";
import {Scene} from "../../../../packages/core";

export default ()=>{
    const [scene,setScene]=useState(new Scene())
    const [ref,setRef]=useState<HTMLDivElement|null>(null)

    useEffect(() => {
        if(ref!==null)
        {
            scene.mount(ref)
        }
    }, [ref]);
    return <div
    style={{
        width:"100vw",
        height:"100vh",
        background:"blue"
    }}
        ref={(ref)=>{
        setRef(ref)
    }}

    ></div>
}
