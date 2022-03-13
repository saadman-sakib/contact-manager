
// get contacts
const getContacts = async () => {
    const res = await fetch(
      "http://localhost:5001/contacts"
    );

    const data = await res.json();
    console.log(data);
    return data;
}

// add Contact
const  addContact = async (contact) => {
    let url = 'http://localhost:5001/contacts/new';

    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })

    let data = await res.json();
    console.log(data);
    return data;
};

// update contact
const updateContact = (contact) => {
    let url = `http://localhost:5001/contacts/${contact._id}`;

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
    let url = `http://localhost:5001/contacts/delete/${id}`;
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