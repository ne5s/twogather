<시연 동영상> 

[https://youtu.be/al_ei550YEs](https://youtu.be/al_ei550YEs)

# 1. **GitLab 링크**

---

🔗 [깃랩 보러 가기](https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project_2/team2/twogather)

# 2. 서비스 소개

---

## 🎯 목표

**Host와 Guest의 계정 구분 없이 공간 대여와 제공을 동시에 할 수 있는** (프로슈머(Prosumer)) 서비스를 제공한다.

- 회원가입, 로그인, 호스트 등록 기능을 제공한다.
- 마이 페이지에서 나의 활동 정보(예약,Q&A,리뷰 등)등을 조회/수정이 가능하다.
- Host가 계정을 생성한 뒤 공간(Space)를 등록한다.
- 등록한 공간(Space)에 대한 상세 룸(Room)을 등록한다.
- 여러가지 검색 옵션을 이용해 룸(Room)을 찾을 수 있다.
- Guest는 검색한 룸(Room)을 시간당 금액과 이용 가능한 시간대를 본 후 예약할 수 있다.
- Host 또한 Guest로서 이용하고자 하는 룸(Room)을 예약할 수 있다.
- 리뷰, Q&A 등을 이용해 Host와 Guest가 소통한다.
- 전체 유저 조회 등 관리자 기능을 제공한다.
- 관리자(홈페이지) Host와 Guest에게 홈페이지 이용에 대한 공지사항을 할 수 있다.

## 🧐 기획 의도

### 💡 Prosumer가 되고 싶어하지 않을까?

다양한 형태의 공간 쉐어링이 보편화된 요즘, 공간 호스팅이 가능한 서비스들은 많다. 기존 서비스들은 호스트로서 공간을 등록하기도 하지만, 그 호스트가 Guest가 되어 쓰고 싶은 방을 예약하려면 게스트와 호스트 계정을 따로 생성해야 하고, 불필요하게 계정이 많아지면 **관리해야 할 데이터의 양**도 늘어난다. 이와 같은 형태의 비즈니스의 사용자 경험과 리소스 관리 측면을 고려하여 **게스트와 동시에 호스트가 될 수 있는 TWOGATHER**를 기획하였다. 

### 💡 깔끔하고 심플한 UI & 사용자를 고려한 UX

우선 사용자가 느낄 수 있는 렌더링 대기 시간을 단축하려 노력했다. 불필요하게 많은 데이터를 한 번에 불러오는 방식은 지양하고 고객의 니즈에 꼭 필요한 데이터만 불러오도록 **필터링 및 정렬** 기능을 선별했다. 

### 💡 카카오 지도 API & 소셜 로그인을 활용, 유저 접근성 강화

**카카오 지도 API**를 활용하여 공간 위치를 맵에 표시해서 사용자들이 눈으로 볼 수 있게 하였고, **카카오 소셜 로그인을** 통해 번거로운 회원가입 절차를 거치지 않고도 간편하게 서비스를 이용할 수 있게 하였다.

## 👪 페르소나

![페르소나.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7ee830f6-1e4c-4b0f-90d8-d5c41f768c0e/%ED%8E%98%EB%A5%B4%EC%86%8C%EB%82%98.png)

# 3. **기술 스택**

---

![기술스택 캡쳐.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f5d1b0f-03d3-4f41-b84a-1bf9c44e8d63/%EA%B8%B0%EC%88%A0%EC%8A%A4%ED%83%9D_%EC%BA%A1%EC%B3%90.png)

# 4. 각 팀원의 역할과 기여한 부분

---

| 이름 | 역할 | 담당 부분 |
| --- | --- | --- |
| 강예정 | 프론트엔드 | 1. 공간(Space) CRUD 기능 개발
2. 룸(Room) CRUD 기능 개발
3. 유저목록 조회 기능 개발 |
| 김미지 | 프론트엔드 | 1. 공간 상세 페이지 개발
2. 공간 예약 페이지 개발
3. Host/관리자 예약관리 페이지 개발
4. Host Q&A 관리 페이지 개발
5. 이미지 슬라이더, 데이트 피커 개발 |
| 나해란 | 프론트엔드, 팀장 | 1. 홈 화면 개발
2. 공간(Space) 목록 페이지 개발
3. 관리자 공지사항 CRUD 기능 개발 |
| 남연진 | 프론트엔드 | 1. 로그인, 로그아웃 기능 개발
2. 회원가입 기능 개발
3. 마이페이지 개발
4. 리뷰 및 Q&A 페이지 개발 |
| 김태훈 | 백엔드 | 1. EC2 MySQL 서버 생성 및 관리
2. 관계형 DB 모델링 및 ERD 작성
3. REST API 개발 및 Swagger 문서 작성
4. 인증/인가 구현
5. Slack Git 연동 |
| 장종원 | 백엔드 | 1. EC2 Jenkins(CI/CD) 환경 구축
2. DB 구축 및 REST API 개발
3. Swagger(API Document) 작성
4. AWS S3로 이미지 저장
5. AWS Lambda로 이미지 resizing 자동화 |

# 5. 프로젝트 구조도

---

## 🧑‍💻 로그인

![로그인.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c9b1abaa-86b6-4e59-834e-1fb7f6151770/%EB%A1%9C%EA%B7%B8%EC%9D%B8.png)

## 🧑‍💻 예약 등록

![공간 대여.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83cbbdaa-c7ae-4ca5-a963-2262795bc3c6/%EA%B3%B5%EA%B0%84_%EB%8C%80%EC%97%AC.png)

## 🧑‍💻 Figma 사진

![스크린샷 2022-07-26 오후 6.57.28.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/71f28be1-ef36-4c39-a797-e7f370f2a0af/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-07-26_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.57.28.png)

## 🧑‍💻 Figma 링크

[https://www.figma.com/file/11R0lkBAQmi4Pv2Js7fkUX/Twogather?node-id=0%3A1](https://www.figma.com/file/11R0lkBAQmi4Pv2Js7fkUX/Twogather?node-id=0%3A1)

# 6. 기능 설명

---

## 🧑‍💻 주요기능

### 1️⃣ 회원가입, 로그인, 로그아웃

- 카카오 소셜 회원가입 및 로그인
- 로그인 시 유저 권한에 따라 페이지 접근
- 비밀번호 분실 시, 가입한 이메일로 임시 비밀번호 발송ㅇ

### 2️⃣ 마이페이지

- 내 정보 수정 및 프로필 사진 등록
- 내 예약 내역
- 내가 작성한 리뷰 및 Q&A 목록

### 3️⃣ 공간 조회

- 공간유형, 공간명, 해시태그 등 키워드로 공간 검색
- 등록순, 가격순, 리뷰많은순 등 공간 조회 필터링

### 4️⃣ 공간 예약

- 공간 이미지 슬라이드
- 공간 설명 및 지도
- 날짜별 예약 불가능한 시간대 필터링
- 시간대별 룸 예약

### 5️⃣ 호스트 페이지 (고)

- 호스트 등록
- 공간/룸 등록 및 수정, 삭제
- 내 공간 예약 내역 관리
- 내 공간 리뷰 및 Q&A 관리

### 6️⃣ 관리자 페이지

- 유저 관리
- 전체 예약 내역 관리

- 공지사항

## 🧑‍💻 API 명세서(Swagger)

🔗 [Swagger 보러 가기](http://kdt-sw2-seoul-team02.elicecoding.com:5000/api-docs)

## 🧑‍💻 아키텍처 구성도

![스크린샷 2022-07-29 오후 2.52.25.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/539794a2-3a09-48a4-949f-60169d2809d3/_2022-07-29__2.52.25.png)

## 🧑‍💻 Entity Relationship Diagram(ERD)

![erd.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/01b69c27-27d0-4013-a19f-12a6b89e4c3c/erd.png)

# 7. 웹페이지 캡쳐

---

                            **메인페이지**

                            **공간 목록 조회**

![                            ](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d2988ec1-d7b0-4d79-b6fc-8ab30a4cd683/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-07-27_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.48.28.png)

                            

                            **공간 상세페이지**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/520b9a84-aac0-4d50-8322-7bb6ddb2a53d/Untitled.png)

                            ****

                                **회원가입**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/820d1647-e74a-43c1-8f25-d3f8f0fcbb84/Untitled.png)

                  

                  **호스트 공간 관리페이지**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3bb2a48b-6587-4097-a2e8-dab0abcf8a8e/Untitled.png)

                              

  

                            **공간 등록**       

     

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d55dd1ca-ee3b-4901-bba4-bf122afaeac9/Untitled.png)

  ****

  ****

                       **유저 관리(Admin)**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3c022838-517b-4963-b7b6-73187653c14b/Untitled.png)

                            **Q&A 관리**       

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/243cd988-b1d8-4397-93ab-62a42cae5586/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2d0bcf4-707e-4c06-8f3a-96fb0cbd8bda/Untitled.png)

                           ****

                            **마이페이지**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98e70313-ecbe-4c8b-942e-43d1ac641494/Untitled.png)

                          ****

                      

                 **로그인 화면**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d1e0d055-2ff3-4b8b-9f17-3f2273b7de36/Untitled.png)

                              **공지사항**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/51579c9c-b9f1-4a5e-a6ab-885ea6937006/Untitled.png)

                                 **룸 등록**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef6ab0c0-3136-435a-a3f2-88d0eae41142/Untitled.png)

                            **호스트 등록**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86f3301a-cd0b-46ba-8d09-8f880bc76c54/Untitled.png)

                            **이용후기 등록**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d31bf1e6-0b2d-4e5d-8e72-c1b2735fd02d/Untitled.png)

[🔼 맨 위로 이동하기](https://www.notion.so/2c9887edd94442458fe5e59b01a2e8e2)
