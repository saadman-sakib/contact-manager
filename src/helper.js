// get contacts
const getContacts = () => {
    let url = 'http://localhost:3000/contacts';
    let contacts;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            contacts = data.contacts;
        })
        .catch(err => console.log(err));
    return contacts;
};


// add Contact
const addContact = (contact) => {
    let url = 'http://localhost:3000/contacts';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
};

// update contact
const updateContact = (contact) => {
    let url = `http://localhost:3000/contacts/${contact.id}`;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
    .then(response => response.json())
    .then(data => {console.log(data);})
    .catch(error => {console.log(error);});
};


// delete contact
const deleteContact = (id) => {
    let url = `http://localhost:3000/contacts/${id}`;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
}


export {getContacts, addContact, deleteContact, updateContact};