"use client"

import React from "react";
import { Dragbox, Draggable } from "react-dragon-drag-and-drop";

interface listExampleProps {
    dragon?: boolean
}
export const SimpleListExample: React.FC<listExampleProps> = ({dragon}) => (
    <Dragbox>
        <ul>
            <Draggable dragon={dragon}>
                <li>Thing 1</li>
            </Draggable>

            <Draggable dragon={dragon}>
                <li>Thing 2</li>
            </Draggable>
        </ul>
    </Dragbox>
)

export const DoubleSimpleListExample: React.FC<listExampleProps> = ({dragon}) => (
    <>
        <Dragbox>
            <ul className="bg-red-900 min-h-[5rem]">
            <Draggable>
                <li>Box 1 thing 1</li>
            </Draggable>

            <Draggable>
                <li>Box 1 thing 2</li>
            </Draggable>
            </ul>   
        </Dragbox>
        <Dragbox>
            <ul className="bg-indigo-900 min-h-[5rem]">
                <Draggable>
                    <li>Box 2 thing 1</li>
                </Draggable>

                <Draggable>
                    <li>Box 2 thing 2</li>
                </Draggable>
            </ul>
        </Dragbox>
    </>
)