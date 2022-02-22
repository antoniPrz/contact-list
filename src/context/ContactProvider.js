import { createContext, useEffect, useState } from "react";



export const ContactContext = createContext()

export function ContactProvider(props) {

  const [contact, setContact] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    toGetContacts();

  }, []);


  const toGetContacts = () => {
    fetch("https://assets.breatheco.de/apis/fake/contact/agenda/jarrod")
      .then((batata) => (batata.json()))
      .then((data) => { setContacts(data) })
      .catch(error => console.log(error));

  }

  const eliminarContacto = (id) => {
    fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
      method: "DELETE"
    })
      .then(() => { toGetContacts() })
      .catch(error => console.log(error));
  }


  function agregarContacto(full_name, phone, email, address) {


    fetch("https://assets.breatheco.de/apis/fake/contact/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        full_name: full_name,
        email: email,
        agenda_slug: "jarrod",
        address: address,
        phone: phone
      })
    }).then(() => { toGetContacts() })
      .catch(error => console.log(error));


    console.log("agregando desde context")
  }




  const toEditContact = (full_name, phone, email, address, id) => {
    fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: id,
        full_name: full_name,
        email: email,
        agenda_slug: "jarrod",
        address: address,
        phone: phone
      })
    }).then(() => { toGetContacts() })
      .catch(error => console.log(error));

    console.log("editado desde context")


  }





  return (
    <ContactContext.Provider value={[contacts, eliminarContacto, agregarContacto, toEditContact]}>
      {props.children}
    </ContactContext.Provider>

  )

}