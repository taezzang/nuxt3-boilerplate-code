# Nuxt 3 보일러 플레이트

이 레포지터리는 Nuxt 3을 학습하며 실무 또는 개인 포트폴리어 생성 시 바로 가져다 세팅 할 수 있도록 만들어둔 Nuxt 3 보일러 플레이트 입니다.


### 기본 세팅

* Vue3.js + TypeScript 세팅
* ESLint + Prettier (airbnb 컨벤션 적용) 세팅
* sitemap, robots.txt 등의 seo 관련 내용 세팅
* i18n을 통한 다국어 세팅
* Pinia 상태관리 라이브러리를 통한 상태관리 세팅
* Error Page 기초 세팅
* 빌드 시 prerender 세팅
* pages/ 내 컴포넌트에서 useAsyncData 메소드를 통한 서버사이드 데이터 호출 세팅


위 세팅 이외에 `pages/` 내부의 컴포넌트들로 총 7개의 예시 페이지가 존재합니다.
1. 메인 페이지
2. 다국어 테스트 페이지
3. 런타임 설정 테스트 페이지
4. 이미지 임포트 관련 예시 페이지
5. Pinia 스토어 사용 관련 예시 페이지
6. 미들웨어를 적용한 서브 페이지
7. useAsyncData 메소드를 사용해 서버사이드에서 미리 데이터를 호출해 렌더링하는 예시 페이지


---
현재 세팅된 기능 및 예시 페이지들을 활용해 더 빠르게 Nuxt3 프로젝트 구축을 하면 됩니다.

(사용된 라이브러리 버전은 package.json 참조)

<br />

### 실행 방법

보일러 플레이트 개발 당시 package manager로 `pnpm`을 선택하였음.

따라서 pnpm 명령어로 기입

`pnpm i`

`pnpm run dev`

robots.txt 같은 seo 파일은 빌드 했을 때가 제대로된 결과물이 나옵니다.

dev 환경에선 일종의 프리뷰 모드로 진행됨