import { React, useContext } from "react";
import Body from "./body";

function Content() {

    return (
        <div className="flex contentSidebar">
            <div className="bgbla p-3 text-white sideDec no-scrollbar border-r-4 overflow-x-auto">
                {/* <div className=" rotate-180 w-full -mt-3 h-1 bg-green-500"></div> */}
                <ul className="bgbla"> <h1 className="p-1 px-2 text-xl font-bold hover:bg-gray-700">Topic 1</h1>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 2</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 1</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 3</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 4</li>
                </ul>
                <ul className="bgbla"> <h1 className="p-1 px-2 text-xl font-bold hover:bg-gray-700">Topic 2</h1>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 1</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 2</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 3</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 4</li>
                </ul>
                <ul className="bgbla"> <h1 className="p-1 px-2 text-xl font-bold hover:bg-gray-700">Topic 3</h1>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 1</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 2</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 3</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 4</li>
                </ul>
                <ul className="bgbla"> <h1 className="p-1 px-2 text-xl font-bold hover:bg-gray-700">Topic 4</h1>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 1</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 2</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 3</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 4</li>
                </ul>
                <ul className="bgbla"> <h1 className="p-1 px-2 text-xl font-bold hover:bg-gray-700">Topic 5</h1>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 1</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 2</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 3</li>
                    <li className=" ml-3 p-1 px-2 text-gray-400 hover:bg-gray-700">sub topic 4</li>
                </ul>
            </div>
            <Body />
        </div>
    )
}

export default Content

