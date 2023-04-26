import { useState, useEffect} from 'react';

export const Text = ()=>{
    const[text, setText] = useState("")

    useEffect(()=>{
        console.log("COMPONENT MOUNTED")
        return ()=>{
            console.log("COMPONENT UNMOUNTED")
        }
    },[])

    return(
        <div>
            <input 
                onChange={(event)=>{
                    setText(event.target.value)
                }}
            />
            <h2>{text}</h2>
        </div>
    )

}