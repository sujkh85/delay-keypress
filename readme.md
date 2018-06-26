# delay-keypress

## Engish

---

### Javascript key event util

### It was created because of the project that required performance.

### react example

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

## 한국어

---

### 자바스크립트 키 이벤트 유틸

### 성능을 고려해야되는 프로젝트, 클라이언트에서 검색 관련된 기능 구현때문에 만들게 되었습니다.

### react example

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
