<div align="left">

# 🛍️ COZ Shopping

<img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/Javascript-yellow?style=flat-square&logo=javascript&logoColor=white"/> 
<img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/> 
<img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/Vite-BA51B7?style=flat-square&logo=vite&logoColor=white"/> 
<img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/Redux-7046B2?style=flat-square&logo=redux&logoColor=white"/> 
<img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/tailwindCSS-38BDF8?style=flat-square&logo=tailwindCSS&logoColor=white"/> 
<br>
<br>
  
## 🛫 프로젝트 실행 방법
  
```
git clone https://github.com/hyeincha/fe-sprint-coz-shopping.git
cd 폴더명
yarn
yarn dev
```
  
## 📂 파일 구조
  
```
  📦src
 ┣ 📂api
 ┃ ┗ 📜apis.js
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜Bookmark.jsx
 ┃ ┃ ┣ 📜Category.jsx
 ┃ ┃ ┣ 📜Modal.jsx
 ┃ ┃ ┗ 📜Toast.jsx
 ┃ ┗ 📂view
 ┃ ┃ ┣ 📜BookmarkList.jsx
 ┃ ┃ ┣ 📜Card.jsx
 ┃ ┃ ┣ 📜CategoryList.jsx
 ┃ ┃ ┣ 📜Dropdown.jsx
 ┃ ┃ ┣ 📜ItemModal.jsx
 ┃ ┃ ┣ 📜MainProducts.jsx
 ┃ ┃ ┣ 📜ProductList.jsx
 ┃ ┃ ┗ 📜ToastContainer.jsx
 ┣ 📂helpers
 ┃ ┗ 📜constants.js
 ┣ 📂hooks
 ┃ ┗ 📜useInfiniteScroll.jsx
 ┣ 📂pages
 ┃ ┣ 📜BookmarkPage.jsx
 ┃ ┣ 📜MainPage.jsx
 ┃ ┗ 📜ProductListPage.jsx
 ┣ 📂redux
 ┃ ┣ 📂modules
 ┃ ┃ ┣ 📜productsSlice.js
 ┃ ┃ ┗ 📜toastSlice.js
 ┃ ┗ 📜store.js
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

## 📚 구현 기능

<div align="left">
    
### 공통 사항 
  
![페이지이동](https://github.com/hyeincha/fe-sprint-coz-shopping/assets/107546528/27421e69-5530-4d4a-b706-2b0a77415005)

- [x] 헤더, 푸터가 모든 페이지의 위아래에 존재합니다.
- [x] 헤더의 로고 영역을 클릭하면 메인페이지로 이동합니다.
- [x] 헤더의 오른쪽 영역에는 햄버거 버튼이 있으며, 클릭시 드롭다운이 펼쳐집니다.
- [x] 드롭다운을 통해 상품 페이지/북마크 페이지로 이동 가능합니다.
- [x] 드롭다운의 외부 영역을 클릭하거나 다른 페이지로 이동 시 드롭다운이 닫힙니다.

<br>
<br>
  
![modal](https://github.com/hyeincha/fe-sprint-coz-shopping/assets/107546528/4572e43a-1cdd-4088-bf7f-5122780e187b)
  
- [x] 각각의 아이템 클릭시 모달 창이 노출됩니다.
- [x] 모달 외부 영역, X 버튼 클릭시 모달이 닫힙니다.

<br>  
<br>
  
![북마크](https://github.com/hyeincha/fe-sprint-coz-shopping/assets/107546528/ddb69a39-9158-4bd2-a41d-d0ca621fb513)
  
- [x] 아이템 이미지 내부의 별을 클릭하여 북마크하거나 북마크에서 제거할 수 있습니다.  
- [x] 모달 내부에 있는 별 버튼 클릭시에도 북마크가 가능하며, 페이지의 상태와 동기화됩니다. 
- [x] 북마크 이벤트 발생시 화면 우측 하단에 토스트가 팝업되며, 페이지 이동시에도 유지됩니다.
- [x] 토스트가 이미 존재하는 상태에서 북마크 이벤트 발생시 생성된 토스트는 기존 토스트 밑에 추가됩니다.
  
<br>
<br>
  
### 메인페이지

- [x] 전체 상품 중 4가지, 북마크된 상품 중 4가지가 랜덤하게 렌더링 됩니다.

<br>
    
### 상품리스트 페이지/북마크 페이지
  
![filtering](https://github.com/hyeincha/fe-sprint-coz-shopping/assets/107546528/986c2cab-6181-46fe-993c-66c4b71c0f30)
  
- [x] 각각 전체 상품, 북마크 상품이 렌더링됩니다.
- [x] 카테고리를 선택하여 상품의 타입별로 모아 볼 수 있습니다.
- [x] 페이지 새로고침시에도 선택한 카테고리가 유지됩니다.
- [x] 각 페이지의 '전체' 분류에서 무한스크롤이 적용됩니다.
  
<br>
  
## 🔫 트러블슈팅

### 토스트 구현

이번 프로젝트의 토스트는 아래와 같은 특징을 가지고 있습니다:

- 모든 페이지에서 렌더링이 가능해야 함
- 동시에 여러 개의 토스트가 존재할 수 있음
- 토스트가 떠있는 채로 페이지를 이동하더라도 유지되어야 함

<br>

이러한 특징들 때문에 토스트의 상태를 전역에서 관리하였습니다. <br>
북마크 이벤트가 실행될 때마다 `id`와 `isBookmarked` 프로퍼티로 구성된 객체가 토스트 배열에 추가되며, <br>
`id`는 `Date.now()`로 생성된 토스트의 고유한 아이디, <br>
`isBookmarked`는 북마크가 제거된 것인지 혹은 추가된 것인지를 판별하는 boolean 값입니다. <br>
`setTimeout` 함수를 이용하여 2초가 지나면 토스트 배열에서 id가 일치하는 요소를 제외하여 토스트가 사라지도록 구현했습니다.

<br>

### API 최적화

이 프로젝트에서는 react-router-dom의 `loader`를 이용하여 루트 경로에서 데이터를 페칭합니다. <br>
상품리스트 페이지, 북마크 페이지에서 카테고리에 따른 필터링을 구현할 때는 쿼리 파라미터를 사용하였는데, <br>
이것 때문에 카테고리가 변경될 때마다 `loader` 함수가 실행되어 매번 새로 데이터를 요청하는 문제가 발생했습니다. <br>
<br>
이 프로젝트는 최초 API 요청으로 데이터를 받아왔다면 더이상 새로운 API 요청이 필요하지 않기 때문에 <br>
react-router-dom의 `shouldRevalidate` 옵션에서 항상 false를 리턴하여 불필요한 데이터 요청을 방지했습니다.
