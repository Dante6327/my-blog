백엔드를 직접 공부해 구현해보고자 합니다.  
Node.js 기반 프레임워크인 express로 구현하였으며 이를 기록합니다.

---

express를 사용하려면 먼저 기본적인 폴더 구조가 형성되어야 합니다.  
리액트의 경우 npx create-react-app 명령어로 이미 구조화가 완성된 프로젝트를 제공받을 수 있지만 express를 사용하기 위해서는 직접 세팅이 필요합니다.

**기본 골격 생성하기**

```txt
npm init -y
```

해당 명령어를 입력하면 package.json 등 기본 골조 파일들이 생겨납니다.

이제 여기에 서버 역할을 하는 app.js 파일을 생성해줍니다.  
app.js에는 서버를 열기 위해 아래와 같은 코드가 필요합니다.

```js
const express = require("express");
const app = express();

app.listen({ PORT }, () => {
  console.log("server start");
});
```

이렇게 코드를 작성하면 서버를 열 수 있습니다.  
여기서 서버는 로컬 PC가 되는 것이죠.

저는 여기에 몇 가지 라이브러리를 추가할 생각입니다.

---

### CORS

웹 사이트의 도메인은 여러 개의 구성요소로 이루어져 있습니다.  
네이버 뉴스를 예로 들어볼까요?

https://n.news.naver.com/article/666/0000016207?cds=news_media_pc&type=editn  
위 링크는 하나의 문자열 같아 보이지만, 아래와 같은 구성요소들을 가지고 있습니다.

http - 프로토콜  
n.new.naver.com - 도메인 호스트  
/article/666/000016207 - path  
?cds=news_media_pc&type=editn - Query String

여기에 눈에 보이지는 않지만 포트번호가 생략되어 있습니다. (프로토콜에 따라 약속된 포트번호가 존재하며 기본적으로 생략하지만 그렇지 않은 경우도 있습니다.)

위 네이버 링크에서 다른 출처의 자원을 사용하게 된다면 정책을 위반한다는 에러메세지를 만날 수 있습니다.  
이를 해결할 수 있는게 바로 CORS입니다.

**설치**

```txt
npm i cors
```

cors를 설치 완료했다면 곧바로 코드에 사용할 수 있습니다.

```js
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.listen({ PORT }, () => {
  console.log("server start");
});
```

express 객체인 app으로 cors를 사용한다고 명시해주면 됩니다.

---

### morgan

백엔드에 통신이 발생할 때 로그를 나타내줍니다.
combined에는 다양한 옵션이 있는데, 대표적으로 combined, short 정도를 사용합니다.

**설치**

```txt
npm i morgan
```

사용법은 아래와 같습니다.

```js
const morgan = require("morgan");
app.use(morgan("[옵션]"));
```

옵션에는 대표적으로 'combined', 'short' 등을 사용합니다.

- short

```txt
::1 - GET /search HTTP/1.1 201 34 - 5.303 ms
```

- combined

```txt
::1 - - [15/Jul/2023:13:10:59 +0000] "GET /search HTTP/1.1" 201 34 "-" "PostmanRuntime/7.32.3"
```
