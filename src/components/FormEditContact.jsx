

export function FormEditContact() {

  return (
    <>
      <div className="header flex justify-center">
        <h1 className="pb-4">
          Editar contacto
        </h1>

      </div>

      <form action="" className="flex flex-col">
        <label htmlFor="">Nombre</label>
        <input type="text"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4" placeholder="ingrese su nombre" />


        <label htmlFor="">Correo</label>
        <input type="email"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4" placeholder="ingrese su email" />

        <label htmlFor="">Telefono</label>
        <input type="text"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4" placeholder="ingrese su telefono" />

        <label htmlFor="">Direccion</label>
        <input type="text"
          className=
          "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4 w-4lg" placeholder="ingrese su direccion" />

        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">Editar contacto</button>

      </form>

    </>
  )
}