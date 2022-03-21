import { Link } from "react-router-dom/cjs/react-router-dom.min";



export function LinkButton({ text, path }) {

  return (<>
    <div className="flex justify-end">
      <Link type="button"
        className=
        "bg-indigo-500 text-white padd px-4 py-2 rounded hover:bg-indigo-600 "
        to={path}
      >
        {text}
      </Link>
    </div>

  </>)
}