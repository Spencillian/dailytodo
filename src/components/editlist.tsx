import { useEffect, useState } from "react";

export type Pair = {item: string, checked: boolean}

export default function EditList(props: { list: Pair[], setList: (list: Pair[]) => void }) {

  // Manage the state of the list
  const [newItem, setNewItem] = useState("");

  function removeItem(item: string) {
    // Remove item from list and have it update the state of the list
    props.setList(props.list.filter(pair => pair.item !== item))
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <input 
          className="outline rounded-xl mr-3 px-2" 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)}
        />
          <button 
            className="outline hover:bg-slate-400 duration-100 rounded-xl px-2 py-1" 
            onClick={() => {
              props.setList([{item: newItem, checked: false}, ...props.list])
              setNewItem("");
            }}>
              Add
          </button>
      </div>
      {props.list.length > 0 ? (
        <ul className="outline rounded-xl mt-2 py-1">
          {props.list.map(({item, checked}, index) => (
            <li className="flex flex-col px-2 py-1" key={`${index}${item}`}>
              <div className="flex flex-row justify-between">
                <h3 className="" >{item}</h3>
                  <button className="justify-end" onClick={() => removeItem(item)}>Remove</button>
              </div>
              {(index !== props.list.length - 1) ? <hr className="border-gray-400 mt-[0.5rem]" /> : null}
            </li>
          ))}
        </ul>
      ): null}
            
    </div>
    )
    // Input
    // Add item button
    // Delete item button
}