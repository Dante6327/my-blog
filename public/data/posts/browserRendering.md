### 브라우저란?

브라우저란 Chrome, Safari, IE, Firefox 등 우리가 인터넷을 하기 위해 사용하는 것들이다.

```javascript
const temp = 123;
console.log(temp);
```

### 렌더링 동작 과정

렌더링의 기본 동작은 아래와 같다.

1. DOM, CSSOM 트리 생성 (parsing)
   html 코드를 브라우저가 해석하려면 먼저 해석할 수 있는 구조를 만들어야 한다.
   이 과정을 parsing이라고 부르며 코드로 구성되어 있는 html, css 코드를 객체로 이루어진 트리 구조로 변경시키는데 이것이 각각 DOM, CSSOM이다.

   이렇게 parsing된 DOM과 CSSOM은 메모리에 할당된다.

2. Render Tree 생성 (style)
   앞서 생성된 DOM, CSSOM을 가지고 서로를 매칭시켜 render tree를 생성한다.
3. 노드의 위치를 계산하기 (paint)
   Render Tree를 가지고 각 노드를 화면상의 실제 px로 변경하는 과정을 거친다. 이 때 css 스타일링 관련된 작업도 함께 들어간다.

   당연하게도 배경색이 단색 등 간단한 스타일링을 표현하는데에 있어서는 노드의 위치나 스타일링 계산의 리소스가 적게 들어가지만, 복잡한 스타일링이 적용된 노드라면 계산하는데 시간 또한 오래걸린다.

4. 화면에 실제로 그리기 (composite)
   계산된 노드를 화면에 실제로 그려 브라우저 상에서 볼 수 있다.
