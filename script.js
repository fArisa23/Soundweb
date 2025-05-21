//画像切り替え
const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade", // フェード切り替え
    // 自動再生
    autoplay: {
      delay: 4000, // 4秒後に次のスライドへ
      disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
    },
    speed: 2000, // 2秒かけてフェード
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



function slideAnime(){
  //====上に動くアニメーションここから===
    $('.upAnime').each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            // 上から下へ表示するクラスを付与
            // テキスト要素を挟む親要素（上）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeUpDown");
            // 要素を上枠外に移動しCSS アニメーションで上から元の位置に移動
            $(this).children(".upAnimeInner").addClass("slideAnimeDownUp");
            // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
            }else{
            // 上から下へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeUpDown");
            $(this).children(".upAnimeInner").removeClass("slideAnimeDownUp");
            }
            });

            //====下に動くアニメーションここから===
    $('.downAnime').each(function(){
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      // 下から上へ表示するクラスを付与
      // テキスト要素を挟む親要素（下）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeDownUp");
      // 要素を下枠外に移動しCSS アニメーションで下から元の位置に移動
      $(this).children(".downAnimeInner").addClass("slideAnimeUpDown");
      // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
      }else{
      // 下から上へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeDownUp");
      $(this).children(".downAnimeInner").removeClass("slideAnimeUpDown");
      }
  });

  //====右に動くアニメーションここから===
  $('.rightAnime').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    // 右から左へ表示するクラスを付与
    // テキスト要素を挟む親要素（右側）とテキスト要素を元位置でアニメーションをおこなう
    $(this).addClass("slideAnimeRightLeft ");
    // 要素を右枠外にへ移動しCSS アニメーションで右から元の位置に移動
    $(this).children(".rightAnimeInner").addClass("slideAnimeLeftRight");
    // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    }else{
    // 右から左へ表示するクラスを取り除く
    $(this).removeClass("slideAnimeRightLeft ");
    $(this).children(".rightAnimeInner").removeClass("slideAnimeLeftRight");
    }
    });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


  
    //ハンバーガーメニュー
    let nav = document.querySelector("#navArea");
    let btn = document.querySelector(".toggle-btn");
    let mask = document.querySelector("#mask");
    
    //メニューを開けるコマンド
    btn.onclick = () => {
        nav.classList.toggle("open");
    };
    
    //メニューを閉めるコマンド
    mask.onclick = () => {
        nav.classList.toggle("open");
    };
    
