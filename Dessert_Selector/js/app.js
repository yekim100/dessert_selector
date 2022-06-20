function shareTwitter() {
  var sendText =
    "밥 뭐먹을지 고민될땐? 기분,날씨 등 상황에 따른 맞춤형 랜덤 밥 메뉴 고르기!"; // 전달할 텍스트
  var sendUrl = "https://random-menu-selector.netlify.app/"; // 전달할 URL
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
}

function shareFacebook() {
  var sendUrl = "https://random-menu-selector.netlify.app/"; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

function shareKakao() {
  // 사용할 앱의 JavaScript 키 설정
  Kakao.init("4c1acdcfcea833e5f5200aeea1b576cb");

  // 카카오링크 버튼 생성
  Kakao.Link.createDefaultButton({
    container: "#btnKakao", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "밥 뭐먹지?", // 보여질 제목
      description:
        "밥 뭐먹을지 고민될땐? 기분,날씨 등 상황에 따른 맞춤형 랜덤 밥 메뉴 고르기!", // 보여질 설명
      imageUrl:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/313/cooked-rice_1f35a.png",
      link: {
        mobileWebUrl: "https://random-menu-selector.netlify.app/", // 콘텐츠 URL
        webUrl: "https://random-menu-selector.netlify.app/",
      },
    },
  });
}
