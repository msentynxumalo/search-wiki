import React from "react";
import { useSearch } from "../../hooks";
import Container from "../../components/Container";
import Autocomplete from "../../components/Autocomplete";
import ListItem from "../../components/ListItem";

const Search = ({ ...props }) => {
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const query = params.get("query");

  const { articles, status } = useSearch(query, 50);

  return (
    <div>
      <Container>
        {({ searchValue, onSearchChange, articles }) => (
          <Autocomplete
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            articles={articles}
          />
        )}
      </Container>

      {!articles.length && status === "Success" ? (
        <h3>No results found for: {query}</h3>
      ) : (
        articles.map((article) => {
          return (
            <ListItem {...article} key={article.id} />
          );
        })
      )}
    </div>
  );
};

export default Search;
