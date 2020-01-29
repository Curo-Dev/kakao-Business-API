# kakao Business API 🎈

## 1. Explanation

#### 1.1 Function

  - **Count** 채널의 친구 수를 가져옵니다.
  - **~~Title~~** 채널의 타이틀을 가져옵니다.

## 2. API specifications
#### 1.1 친구 수

- 채널의 친구 수를 가져옵니다.

##### Specification
- **Method** : POST
- **URL** : http(s)://:your\_server\_url/count
- **Content-Type** : application/json; charset=utf-8
- **Parameters**

| 필드명 | 타입 | 필수여부 | 설명 |
| ---- | ---- | -------- | ----------- |
| id | String | Required | 채널 고유 아이디 |
- **예제**
```
curl -XPOST 'https://:your_server_url/count' -d '{
  "id": ":id"
}'
```
- **Response**
 
 | http status code | code | message | comment |
| ---------------- | ---- | ------- | ------- |
| 200 | 200 | SUCCESS | 정상 응답 |
 
 
## 3. Response Code
##### Success Response

| http status code | code | message | comment |
| ---------------- | ---- | ------- | ------- |
| 200 | 200 | SUCCESS | 정상 응답 |

##### Error Response

| http status code | code |  comment |
| ---------------- | ---- |  ------- |
| 200 | 100 | ID 값이 없음 |
| 200 | 101 | 올바르지 않은 ID 값  |

 


## Recommended Commit Message

| 언제?                              | 커밋 메시지                               |
| ---------------------------------- | ----------------------------------------- |
| 기능 추가                          | feat: ⚡️ 기능 추가                       |
| 버그 픽스                          | fix: 🔥 버그 픽스                         |
| 리팩토링                           | refactor: 🛠 리팩토링                      |
| 프로덕션과 상관없는 패키징 등 코드 | chore: 📦 패키지 추가, Deploy Script 등등 |
| 리드미 추가                        | docs: 📚 리드미 수정                      |
| 스타일 관련                        | style: 👁 스타일 개선            |
