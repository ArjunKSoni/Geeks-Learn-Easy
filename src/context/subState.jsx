import React, { useState } from "react"
import Subcontext from "./subContext"

const SubState = (props) => {
    const [subj, setsub] = useState([])
    const [hide, sethide] = useState(false);

    return (
        <Subcontext.Provider value={{ subj, setsub, sethide, hide }}>
            {props.children}
        </Subcontext.Provider>
    )
}
export default SubState