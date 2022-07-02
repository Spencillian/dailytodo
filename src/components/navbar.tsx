import Link from "next/link";
export type viewMode = "edit" | "view";


export default function Navbar(props: { currentMode: viewMode, changeMode: (mode: viewMode) => void }) {
    return (
        <div className="flex flex-row p-8">
            <h1 className={`mr-3 px-2 py-1 hover:bg-slate-400 rounded-xl duration-100 outline ${props.currentMode === 'view' ? 'bg-slate-300' : null}`}>
                <button onClick={() => props.changeMode('view')}>Checklist</button>
            </h1>
            <h1 className={`px-2 py-1 hover:bg-slate-400 rounded-xl duration-100 outline ${props.currentMode === 'edit' ? 'bg-slate-300' : null}`}>
                <button onClick={() => props.changeMode('edit')}>Edit List</button>
            </h1>
        </div>
    )
}