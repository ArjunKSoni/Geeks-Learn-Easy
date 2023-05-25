import React, { useState } from "react"
import Notecontext from "./noteContext"

const NoteState = (props) => {
    const [myNotes, editNote] = useState([]);

return (
        <Notecontext.Provider value={{ myNotes, editNote }}>
            {props.children}
        </Notecontext.Provider>
    )
}
export default NoteState  