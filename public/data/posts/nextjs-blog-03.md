메인 페이지 You May Like 부분을 슬라이드로 구현하기 위해 react-multi-carousel 라이브러리를 사용해보았습니다.

---

### react-multi-carousel

**설치 명령어**

```txt
npm install react-multi-carousel
```

공식문서에 사용법이 아주 잘 나와있습니다.

[react-multi-carousel 공식문서](https://www.npmjs.com/package/react-multi-carousel)

저의 경우에는 아래와 같이 사용을 했습니다.

```ts
"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

type Props = {
  children: React.ReactNode;
};
const MultiCarousel = ({ children }: Props) => {
  return (
    <Carousel infinite autoPlay responsive={responsive} itemClass="m-2">
      {children}
    </Carousel>
  );
};

export default MultiCarousel;
```

children에는 상위 컴포넌트에서 넘겨 받은 포스트들이 있습니다.  
그리고 responsive는 반응형에 대응하기 위해 설정해준 옵션들입니다.  
모바일 환경에서는 2개의 슬라이드가 보여지고 태블릿부터 PC까지 3, 4개씩 보여지도록 설정했습니다.

<Carousel> 컴포넌트 사이에 포스트 요소들을 감싸주기만 하면 알아서 슬라이드를 만들어 줍니다.  
굉장히 편리한 기능인 것 같습니다.

이렇게 정적인 제 블로그에 동적인 처리가 들어가니 훨씬 생기가 도는 것 같습니다.  
앞으로 자주 이용하게 될 것 같습니다.
