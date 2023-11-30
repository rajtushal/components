import React from "react";
import { GoBellFill } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <Button primary outline>
        <GoBellFill /> primary
      </Button>
      <Button secondary>secondary</Button>
      <Button success>success</Button>
      <Button warning>warning</Button>
      <Button danger>danger</Button>
    </div>
  );
}

export default ButtonPage;
