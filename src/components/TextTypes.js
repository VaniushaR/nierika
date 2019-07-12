import React from 'react';
import { List, Checkbox } from 'semantic-ui-react';

const TextTypes = () => {
  const sizes = [
    'Cuento',
    'Poesía',
    'Narración verídica',
    'Noticia',
    'Frase o Refrán',
    'Mito o Leyenda',
    'Gramática',
    'Vocabulario'
  ];

  return (
    <div>
      <List divided horizontal>
        {sizes.map(size => (
          <List.Item key={size}>
            <List.Content>
              <Checkbox class="check-option" label={size} />
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default TextTypes;
