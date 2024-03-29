React Native로 앱을 만들어보고자 합니다.  
가능한 Native에 대한 많은 정보가 들어가도록 작성할 예정이라 글이 많이 길어질 것 같습니다.

---

### 1. React Native 작동 방식 이해하기

React Native가 동작하는 방식은 아래와 같습니다.
![ReactNativeWorkFlow](https://github.com/Dante6327/image-hosting/blob/main/ReactNativeWorkFlow.drawio.png?raw=true)

1. 사용자 앱에서 이벤트가 발생한다.
2. 발생한 이벤트를 Native(Android/iOS)에서 감지한다.
3. 브릿지를 통해 JavaScript로 전송된다.
4. JavaScript에서는 이벤트를 처리한다.
5. JavaScript에서 native method를 호출하거나 UI 업데이트 요청을 보낸다.
6. 브릿지를 통해 Native로 전송한다.
7. Native에서 요청을 수행한다.

또, Native 인프라를 살펴보면 아래와 같은 구조를 가지고 있습니다.
![ReactNativeStructure](https://github.com/Dante6327/image-hosting/blob/main/ReactNativeStructureNew.drawio.png?raw=true)

React Native로 구성된 앱을 다운로드 받으면 위 네이티브 인프라가 갖춰진 앱을 다운받게 되는 것입니다.  
즉, JavaScript코드가 완성되었더라도 Java 혹은 XCode를 통해 앱이 이해할 수 있도록 컴파일을 해주어야 합니다.  
Java, XCode는 이 그림의 인프라를 가져와서, 각각 안드로이드 / iOS에 맞게 apk 혹은 ipa 안에 넣어줍니다.  
그리고 나서 app 스토어에 보내주게 되는 것이죠.

그러나 Expo라는 녀석을 사용하면 인프라에서 JavaScript, Markup/Styling 부분만 빼고 나머지를 지원합니다.  
즉, 우리는 코드를 변경하고 Expo 앱을 통해서 이를 바로바로 확인할 수 있습니다.

---

### Expo CLI 설치하기

**Expo CLI 설치**

```txt
npm install --global expo-cli
```

먼저 위 명령어로 expo-cli를 설치해줍시다.

mac 사용자라면 Watchman이라는 것을 추가로 설치해주어야 합니다.  
[Watchman] => 폴더나 파일을 감시하고 있다가, 변화가 생기면 자동으로 원하는 기능을 실행 할 수 있도록 하는 프로그램

**Watchman 설치**

```txt
brew install watchman
```

이제 React Native를 시작할 준비가 되었습니다.  
핸드폰에 Expo App을 설치하고 사용하면 되겠습니다.

---

### 프로젝트 생성

**프로젝트 설치 명령어**

```txt
expo init [위치]
```

프로젝트를 설치하면 아래와 같은 폴더 구조가 생겨납니다.

![react-native-structure](/images/posts/TIL/react-native-structure.png)

package.json을 살펴보면 npm start를 통해서 앱을 실행할 수 있는데, 그 전에 Expo에 로그인을 먼저 해야합니다.

**실행 방법**

1. 터미널에서 expo login 명령어로 로그인을 해준다.
2. Expo App에서도 같은 계정으로 로그인을 해준다.
3. npm start를 하게되면 QR코드가 나오는데 핸드폰에서 일르 가지고 연동할 수 있다.
