import { Link } from "react-router-dom/cjs/react-router-dom.min";



export function LinkButton(props) {

  return (<>
    <div className="flex justify-end">
      <Link type="button"
        to={props.path}
      >
        {props.text}
      </Link>
    </div>

  </>)
}