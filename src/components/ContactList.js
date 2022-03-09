import Contact from "./Contact";

function ContactList(props) {

    const contacts = props.contact_list;

    return (
        <div class="list-group">
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </div>
    );
}

export default ContactList;
