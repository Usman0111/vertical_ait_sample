import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const getSubTypeOptions = (type) => {
  switch (type) {
    case "A": {
      return ["Apple", "Aardvark", "Astronaut"];
    }
    case "B": {
      return ["Bear", "Bobcat", "Beaver"];
    }
    case "1": {
      return ["First", "One", "Primary", "Uno"];
    }
    case "2": {
      return ["Second", "Two", "Secondary", "Dos"];
    }
    default: {
      return ["None"];
    }
  }
};

const Home = () => {
  const [type, setType] = useState("A");

  const submitWidget = async (event) => {
    event.preventDefault();
    const widgetInfo = new FormData(event.target);
    axios
      .post("api/widgets", {
        name: widgetInfo.get("name"),
        type: widgetInfo.get("type"),
        subType: widgetInfo.get("subType"),
      })
      .then((res) =>
        alert("Widget submitted! Check widget tab to view saved widgets")
      );
  };

  return (
    <div>
      <Form class="d-flex flex-column gap-2" onSubmit={submitWidget}>
        <FormGroup>
          <Label for="widgetName">Name</Label>
          <Input
            type="text"
            name="name"
            id="widgetName"
            placeholder="What is the name of widget?"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="widgetType">Type</Label>
          <Input
            type="select"
            name="type"
            id="widgetType"
            onChange={(event) => setType(event.target.value)}
          >
            <option>A</option>
            <option>B</option>
            <option>1</option>
            <option>2</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="widgetSubType">Sub-type</Label>
          <Input type="select" name="subType" id="widgetSubType">
            {getSubTypeOptions(type).map((subTypeOption) => (
              <option>{subTypeOption}</option>
            ))}
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Home;
