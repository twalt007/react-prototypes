import React, {Component} from "react";
import contactData from '../data/contact'
import ContactList from "./contact_list";
import ContactForm from "./contact_form"

class App extends Component{
    constructor(props){
        super(props);

        this.state={
            contacts: contactData
        }
        this.addContact=this.addContact.bind(this)
    }
    addContact(contact){
        console.log("App: addComponent", contact);
        // const newContacts = this.state.contacts.slice();
        // // You could use push here instead of unshift
        // newContacts.unshift(contact);
            // this.setState({
        //     contacts: newContacts
        // });
        this.setState({
            contacts: [...this.state.contacts, contact]
        })
    }
    render(){
        return (
            <div className="container">
                <h1 className="text-center my-3">
                    Address Book
                </h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm add={this.addContact}/>
                    </div>
                    <ContactList contacts={this.state.contacts}/>
                </div>
            </div>
        )
    } 
}

export default App;
