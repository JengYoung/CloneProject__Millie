### URL

https://www.millie.co.kr/company/company.html?&gclid=Cj0KCQiA1KiBBhCcARIsAPWqoSq0uD57A7114k7_hU-cXbSTDO8BKxpUFUy_Dkig9dTc0a_MGb6zdHIaAi39EALw_wcB

## 2021.03.17

### commit "presents 클래스명 수정 및 changeScalePresentInfoScrollEvent 구현"

1. presents -> present-infos, present -> present-info로, 좀 더 명확히 클래스명 지정
2. present-info 의 스크롤 이동 시 scale 변화 이벤트 구현

### commit "present-box head 애니메이션 구현 및 presentBoxBodyRotateAnimation 수정"

1. present-box가 일정 스크롤 이상 이동 시, 각도 및 움직임 변화 구현
2. px 단위로 translate할 시 width에 따른 일정한 모양이 유지되지 않는 현상을 발견,
   %단위로 이동하도록 presentBoxBodyRotateAnimation keyframes 수정.

## 2021.03.16

### commit "presentBoxActive, present-box body 애니메이션 구현"

1. 일정 스크롤 이동 시 present-box가 나타나는 효과 구현
2. 일정 스크롤을 추가 이동 시, present-box body의 각도 및 움직임 변화 구현

### commit "changeBoxScaleScrollEvent 파일명 수정 및 translateY 스크롤 이벤트 구현"

1. changeImgBoxScrollEvent.js로 파일명 수정
2. content-first의 스크롤에 따른 translateY 변화 이벤트 추가
3. 스크롤 이벤트에 따른 content-introduction-section의 padding-top도 함께 증가하는 것을 확인, 구현.

### commit "changeBoxScaleScrollEvent 구현"

스크롤에 따른 이미지 크기 조정 효과 추가

### commit "content-second-img 추가"

html에 추가되지 않았던 이미지 추가

### commit "changeBoxRotationOpacityEvent 구현"

스크롤 시 rotated-box의 특정 구간 투명도 변화 이벤트 구현

### commit "changStringColor 구현"

genre-introduction-container의 sub-copy strong 태그 부분이 일정 스크롤에서 계속해서 바뀌어 보이는 이벤트 구현

## 2021.03.12

### commit "changeBoxRotationRateScrollEvent 구현"

1. 일정 스크롤을 지날 시 rotated-box 회전 효과 구현
2. 2번째, 6번째는 시계방향, 나머지는 시계 반대방향으로 돌아가는 것을 확인, 구현.

### commit "rotated-box 생성 및 css 설정"

1. rotated-box-wrapper 및 rotate-box html에 추가.
2. setRotateBox mixin 추가, css property value setting.

### commit "introSetOpacity 이상현상 수정"

1. 빠르게 스크롤을 돌릴 때, 제대로 투명도가 설정되지 않는 현상 발견
2. 조건문을 통한 예외처리, 결과적으로 정상 작동

## 2021.03.10

### commit "genre-introduction-container background scroll-event 구현"

1. 스크롤에 따른 페이지 색 변화 추가

- changeGenrePageBackgroundColor.js를 통해 class를 추가함으로써 transition을 통해 전체 색깔을 변경

2. gradient가 스크롤 시 적용되는 이벤트 발견

- genre-introduction-container의 가상요소 ::before css에 추가.
- keyframe을 통한 gradient-animation 구현

### commit "books-wrap-book scroll-event 구현"

1. booksMovmentScrollEvent.js를 통해 book image가 스크롤에 따라 움직이는 애니메이션 추가

- flex-end를 통해 book의 밑 높이를 일정하게 유지시킨 후, for문을 통해 스크롤에 따른 같은 행 책들의 움직임을 일정하게 적용.

2. book-introduction-container의 overflow-x: hidden 속성 추가

## 2021.03.09

1. intro 시작 시 book image와 copy가 이동하는 event 구현
2. 일정 스크롤에 따라 go-signup-button 내용이 바뀌는 기능 구현

## 2021.03.08

1. event에 따라 display를 설정할 go-signup-button html 추가
2. mixin을 통한 go-signup-button 정리 (setGoSignUpButton)
3. goSignupBtnScrollEvent 구현 (스크롤 위치에 따른 go-signjup-button 변화 기능)
4. introSetOpacity 구현 (스크롤이 일정 부분을 지나면 intro-container copy-wrap이 투명해지는 기능)
5. div.imgContainer html 위치 변경 및 imgContainer- img-wrap으로 수정

## 2021.03.03

scss refactoring 시작

1. mixin을 통한 전체 main-copy 정리
2. mixin을 통한 전체 sub-copy 정리
3. mixin을 통한 전체 container 정리
4. fee-introduction-container 내 wrapper 폰트 정리
5. mixin을 통한 nav-bar 버튼 정리
6. mixin을 통한 fee-wrap-body 정리
7. mixin을 통한 subscription-fee-wrap 정리
8. mixin을 통한 fee-wrap-header 정리
9. head -> fee-wrap-head-copy로 이름 변경, mixin을 통한 정리
10. shelf-image 수정 ->

## 2021.03.02

### 중간 점검

필요 지식 - 스크롤 이벤트, 반응형 웹페이지 구현
계획 -

1. 관련 지식을 쌓기 위한 간단한 미니 프로젝트 개별 실시, velog에 정리
2. 차후 로그인 및 다양한 페이지 구현은 미정.

구현 - 이벤트 없는 정적인 클론 페이지 전체 구현
미구현 - 이벤트 없음, 반응형 미구현.

## 2021.03.01

구현 -

1. contents-introduction-container section 구현
2. subscribe-option-introduction-container 구현

미구현 - event 미구현

## 2021.02.27

구현 - genre-introduction-container section 구현
미구현 - event 미구현, squareBox 미구현

## 2021.02.22

구현 - book-introduction-container section 구현.
미구현 - event 미구현.

## 2021.02.18

### 주요 변경 사항

구현 - slogan-container 쪽 페이지 구현
미구현 - event 미구현.

#### <strong>문제 발견</strong>

1. 선반 이미지들이 크기가 조정되는 현상 발생.
   일단 주요 부분을 구현하고 수정할 예정.

## 2021.02.17

### 주요 변경 사항

parcel bundler을 통한 sass 작업 실시.
구현 - intro-container 쪽 부분 구현.
미구현 - event 미구현.

#### <strong>문제 발견</strong>

1. <u>이미지 크기 및 배치 중 imgContainer에서 room-img만 크기가 조정되는 현상 발생.
   이를 먼저 해결하고, 이벤트를 조정할 예정.</u> >>> 2021.02.18 해결

## 2021.02.15

### 주요 변경 사항

페이지에 필요한 이미지 추가

## 2021.02.14

### MillieResponsiveWebsite Project Objective

1. create millie website clone without any hints.
2. Understanding <b>HTML, CSS, JavaScript</b>
3. improving <b>responsive website development skills.</b>
4. ...contemplating other objectives
