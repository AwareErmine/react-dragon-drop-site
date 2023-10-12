"use client"

import React from "react";
import { Dragbox, Draggable } from "react-dragon-drag-and-drop";

interface listExampleProps {
    dragon?: boolean
}
export const SimpleListExample: React.FC<listExampleProps> = ({dragon}) => (
    <Dragbox>
        <ul className="bg-slate-700 min-h-[5rem] rounded-md p-3 my-4">
            <Draggable dragon={dragon}>
                <li className="bg-slate-800 rounded-sm p-2 my-1">Thing 1</li>
            </Draggable>

            <Draggable dragon={dragon}>
                <li className="bg-slate-800 rounded-sm p-2 my-1">Thing 2</li>
            </Draggable>
        </ul>
    </Dragbox>
)

export const DoubleSimpleListExample: React.FC<listExampleProps> = ({dragon}) => (
    <>
        <Dragbox>
            <ul className="bg-red-900 min-h-[5rem] rounded-md my-4 p-3">
                <Draggable dragon={dragon}>
                    <li className="bg-red-950 rounded-sm p-2 my-1">Box 1 thing 1</li>
                </Draggable>

                <Draggable dragon={dragon}>
                    <li className="bg-red-950 rounded-sm p-2 my-1">Box 1 thing 2</li>
                </Draggable>
            </ul>   
        </Dragbox>
        <Dragbox>
            <ul className="bg-indigo-900 min-h-[5rem] rounded-md p-3">
                <Draggable dragon={dragon}>
                    <li className="bg-indigo-950 rounded-sm p-2 my-1">Box 2 thing 1</li>
                </Draggable>

                <Draggable dragon={dragon}>
                    <li className="bg-indigo-950 rounded-sm p-2 my-1">Box 2 thing 2</li>
                </Draggable>
            </ul>
        </Dragbox>
    </>
)