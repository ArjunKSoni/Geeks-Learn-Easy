import { React, useContext } from "react";
import Body from "./body";
import Theme from "../extraGenerator/theme";
import Authcontext from "../context/authContext";

function Content() {
    const { theme } = useContext(Authcontext);

    return (
        <div className="flex ">
            <div style={Theme[theme].sidedesc} className="contentSidebar p-3  sideDec no-scrollbar border-r-4 overflow-x-auto">
                {/* <div className=" rotate-180 w-full -mt-3 h-1 bg-green-500"></div> */}
                <ul style={Theme[theme].body}> <h1 className={`p-1 px-2 text-xl font-bold hover:${Theme[theme].descHover}`}>Topic 1</h1>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 2</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 1</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 3</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 4</li>
                </ul>
                <ul style={Theme[theme].body}> <h1 className={`p-1 px-2 text-xl font-bold hover:${Theme[theme].descHover}`}>Topic 2</h1>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 1</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 2</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 3</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 4</li>
                </ul>
                <ul style={Theme[theme].body}> <h1 className={`p-1 px-2 text-xl font-bold hover:${Theme[theme].descHover}`}>Topic 3</h1>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 1</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 2</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 3</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 4</li>
                </ul>
                <ul style={Theme[theme].body}> <h1 className={`p-1 px-2 text-xl font-bold hover:${Theme[theme].descHover}`}>Topic 4</h1>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 1</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 2</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 3</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 4</li>
                </ul>
                <ul style={Theme[theme].body}> <h1 className={`p-1 px-2 text-xl font-bold hover:${Theme[theme].descHover}`}>Topic 5</h1>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 1</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 2</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 3</li>
                    <li className={` ml-3 p-1 px-2 text-gray-400 hover:${Theme[theme].descHover}`}>sub topic 4</li>
                </ul>
            </div>
            <Body />
        </div>
    )
}

export default Content

