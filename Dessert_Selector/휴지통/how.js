const howForm = document.getElementById("h_form");

const H_MAK = [
  "멘보샤",
  "고기만두",
  "김치만두",
  "새우만두",
  "갈비만두",
  "납작만두",
  "비빔냉면",
  "물냉면",
  "열무국수",
  "동치미 국수",
  "밀면",
  "바지락 칼국수",
  "팥칼국수",
  "들깨칼국수",
  "멸치칼국수",
  "칼만두국",
  "칼수제비",
  "장칼국수",
  "마라탕",
  "김치찌개",
  "순두부찌개",
  "된장찌개",
  "부대찌개",
  "제육볶음",
  "비빔밥",
  "콩나물국밥",
  "라면",
  "만두국",
  "생선구이",
  "불고기",
  "오므라이스",
  "삼계탕",
  "청국장",
  "참치 김밥",
  "치즈 김밥",
  "땡초 김밥",
  "충무 김밥",
  "야채 김밥",
  "불고기 김밥",
  "볶음밥",
  "카레",
  "토마토 파스타",
  "크림 파스타",
  "로제 파스타",
  "오징어볶음",
  "닭볶음탕",
  "쌈밥",
  "낙지볶음",
  "떡갈비",
  "동태찌개",
  "옛날 우동",
  "얼큰 우동",
  "카레 우동",
  "어묵 우동",
  "함박스테이크",
  "북엇국",
  "우거지국",
  "샌드위치",
  "토스트",
  "즉석 떡볶이",
  "궁중 떡볶이",
  "짜장 떡볶이",
  "차돌 떡볶이",
  "국물 떡볶이",
  "치즈 떡볶이",
  "카레 떡볶이",
  "기름 떡볶이",
  "까르보 떡볶이",
  "마늘 떡볶이",
  "크림 떡볶이",
  "옛날 떡볶이",
  "찜닭",
  "수제비",
  "치즈닭갈비",
  "간장닭갈비",
  "고추장닭갈비",
  "월남쌈",
  "보쌈",
  "잡채",
  "스팸구이",
  "훈제오리 부추무침",
  "치킨마요 덮밥",
  "계란찜",
  "떡국",
  "감자채 볶음",
  "고추장찌개",
  "감자국",
  "감자조림",
  "참치김치전",
  "참치마요덮밥",
  "수육",
  "돼지고기김치찜",
  "라볶이",
  "소시지 야채볶음",
  "계란말이",
  "해물파전",
  "파인애플 볶음밥",
  "콩나물국",
  "김치볶음밥",
  "간장계란밥",
  "미역국",
  "소고기무국",
  "된장국",
  "두부김치",
  "어묵탕",
  "잔치국수",
  "비빔국수",
  "잡채밥",
  "게살볶음밥",
  "가지덮밥",
  "삼겹살",
  "쭈삼볶음",
  "고등어김치찜",
  "김치전",
  "감자전",
  "김치국",
  "꽃게탕",
  "계란파국",
  "배추국",
  "고등어백반",
  "고등어조림",
  "갈치백반",
  "갈치조림",
  "누룽지",
  "제육덮밥",
  "주먹밥",
  "등갈비",
  "등갈비김치찜",
  "떡만두국",
  "사골국",
  "소불고기덮밥",
  "소갈비",
  "돼지갈비",
  "불날개",
  "오징어 찌개",
  "스팸 짜글이",
  "우렁 강된장",
  "감자 짜글이",
  "콩나물 찌개",
  "묵은지 김치찜",
  "유부 초밥",
  "오이 냉국",
  "토마토 달걀 볶음",
  "감자 계란국",
  "돈까스 김치 나베",
  "밀푀유 나베",
  "북어국",
  "어묵 김치 전골",
  "샤브샤브",
  "두부 계란탕",
  "버섯 들깨탕",
  "들깨 감자국",
  "닭곰탕",
  "닭국수",
  "전복 죽",
  "야채 죽",
  "단호박 죽",
  "버섯 불고기 전골",
  "낙곱새",
  "순대곱창전골",
  "알밥",
  "배추 술찜",
  "매운탕",
  "오믈렛",
  "리조또",
  "베이컨 크림 리조또",
  "김치 리조또",
  "라자냐",
  "그라탕",
  "두부 스크램블",
  "찹스테이크",
  "닭다리살 스테이크",
  "목살 스테이크",
  "연어 스테이크",
  "해물 빠에야",
  "에그인헬",
  "라따뚜이",
  "퀘사디아",
  "인도 커리",
  "닭봉 간장 조림",
  "새송이 버섯 간장 버터구이",
  "칠리새우",
  "크림 새우",
  "깐풍 새우",
  "버섯 채소 구이",
  "버터 갈릭 새우",
  "연두부 샐러드",
  "케이준 치킨 샐러드",
  "연어 샐러드",
  "리코타치즈 샐러드",
  "콥 샐러드",
  "훈제오리 무쌈말이",
];

const H_RES = [
  "멘보샤",
  "반미 샌드위치",
  "훠궈",
  "딤섬",
  "고기만두",
  "김치만두",
  "새우만두",
  "갈비만두",
  "납작만두",
  "비빔냉면",
  "물냉면",
  "열무국수",
  "동치미 국수",
  "회냉면",
  "평양냉면",
  "함흥냉면",
  "밀면",
  "바지락 칼국수",
  "팥칼국수",
  "들깨칼국수",
  "멸치칼국수",
  "칼만두국",
  "칼수제비",
  "장칼국수",
  "마라탕",
  "김치찌개",
  "순두부찌개",
  "된장찌개",
  "라멘",
  "생선구이",
  "불고기",
  "오므라이스",
  "쌀국수",
  "부대찌개",
  "알탕",
  "갈비탕",
  "제육볶음",
  "콩나물국밥",
  "돼지국밥",
  "치즈 돈까스",
  "등심 돈까스",
  "고구마 돈까스",
  "고구마 치즈 돈까스",
  "카레 돈까스",
  "떡볶이 돈까스",
  "쫄면 돈까스",
  "삼계탕",
  "청국장",
  "참치 김밥",
  "치즈 김밥",
  "땡초 김밥",
  "충무 김밥",
  "야채 김밥",
  "불고기 김밥",
  "짜장면",
  "볶음밥",
  "짬뽕",
  "롯데리아",
  "맥도날드",
  "버거킹",
  "KFC",
  "수제버거",
  "에그드랍",
  "맘스터치",
  "피치버스",
  "피자헛",
  "도미노 피자",
  "피자와 치킨의 러브레터",
  "화덕피자",
  "피자나라 치킨공주",
  "피자 알볼로",
  "59쌀피자",
  "파파존스",
  "토마토 파스타",
  "크림 파스타",
  "로제 파스타",
  "생선 초밥",
  "유부 초밥",
  "닭볶음탕",
  "쌈밥",
  "낙지볶음",
  "간장게장",
  "양념게장",
  "떡갈비",
  "동태찌개",
  "추어탕",
  "탕수육",
  "마파두부",
  "옛날 우동",
  "새우튀김 우동",
  "얼큰 우동",
  "카레 우동",
  "어묵 우동",
  "함박스테이크",
  "리조또",
  "순대국",
  "뼈해장국",
  "냉면",
  "토스트",
  "배떡 로제떡볶이",
  "엽기 떡볶이",
  "즉석 떡볶이",
  "궁중 떡볶이",
  "짜장 떡볶이",
  "차돌 떡볶이",
  "국물 떡볶이",
  "치즈 떡볶이",
  "카레 떡볶이",
  "기름 떡볶이",
  "까르보 떡볶이",
  "마늘 떡볶이",
  "크림 떡볶이",
  "옛날 떡볶이",
  "찜닭",
  "수제비",
  "아구찜",
  "치즈닭갈비",
  "숯불닭갈비",
  "간장닭갈비",
  "고추장닭갈비",
  "철판닭갈비",
  "월남쌈",
  "보쌈",
  "족발",
  "장어구이",
  "더덕구이",
  "훈제오리 부추무침",
  "돼지고기김치찜",
  "두루치기",
  "라볶이",
  "닭강정",
  "치킨까스",
  "볶음우동",
  "해물파전",
  "스테이크",
  "김치볶음밥",
  "짜장밥",
  "육개장",
  "두부김치",
  "어묵탕",
  "순대볶음",
  "콩국수",
  "해물찜",
  "짬뽕밥",
  "설렁탕",
  "육회비빔밥",
  "육회",
  "육전",
  "회덮밥",
  "가지덮밥",
  "하이라이스",
  "부리또",
  "나시고랭",
  "곱창",
  "막창",
  "대창",
  "삼겹살",
  "쭈꾸미 정식",
  "쭈삼볶음",
  "양꼬치",
  "양갈비",
  "감자탕",
  "곰탕",
  "고등어김치찜",
  "감자전",
  "동태조림",
  "회",
  "코다리조림",
  "꽃게탕",
  "새우까스",
  "오리주물럭",
  "오징어 회",
  "물회",
  "고등어백반",
  "고등어조림",
  "갈치백반",
  "갈치조림",
  "제육덮밥",
  "돼지 김치 짜글이",
  "삼각김밥",
  "내장탕",
  "동태탕",
  "등갈비",
  "등갈비김치찜",
  "꼬막비빔밥",
  "떡만두국",
  "사골국",
  "수육국밥",
  "생선까스",
  "메밀소바",
  "막국수",
  "소불고기덮밥",
  "소갈비",
  "돼지갈비",
  "불날개",
  "오징어 찌개",
  "스팸 짜글이",
  "우렁 강된장",
  "감자 짜글이",
  "콩나물 찌개",
  "묵은지 김치찜",
  "유부 초밥",
  "돈까스 김치 나베",
  "밀푀유 나베",
  "어묵 김치 전골",
  "샤브샤브",
  "두부 계란탕",
  "버섯 들깨탕",
  "들깨 감자국",
  "닭곰탕",
  "닭국수",
  "전복 죽",
  "야채 죽",
  "단호박 죽",
  "버섯 불고기 전골",
  "낙곱새",
  "순대곱창전골",
  "알밥",
  "매운탕",
  "오믈렛",
  "리조또",
  "베이컨 크림 리조또",
  "김치 리조또",
  "라자냐",
  "그라탕",
  "찹스테이크",
  "닭다리살 스테이크",
  "목살 스테이크",
  "연어 스테이크",
  "해물 빠에야",
  "에그인헬",
  "라따뚜이",
  "퀘사디아",
  "인도 커리",
  "칠리새우",
  "크림 새우",
  "깐풍 새우",
  "연두부 샐러드",
  "케이준 치킨 샐러드",
  "연어 샐러드",
  "리코타치즈 샐러드",
  "콥 샐러드",
  "교촌치킨 - 허니콤보",
  "교촌치킨 - 레드콤보",
  "교촌치킨 - 오리지날",
  "BBQ 치킨 - 황금올리브",
  "BBQ 치킨 - 자마이카 통다리 구이",
  "BHC - 뿌링클",
  "BHC - 맛초킹",
  "처갓집 양념치킨 - 슈프림양념",
  "멕시카나 - 뿌리고(매콤달콤한맛)",
  "60계 치킨 - 호랑이치킨",
  "푸라닭 - 콘소메이징",
  "푸라닭 - 블랙알리오",
  "푸라닭 - 고추마요 치킨",
  "지코바 치킨- 순살 양념구이",
  "지코바 치킨- 순살 소금구이",
  "굽네 치킨 - 고추바사삭",
  "굽네 치킨- 볼케이노",
  "네네 치킨- 스노윙치킨",
];

const H_DEL = [
  "마라탕",
  "김치찌개",
  "순두부찌개",
  "된장찌개",
  "부대찌개",
  "알탕",
  "갈비탕",
  "제육볶음",
  "비빔밥",
  "돼지국밥",
  "치즈 돈까스",
  "등심 돈까스",
  "고구마 돈까스",
  "고구마 치즈 돈까스",
  "카레 돈까스",
  "떡볶이 돈까스",
  "쫄면 돈까스",
  "라면",
  "만두국",
  "라멘",
  "멘보샤",
  "반미 샌드위치",
  "훠궈",
  "딤섬",
  "고기만두",
  "김치만두",
  "새우만두",
  "갈비만두",
  "납작만두",
  "비빔냉면",
  "물냉면",
  "열무국수",
  "동치미 국수",
  "회냉면",
  "밀면",
  "바지락 칼국수",
  "팥칼국수",
  "들깨칼국수",
  "멸치칼국수",
  "칼만두국",
  "칼수제비",
  "장칼국수",
  "불고기",
  "오므라이스",
  "쌀국수",
  "삼계탕",
  "청국장",
  "참치 김밥",
  "치즈 김밥",
  "땡초 김밥",
  "충무 김밥",
  "야채 김밥",
  "불고기 김밥",
  "짜장면",
  "볶음밥",
  "짬뽕",
  "롯데리아",
  "맥도날드",
  "버거킹",
  "KFC",
  "수제버거",
  "에그드랍",
  "맘스터치",
  "피치버스",
  "피자헛",
  "도미노 피자",
  "피자와 치킨의 러브레터",
  "화덕피자",
  "피자나라 치킨공주",
  "피자 알볼로",
  "59쌀피자",
  "파파존스",
  "토마토 파스타",
  "크림 파스타",
  "로제 파스타",
  "생선 초밥",
  "유부 초밥",
  "오징어볶음",
  "낙지볶음",
  "간장게장",
  "양념게장",
  "동태찌개",
  "탕수육",
  "마파두부",
  "옛날 우동",
  "새우튀김 우동",
  "얼큰 우동",
  "카레 우동",
  "어묵 우동",
  "함박스테이크",
  "리조또",
  "순대국",
  "뼈해장국",
  "토스트",
  "배떡 로제떡볶이",
  "엽기 떡볶이",
  "즉석 떡볶이",
  "궁중 떡볶이",
  "짜장 떡볶이",
  "차돌 떡볶이",
  "국물 떡볶이",
  "치즈 떡볶이",
  "카레 떡볶이",
  "기름 떡볶이",
  "까르보 떡볶이",
  "마늘 떡볶이",
  "크림 떡볶이",
  "옛날 떡볶이",
  "찜닭",
  "수제비",
  "아구찜",
  "치즈닭갈비",
  "숯불닭갈비",
  "간장닭갈비",
  "고추장닭갈비",
  "보쌈",
  "족발",
  "훈제오리 부추무침",
  "고추장찌개",
  "돼지고기김치찜",
  "두루치기",
  "라볶이",
  "닭강정",
  "치킨까스",
  "볶음우동",
  "계란말이",
  "해물파전",
  "스테이크",
  "닭볶음탕",
  "짜장밥",
  "간장계란밥",
  "육개장",
  "두부김치",
  "어묵탕",
  "순대볶음",
  "짬뽕밥",
  "설렁탕",
  "육회비빔밥",
  "육회",
  "육전",
  "회덮밥",
  "잡채밥",
  "게살볶음밥",
  "곱창",
  "막창",
  "삼겹살",
  "쭈삼볶음",
  "교촌치킨 - 허니콤보",
  "교촌치킨 - 레드콤보",
  "교촌치킨 - 오리지날",
  "BBQ 치킨 - 황금올리브",
  "BBQ 치킨 - 자마이카 통다리 구이",
  "BHC - 뿌링클",
  "BHC - 맛초킹",
  "처갓집 양념치킨 - 슈프림양념",
  "멕시카나 - 뿌리고(매콤달콤한맛)",
  "60계 치킨 - 호랑이치킨",
  "푸라닭 - 콘소메이징",
  "푸라닭 - 블랙알리오",
  "푸라닭 - 고추마요 치킨",
  "지코바 치킨- 순살 양념구이",
  "지코바 치킨- 순살 소금구이",
  "굽네 치킨 - 고추바사삭",
  "굽네 치킨- 볼케이노",
  "네네 치킨- 스노윙치킨",
  "파닭",
  "감자탕",
  "동태조림",
  "회",
  "코다리조림",
  "새우까스",
  "오리주물럭",
  "오징어 회",
  "물회",
  "고등어백반",
  "고등어조림",
  "갈치백반",
  "갈치조림",
  "제육덮밥",
  "도시락",
  "돼지 김치 짜글이",
  "등갈비",
  "등갈비김치찜",
  "꼬막비빔밥",
  "떡만두국,사골국",
  "수육국밥",
  "생선까스",
  "메밀소바",
  "막국수",
  "소불고기덮밥",
  "불날개",
  "오징어 찌개",
  "스팸 짜글이",
  "우렁 강된장",
  "감자 짜글이",
  "콩나물 찌개",
  "묵은지 김치찜",
  "유부 초밥",
  "돈까스 김치 나베",
  "밀푀유 나베",
  "어묵 김치 전골",
  "샤브샤브",
  "닭곰탕",
  "닭국수",
  "전복 죽",
  "야채 죽",
  "단호박 죽",
  "버섯 불고기 전골",
  "낙곱새",
  "순대곱창전골",
  "알밥",
  "매운탕",
  "오믈렛",
  "리조또",
  "베이컨 크림 리조또",
  "김치 리조또",
  "라자냐",
  "그라탕",
  "찹스테이크",
  "닭다리살 스테이크",
  "목살 스테이크",
  "연어 스테이크",
  "해물 빠에야",
  "에그인헬",
  "퀘사디아",
  "인도 커리",
  "칠리새우",
  "크림 새우",
  "깐풍 새우",
  "연두부 샐러드",
  "케이준 치킨 샐러드",
  "연어 샐러드",
  "리코타치즈 샐러드",
  "콥 샐러드",
];

let h_a = "";

function saveHow() {
  localStorage.setItem("How", JSON.stringify(h_a));
}

function getListE() {
  const selectList = document.getElementsByName("chk_h");
  selectList.forEach((node) => {
    if (node.checked) {
      if (node.value === "H_MAK") {
        h_a = H_MAK;
      }
      if (node.value === "H_RES") {
        h_a = H_RES;
      }
      if (node.value === "H_DEL") {
        h_a = H_DEL;
      }
    }
  });
}

function howSubmit(event) {
  saveHow();
}
howForm.addEventListener("submit", howSubmit);
