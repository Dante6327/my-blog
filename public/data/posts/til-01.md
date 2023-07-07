blog의 contact 페이지가 로컬에서만 동작하고 vercel에 배포된 페이지에서는 동작하지 않았습니다.  
.env.local 파일에 설정한 AUTH_USER, AUTH_PASS 변수의 값을 별도로 배포하지 않아 발생한 문제였습니다.

---

![vercel 환경변수 setting 페이지](/images/posts/TIL/setting-page.png)
배포된 저의 프로젝트에서 환경변수를 설정해보겠습니다.  
먼저, setting 탭 - Environment Variables 메뉴를 클릭해보면 위 캡처와 같은 화면이 나옵니다.

딱 봐도 key, value를 입력하는 공간이 있네요.  
.env.local 파일에 있는 AUTH_USER, AUTH_PASS 두 변수의 key, value 값을 입력해줍니다.  
그리고 우측 하단의 save 버튼을 누르면 변수 등록 끝입니다!

![vercel 환경변수 setting 페이지](/images/posts/TIL/environment-variables.png)
이제 페이지를 새로고침하고 하단으로 내려보면 환경변수들이 setting되어 있는 것을 볼 수 있습니다.  
git에도 올라가면 안되는 파일답게 value 값은 잘 가려져 있는 모습을 볼 수 있습니다.
