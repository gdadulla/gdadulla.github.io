import React from 'react';
import "./SortingVisualizer.css";
import { mergeSortAnimations } from '../functions/mergeSort';
const ARRAY_SIZE = 200;

export default class SortingVisualizer extends React.Component {
  
    constructor(props){
        super(props);

        this.state = {
            array: [],
            setArr: [],
        };

        this.refs = {
          containerRef: null
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];

        for( let i = 0; i < ARRAY_SIZE; i++ ){
            array.push(randomIntFromInterval(5, 400));
        }
    

    this.setState({ array });
    const arrayBars = document.getElementsByClassName("array-bar");
    var arrayLength = arrayBars.length;
    for (let j = 0; j < arrayLength; j++) {
      var jBarStyle = arrayBars[j].style;
      jBarStyle.backgroundColor = "orange";
    }

    function mergeSort(){
      const animations = mergeSortAnimations(array);
      animateArrayUpdate(animations);
    }
    
    function animateArrayUpdate(animations) {
      animations.forEach(([comparison, swapped], index) => {
        setTimeout(() => {
          if (!swapped) {
            if (comparison.length === 2) {
              const [i, j] = comparison;
              animateArrayAccess(i);
              animateArrayAccess(j);
            } else {
              const [i] = comparison;
              animateArrayAccess(i);

            }
          } else {
            this.setArr((prevArr) => {
              const [k, newValue] = comparison;
              const newArr = [...prevArr];
              newArr[k] = newValue;
              return newArr;
            });
          }
        }, index * 5);
      });
      setTimeout(() => {
        animateSortedArray();
      }, animations.length * 5);
    }
  
    function animateArrayAccess(index) {
      const arrayBars = this.containerRef.current.children;
      const arrayBarStyle = arrayBars[index].style;
      setTimeout(() => {
        arrayBarStyle.backgroundColor = "red";
      }, 5);
      setTimeout(() => {
        arrayBarStyle.backgroundColor = '';
      }, 5 * 2);
    }
  
    function animateSortedArray() {
      const arrayBars = this.containerRef.current.children;
      for (let i = 0; i < arrayBars.length; i++) {
        const arrayBarStyle = arrayBars[i].style;
        setTimeout(
          () => (arrayBarStyle.backgroundColor = "green"),
          i * 5,
        );
      }
      setTimeout(() => {
      }, arrayBars.length * 5);
    }

  }

  render() {
    const { array } = this.state;

    return (
      <div>
         
         <h3> Sorting Visualizer </h3>
         <button type="button" onClick={() => this.resetArray()}> Reset Values</button>
         <button type="button" onClick={this.mergeSort}> Merge Sort </button>
         
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: 'orange',
                height: `${value}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }