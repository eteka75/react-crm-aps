import React, { Component } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase';

class Form extends Component {
    addContact = (event) => {
        event.preventDefault();
        addDoc(collection(db, "contacts"), {
            prenom: event.target.prenom.value,
            nom: event.target.nom.value,
            email: event.target.email.value,
            compagnie: event.target.compagnie.value,
            notes: event.target.notes.value,
            created_at: new Date()
        })
        document.getElementById('addContact').reset();
    }
    render() {
        return (
            <div className="row">
                <form className="col col12 m12" id='addContact' method='post' onSubmit={this.addContact.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" className="validate" placeholder="Prénom" id='prenom' />
                            <label htmlFor='prenom'>Prénom</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" className="validate" placeholder="Nom de famille" id='nom' />
                            <label htmlFor='nom'>Nom de famille</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="email" className="validate" placeholder="Email" id='email' />
                            <label htmlFor='email'>Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" className="validate" placeholder="Compagnie" id='compagnie' />
                            <label htmlFor='compagnie'>Compagnie</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" className="validate" placeholder="Notes..." id='notes' />
                            <label htmlFor='notes'>Notes</label>
                        </div>
                        <div className="input-field col s4">
                            <button className='btn waves-effect waves-light' type='submit' id='btn' name='action'>Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Form;