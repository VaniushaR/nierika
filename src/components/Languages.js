import React, { Component } from 'react';
import { Dropdown, Segment, Grid, Label } from 'semantic-ui-react';
import MexicanLanguages from '../data/mexican_languages';

const options = MexicanLanguages.map(
  ({ Abbreviation, Language, State, Location, Autonym }) => ({
    value: Abbreviation,
    text: '[' + Abbreviation + ']  ' + Language + ' / ' + Autonym,
    flag: 'mx'
  })
);

let locationOption = [];

class LanguagesOptions extends Component {
  constructor() {
    super();
    this.state = {
      languageSelection: '',
      languageLocation: locationOption
    };
  }

  locationSelector(LangSelected) {
    MexicanLanguages.map(({ Abbreviation, Location }) => {
      if (LangSelected === Abbreviation) {
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

  handleChange = (e, { languageSelection, value }) => {
    locationOption = [];
    this.setState({ languageSelection: value });
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
              onChange={this.locationSelector(this.state.languageSelection)}
            />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default LanguagesOptions;

/*TODO: 
  1. Set state for the location of the language selection
  2. Clear location's array when the user change the selection of languaje 

*/
