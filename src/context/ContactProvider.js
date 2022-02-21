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


  const toSetNewContact = () => {
    console.log("Agregamdo nuevo contacto");

  }




  const toEditContact = () => {


  }





  return (
    <ContactContext.Provider value={[contacts, eliminarContacto, toSetNewContact]}>
      {props.children}
    </ContactContext.Provider>

  )

}