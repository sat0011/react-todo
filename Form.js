import React, {Component, useInsertionEffect, useRef} from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            fname: '',
            lastname: '',
            email: ''
        };
        this.fname_ref = React.createRef();
        this.lastname_ref = React.createRef();
        this.email_ref = React.createRef();

        this.state = this.initialState;
        this.send_submit = this.send_submit.bind(this);
    }

    send_submit(event) {
        event.preventDefault()
        console.log(this.fname_ref.current.value);
        let character = {fname: this.fname_ref.current.value, lastname: this.lastname_ref.current.value, email: this.email_ref.current.value};
        this.props.handle_submit(character)
    }

    render() {
        const {fname, lastname, email} = this.state;

        return (
            <form>
                <label>first name</label>
                <input 
                    ref={this.fname_ref}
                    type="text" 
                    name="fname" 
                    id="fname"
                    defaultValue={''} />
                <label>last name</label>
                <input 
                    ref={this.lastname_ref}
                    type="text" 
                    name="lastname" 
                    id="lastname"
                    defaultValue={''}
                    />
                <label>email</label>
                <input 
                    ref={this.email_ref}
                    type="text" 
                    name="email" 
                    id="email"
                    defaultValue={''}
                    />
                <button onClick={this.send_submit}>
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;