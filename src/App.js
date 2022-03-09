import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { getContacts } from "./helper.js";

function App() {
    let [btn_class, setBtnClass] = useState("primary");
    let [btn_text, setBtnText] = useState("Add Contact");
    let [form_on, setFormOn] = useState(false);
    // let [contact_list, setContactList] = useState(getContacts());

    let contact_list=[
      {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@gmail.com",
        phone: "222-222-2222"
      },
    ];


    function handleClick() {
      setFormOn(!form_on);

      if (!form_on){
        setBtnClass("warning");
      } else {
        setBtnClass("primary");
      }

      if (!form_on){
        setBtnText("Cancel");
      }
      else {
        setBtnText("Add Contact");
      }
    }

    return (
        <div>
            <div className="container">
                <br /><br />
                <div class="d-flex justify-content-between">
                  <h1>My Contacts</h1>
                  <small>
                    <button type="button" class="btn btn-outline-danger"> LogOut </button>
                  </small>
                </div>
                <br /><br />
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <a className={"btn btn-block btn-outline-" + btn_class } onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {btn_text}
                      </a>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <ContactForm  />
                      </div>
                    </div>
                  </div>
                </div>

                <br /><br />
                <ContactList contact_list={contact_list} />
            </div>
        </div>
    );
}

export default App;
