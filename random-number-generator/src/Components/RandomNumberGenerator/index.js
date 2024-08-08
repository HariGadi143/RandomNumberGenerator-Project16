import React, { Component } from "react";
import styles from "./index.module.css";

class RandomNumberGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0,
    };
  }

  handleGenerateRandomNumber = () => {
    let randomNumber = Math.ceil(Math.random() * 100);

    this.setState({ randomNumber: randomNumber });
  };

  render() {
    const { randomNumber } = this.state;
    console.log(randomNumber);
    return (
      <div className={styles.mainContainer}>
        <div className={styles.mainWrapper}>
          <div className={styles.randomNumCon}>
            <h3>Random Number</h3>
            <p>Generate a random number in the range of 0 to 100</p>
            <button onClick={this.handleGenerateRandomNumber}>Generate</button>
            <h1>{randomNumber}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomNumberGenerator;
