import { FormEditContact } from "../components/FormEditContact";
import { LinkButton } from "../components/LinkButton";


export function EditContact() {

  return (
    <>
      <div className="container flex flex-col max-w-3xl  mx-auto py-16">
        <LinkButton text="Volver" path="/" />
        <FormEditContact />
      </div>
    </>
  )
}