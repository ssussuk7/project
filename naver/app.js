
$('.headerDiv').click(function (e) { 
  $('.detail').css('display','block')
});

let translateDiv = $('.translateDiv');

let data = [
  `<p>한국 선적 수송선, 일본 혼슈 앞바다서 전복</p>`,
  `<p>의대 2천명 증원 쐐기</p>`,
  `<p>퀴어축제, 올해는 서울광장서 열릴까</p>`,
  `<p>한동훈, 황상무 사퇴 이종섭 귀국에 오늘 다 해결됐다.</p>`,
  `<p>복지장관 "협상 위해 미래 희생 못해..".</p>`,
  `<p>핀란드 세계 행복순위 7년연속 1위</p>`,
  `<p>전공의 복귀 설득했다. 교슈 사진 실명공개</p>`,
]

let count = 0;

data.map((val, num) => {
  translateDiv.append(val);
})

setInterval(() => {
  translateDiv.css('transform',`translateY(${-(count++ * 30)-6}px)`)
  if(count == data.length){
      count=0;
  }
},5000)


var sportsItem = [
  `<a href="https://m.sports.naver.com/game/20240321020M254" target="_blank" class="sports_item">
      <p class ="title">프로배구</p>
      <div class = "main">
          <div class = "left">
              <img class = "img" src="https://sports-phinf.pstatic.net/team/kovo/default/1008.png">
              <p class="team">OK금융그룹</p>
          </div>
          <div class = "middle">
              <p class = "vs">vs</p>
              <p class = "time">19:00예정</p>
          </div>
          <div class = "right">
              <img class = "img" src="https://sports-phinf.pstatic.net/team/kovo/default/1005.png">
              <p class="team">현대캐피탈</p>
          </div>
      </div>
  </a>`,

  `<a href="https://m.sports.naver.com/game/2024032155164301251" target="_blank" class="sports_item">
      <p class ="title">KBL</p>
      <div class = "main">
          <div class = "left">
              <img class = "img" src="https://sports-phinf.pstatic.net/team/kbl/default/55.png">
              <p class="team">서울 SK</p>
          </div>
          <div class = "middle">
              <p class = "vs">vs</p>
              <p class = "time">19:00예정</p>
          </div>
          <div class = "right">
              <img class = "img" src="https://sports-phinf.pstatic.net/team/kbl/default/16.png">
              <p class="team">원주DB</p>
          </div>
      </div>
  </a>`,

  `<a href="https://m.sports.naver.com/game/20240321BADUK1" target="_blank" class="sports_item">
      <p class ="title">바둑</p>
      <p class = "time">19:00예정</p>
      <h2 class = "content">2023~2024KB국민은행 바둑리그</h2>
  </a>`,

  `<a href="https://m.sports.naver.com/game/20240321KOVO1" target="_blank" class="sports_item">
      <p class ="title">배구</p>
      <p class = "time">19:00예정</p>
      <h2 class = "content">2023~2024 스폐셜 V</h2>
  </a>`,

  `<a href="https://m.sports.naver.com/game/2024032130842590755" target="_blank" class="sports_item">
      <p class ="title">월드컵 아시아 예선</p>
      <div class = "main">
          <div class = "left">
              <img class = "img" src="https://sports-phinf.pstatic.net/team/wfootball/default/23120.png">
              <p class="team">대한민국</p>
          </div>
          <div class = "middle">
              <p class = "vs">vs</p>
              <p class = "time">19:00예정</p>
          </div>
          <div class = "right">
              <img class = "img" src="https://sports-phinf.pstatic.net/team/wfootball/default/4730.png">
              <p class="team">태국</p>
          </div>
      </div>
  </a>`,
  `<a href="https://m.sports.naver.com/game/20240321BADUK3" target="_blank" class="sports_item">
      <p class ="title">바둑</p>
      <p class = "time">19:00예정</p>
      <h2 class = "content">제17기 YES24배 바둑대전</h2>
  </a>`,
]

var sportsCount = 0;

sportsItem.map((val,num) => {
  $('.container').append(val)
  $('.sports_item').eq(num).css('top','0');
  $('.sports_item').eq(num).css('left',`${(280 * num)}px`);
})

$('.sports_item').on('mousewheel',(e) => {
  var wheel = e.originalEvent.wheelDelta;
  e.preventDefault()
  

  if(wheel<0){
      if(sportsCount > -(sportsItem.length)){
          sportsCount--;
          $('.container').css('transform', `translateX(${(sportsCount * 150)}px)`)
      }
  }
  else if(wheel > 0){
      if(sportsCount < 0 ){
          sportsCount++;
          $('.container').css('transform', `translateX(${(sportsCount * 150)}px)`)
      }
  }
})
