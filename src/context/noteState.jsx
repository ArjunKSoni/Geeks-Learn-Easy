import React, { useContext, useState } from "react"
import Notecontext from "./noteContext"
import Authcontext from "./authContext";
import { useNavigate } from "react-router-dom";

const NoteState = (props) => {
    const navigate = useNavigate()
    const [myNotes, editNote] = useState([]);
    const [noteRender, serRender] = useState(false);
    const { token } = useContext(Authcontext)
    const fetchNotes = async () => {
        try {
            if (token) {
                serRender(true)
                const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/notes/findalleNotes`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify({ uid: token }),
                })
                let data = await apicall.json()
                editNote(data.notes)
                serRender(false)
                if (data.success === "fail") { alert(data.message) }
            } else { navigate("/") }
        } catch (error) {
            console.log(error);
        }
    }
    const addNotes = async (res) => {
        try {
            if (token) {
                serRender(true)
                const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/notes/addnotes`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify(res),
                })
                let data = await apicall.json()
                editNote(myNotes.concat(data.notes))
                serRender(false)
                if (data.success === "fail") { alert(data.message) }
                fetchNotes()
                navigate("/mynotes")
            } else { navigate("/") }
        } catch (error) {
            console.log(error);
        }
    }
    const editNotes = async (res) => {
        try {
            if (token) {
                serRender(true)
                const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/notes/updateNotes`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify(res),
                })
                let data = await apicall.json()
                // fetchNotes();
                serRender(false)
                if (data.success === "fail") { alert(data.message); navigate("/mynotes") }
                else { fetchNotes(); navigate("/mynotes") }
            } else { navigate("/") }
        } catch (error) {
            console.log(error);
        }
    }
    const deleteNotes = async (res) => {
        try {
            if (token) {
                serRender(true)
                const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/notes/deleteNotes`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify(res),
                })
                let data = await apicall.json()
                serRender(false)
                if (data.success === "fail") { alert(data.message) }
                fetchNotes();
            } else { navigate("/") }
        } catch (error) {
            console.log(error);
        }
    }




return (
    <Notecontext.Provider value={{ myNotes, editNote, fetchNotes, noteRender, serRender, addNotes, editNotes, deleteNotes }}>
            {props.children}
        </Notecontext.Provider>
    )
}
export default NoteState  