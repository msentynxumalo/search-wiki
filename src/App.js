import React, { useState } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { useDebounce, useSearch } from './hooks';

function App() {
  const [value, setValue] = useState('');
  const {articles} = useSearch(useDebounce(value, 500)); // pass delay to execute api call in case of quick typing

  return (
    <ReactAutocomplete
        items={articles}
        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.label}
          </div>
        }
        value={value}
        onChange={e => setValue(e.target.value)}
        onSelect={value => setValue(value)}
      />
  );
}

export default App;
