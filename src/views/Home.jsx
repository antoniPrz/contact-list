import { useContext, } from "react";
import { Link } from "react-router-dom";
import { Contact } from "../components/Contact";
import { LinkButton } from "../components/LinkButton";
import { ContactContext } from "../context/ContactProvider";



export function Home() {


  const [contacts] = useContext(ContactContext);



  return (

    <div className="container   flex flex-col max-w-3xl  mx-auto py-16">
      <LinkButton text="Add New Contact" path="/addNew" />
      <div>
        <ul>
          {
            contacts.map(contact => (
              <li key={contact.id}>
                <Contact
                  nombre={contact.full_name}
                  telefono={contact.phone}
                  correo={contact.email}
                  direccion={contact.address}
                  id={contact.id}
                />
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}