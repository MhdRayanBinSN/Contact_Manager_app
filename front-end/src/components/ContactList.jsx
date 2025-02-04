import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler= (id)=>{
        props.getContactId(id);
    }
    //acces props
    const renderContactList = props.contacts.map((contact)=>{
            return(
                <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
            )
       
    })
    
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
};

export default ContactList;