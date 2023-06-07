import React, { useState } from "react"
import Subcontext from "./subContext"
import { useContext } from "react";
import Authcontext from "./authContext";

const SubState = (props) => {
    const [subj, setsub] = useState([])
    const [sublist, setsublist] = useState([]);
    const [hide, sethide] = useState(false);
    const { token } = useContext(Authcontext)
    const [notes, setNotes] = useState([])
    const [pyq, setpyq] = useState([])
    const [impQues, setImpq] = useState([])
    const [sylla, setsylla] = useState([])
    const [readpdf, setreadpdf] = useState("#")

    const findmysubjects = async () => {
        try {
            if (token) {
                // serRender(true)
                const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/subject/findmysubjects`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify({ uid: token }),
                })
                let data = await apicall.json()
                setsub(data.subjects.subjects)
                // if (data.subjects.length === 0) setsub([])
                // serRender(false)
                if (data.success === "fail") { alert(data.message) }
            } else { alert("UnAuthorised Access") }
        } catch (error) {
            console.log(error);
        }
    }
    const addsubjects = async (k) => {
        try {
            // serRender(true)
            const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/subject/addsubjects`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ uid: token, subj: k }),
            })
            let data = await apicall.json()
            // serRender(false)
            if (data.success === "fail") { alert(data.message) }

        } catch (error) {
            console.log(error);
        }
    }
    const getallsubjects = async () => {
        try {
            // serRender(true)
            const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/subject/getallsubjects`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })
            let data = await apicall.json()
            setsublist(data.subjects)
            console.log(data.subjects);
            // serRender(false)
            if (data.success === "fail") { alert(data.message) }
        } catch (error) {
            console.log(error);
        }
    }
    const getOnesubjectClick = async (e) => {
        try {
            // serRender(true)
            const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/subject/getOnesubjectClick`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ subj: e }),
            })
            let data = await apicall.json()
            setNotes(data.subjects[0][e][0].Notes)
            setImpq(data.subjects[0][e][2].ImpQuestions)
            setpyq(data.subjects[0][e][1].pyqs)
            setsylla(data.subjects[0][e][3].syllabus)
            // console.log(data.subjects[0][e][3]);
            // serRender(false)
            if (data.success === "fail") { alert(data.message) }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Subcontext.Provider value={{ readpdf, setreadpdf, sylla, setsylla, impQues, setImpq, notes, pyq, setpyq, setNotes, subj, setsub, getOnesubjectClick, sethide, findmysubjects, hide, addsubjects, getallsubjects, sublist }}>
            {props.children}
        </Subcontext.Provider>
    )
}
export default SubState