import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import logo from './logo.svg';
import './App.css';
import './ArtifactForm.css';

import fields from './data/artifactFormFields.json';

class App extends Component {

  renderFields(group) {
    let arr = fields[group];
    return arr.map((fieldData, index) => (
        <FormGroup key={index}>
          <Label for={fieldData['id']}>{fieldData['label']}</Label>
          <Input
            type={fieldData['type']}
            name={fieldData['id']}
            id={fieldData['id']}
            placeholder={fieldData['placeholder']}
            disabled={fieldData['disabled']}
            value={fieldData['value']}
            multiple={fieldData['multiple']}
            />
        </FormGroup>
      )
    );
  }

  render() {
    return (
      <div className="ArtifactForm">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h3>Add Artifact to Global Xplorer Registry</h3>
        <hr/>
        <Form>
          { this.renderFields('antiquityDiscovered') }
          { this.renderFields('antiquitySecured') }
          { this.renderFields('provenanceRegistered') }
          <hr/>
          <Button color="primary">Save</Button>{' '}
          <Button color="danger">Submit to Blockchain</Button>
        </Form>
      </div>
    );
  }
}

export default App;
