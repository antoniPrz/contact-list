import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { ContactContext } from "../context/ContactProvider"



export function Contact({ nombre, correo, telefono, direccion, id }) {

  const [contacts, eliminarContacto] = useContext(ContactContext)




  return (
    <>
      <div className="flex  py-4 px-4 my-4 justify-between border-solid rounded-lg border-2 border-indigo-400 bg-indigo-50 items-center" >
        <div className="avatar ">
          <img className="rounded-full w-24 h-24 object-cover border-orange-400 border-solid border-2" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
        </div>

        <div className="contact-info">
          <div className="header">
            <h2>
              {nombre}
            </h2>
          </div>
          <div className="text">
            <p> {telefono} </p>
          </div>
          <div className="text">
            <p> {correo} </p>
          </div>
          <div className="text">
            <p> {direccion} </p>
          </div>
        </div>
        <div className="icons flex ">

          <div className="edit text-yellow-500 px-2 hover:text-yellow-800">
            <Link to={`/edit/${id}`}>
              <svg className="" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </Link>

          </div>
          <div className="delete text-red-500 hover:text-red-800">
            <button onClick={() => (eliminarContacto(id))}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>

          </div>
        </div>


      </div>
    </>
  )
}