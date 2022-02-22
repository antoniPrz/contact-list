import { Link } from "react-router-dom/cjs/react-router-dom.min";



export function LinkButton({ text, path }) {

  return (<>
    <div className="flex justify-end">
      <Link type="button"
        to={path}
      >
        {text}
      </Link>
    </div>

  </>)
}