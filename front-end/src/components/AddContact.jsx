import React from "react";

class AddContact extends React.Component {
    render() {
        return (
            <div className="ui main container" style={{ marginTop: "100px" }}>
                <h2 className="ui header">Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;