$(function() {
  $("li blockquote").before("<answer-button><strong>点我看答案</strong></answer-button>");
  $("li blockquote").css("display", "none");
  $("answer-button").on("click", function() {
      $(this).next().css("display", "block")
      $(this).css("display", "none")
  })
  $("li blockquote").on("click", function() {
      $(this).prev().css("display", "flex")
      $(this).css("display", "none")
  })
})
