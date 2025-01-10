import React from "react";

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: ""
        };
        this.add = this.add.bind(this);
    }

    add = (e) =>{
        e.preventDefault(); // Prevent page refresh
        if (this.state.name === "" || this.state.email === "") {
            alert("All fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state)
        this.setState({name:"",email:""}) //for clearing
       // console.log(this.state);
    }

    render() {
        return (
            <div className="ui main container" style={{ marginTop: "100px" }}>
                <h2 className="ui header">Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;