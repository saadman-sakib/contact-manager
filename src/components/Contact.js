import {BsXSquare} from 'react-icons/bs';
import {BsPen} from 'react-icons/bs';

function Contact(props) {

    const {contact} = props;


    return (
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" >
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{contact.name}</h5>
                <div class="d-flex justify-content-center">
                    <small>
                        <button type="button" class="btn btn-outline-dark m-1">
                            <BsPen />
                        </button>
                    </small>
                        <small>
                        <button type="button" class="btn btn-outline-danger m-1">
                            <BsXSquare />
                        </button>
                    </small>
                </div>
            </div>
            <p class="mb-1">Email: {contact.email}</p>
            <p class="mb-1">Phone: {contact.phone}</p>
        </a>
    );
}

export default Contact;
