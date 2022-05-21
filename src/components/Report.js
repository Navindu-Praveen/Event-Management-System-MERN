import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Event = (props) => (
  <tr>
    <td> {props.Event.EventID} </td>
    <td> {props.Event.EventName} </td>
    <td> {props.Event.Category} </td>
    <td> {props.Event.Content} </td>
    <td> {props.Event.Packages} </td>
    <td> {props.Event.G_Pprice} </td>
    <td> {props.Event.S_Pprice} </td>
    <td> {props.Event.P_Pprice} </td>
    <td>
      <Link to={"/edit/" + props.Event._id}> Edit </Link> |{" "}
      <a
        href=" "
        onClick={() => {
          props.deleteEvent(props.Event._id);
        }}
      >
        Delete
      </a>{" "}
    </td>{" "}
  </tr>
);

export default class EventList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Event: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/Event/")
      .then((response) => {
        this.setState({ Event: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPosts() {
    axios
      .get("http://localhost:5000/Event/")
      .then((response) => {
        this.setState({ Event: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteEvent(id) {
    if (window.confirm("Are you sure?")) {
      axios.delete("http://localhost:5000/Event/" + id).then((response) => {
        console.log(response.data);
      });

      this.setState({
        Event: this.state.Event.filter((el) => el._id !== id),
      });
    }
  }

  EventList() {
    return this.state.Event.map((currentEvent) => {
      return (
        <Event
          Event={currentEvent}
          deleteEvent={this.deleteEvent}
          key={currentEvent._id}
        />
      );
    });
  }

  filterData(Event, searchKey) {
    this.setState({
      Event: this.state.Event.filter((el) => (el.EventName = searchKey)),
    });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/Event/").then((response) => {
      const resultt = response.data;
      const result = resultt.filter((props) =>
        props.EventName.includes(searchKey)
      );

      this.setState({ Event: result });
    });
  };
  Report() {
    window.print();
  }

  render() {
    return (
      <div className="container">
        <div style={{ float: "none" }}></div> <br />
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4> Event Report </h4>{" "}
          </div>{" "}
        </div>
        <table class="table table-bordered table-white">
          <thead className="thead-light">
            <tr>
              <th> Event ID </th>
              <th> Event Name </th>
              <th> Event Category </th>
              <th> Content </th>
              <th> Available Packages</th>
              <th> G P Price </th>
              <th> S P Price </th>
              <th> P P Price </th>
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {this.state.Event.map((props) => (
              <tr key={props.EventID}>
                <td> {props.EventID} </td>
                <td> {props.EventName} </td>
                <td> {props.Category} </td>
                <td> {props.Content} </td>
                <td> {props.Packages} </td>
                <td> {props.G_Pprice} </td>
                <td> {props.S_Pprice} </td>
                <td> {props.P_Pprice} </td>
              </tr>
            ))}
          </tbody>{" "}
        </table>
        <div className="container">
          <input
            type="Button"
            onClick={this.Report}
            value="Print This Report"
            className="btn btn-danger"
          />
        </div>
      </div>
    );
  }
}
