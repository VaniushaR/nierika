import React, { Component } from 'react';
import { List, Checkbox } from 'semantic-ui-react';

const textsTypesTags = [
  'Cuento',
  'Poesía',
  'Narración verídica',
  'Noticia',
  'Frase o Refrán',
  'Mito o Leyenda',
  'Gramática',
  'Vocabulario'
];

let selection = [];
class TextTypes extends Component {
  constructor() {
    super();
    this.state = {
      tagSelection: []
    };
  }

  handleClick = (e, { checked, label }) => {
    console.log('Click', checked, 'label:', label);
    selection.push(label);
    const uniqueSelection = new Set(selection);
    // turn to array again with the spread operator
    this.setState({ tagSelection: [...uniqueSelection] });
    console.log('state: ' + this.state.tagSelection);
    return (selection = [...uniqueSelection]);
  };

  render() {
    return (
      <div>
        <List divided horizontal>
          {textsTypesTags.map(textsTypesTag => (
            <List.Item key={textsTypesTag}>
              <List.Content>
                <Checkbox
                  className="check-option"
                  onClick={this.handleClick}
                  label={textsTypesTag}
                />
              </List.Content>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default TextTypes;
export { selection };
