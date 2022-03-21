import { FormAddNewContact } from "../components/FormAddNewContact";
import { LinkButton } from "../components/LinkButton";


export function AddNewContact() {
  return (
    <>
      <div className="container flex flex-col max-w-3xl  mx-auto py-16">
        <LinkButton text="Return" path="/" />
        <FormAddNewContact />
      </div>
    </>
  )
}