코드에서 markdown 문법으로 작성된 파일을 읽어내려면 markdown viewr를 별도로 사용해야 합니다.  
관련된 라이브러리를 설치해 사용해보도록 하겠습니다

---

### react-markdown

**설치명령어**

```txt
npm i react-markdown
```

[리액트 마크다운 공식문서](https://github.com/remarkjs/react-markdown)

**MarkdownViewer.tsx**

```tsx
"use client";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

const MarkdownViewer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      className="prose dark:prose-invert prose-stone lg:prose-lg mx-auto pt-16 max-w-none  border-b-[0.5px] border-gray-400 pb-10"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={darcula}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="w-auto"
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={300}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
```

ReactMarkdown 컴포넌트 사이에는 [post할 파일명].md 파일을 readFile한 결과 값이 들어갑니다.  
즉, md파일을 읽어낸 데이터가 들어가는 것이죠.

ReactMarkdown 컴포넌트에는 다양한 옵션을 추가할 수 있습니다.  
이 또한 공식문서에 안내되어 있어 이를 참고하여 진행하였습니다.

컴포넌트 옵션중 remarkPlugins 라는 옵션이 있습니다.  
ReackMarkdown 으로도 마크다운 문법을 읽어낼 수 있지만, 추가로 사용하고 싶은 문법이 있을 때 해당 옵션을 사용합니다.

---

### remark-gfm

**설치명령어**

```txt
npm install remark-gfm
```

저는 remark-gfm이라는 라이브러리를 사용해보겠습니다.  
GFM이란 Github Flavored Markdown의 약자로 github에서 기존 마크다운 문법에 몇 가지 기능을 추가한 것입니다.

예를 들어 테이블, 링크, 테스크리스트 등을 사용할 수 있다고 합니다.

remarkPlugins={[remarkGfm]} << 이런 형태로 옵션을 사용할 수 있습니다.

---

### syntax-highlighter

**설치명령어**

```txt
npm install react-syntax-highlighter
```

위의 과정대로만 진행해도 어느정도 마크다운 문법이 적용된 화면을 볼 수 있지만 그닥 이쁘지가 않습니다.  
이럴때는 syntax-highlighter를 이용하면 좀 더 예쁘게 꾸밀 수 있습니다.

사용법은 바로 ReackMarkdown 컴포넌트에 component 속성을 부여하는 것입니다.

```tsx
components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={darcula}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="w-auto"
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={300}
          />
        ),
      }}
```

사용법은 위와 같으며, SyntaxHighlighter 내에 style을 변경할 수 있습니다. (좀만 찾아보시면 예쁜 옵션들이 아주 많이 있습니다! ^^)

이미지에 대한 설정도 할 수 있습니다.  
img에 대한 속성은 markdown 파일 내 이미지가 있다면 Next에서 제공하는 Image 컴포넌트를 사용하겠다는 의미로 생각해주시면 되겠습니다.
