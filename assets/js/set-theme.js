// 切换主题功能的实现
function checkTheme() {
  theme = $.cookie("theme");
  if (theme == undefined) {
    $.cookie("theme", "white", { expires: 7, path: "/" });
  } else {
    if (theme == "black") {
      $(".mdui-color-white").addClass("mdui-color-grey-900");
      $(".mdui-color-grey-900").removeClass("mdui-color-white");
      $("#theme-btn").prop("checked", true);
    } else {
      $(".mdui-color-grey-900").addClass("mdui-color-white");
      $(".mdui-color-white").removeClass("mdui-color-grey-900");
      $("#theme-btn").prop("checked", false);
    }
  }
}
checkTheme()
$("#theme-btn").on('click', function() {
  if ($(this).is(":checked")) {
    $.cookie("theme", "black", { expires: 7, path: "/" });
    checkTheme();
  } else {
    $.cookie("theme", "white", { expires: 7, path: "/" });
    checkTheme();
  }
});