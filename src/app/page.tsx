"use client"

import { Draggable } from "react-dragon-drag-and-drop"

export default function Page() {
    return (
      <div className="">
        <h1 className="">
          React Dragon Drag and Drop
        </h1>

        <ul>
            <Draggable dragon={true}>
                <li>Thing 1</li>
            </Draggable>

            <Draggable dragon={true}>
                <li>Thing 2</li>
            </Draggable>
        </ul>
      </div>
    )
  }