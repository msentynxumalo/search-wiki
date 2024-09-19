import React from "react";
import Container from "../../components/Container";
import Autocomplete from "../../components/Autocomplete";
import './styles.scss';

const Home = () => {
  return (
    <div className="home-page-container">
        <img src="./search.png" alt="logo"/>
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
     </div>
    </div>
  );
};

export default Home;
