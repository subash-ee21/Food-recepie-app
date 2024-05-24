import { useState } from "react";
import Search from "./Components/Search";
import Foodlist from "./Components/Foodlist";
import Nav from "./Components/Nav";
import "./App.css";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import Recipe from "./Components/Recipe";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foodlist setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <Recipe foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
