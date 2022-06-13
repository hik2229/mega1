const swiper1 = new Swiper('.swiper-container1', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// ------------- movie
const swiper2 = new Swiper('.swiper-container2', {
  //const는 같은 변수명이 또 있으면 오류뜸 so, 2붙여서 수정
  // Optional parameters
  // loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1.4,
      spaceBetween: 24
    },
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    // 뷰포터의 넓이 >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    // 뷰포터의 넓이 >= 960px
    960: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});


//movie tab menu
var movBtn = $('.movie .movie_title ul li');
var movCont = $('.movie_chart>div');

movCont.hide().eq(0).show();

movBtn.click(function(e){
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  console.log(index);
  movCont.hide().eq(index).show();
  movBtn.removeClass('active').show();//모든 li에 active 지우기
  target.addClass('active').show();
})

/* 공지사항 tab menu */
var tabMenu = $('.notice');

tabMenu.find('ul>li>ul').hide();
tabMenu.find('ul>li.active>ul').show();

tabMenu.find('ul>li>a').click(function(e){
  e.preventDefault();
  var target = $(this);
  //next() 나의 바로 아래요소 // +
  //nextAll() 나의 아래요소'들' // ~
  tabMenu.find('ul>li>a').next().hide(); //내가 클릭한 아래 동생만 보여라
  target.next().show();

  tabMenu.find('ul>li').removeClass('active');
  //.parent() 바로 위 상위요소
  //.parents() 상위요소'들'
  target.parent('li').addClass('active');


})