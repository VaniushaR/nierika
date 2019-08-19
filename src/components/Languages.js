import React, { Component } from 'react';
import { Dropdown, Segment, Grid, Label } from 'semantic-ui-react';
import MexicanLanguages from '../data/mexican_languages';

const options = MexicanLanguages.map(
  ({ Abbreviation, Language, State, Location, Autonym }) => ({
    value: Language,
    text: '[' + Abbreviation + ']  ' + Language + ' / ' + Autonym,
    flag: 'mx'
  })
);
let locationOption = [];
let language;
let location;

class LanguagesOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageSelection: ''
    };
  }

  locationSelector(LangSelected) {
    MexicanLanguages.map(({ Language, Location }) => {
      if (LangSelected === Language) {
        for (let property in Location) {
          locationOption.push({
            value: Location[property],
            text: Location[property]
          });
        }
      }
      return locationOption;
    });
  }

  handleChange = (e, { value, name }) => {
    locationOption = [];
    this.setState({ languageSelection: value });
    console.log(value);
    language = value;
  };

  handleSel = (e, { value }) => {
    console.log('val: ' + value);
    location = value;
  };

  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Label attached="top">Selecciona la Lengua Originaria</Label>
            <Dropdown
              placeholder="Selecciona Lenguaje"
              fluid
              clearable="true"
              search
              options={options}
              onChange={this.handleChange}
            />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Label attached="top">Selecciona la localidad</Label>
            <Dropdown
              placeholder="Estado, Municipio, Localidad"
              fluid
              clearable="true"
              search
              options={locationOption}
              onChange={
                (this.locationSelector(this.state.languageSelection),
                this.handleSel)
              }
            />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default LanguagesOptions;
export { language, location };
