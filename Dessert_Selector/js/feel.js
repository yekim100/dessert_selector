const feelFrom = document.getElementById("f_form");

const F_GOOD = [
  "아메리카노",
  "카페라떼",
  "에스프레소",
  "바닐라 라떼",
  "흑당버블티",
  "아인슈페너",
  "초코라떼",
  "녹차 라떼",
  "고구마 라떼",
  "얼그레이(차)",
  "쌍화차",
  "케모마일(차)",
  "히비스커스(차)",
  "페퍼민트(차)",
  "유자차",
  "율무차",
  "수박쥬스",
  "오렌지 쥬스",
  "딸기 쥬스",
  "포도 쥬스",
  "바나나 쥬스",
  "레모네이드",
  "블루 레모네이드",
  "자몽에이드",
  "청포도 에이드",
  "체리 에이드",
  "복숭아 에이드",
  "플레인 요거트 스무디",
  "블루베리 요거트 스무디",
  "딸기 요거트 스무디",
  "망고 요거트 스무디",
  "딸기 스무디",
  "블루베리 스무디",
  "쿠앤크 스무디",
  "말차 우유",
  "달고나 라떼",
  "흑임자 라떼",
  "복숭아 아이스 티",
  "레몬 아이스티",
  "카페모카",
  "카라멜 마끼아또",
  "헤이즐넛 라떼",
  "연유라떼",
  "콜드브루",
  "민트초코 프라페",
  "모카 칩 프라페",
  "카라멜 프라페",
  "밀크티",
  "슬러시",
  "믹스커피",
  "돌체라떼",
  "토마토 쥬스",
  "밀크쉐이크",
  "패션 후르츠 에이드",
  "뱅쇼",
  "샹그리아",
];

const F_SAD = [
  "망고 빙수",
  "초코 빙수",
  "메론 빙수",
  "옛날 팥빙수",
  "인절미 빙수",
  "오레오 빙수",
  "커피 빙수",
  "녹차 빙수",
  "치즈 빙수",
  "애플망고 빙수",
  "핫도그",
  "치즈 핫도그",
  "와플",
  "크로플",
  "초코 와플",
  "시나몬 와플",
  "컵케이크",
  "다쿠아즈",
  "던킨 도넛",
  "크리스피 크림 도넛",
  "마카롱",
  "붕어빵",
  "타코야끼",
  "탕후루",
  "달고나",
  "새콤달콤",
  "껌",
  "생 초콜릿",
  "박하사탕",
  "사탕",
  "델리 만쥬",
  "반건조 오징어",
  "맥반석 오징어",
  "과자",
  "양파링",
  "고구마깡",
  "꼬북칩",
  "버터링 쿠키",
  "새우깡",
  "감자깡",
  "벌집핏자(과자)",
  "야채타임(과자)",
  "죠리퐁",
  "꼬깔콘",
  "꽃게랑",
  "쟈키쟈키(과자)",
  "콘칩",
  "뻥이요(과자)",
  "포스틱(과자)",
  "포테토칩",
  "허니 버터칩",
  "콘치(과자)",
  "카라멜땅콩(과자)",
  "칙촉",
  "촉촉한초코칩",
  "짱구(과자)",
  "초코하임",
  "쿠쿠다스",
  "쌀로별(과자)",
  "미쯔(과자)",
  "홈런볼",
  "스윙칩(과자)",
  "웨하스(과자)",
  "꿀꽈배기",
  "오사쯔(과자)",
  "와클(과자)",
  "츄러스",
  "조청유과(과자)",
  "빼뺴로",
  "칸쵸(과자)",
  "썬칩(과자)",
  "브라우니",
  "맛동산",
  "바나나킥(과자)",
  "나쵸",
  "오징어 땅콩(과자)",
  "꾸이맨",
  "쫀디기(아이스크림할인점)",
  "밭두렁(아이스크림 할인점)",
  "아이셔",
  "스콘",
  "말차 스콘",
  "초코칩 스콘",
  "오레오 스콘",
  "앙버터스콘",
  "무화과 스콘",
  "수박",
  "토마토",
  "사과",
  "배",
  "딸기",
  "귤",
  "오렌지",
  "샤인머스켓",
  "포도",
  "에그 타르트",
  "바나나 푸딩",
  "초코 푸딩",
  "황치즈 휘낭시에",
  "초코 휘낭시에",
  "머랭쿠키",
  "프레즐",
  "에클레어",
  "호두파이",
  "커스터드 푸딩",
  "우유 푸딩",
  "단호박 타르트",
  "무화과 타르트",
  "치즈 타르트",
  "블루베리 타르트",
  "사과 타르트",
  "피칸 타르트",
  "꽈베기",
  "애플파이",
  "티라미수 케이크",
  "당근 케이크",
  "오레오 케이크",
  "고구마 케이크",
  "초코 쿠키",
  "로투스 쿠키",
  "크렘브륄레",
  "말차갸또쇼콜라",
  "레몬 파운드 케이크",
  "치즈 케이크",
  "초코 케이크",
  "스모어 쿠키",
  "레드벨벳 케이크",
  "빨미까레",
  "꿀빵",
  "파르페",
  "쥐포",
  "마이쮸",
  "고구마 스틱",
  "약과",
  "누룽지",
  "꾀돌이(과자)",
  "브이콘(과자)",
  "동결건조 야채믹스칩",
  "큐브 치즈",
  "볶음 땅콩",
  "견과류",
  "소떡소떡",
  "참치 크래커",
  "라면",
  "하리보 젤리",
  "포장마차 어묵",
  "녹차 브라우니",
  "치즈 브라우니",
  "치즈 수플레",
  "카스테라",
  "모카 롤케이크",
  "양갱",
  "옛날 전병",
  "녹차 카스테라",
  "클래식 딸기잼 롤케이크",
  "커피번",
  "마늘 바게트",
  "오렌지 머핀",
  "초코 머핀",
  "마들렌",
  "오란다",
  "크로와상",
  "수제 초코파이",
  "닭꼬치",
  "콜팝",
  "회오리 감자",
  "명랑 핫도그",
  "옥수수",
];

const F_ANG = [
  "초코 아이스크림",
  "딸기 아이스크림",
  "바닐라 아이스크림",
  "배스킨라빈스 - 블랙 소르베",
  "배스킨라빈스 - 초코나무 숲",
  "배스킨라빈스 - 초콜릿 무스",
  "배스킨라빈스 - 자모카 아몬드 훠지",
  "배스킨라빈스 - 레인보우 샤베트",
  "배스킨라빈스 - 민트 초콜릿 칩",
  "배스킨라빈스 - 피스타치오 아몬드",
  "배스킨라빈스 - 그린티",
  "배스킨라빈스 - 31요거트",
  "배스킨라빈스 - 베리베리 스트로베리",
  "배스킨라빈스 - 슈팅스타",
  "배스킨라빈스 - 바람과 함께 사라지다",
  "배스킨라빈스 - 엄마는 외계인",
  "배스킨라빈스 - 아몬드 봉봉",
  "배스킨라빈스 - 뉴욕치즈케이크",
  "배스킨라빈스 - 이상한나라의 솜사탕",
  "배스킨라빈스 - 체리쥬빌레",
  "배스킨라빈스 - 오레오 쿠키앤크림",
  "나뚜루 아이스크림 - 녹차",
  "나뚜루 아이스크림 - 스트로베리 치즈케익",
  "나뚜루 아이스크림 - 프렌치아포가또",
  "나뚜루 아이스크림 - 시칠리안 레몬 소르베",
  "나뚜루 아이스크림 - 퍼지브라우니 & 밀크티",
  "나뚜루 아이스크림 - 캐슈 바닐라",
  "돼지콘(아이스크림)",
  "초코퍼지 크런치 샌드(아이스크림)",
  "쿠키오민트 샌드(아이스크림)",
  "국화빵(아이스크림)",
  "쿨샷(아이스크림)",
  "별난바(아이스크림)",
  "주물러 콜라맛(아이스크림)",
  "거북알(아이스크림)",
  "롯샌 깜뜨 아이스바(아이스크림)",
  "시모나(아이스크림)",
  "초코마루 샌드(아이스크림)",
  "치즈마루 샌드(아이스크림)",
  "팽이팽이(아이스크림)",
  "티코(아이스크림)",
  "조안나바(아이스크림)",
  "엑설런트(아이스크림)",
  "위즐(아이스크림)",
  "인절미통통(아이스크림)",
  "모히또 바(아이스크림)",
  "바나나우유 바(아이스크림)",
  "폭신폭신 솜사탕 바(아이스크림)",
  "제주 용암수 아이스 바(아이스크림)",
  "천혜향 바(아이스크림)",
  "아이스팜 자두(아이스크림)",
  "아이스케-키 사과맛(아이스크림)",
  "아이스케-키 레몬(아이스크림)",
  "쌍쌍바 바닐라(아이스크림)",
  "젤루조아(아이스크림)",
  "카페오레(아이스크림)",
  "엔초(아이스크림)",
  "더위 사냥(아이스크림)",
  "슈퍼 콘(아이스크림)",
  "투게더(아이스크림)",
  "구슬 아이스크림",
  "망고 아이스크림",
  "민트 초코 아이스크림",
  "바밤바(아이스크림)",
  "탱크보이(아이스크림)",
  "죠스바(아이스크림)",
  "스크류바(아이스크림)",
  "뽕따(아이스크림)",
  "토마토마(아이스크림)",
  "초코퍼지(아이스크림)",
  "돼지바(아이스크림)",
  "폴라포(아이스크림)",
  "비비빅(아이스크림)",
  "수박바(아이스크림)",
  "쿠앤크(아이스크림)",
  "요맘때(아이스크림)",
  "체리마루(아이스크림)",
  "호두마루(아이스크림)",
  "붕어 싸만코(아이스크림)",
  "월드콘(아이스크림)",
  "구구콘(아이스크림)",
  "브라보콘(아이스크림)",
  "누가바(아이스크림)",
  "메로나(아이스크림)",
  "캔디바(아이스크림)",
  "소프트콘(아이스크림)",
  "찰떡아이스(아이스크림)",
  "쌍쌍바(아이스크림)",
  "녹차마루(아이스크림)",
  "빠삐코(아이스크림)",
  "와일드바디(아이스크림)",
  "보석바(아이스크림)",
  "아맛나(아이스크림)",
  "생귤탱귤(아이스크림)",
  "메가톤바(아이스크림)",
  "설레임(아이스크림)",
  "빵빠레(아이스크림)",
  "와(아이스크림)",
  "더블비얀코(아이스크림)",
];

const F_HAP = [
  "망고 빙수",
  "초코 빙수",
  "메론 빙수",
  "옛날 팥빙수",
  "인절미 빙수",
  "오레오 빙수",
  "커피 빙수",
  "녹차 빙수",
  "치즈 빙수",
  "애플망고 빙수",
  "초코 아이스크림",
  "딸기 아이스크림",
  "바닐라 아이스크림",
  "배스킨라빈스 - 블랙 소르베",
  "배스킨라빈스 - 초코나무 숲",
  "배스킨라빈스 - 초콜릿 무스",
  "배스킨라빈스 - 자모카 아몬드 훠지",
  "배스킨라빈스 - 레인보우 샤베트",
  "배스킨라빈스 - 민트 초콜릿 칩",
  "배스킨라빈스 - 피스타치오 아몬드",
  "배스킨라빈스 - 그린티",
  "배스킨라빈스 - 31요거트",
  "배스킨라빈스 - 베리베리 스트로베리",
  "배스킨라빈스 - 슈팅스타",
  "배스킨라빈스 - 바람과 함께 사라지다",
  "배스킨라빈스 - 엄마는 외계인",
  "배스킨라빈스 - 아몬드 봉봉",
  "배스킨라빈스 - 뉴욕치즈케이크",
  "배스킨라빈스 - 이상한나라의 솜사탕",
  "배스킨라빈스 - 체리쥬빌레",
  "배스킨라빈스 - 오레오 쿠키앤크림",
  "나뚜루 아이스크림 - 녹차",
  "나뚜루 아이스크림 - 스트로베리 치즈케익",
  "나뚜루 아이스크림 - 프렌치아포가또",
  "나뚜루 아이스크림 - 시칠리안 레몬 소르베",
  "나뚜루 아이스크림 - 퍼지브라우니 & 밀크티",
  "나뚜루 아이스크림 - 캐슈 바닐라",
  "돼지콘(아이스크림)",
  "초코퍼지 크런치 샌드(아이스크림)",
  "쿠키오민트 샌드(아이스크림)",
  "국화빵(아이스크림)",
  "쿨샷(아이스크림)",
  "별난바(아이스크림)",
  "주물러 콜라맛(아이스크림)",
  "거북알(아이스크림)",
  "롯샌 깜뜨 아이스바(아이스크림)",
  "시모나(아이스크림)",
  "초코마루 샌드(아이스크림)",
  "치즈마루 샌드(아이스크림)",
  "팽이팽이(아이스크림)",
  "티코(아이스크림)",
  "조안나바(아이스크림)",
  "엑설런트(아이스크림)",
  "위즐(아이스크림)",
  "인절미통통(아이스크림)",
  "모히또 바(아이스크림)",
  "바나나우유 바(아이스크림)",
  "폭신폭신 솜사탕 바(아이스크림)",
  "제주 용암수 아이스 바(아이스크림)",
  "천혜향 바(아이스크림)",
  "아이스팜 자두(아이스크림)",
  "아이스케-키 사과맛(아이스크림)",
  "아이스케-키 레몬(아이스크림)",
  "쌍쌍바 바닐라(아이스크림)",
  "젤루조아(아이스크림)",
  "카페오레(아이스크림)",
  "엔초(아이스크림)",
  "더위 사냥(아이스크림)",
  "슈퍼 콘(아이스크림)",
  "투게더(아이스크림)",
  "구슬 아이스크림",
  "망고 아이스크림",
  "민트 초코 아이스크림",
  "핫도그",
  "치즈 핫도그",
  "와플",
  "크로플",
  "초코 와플",
  "시나몬 와플",
  "컵케이크",
  "다쿠아즈",
  "던킨 도넛",
  "크리스피 크림 도넛",
  "마카롱",
  "붕어빵",
  "타코야끼",
  "탕후루",
  "달고나",
  "새콤달콤",
  "껌",
  "생 초콜릿",
  "박하사탕",
  "사탕",
  "델리 만쥬",
  "반건조 오징어",
  "맥반석 오징어",
  "과자",
  "양파링",
  "고구마깡",
  "꼬북칩",
  "버터링 쿠키",
  "새우깡",
  "감자깡",
  "벌집핏자(과자)",
  "야채타임(과자)",
  "죠리퐁",
  "꼬깔콘",
  "꽃게랑",
  "쟈키쟈키(과자)",
  "콘칩",
  "뻥이요(과자)",
  "포스틱(과자)",
  "포테토칩",
  "허니 버터칩",
  "콘치(과자)",
  "카라멜땅콩(과자)",
  "칙촉",
  "촉촉한초코칩",
  "짱구(과자)",
  "초코하임",
  "쿠쿠다스",
  "쌀로별(과자)",
  "미쯔(과자)",
  "홈런볼",
  "스윙칩(과자)",
  "웨하스(과자)",
  "꿀꽈배기",
  "오사쯔(과자)",
  "와클(과자)",
  "츄러스",
  "조청유과(과자)",
  "빼뺴로",
  "칸쵸(과자)",
  "썬칩(과자)",
  "브라우니",
  "맛동산",
  "바나나킥(과자)",
  "나쵸",
  "오징어 땅콩(과자)",
  "꾸이맨",
  "쫀디기(아이스크림할인점)",
  "밭두렁(아이스크림 할인점)",
  "아이셔",
  "스콘",
  "말차 스콘",
  "초코칩 스콘",
  "오레오 스콘",
  "앙버터스콘",
  "무화과 스콘",
  "수박",
  "토마토",
  "사과",
  "배",
  "딸기",
  "귤",
  "오렌지",
  "샤인머스켓",
  "포도",
  "바밤바(아이스크림)",
  "탱크보이(아이스크림)",
  "죠스바(아이스크림)",
  "스크류바(아이스크림)",
  "뽕따(아이스크림)",
  "토마토마(아이스크림)",
  "초코퍼지(아이스크림)",
  "돼지바(아이스크림)",
  "폴라포(아이스크림)",
  "비비빅(아이스크림)",
  "수박바(아이스크림)",
  "쿠앤크(아이스크림)",
  "요맘때(아이스크림)",
  "체리마루(아이스크림)",
  "호두마루(아이스크림)",
  "붕어 싸만코(아이스크림)",
  "월드콘(아이스크림)",
  "구구콘(아이스크림)",
  "브라보콘(아이스크림)",
  "누가바(아이스크림)",
  "메로나(아이스크림)",
  "캔디바(아이스크림)",
  "소프트콘(아이스크림)",
  "찰떡아이스(아이스크림)",
  "쌍쌍바(아이스크림)",
  "녹차마루(아이스크림)",
  "빠삐코(아이스크림)",
  "와일드바디(아이스크림)",
  "보석바(아이스크림)",
  "아맛나(아이스크림)",
  "생귤탱귤(아이스크림)",
  "메가톤바(아이스크림)",
  "설레임(아이스크림)",
  "빵빠레(아이스크림)",
  "와(아이스크림)",
  "더블비얀코(아이스크림)",
  "에그 타르트",
  "바나나 푸딩",
  "초코 푸딩",
  "황치즈 휘낭시에",
  "초코 휘낭시에",
  "머랭쿠키",
  "프레즐",
  "에클레어",
  "호두파이",
  "커스터드 푸딩",
  "우유 푸딩",
  "단호박 타르트",
  "무화과 타르트",
  "치즈 타르트",
  "블루베리 타르트",
  "사과 타르트",
  "피칸 타르트",
  "꽈베기",
  "애플파이",
  "티라미수 케이크",
  "당근 케이크",
  "오레오 케이크",
  "고구마 케이크",
  "초코 쿠키",
  "로투스 쿠키",
  "크렘브륄레",
  "말차갸또쇼콜라",
  "레몬 파운드 케이크",
  "치즈 케이크",
  "초코 케이크",
  "스모어 쿠키",
  "레드벨벳 케이크",
  "빨미까레",
  "꿀빵",
  "파르페",
  "쥐포",
  "마이쮸",
  "고구마 스틱",
  "약과",
  "누룽지",
  "꾀돌이(과자)",
  "브이콘(과자)",
  "동결건조 야채믹스칩",
  "큐브 치즈",
  "볶음 땅콩",
  "견과류",
  "소떡소떡",
  "참치 크래커",
  "라면",
  "하리보 젤리",
  "포장마차 어묵",
  "녹차 브라우니",
  "치즈 브라우니",
  "치즈 수플레",
  "카스테라",
  "모카 롤케이크",
  "양갱",
  "옛날 전병",
  "녹차 카스테라",
  "클래식 딸기잼 롤케이크",
  "커피번",
  "마늘 바게트",
  "오렌지 머핀",
  "초코 머핀",
  "마들렌",
  "오란다",
  "크로와상",
  "수제 초코파이",
  "닭꼬치",
  "콜팝",
  "회오리 감자",
  "명랑 핫도그",
  "옥수수",
  "아메리카노",
  "카페라떼",
  "에스프레소",
  "바닐라 라떼",
  "흑당버블티",
  "아인슈페너",
  "초코라떼",
  "녹차 라떼",
  "고구마 라떼",
  "얼그레이(차)",
  "쌍화차",
  "케모마일(차)",
  "히비스커스(차)",
  "페퍼민트(차)",
  "유자차",
  "율무차",
  "수박쥬스",
  "오렌지 쥬스",
  "딸기 쥬스",
  "포도 쥬스",
  "바나나 쥬스",
  "레모네이드",
  "블루 레모네이드",
  "자몽에이드",
  "청포도 에이드",
  "체리 에이드",
  "복숭아 에이드",
  "플레인 요거트 스무디",
  "블루베리 요거트 스무디",
  "딸기 요거트 스무디",
  "망고 요거트 스무디",
  "딸기 스무디",
  "블루베리 스무디",
  "쿠앤크 스무디",
  "말차 우유",
  "달고나 라떼",
  "흑임자 라떼",
  "복숭아 아이스 티",
  "레몬 아이스티",
  "카페모카",
  "카라멜 마끼아또",
  "헤이즐넛 라떼",
  "연유라떼",
  "콜드브루",
  "민트초코 프라페",
  "모카 칩 프라페",
  "카라멜 프라페",
  "밀크티",
  "슬러시",
  "믹스커피",
  "돌체라떼",
  "토마토 쥬스",
  "밀크쉐이크",
  "패션 후르츠 에이드",
  "뱅쇼",
  "샹그리아",
];

let f_a = "";

function saveFeel() {
  localStorage.setItem("Feel", JSON.stringify(f_a));
}

function getListB() {
  const selectList = document.getElementsByName("chk_f");
  selectList.forEach((node) => {
    if (node.checked) {
      if (node.value === "F_GOOD") {
        f_a = F_GOOD;
      }
      if (node.value === "F_SAD") {
        f_a = F_SAD;
      }
      if (node.value === "F_ANG") {
        f_a = F_ANG;
      }
      if (node.value === "F_HAP") {
        f_a = F_HAP;
      }
    }
  });
}

function feelSubmit(event) {
  saveFeel();
}
feelFrom.addEventListener("submit", feelSubmit);
