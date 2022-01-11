import React, { Component, useState } from 'react';
import { useSelector, useDispatch, connect, } from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store/counter'

const Counter = () => {
  console.log("here")
  const counter = useSelector(state => state.counter.counter) 
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();
  const [add, setAdd] = useState(0);
  // const [sub, setSub] = useState(0);

  //dispatch with redux
  // const incrementHandler = () => {
  //   dispatch({type: 'increment'})
  // }

  // const decrementHandler = () => {
  //   dispatch({type: 'decrement'})
  // }

  // const increaseHandler = () => {
  //   dispatch({type: 'increase', amount: 5})
  // }
  
  // const toggleCounterHandler = () => {
  //   dispatch({type: 'toggle'})
  // };



  //dispatch with redux toolkit
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const addHandler = () => {
    setAdd(add + 1)
  }
  const subHandler = () => {
    setAdd(add - 1)
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <h2>{add}</h2>
      {console.log(show)}
      {show && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={addHandler}>add</button>
      <button onClick={subHandler}>sub</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// For a class based componenet

// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//   }

//   decrementHandler = () => {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler}>Increment</button>
//         <button onClick={this.decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
//   }
// }


// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

