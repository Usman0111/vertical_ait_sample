import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

const Widgets = () => {
  const [widgets, setWidgets] = useState();

  useEffect(() => {
    axios.get("api/widgets").then((res) => setWidgets(res.data));
  }, []);

  const generateWidgetTable = () => {
    return widgets.map((widget) => {});
  };

  return (
    <>
      {widgets ? (
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>SubType</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {widgets.map((widget) => (
              <tr>
                <td>{widget.name}</td>
                <td>{widget.type}</td>
                <td>{widget.subType}</td>
                <td>{widget.created}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>Loading widgets... </div>
      )}
    </>
  );
};

export default Widgets;
