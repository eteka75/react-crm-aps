import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import db from '../firebase';
import { Component } from 'react';
import Grid from './Grid';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.state = {
      contacts: []
    };
  }
  async updateData() {
    const contacts = await getDocs(collection(db, "contacts"));
    const contactsFinal = contacts.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    this.setState({ contacts: contactsFinal });
    this.updateData();
  }
  componentDidMount() {
    this.updateData();
  }
  async deleteData(docId) {

    await deleteDoc(doc(db, "contacts", docId));
    //alert("Article supprimé" );
    this.updateData();
  }
  render() {
    return (
      <div className="App">
        <div className="navbar-fixed teal ">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">Contact</a>
            </div>
          </nav>
        </div>
        <div className="container">
          <Form />
          <Grid items={this.state.contacts} deleteData={this.deleteData} />
        </div>
      </div>
    );
  }
}

export default App;
