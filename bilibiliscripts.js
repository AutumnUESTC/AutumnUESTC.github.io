$(document).ready(function() {
  // 初始状态下隐藏所有的更多信息
  $(".card-text").hide();

  $(".nav-item").hover(function() {
      $(this).addClass("active");
  }, function() {
      $(this).removeClass("active");
  });


  // 鼠标悬停在视频卡片上时，显示更多信息
  $(".card").hover(function() {
      $(this).find(".card-text").show();
  }, function() {
      $(this).find(".card-text").hide();
  });

  $('.modal').on('hidden.bs.modal', function (e) {
      $(this).remove();
  })
});