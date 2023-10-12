import { DoubleSimpleListExample, SimpleListExample } from "~/components/listexamples"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
    const example1 = `
<Dragbox> 
  <ul>
      <Draggable dragon={true}>
          <li>Thing 1</li>
      </Draggable> 
      
      <Draggable dragon={true}> 
          <li>Thing 2</li> 
      </Draggable> 
  </ul>
</Dragbox>
    `

    const example2 = `
<Dragbox>
  <ul>
    <Draggable>
        <li>Box 1 thing 1</li>
    </Draggable>

    <Draggable>
        <li>Box 1 thing 2</li>
    </Draggable>
  </ul>   
</Dragbox>

<Dragbox>
    <ul>
      <Draggable>
          <li>Box 2 thing 1</li>
      </Draggable>

      <Draggable>
          <li>Box 2 thing 2</li>
      </Draggable>
    </ul>
</Dragbox>
`

    return (
      <div className="mx-10 md:mx-[20%] xl:mx-[30%] py-20">
        <center className="p-5 bg-orange-900 rounded-md shadow-lg">
          <h1 className="font-extrabold text-4xl stroke-black mt-4">
            React Dragon Drag and Drop
          </h1>
          <h2 className="text-2xl py-3">React drag and drop library with a dragon</h2>
          <p className="p-3">Note: this project is based on the <Link className="underline opacity-80 hover:opacity-100" target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/API/DragEvent#browser_compatibility">poorly-supported</Link> drag and drop web API</p>
          <h3 className="font-bold text-xl">install with npm</h3>
          <code className="bg-slate-600 rounded-md p-1 shadow-inner">npm i react-dragon-drag-and-drop</code>
        </center>

        <h1 className="font-extrabold pt-5 text-4xl stroke-black">Quickstart</h1>

        <h2 className="font-extrabold pt-3 text-2xl">Single list</h2>
        <h3 className="font-bold text-xl">With dragons:</h3>
        <Image className="rounded-md" src="/simpleListExample.png" alt={example1} width="1280" height="840" />
        <SimpleListExample dragon={true} />
        
        <h3 className="font-bold mt-4 text-xl">Without dragons:</h3>
        <p><code>dragon</code> is false by default</p>
        <SimpleListExample />

        <h2 className="font-extrabold pt-3 text-2xl">Drag between two lists</h2>
        <Image className="rounded-md" src="/doubleSimpleListExample.png" alt={example2} width="1240" height="1352" />
        <DoubleSimpleListExample />
      </div>
    )
  }