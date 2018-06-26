# delay-keypress

### install

```
  npm i delay-keypress
```

## Engish

---

### Javascript keydown event util

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

### 자바스크립트 딜레이 거는 유틸

### 성능을 고려해야되는 프로젝트, 클라이언트에서 검색 관련된 기능 구현때문에 만들게 되었습니다.

### React example

```
  import React from 'react';
  import DelayKeypress from 'delay-keypress';

  class Example extends React.Component{
    //0.5초안에 입력되면 호출되지 않습니다.
    //0.5초가 지나면 호출됩니다.
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
