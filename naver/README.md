# NAVER 사이트 클론코딩
프로젝트 시작 날짜 : 2024. 2. 26.~</br>

프론트엔드를 공부하면서 내가 가장 많이 이용하는 `naver`사이트를 클론코딩하기로 했다. 먼저 `html`, `css`, `js`로 구현할 수 있는 부분들은 최대한 구현해보고 후에 배울 기술들을 추가로 적용할 예정이고, 코드 재사용성을 고려해서 최종적으로 구현해 볼 생각이다.

엄청 디테일한 부분은 제쳐두고 먼저 구현해야 할 중요 기능들을 중점적으로 구현해보려고 노력했다. 


## 1. Header
  ![hover](/readmd/3.png)<br>
  먼저 header부분이다. `nav-bar`, `검색창`, `바로가기 아이콘`등을 구현해야 했다. 버튼 아이콘은 `font awesome`에서 최대한 비슷한 것으로 구현했다.

## nav bar
먼저 기본적인 배치는 `display : flex`를 이용했다. 아이콘 4개와 중간에 `div`태그를 하나 넣어서 `flex-grow : 1` 속성을 주고 간격을 유지했다.


nav bar에서 구현해야 할 기능들이 몇 가지 있었는데
## icon `hover` 
 
 icon을 hover했을 때 `hidden` 된 `div` 태그를 보이게 하는 것으로 구현했고, `border radius`도 주어 배경색깔이 보이도록 하였다.

  ![hover](/readmd/1.png)<br><br>
  container로 버튼을 감싸고 hover했을 때 버튼에 `border`를 활성화시켰다.

  ```html

  ```



 - `click` 했을 때, 숨겨졌던 `div` 출력<br><br>
   ![hover](/readmd/2.png)


2) 검색창
