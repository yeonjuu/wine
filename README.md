## 와인데이터를 이용한 무한 스크롤 구현

📌 구현 목적 <br>
해보고 싶었던 무한 스크롤과 결제 연동을 위한 개발 공부 및 CSS 공부

### 구현화면

![wine-gif](https://user-images.githubusercontent.com/46666765/234833823-6a58b056-bcad-4134-a8e4-98442e71b9f5.gif)

- 무한 스크롤을 위한 페이지네이션
- 무한 스크롤 시 임의의 딜레이를 주어 로딩 컴포넌트 구현
- 인터렉션 화면을 위한 3D 스타일링

[기술스택] React Wepback Babel json-server  
[스타일링] Styled-components mui css

### 구현하려고 한 기능

- [x] CRA가 아닌 직접 webpack 설정으로 화면 띄우기
- [x] 무한 스크롤 구현
- [ ] 최적화 (Intersection Observer API)

### 문제점 및 해결방안

1. pagination이 되지 않는 api로 데이터가 한번에 모두 로드 <br>
   → json-server를 이용하여 페이지네이션 활용

2. 로딩 중 임을 어떻게 나타낼지에 관한 고민 <br>
   → 자연스러운 로딩을 위해 로딩 컴포넌트를 위의 와인 카드와 동일한 수로 표현 <br>
   → 로딩 중임을 표현하기 위한 스켈레톤 컴포넌트 (mui) 활용 <br>

3. 403 에러로 인한 이미지 로드 실패  <br>
   → image placeholder를 제작해서 onError에 핸들러 등록 <br>

### 아쉬운 점

페이지네이션을 json-server로 활용하기에 wine api endpoint 전체를 이용하지 못함.  
빌려쓴 api이기에 원하는 정보가 없었던 점이 아쉬움

### 무한스크롤에 대한 고찰

숫자로 매기는 페이지네이션과 무한스크롤에 대해 생각해볼 수 있었다.

- 숫자로 매기는 기본 페이지네이션 <br>
  : 현재 페이지가 어디이고 어느 정도의 데이터를 봤는지 쉽게 파악할 수 있음 <br>
  : 구현이 조금 더 쉬운 것 같다. <br>

- 무한 스크롤 <br>
  : 사용자가 자연스럽게 데이터를 불러서 읽을 수 있음 <br>
  : 데이터의 끝을 알 수 없고, 자세하게 보고 다시 원래 목록으로 돌아갈때 그 위치를 기억하기 어려움<br>
  
- 결론   
무한 스크롤은 사실 스크롤 이벤트가 더 친숙한 앱에 더 적합한 것 같고, <br>
하단에 뚝 끊기는 느낌 없이 자연스럽게 이어가는 건 사용자가 계속 사이트에 머물게 하는 점도 있는 것 같다.
