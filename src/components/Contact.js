import {BsXSquare} from 'react-icons/bs';
import {BsPen} from 'react-icons/bs';

function Contact(props) {

    const {contact, editContact, deleteContact} = props;


    const _editContact = () => {
        editContact(contact);
    }

    const _deleteContact = () => {
        deleteContact(contact._id);
    }

    return (
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" >
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{contact.name}</h5>
                <div class="d-flex justify-content-center">
                    <small>
                        <a onClick={_editContact} type="button" class="btn btn-outline-dark m-1">
                            <BsPen />
                        </a>
                    </small>
                        <small>
                        <a onClick={_deleteContact} type="button" class="btn btn-outline-danger m-1">
                            <BsXSquare />
                        </a>
                    </small>
                </div>
            </div>
            <p class="mb-1">Email: {contact.email}</p>
            <p class="mb-1">Phone: {contact.phone}</p>
        </a>
    );
}

export default Contact;
