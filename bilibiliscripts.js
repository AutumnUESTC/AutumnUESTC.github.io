$(document).ready(function() {
    $(".nav-item").hover(function() {
        $(this).addClass("active"); //鼠标悬停时添加"active"类
    }, function() {
        $(this).removeClass("active"); //鼠标移开时移除"active"类
    });

    //鼠标悬停在视频卡片上时,显示更多信息
    $(".card").hover(function() {
        $(this).find(".card-text").show(); //显示描述
    }, function() {
        $(this).find(".card-text").hide(); //隐藏描述
    });
  

    // 点击视频卡片以在模态窗口中播放视频
    $(".card").on("click", function() {
        var videoUrl = "Madonna.mp4"; 
        var videoTitle = $(this).find(".card-title").text();

        //创建模态内容
        var modalHtml = `
            <div class="modal" tabindex="-1">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">${videoTitle}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <video controls width="100%">
                      <source src="${videoUrl}" type="video/mp4">
                      您的浏览器不支持HTML5视频。
                    </video>
                  </div>
                </div>
              </div>
            </div>`;

        //添加到body并显示模态
        $("body").append(modalHtml);
        $(".modal").modal('show');

        //当模态关闭时移除它
        $('.modal').on('hidden.bs.modal', function (e) {
            $(this).remove();
        })
    });
});