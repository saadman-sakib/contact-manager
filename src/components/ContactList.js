import Contact from "./Contact";

function ContactList(props) {
    const contacts = props.contact_list;
    const editContact = props.editContact;
    const deleteContact = props.deleteContact;

    return (
        <div class="list-group">
            {contacts?.reverse().map(contact => (
                <Contact deleteContact={deleteContact} editContact={editContact} key={contact._id} contact={contact} />
            ))}
        </div>
    );
}

export default ContactList;
