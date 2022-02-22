import { useContext, useState } from "react"
import { ContactContext } from "../context/ContactProvider"


const contacto = {
  full_name: "",
  email: "",
  agenda_slug: "jarrod",
  address: "",
  phone: ""

}

export function FormAddNewContact() {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const [contacts, eliminarContacto, agregarContacto] = useContext(ContactContext)

  // const agregarContacto = () => {
  //   console.log('agregando contacto')
  // }

  const [name, setName] = useState({})
  const [phone, setPhone] = useState({})
  const [address, setAddress] = useState({})
  const [email, setEmail] = useState({})



  return (
    <>
      <div className="header flex justify-center">
        <h1 className="pb-4">
          Agregar nuevo contacto
        </h1>

      </div>

      <form action="" onSubmit={onSubmit} className="flex flex-col">
        <label htmlFor="">Nombre</label>
        <input type="text"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4" placeholder="ingrese su nombre"
          onChange={e => setName(e.target.value)}
        />


        <label htmlFor="">Correo</label>
        <input type="email"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4" placeholder="ingrese su email"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="">Telefono</label>
        <input type="text"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4" placeholder="ingrese su telefono"
          onChange={e => (setPhone(e.target.value))}
        />

        <label htmlFor="">Direccion</label>
        <input type="text"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4 w-4lg" placeholder="ingrese su direccion"
          onChange={e => setAddress(e.target.value)} />

        <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => (agregarContacto(name, phone, email, address))}

        >Guardar contacto</button>

      </form>
    </>
  )
}