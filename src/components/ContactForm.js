function ContactForm() {
    function handleClick(){
        alert("Thanks for your message!");
    }
    return (
        <div className="card shadow-sm ">
            <div className="card-body">
                <h5 className="card-title">Add New Contact</h5>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter Phone" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={handleClick} >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
