import React, {Component} from "react";

class SimpleNotification extends Component {
  constructor() {
    super();
    this.showNotification = this.showNotification.bind(this);
  }

  componentDidMount() {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  showNotification() {
    new Notification('Account Successfully Created!')
  }

  render() {
    return (
      <div>
        {this.showNotification()}
      </div>
    );
  }
}

export default SimpleNotification;