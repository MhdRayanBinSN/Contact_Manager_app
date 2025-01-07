import React from "react"

const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    return(
        <div className="item">
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <i className="trash alternate outline icon"  style={{ float: "right", color: "red", marginTop: "5px", marginBottom: "7px" }}></i>
       
    </div>
    )
}
export default ContactCard  ;