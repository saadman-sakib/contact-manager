function Alert(props) {
    let { type, message } = props;

    return (
        <div className={"alert alert-dismissible alert-" + type}>
            <h5>
                <strong>Well done!</strong> You successfully {message} a contact.
            </h5>
        </div>
    );
}

export default Alert;
