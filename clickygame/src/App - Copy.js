import React, { Component } from "react";
import foods from "./foods.json";
import FoodCard from "./components/FoodCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
let prevKey = 0;

class App extends Component {
  state = {
    foods,
    score: 90,
    goal: 190,
    currentItem: {
      key: Math.random()
    }
  };
  increaseWeight = () => {
    if (this.state.key === this.state.currentItem.key) {
      console.log(prevKey);
    }
    this.setState({
      score: this.state.score + 10
    });

    if (this.state.score > this.state.goal) {
      this.setState({ score: 0 });
    }
    this.shuffleArray();
  };
  shuffleArray = () => {
    const shuffledPosts = shuffleArray(this.state.foods);
    this.setState({
      foods: shuffledPosts
      // currentItemkey: this.state.currentItem.key
    });
  };
  render() {
    return (
      <Wrapper>
        <Title>
          Your Weight: {this.state.score} lbs /n Goal Weight: {this.state.goal}
        </Title>

        <div className="row">
          {this.state.foods.map(food => (
            <FoodCard
              onClick={this.increaseWeight}
              id={food.id}
              key={food.id}
              image={food.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
