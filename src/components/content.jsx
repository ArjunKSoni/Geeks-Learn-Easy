import { React, useContext } from "react";
import Body from "./body";
import Theme from "../extraGenerator/theme";
import Authcontext from "../context/authContext";
import { BiArrowFromRight } from 'react-icons/bi';

function Content() {
    const { theme } = useContext(Authcontext);

    return (
        <div className="flex ">
            <div style={Theme[theme].bodydesc} className="contentSidebar p-3  sideDec no-scrollbar border-r-4 overflow-x-auto">
                {/* <div className=" rotate-180 w-full -mt-3 h-1 bg-green-500"></div> */}
                <ul style={Theme[theme].bodydesc}> <h1 className={`p-1 px-2 text-xl ${Theme[theme].textclass} rounded-xl font-bold hover:text-white  hover:${Theme[theme].newdescHover}`}>Topic 1</h1>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 2</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 1</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 3</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 4</li>
                </ul>
                <ul style={Theme[theme].bodydesc}> <h1 className={`p-1 px-2 text-xl ${Theme[theme].textclass} rounded-xl font-bold hover:text-white hover:${Theme[theme].newdescHover}`}>Topic 2</h1>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 1</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 2</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 3</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 4</li>
                </ul>
                <ul style={Theme[theme].bodydesc}> <h1 className={`p-1 px-2 text-xl ${Theme[theme].textclass} rounded-xl font-bold hover:text-white hover:${Theme[theme].newdescHover}`}>Topic 3</h1>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 1</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 2</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 3</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 4</li>
                </ul>
                <ul style={Theme[theme].bodydesc}> <h1 className={`p-1 px-2 text-xl ${Theme[theme].textclass} rounded-xl font-bold hover:text-white hover:${Theme[theme].newdescHover}`}>Topic 4</h1>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 1</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 2</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 3</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 4</li>
                </ul>
                <ul style={Theme[theme].bodydesc}> <h1 className={`p-1 px-2 text-xl ${Theme[theme].textclass} rounded-xl font-bold hover:text-white hover:${Theme[theme].newdescHover}`}>Topic 5</h1>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 1</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 2</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 3</li>
                    <li className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>sub topic 4</li>
                </ul>
            </div>
            <ul style={{ backgroundColor: "black" }} className='absolute mb-3 top-16 xhide px-2 rounded'> <h1 className={`p-1 px-2 text-xl text-white rounded-xl font-bold hover:text-white`}><BiArrowFromRight /></h1></ul>
            <Body />
        </div>
    )
}

export default Content

