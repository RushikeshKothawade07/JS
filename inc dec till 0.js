import React, { useState } from "react";
const Demo = () => {
    const [cnt,setCnt] =   useState(0)
    const Inc = () =>{
        setCnt(cnt+1)
    }
    const Dec = () =>{
       cnt>0 ? setCnt(cnt-1) : (alert('Limit bhai'))
    }
    return (
        <>
            <div>
                <div>
                    <h1> {cnt}</h1>
                    <div>
                        <button onClick={Inc}>Inc</button>
                        <button onClick={Dec}>Dec</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo;
