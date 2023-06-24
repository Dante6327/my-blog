### 다크모드 적용하기

다크모드 적용에 대해 포스팅하겠습니다.
~~사실 처음에 styled-components로 개발하려다가 최신 버전의 의존성 문제와 theme 적용의 어려움으로 tailwindCSS를 사용하였습니다.~~

### 1. next-themes 사용

next-themes 라이브러리를 사용해 다크 모드를 구현하였습니다.

```tsx
"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const Providers = ({ children }: Props) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
```

레이아웃에서 body를 감싸는 Provider를 위와 같이 설정해주었습니다.
처음에는 ThemeProvider의 속성을 사용하지 않았습니다. (attribute=`class`를 안씀)

기본적으로 제공하는 라이브러리 기능만으로 다크모드를 구현하는데 문제없다고 생각했습니다.
그러나 다크모드와 라이트모드를 오가며 각각의 스타일링을 할 수가 없었습니다.

동작을 조금 살펴보니 라이트모드 <-> 다크모드 전환 시 html의 class가 변하는 것을 발견할 수 있었습니다.
![light mode class](/images/posts/nextjs-blog/light-mode.png)
![light mode class](/images/posts/nextjs-blog/dark-mode.png)

<ThemeProvider attribute="class"> 해당 부분을 추가한다면 tailwindCSS로 다크모드 스타일링을 지정할 수 있습니다.

**tailwind.config.js**

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  //...
  plugins: [require("@tailwindcss/typography")],
};
```

다크모드를 사용하기 위해서 tailwind.config.js 파일에서 darkMode / plugins를 설정해주었습니다.
darkMode: "class"로 설정하였기 때문에 html의 클래스가 변화해도 tailwind에서 이를 파악할 수 있습니다.

즉, ThemeProvider의 attribute인 class와 tailwind.config.js의 darkMode를 설정해줌으로써
우리는 className = "dark:bg- ~~" 이러한 형태의 스타일링을 사용할 수 있게 되었습니다.

플러그인으로 추가한 @tailwindcss/typography는 별도의 제어 없이 이미 짜인 스타일링을 html에 입혀준다는 느낌으로 생각하면 될 것 같습니다.
마치 템플릿처럼 말이죠. className에 "prose" 라는 값을 사용하면 라이트 <-> 다크모드 전환시 알아서 스타일링을 바꿔줍니다.
(다크모드에서는 글씨 색을 흰색으로, 라이트모드에서는 글씨 색을 검정색으로 등등..)

여기서 md파일은 prose가 적용되지 않아, dark모드일 때 prose-invert 스타일을 추가해주었습니다. (다크 모드일 때 보기좋게 잘 변합니다..! ^^)

**사용법**은 대략 아래와 유사합니다.

```ts
<ReactMarkdown className="prose dark:prose-invert prose-stone" />
```

---

### 반응형
