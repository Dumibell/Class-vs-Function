import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input
        type="button"
        value="remove func"
        onClick={() => setFuncShow(false)}
      />
      <input
        type="button"
        value="remove class"
        onClick={() => setClassShow(false)}
      />
      {funcShow ? <FuncComp initNumber={2} /> : null}
      {classShow ? <ClassComp initNumber={2} /> : null}
    </div>
  );
}

let funcId = 0;
function FuncComp({ initNumber }) {
  // var numberState = useState(initNumber);
  // var number = numberState[0];
  // var setNumber = numberState[1];
  //이 세 줄이 축약되어 아래와 같이 평소에 사용하는 useState의 형태가 되었다.
  const [number, setNumber] = useState(initNumber);
  const [date, setDate] = useState(new Date().toString());

  /**
   * componentDidMount와 componentDidUpdate를 합친 기능
   *   */
  useEffect(() => {
    console.log("useEffect: componentDidMount & componentDidUpdate", ++funcId);

    //clean up. 컴포넌트가 사라질 때. componentWillUnmount의 역할
    return () => {
      console.log(
        "useEffect return componentDidMount & componentDidUpdate",
        ++funcId
      );
    };
  }, []);

  /**
   * componentDidMount만
   */
  useEffect(() => {
    console.log("useEffect: componentDidMount", ++funcId);

    return () => {
      console.log("useEffect return (componentWillUnmount) ", ++funcId);
    };
    //빈배열을 추가함으로써 한번만 실행되도록 함
  }, []);

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {date}</p>
      <input
        type="button"
        value="random"
        onClick={() => setNumber(Math.random())}
      ></input>
      <input
        type="button"
        value="date"
        onClick={() => setDate(new Date().toString())}
      ></input>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  /**
   * 컴포넌트가 마운트(생성)되기  전에 처리해야할 일이 있을 때 사용 => 렌더되기 전 실행
   * React 16.3버전 이후 사용하지 않음. componentDidMount로 사용
   */
  componentWillMount() {
    console.log("class: component will mount"); // 순서1
  }

  /**
   * 렌더가 된 후에 처리해야할 내용
   * 주로 컴포넌트가 처음 DOM에 나타나는 순간 해야할 초기작업들
   *  */
  componentDidMount() {
    console.log("class: component did mount"); //순서3
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("class: shouldComponentUpdate");
    return true; // 렌더 호출. false를 리턴할 경우 렌더를 호출하지 않음
  }

  /** React 16.3버전 이후 사용하지 않음. componentDidUpdate로 사용 */
  componentWillUpdate(nextProps, nextState) {
    console.log("class: componentWillUpdate");
  }
  componentDidUpdate(nextProps, nextState) {
    console.log("class: componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("class: componentWillUnmount");
  }
  render() {
    console.log("class: render"); //순서2

    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
