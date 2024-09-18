import React from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { useDebounce, useSearch, useSearchForm } from './hooks';
import Input from './components/inputs';

function App() {
  const {searchValue, onSearchChange} = useSearchForm();
  const {articles} = useSearch(useDebounce(searchValue)); // pass delay to execute api call in case of quick typing

  return (
    <ReactAutocomplete
        items={articles}
        renderInput={Input}
        inputProps={{placeholder: "enter search term"}}
        //shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        renderMenu={(children, value, style) => {
          return articles && articles.length ?
            (<div style={{...style}} className='input-suggestions'>
              {children}
            <a href={`/search?query=${value}`} className='search-link'>
              See all results
            </a>
            </div>
            ) : <></>;
        }}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.label}
          </div>
        }
        value={searchValue}
        onChange={onSearchChange}
      />
  );
}

export default App;
