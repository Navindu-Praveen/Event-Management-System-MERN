import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeEventID = this.onChangeEventID.bind(this);
    this.onChangeEventName = this.onChangeEventName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangePackages = this.onChangePackages.bind(this);
    this.onChangeG_Pprice = this.onChangeG_Pprice.bind(this);
    this.onChangeS_Pprice = this.onChangeS_Pprice.bind(this);
    this.onChangeP_Pprice = this.onChangeP_Pprice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      EventID: "",
      EventName: "",
      Category: "",
      Content: "",
      Packages: "",
      G_Pprice: "",
      S_Pprice: "",
      P_Pprice: "",
      Event: [],
    };
  }

  //set the EventID
  onChangeEventID(e) {
    this.setState({
      EventID: e.target.value,
    });
  }

  //set the EventName
  onChangeEventName(e) {
    this.setState({
      EventName: e.target.value,
    });
  }

  //set Category
  onChangeCategory(e) {
    this.setState({
      Category: e.target.value,
    });
  }

  //set Content
  onChangeContent(e) {
    this.setState({
      Content: e.target.value,
    });
  }

  //Set Packages
  onChangePackages(e) {
    this.setState({
      Packages: e.target.value,
    });
  }

  //set G_Pprice
  onChangeG_Pprice(e) {
    this.setState({
      G_Pprice: e.target.value,
    });
  }

  //Set S_Pprice
  onChangeS_Pprice(e) {
    this.setState({
      S_Pprice: e.target.value,
    });
  }

  //Set P_Pprice
  onChangeP_Pprice(e) {
    this.setState({
      P_Pprice: e.target.value,
    });
  }

  //submit Function
  onSubmit(e) {
    e.preventDefault();

    const Event = {
      EventID: this.state.EventID,
      EventName: this.state.EventName,
      Category: this.state.Category,
      Content: this.state.Content,
      Packages: this.state.Packages,
      G_Pprice: this.state.G_Pprice,
      S_Pprice: this.state.S_Pprice,
      P_Pprice: this.state.P_Pprice,
    };

    console.log(Event);

    //validation **************************************************************

    axios
      .post("http://localhost:5000/Event/add", Event)
      .then((res) => console.log(res.data));

    swal({
      title: "Done!",
      text: "Event Successfully Added",
      icon: "success",
      button: "Okay!",
    }).then((value) => {
      window.location = "/";
    });
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-6">
            <br />
            <br />
            <img
              src="https://s3-eu-west-1.amazonaws.com/poptop-wp/blog/wp-content/uploads/2018/02/15113845/1st-shot-2.gif"
              width="90%"
              height="60% "
            />
          </div>{" "}
          <div class="col-6">
            <div class="myformstyle2">
              <div className="card-body">
                <div className="col-md-8 mt-4 mx-auto"> </div>
                <h3 className="text-center">
                  <font face="Comic sans MS" size="6">
                    Create New Event
                  </font>{" "}
                </h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label> Event ID: </label>
                    <input
                      type="Number"
                      required
                      className="form-control"
                      placeholder="Enter Event ID"
                      value={this.state.EventID}
                      onChange={this.onChangeEventID}
                    />
                  </div>
                  <div className="form-group">
                    <label> Event Name: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Event Name"
                      value={this.state.EventName}
                      onChange={this.onChangeEventName}
                    />{" "}
                  </div>
                  <div className="form-group">
                    <label> Event Category: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Event Category"
                      //maxlength = "10"
                      value={this.state.Category}
                      onChange={this.onChangeCategory}
                    />
                  </div>
                  <div className="form-group">
                    <label> Event Content: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Event Content"
                      //maxlength = "10"
                      value={this.state.Content}
                      onChange={this.onChangeContent}
                    />
                  </div>
                  <div className="form-group">
                    <label> Event Available Packages: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Available Packages"
                      //maxlength = "10"
                      value={this.state.Packages}
                      onChange={this.onChangePackages}
                    />
                  </div>
                  <div className="form-group">
                    <label> Gold Package Price: </label>
                    <input
                      type="Number"
                      className="form-control"
                      placeholder="Enter Gold Package Price"
                      value={this.state.G_Pprice}
                      onChange={this.onChangeG_Pprice}
                    />{" "}
                  </div>
                  <div className="form-group">
                    <label> Silver Package Price: </label>
                    <input
                      type="Number"
                      className="form-control"
                      placeholder="Enter Silver Package Price"
                      value={this.state.S_Pprice}
                      onChange={this.onChangeS_Pprice}
                    />{" "}
                  </div>
                  <div className="form-group">
                    <label> Platinum Package Price: </label>
                    <input
                      type="Number"
                      className="form-control"
                      placeholder="Enter Platinum Package Price"
                      value={this.state.P_Pprice}
                      onChange={this.onChangeP_Pprice}
                    />{" "}
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Create"
                      className="btn btn-primary"
                    />
                  </div>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <br /> <br />
      </div>
    );
  }
}
