import type { Pair } from "../components/editlist";

export default function Checklist(props: { list: Pair[], setList: (list: Pair[]) => void }) {
  // Get list items from editlist

  if (props.list.length === 0) {
    return (
      <div className="flex flex-col">
        <h1 className="text-center">No items to do</h1>
      </div>
    );
  }

  return(
    <div className="flex flex-col min-w-[15rem] outline rounded-xl">
      <ul className="my-1">
        {props.list.map(({item, checked}, index) => (
          <li className="flex flex-col px-2 py-1" key={`${index}${item}`}>
            <div className="flex flex-row justify-between items-center">
              <input type="checkbox"/>
              <h3>{item}</h3>
            </div>
            {(index !== props.list.length - 1) ? <hr className="border-gray-400 mt-[0.5rem]" /> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}