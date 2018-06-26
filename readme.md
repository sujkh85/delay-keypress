# Javascript key event util

## The planner strongly wanted to make it.

## Caution

in use es6

## react example

```
  import React from 'react';
  import DelayKeypress from 'delay-keypress';

  class Example extends React.Component{
    //If the key is re-entered within 0.5 seconds, it will not be executed.
    //It runs if there is no input for 0.5 seconds.
    onChange =(value)=>{
      //delay 0.5s
      console.log(value)
    }
    render(){
      return(
        <input type="text" onChange={DelayKeypress(this.onChange, 500)}>
      )
    }
  }
```
