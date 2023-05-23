import React, { useState } from "react"
import Subcontext from "./subContext"

const SubState = (props) => {
    const [sub, setsub] = useState("Null")

    return (
        <Subcontext.Provider value={{ sub, setsub }}>
            {props.children}
        </Subcontext.Provider>
    )
}
export default SubState