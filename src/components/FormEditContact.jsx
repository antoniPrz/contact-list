import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { ContactContext } from "../context/ContactProvider"


export function FormEditContact() {

  const [contacts, eliminarContacto, agregarContacto, toEditContact] = useContext(ContactContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");



  const { id } = useParams();
  return (
    <>
      <div className="header flex justify-center">
        <h1 className="pb-4">
          Editar contacto
        </h1>

      </div>

      <form onSubmit={e => (e.preventDefault())} className="flex flex-col" >
        <label htmlFor="">Nombre</label>
        <input type="text"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
          placeholder="ingrese su nombre"
          onChange={e => setName(e.target.value)}
        />


        <label htmlFor="">Correo</label>
        <input type="email"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
          placeholder="ingrese su email"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="">Telefono</label>
        <input type="text"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
          placeholder="ingrese su telefono"
          onChange={e => setPhone(e.target.value)}
        />

        <label htmlFor="">Direccion</label>
        <input type="text"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4 w-4lg"
          placeholder="ingrese su direccion"
          onChange={e => setAddress(e.target.value)}
        />

        <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => toEditContact(name, email, phone, address, id)}
        >Editar contacto</button>

      </form>

    </>
  )
}