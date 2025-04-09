export const tmp = "";

//& HTTP 요청 방법
// >> HTTP 프로토콜은 다양한 요청 메서드를 지원

//# 1) GET
// : 데이터를 조회할 때 사용
// - URL에 쿼리 파라미터를 포함하여 요청을 보냄
// - 데이터를 조회하고 검색하는 데 사용
// EX) 사용자 정보 조회, 상품 목록 불러오기 등

//# 2) POST
// : 새로운 데이터를 생성할 때 사용
// - 데이터를 요청 본문(body)에 포함시켜 전송
// - 새 리소스를 생성하거나 데이터를 서버로 제출할 때 사용
// EX) 회원 가입, 게시글 작성 등

//# 3) PUT
// : 기존 데이터를 수정할 때 사용
// - 지정된 리소스를 새로운 데이터로 "완전히" 대체
// - 리소스의 전체적인 수정에 사용
// EX) 사용자 프로필 업데이트, 설정 변경 등

//# +) PATCH
// - "일부의 데이터"를 대체

//# 4) DELETE
// : 데이터를 삭제할 때 사용
// - 지정된 리소스를 서버에서 삭제
// - 리소스를 영구적으로 제거할 때 사용
// EX) 계정 삭제, 게시글 제거 등

//& == PUT VS PATCH == //
// 1) PUT: 전체 자원 교체
// - 수정할 전체 데이터를 보냄 (1 ~ 5가 담긴 A 중에 3만 수정해도 A의 형태를 전송)
// - 기존 자원을 완전히 덮어씀
//? 멱등성(idempotent): 존재 - 같은 요청을 여러 번 보내도 결과가 같음

//! 2) PATCH: 자원의 일부만 수정
// - 수정할 필드만 보냄 (3만을 수정한다면 3의 필드만 전송)
// - 기존 자원에서 일부 필드만 변경 (+ 원본이 유지될 수 있음)
//? 멱등성: 상황에 따라 다름 (일반적으로 멱등하지 X)

// +) HTTP 메서드의 멱등성
// - GET(O): 몇 번 요청해도 같은 데이터를 조회
// - DELETE(O): 이미 삭제된 데이터를 삭제해도 똑같은 상태 (에러 X)
// - PUT(O): 같은 데이터로 덮어쓰기하기 때문에 결과가 같음

// - POST(X): 새로운 데이터를 계속 추가
// - PATCH(△): 부분 수정 + 멱등성이 매번 다름

// "멱등하다" : "같은 요청을 여러 번 해도 상태가 변하지 않음"