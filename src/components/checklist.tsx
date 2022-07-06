import type { Pair } from "../components/editlist";

export default function Checklist(props: { list: Pair[], setList: (list: Pair[]) => void }) {
  function handleChange(index: number, checked: boolean) {
    // Update list with new checked value
    props.setList(props.list.map((pair, i) => {
      if (i === index) {
        pair.checked = !checked;
        return pair;
      }
      return pair;
    }));
  }

  // Handle empty list case
  if (props.list.length === 0) {
    return (
      <div className="flex flex-col">
        <h1 className="text-center">No items to do</h1>
      </div>
    );
  }

  return(
    <div className="flex flex-col min-w-[25rem] outline rounded-xl">
      <ul className="my-1">
        {props.list.map(({item, checked}, index) => (
          <li className="flex flex-col px-2 py-1" key={`${index}${item}`}>
            <div className="flex flex-row justify-between items-center">
              <h3 className="break-words max-w-[20rem]">{item}</h3>
              <input type="checkbox" checked={checked} onChange={() => handleChange(index, checked)}/>
            </div>
            {(index !== props.list.length - 1) ? <hr className="border-gray-400 mt-[0.5rem]" /> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}