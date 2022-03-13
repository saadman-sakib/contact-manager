import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { addContact, updateContact ,getContacts, deleteContact } from "./helper.js";
import "./App.css";
import Alert from "./components/Alert";


function App() {
    let [btn_class, setBtnClass] = useState("primary");
    let [btn_text, setBtnText] = useState("Add Contact");
    let [form_on, setFormOn] = useState(false);
    let [contact_list, setContactList] = useState([]);
    let [form_data, setFormData] = useState({});
    let [add_not_edit, setAddNotEdit] = useState(true);
    let [alert_on, setAlertOn] = useState(false);
    let [alert_type, setAlertType] = useState("success");
    let [alert_message, setAlertMessage] = useState("");

    useEffect(() => {
      const getContacts_ = async () => {
        const contacts = await getContacts();
        setContactList(contacts.reverse());
      };
  
      getContacts_();
    }, []);

    const triggerAllert = (type, message) => {
      setAlertMessage(message);
      setAlertType(type);
      setAlertOn(true);
      setTimeout(() => {
        setAlertOn(false);
      }, 2000);
    };


    function formOn() {
      setFormOn(true);
      setBtnClass("warning");
      setBtnText("Cancel");
    }

    function formOff() {
      setFormOn(false);
      setBtnClass("primary");
      setBtnText("Add Contact");
      setAddNotEdit(true);
      setFormData({});
    }

    function editContact(contact) {
      setAddNotEdit(false);
      if (!form_on) {
        document.getElementById('accordionBtn').click()
      }
      setFormData(contact);
    }

    function _deleteContact(id) {
      const new_contact_list = contact_list.filter(contact => contact._id !== id);
      setContactList(new_contact_list);
      deleteContact(id);
      triggerAllert("warning", "Deleted");
    }

    function updateContactDom(contact){
      let contacts = [...contact_list];
      let index = contacts.findIndex(contact_ => contact_._id === contact._id);
      contacts[index] = contact;
      setContactList(contacts);
      document.getElementById('accordionBtn').click()
      updateContact(contact);
      triggerAllert("info", "Updated");
    }
    
    async function addContactDom(contact) {
      let newContact = await addContact(contact);
      setContactList([newContact, ...contact_list]);
      document.getElementById('accordionBtn').click()
      setFormData({});
      triggerAllert("success", "Added");
    }

    return (
      <div>
        <br/>
        <div class="d-flex justify-content-between">
        <div>
        </div>
          <small>
            <button type="button" class="btn btn-outline-danger mr-4"> LogOut </button>
          </small>
        </div>
        <div className="container">
          <br/><br/><br/><br/><br/>
          {alert_on?<Alert message={alert_message} type={alert_type} />:null}
          <br/><br/>
            <h1>My Contacts</h1>
          <br/><br/>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <span id="accordionBtn" className={"btn btn-block btn-outline-" + btn_class } onClick={form_on?formOff:formOn} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  {btn_text}
                </span>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ContactForm 
                    addContact={addContactDom} 
                    updateContact={updateContactDom} 
                    form_data={form_data} 
                    add_not_edit={add_not_edit} 
                  />
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <ContactList 
            deleteContact={_deleteContact} 
            editContact={editContact}
            contact_list={contact_list}
          />
        </div>
      </div>
    );
}

export default App;
