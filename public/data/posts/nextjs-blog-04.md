nodemailer 라이브러리를 통해 메일을 전송하는 기능을 구현해보았습니다.  
제가 만든 저만의 블로그이기도 하고, 이용하는 사람들이 블로그를 통해 저와 직접 소통할 수 있는 창구가 있었으면 좋겠다 생각했습니다.  
사용법과 Node.js 기반 지식이 부족한 탓에 어려움을 겪었는데, 강의를 보면서 잘 따라왔습니다.

---

### nodemailer

**설치 명령어**

```txt
npm i nodemailer    //nodemailer 설치 (이메일을 전송하는 백엔드 구현)
npm i yup           //yup 설치 (사용자 인증 유효성 검사)
```

[nodemailer 공식문서](https://www.npmjs.com/package/nodemailer)  
[yup 공식문서](https://www.npmjs.com/package/yup)

---

구현 화면은 아래와 같습니다.  
![contact 구현화면](/images/contact/contact-me.png)

먼저 작동 플로우를 점검해보자면, 클라이언트측에서 이메일 전송 버튼을 누르면 fetch 요청이 일어나며,  
백엔드에서 nodemailer API를 통해 메일 전송 후 그 결과를 클라이언트측에 다시 전달하도록 구현하였습니다.

**EmailComponent.tsx**

```ts
const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  sendContactEmail(form)
    .then(() => {
      setBanner({
        message: "메일을 성공적으로 전송했습니다!",
        state: "success",
      });
      setForm(DEFAULT_DATA);
    })
    .catch(() => {
      setBanner({
        message: "메일 전송에 실패했습니다! 다시 시도해 주세요.",
        state: "error",
      });
    })
    .finally(() => {
      setTimeout(() => {
        setBanner(null);
      }, 3000);
    });
};
```

먼저, 이메일 제출 버튼 클릭시 onSubmit 함수가 호출됩니다.  
sendContactEmail에 form 데이터를 넘겨주어 실제로 이메일을 전송하는 기능을 작동시킵니다.

**contact.ts**

```ts
export async function sendContactEmail(email: EmailData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "서버 요청에 실패했습니다!");
  }
  return data;
}
```

sendContactEmail에서는 "/api/contact" 경로로 데이터 fetching을 진행하도록 구현했습니다.

저는 별도의 route.ts 파일에다가 yup을 이용한 스키마를 작성해주었습니다.
yup은 사용자가 입력한 데이터의 유효성을 검증하기 위해 사용하는 라이브러리 입니다.

**route.ts**

```ts
import { sendEmail } from "@/service/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(request: Request) {
  const body = await request.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "메일 전송에 실패함" }), {
      status: 400,
    });
  }
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일을 성공적으로 보냈음" }), {
          status: 200,
        })
    )
    .catch((error) => {
      return new Response(JSON.stringify({ message: "메일 전송에 실패함" }), {
        status: 500,
      });
    });
}
```

bodySchema 변수를 작성해 POST 전송에 사용하겠습니다.
from, subject, message는 필수로 전송되어야 하는 데이터이므로 required처리를 해줍니다.

POST함수에서 유효성 검증에 성공하면 sendEmail 함수를 실행시켜 리턴합니다.

**email.ts**

```ts
import nodemailer from "nodemailer";

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸사람 : ${from}</p>
    `,
  };
  return transporter.sendMail(mailData);
}
```

nodemailer 공식문서를 보면 사용법이 잘 나타나 있습니다.  
transporter는 어떤 메일을 사용할 것인지 (gmail, naver 등등..) 결정할 수 있습니다.  
저의 경우 secure 옵션을 true로 사용하기 때문에 port는 저의 경우 465를 사용하였습니다. (false라면 587을 쓰라고 하네요.)

---

auth 부분은 별도로 설정이 필요합니다.  
저는 gmail로 메일을 받을 예정이라 gmail에 들어가 별도 설정을 해주어야 하는데요,  
아래를 따라 하시면 됩니다!

1. gmail 계정 설정에 들어갑니다.
   ![구글 계정](/images/contact/gmail-security.png)

2. 2단계 인증을 클릭합니다.
   ![2단계 인증](/images/contact/secondary-auth.png)

3. 앱 비밀번호를 생성합니다. (저는 이미 만들어둔게 있어서 1개가 노출되고 있습니다. 없으신 분들은 그냥 만드시면 됩니다!)
   ![앱 키 생성](/images/contact/app-password.png)

4. 생성된 앱 비밀번호를 어디다가 잘 복사해둡니다. (nodemailer 유저 인증에 필요합니다. )
   ![앱 키 생성 활성화](/images/contact/app-password-activate.png)

5. 해당 정보는 노출되면 안되게 때문에 .env.local 파일을 만들어줍니다.

   - 그 안에 AUTH_USER, AUTH_PASS를 설정해줍니다.
   - AUTH_USER는 메일을 전달 받을 gmail 계정을, AUTH_PASS에는 위에서 받은 앱 키 16자리를 넣어줍니다.(띄어쓰기 없이 넣어주세요.)

6. .gitignore 파일에 .env가 추가되었는지 확인합니다. 추가가 안되었다면 추가해주세요. (한 번 깃에 올라가면 골치아픕니다..)

7. process.env를 사용해 transporter에서 불러다 사용합니다.

---

이제 sendEmail 함수에서 전달 받은 이메일 데이터로 제목과 내용을 작성해줍니다.  
원하는대로 커스텀 해주세요!

이메일을 전송하면 저는 아래와 같이 잘 도착합니다.
![이메일 도착 결과](/images/contact/get-email.png)

아무래도 저만의 블로그이기 때문에 의미 있는 실제로 저에게 메일을 보낼 수 있다면 좋을 것 같았습니다.  
해당 기능을 구현하고 나서 뭔가 더 저에게 contact 할 수 있다는 느낌을 제공한 것 같습니다.
