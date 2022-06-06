$(document).ready(function () {
    $('.plan-list-btn').click(function(e) {
        e.preventDefault();
        $(this).parent().siblings().find('a').removeClass('plan-list-btn-active');
        $(this).toggleClass('plan-list-btn-active');
        // 訂閱用戶數
        let num = $(this).text().slice(0, -1);
        let ele = $(".num").children()[0];
        $(".num").text(num).append(ele);

        // 試算每月的費用
        let pay_ele = $(".pay").children()[0];// 基本版
        let pay_ele2 = $(".pay-st").children()[0];// 標準版
        let pay = $(this)[0].dataset.pay;
        $(".pay").text(pay).append(pay_ele);
        $(".pay-st").text(pay).append(pay_ele2);
    });

    // qa
    $(".qa-question").click(function(e) {
      e.preventDefault();
      $(this).children('.plus').toggle();
      $(this).children('.minus').toggle();
      $(this).siblings().slideToggle('normal');
      $(this).children('h3').toggleClass('active');
    });
});

function goTop() {
    $('html, body').animate({scrollTop:0}, 'slow');
}
