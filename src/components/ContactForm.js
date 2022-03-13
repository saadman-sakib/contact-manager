import {useEffect, useState} from "react";


function ContactForm(props) {
    let {form_data, add_not_edit, addContact, updateContact} = props;
    let [name, setName] = useState(form_data.name);
    let [email, setEmail] = useState(form_data.email);
    let [phone, setPhone] = useState(form_data.phone);


    useEffect(() => {
        setName(form_data.name?form_data.name:"");
        setEmail(form_data.email?form_data.email:"");
        setPhone(form_data.phone?form_data.phone:"");
    }, [form_data]);

    function handleClick(){
        if (add_not_edit) {
            addContact({name, email, phone});
        } else {
            updateContact({name, email, phone, _id: form_data._id});
        }
    }

    const nameChange = function(event) {
        setName(event.target.value);
    }

    const emailChange = function(event) {
        setEmail(event.target.value);
    }

    const phoneChange = function(event) {
        setPhone(event.target.value);
    }


    return (
        <div className="card shadow-sm ">
            <div className="card-body">
                <h5 className="card-title">{add_not_edit?"Add New Contact":"Edit Contact"}</h5>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input key={props.form_on} type="text" className="form-control" id="name" onChange={nameChange} value={name} placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input key={props.form_on} type="email" className="form-control" id="email" onChange={emailChange} value={email}  placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input key={props.form_on} type="text" className="form-control" id="phone" onChange={phoneChange} value={phone}  placeholder="Phone" />
                    </div>
                    <span className="btn btn-primary btn-block" onClick={handleClick} >
                        Submit
                    </span>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
