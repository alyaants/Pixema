import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/search";
import TabsList from "./components/tabsList/tabsList";
import ButtonGroup from "./components/buttonsGroup/buttonsGroup";
import UserName from "./components/userName/userName";
import Links from "./components/links/links";

function App() {
  return (
    <div className="App">
      <Search title={"search"} isDisabled={false} />
      <TabsList
        content={[{ title: "title 1", isActive: true }, { title: "title 2", isActive: false}]}
      />
      <ButtonGroup isActive={true} />
      <UserName username={"An P"} />
      <Links />
    </div>
  );
}

export default App;
