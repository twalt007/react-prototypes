import React, {Component} from 'react';

class ContactForm extends Component{
    constructor(props){
        super(props);

        this.state={
            form:{
                firstName:'',
                lastName:''
            }
            
        }
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        console.log(event.target.value);
        console.log(event.target.name);
        const {value,name} = event.target;
        const {form} = this.state;

        form[name]=value;

        this.setState({
            form: {...form}
        });
    }
    render(){
        const {firstName, lastName}=this.state.form;
        return(
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input className="form-control" onChange={this.handleInputChange} name="firstName" value={firstName} type="text"></input>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control" onChange={this.handleInputChange} name="lastName" value={lastName} type="text"></input>
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input className="form-control" name="firstName" type="text"></input>
                </div>
            </form>
        )
    }
};
export default ContactForm;