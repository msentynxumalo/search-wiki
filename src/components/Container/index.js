import { useDebounce, useSearch, useSearchForm } from "../../hooks";

const Container = ({children}) => {
  const {searchValue, onSearchChange} = useSearchForm();
  const {articles} = useSearch(useDebounce(searchValue)); // pass delay to execute api call in case of quick typing

  return children({searchValue, onSearchChange, articles})
};

export default Container;