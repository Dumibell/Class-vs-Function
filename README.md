
### componentWillMount
- 컴포넌트가 마운트(생성)되기  전에 처리해야할 일이 있을 때 사용 => 렌더되기 전 실행
- React 16.3버전 이후 사용하지 않음. componentDidMount로 사용

### componentDidMount
- 렌더가 된 후에 처리해야할 내용
- 주로 컴포넌트가 처음 DOM에 나타나는 순간 해야할 초기작업들

### shouldComponentUpdate
- props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부 결정
- true 또는 false를 반환해야 하며, false를 리턴할 경우 렌더를 호출하지 않음

### componentWillUpdate
- React 16.3버전 이후 사용하지 않음. componentDidUpdate로 사용

### componentDidUpdate
- 리렌더링을 완료한 후 실행
- 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 괜찮다

### componentWillUnmount
- 컴포넌트를 DOM에서 제거할 때 실행
- componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면, 여기서 제거작업을 해야한다.
