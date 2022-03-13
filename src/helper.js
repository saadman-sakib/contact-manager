const API_URL = 'https://reacto-contacto.herokuapp.com'



// get contacts
const getContacts = async () => {
    const res = await fetch(
      API_URL
    );

    const data = await res.json();
    console.log(data);
    return data;
}

// add Contact
const  addContact = async (contact) => {
    let url = API_URL + '/contacts/new';

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
    let url = API_URL + `/contacts/${contact._id}`;

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
    let url = API_URL + `/contacts/delete/${id}`;
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