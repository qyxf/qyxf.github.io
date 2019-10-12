var sectionHeight = function() {
  var total = $(window).height(), $section = $('section').css('height', 'auto');
  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

var navHide = function() {
  $("#nav-bar").css({ "height": "0", "opacity": "0", "visibility": "hidden",
                      "overflow-y": "hidden" });
  $("#nav-wrapper").css({ "width": "25px", "height": "50px" });
  $("#toc").css({ "padding": "1px", "border-bottom": "0px", "height": "48px",
                  "flex-direction": "column", "animation": "blink 0.5s" });
}

var navShow = function() {
  $("#nav-bar").css({ "overflow-y": "auto", "height": "250px", "color": "#ccc",
                      "visibility": "visible", "opacity": "1" });
  $("#nav-wrapper").css({ "width": "250px", "height": "280px" });
  $("#toc").css({ "padding": "5px", "border-bottom": "1px solid #111", "height": "20px",
                  "flex-direction": "row", "animation": "blinkback 0.5s" });
}

$(window).resize(sectionHeight);

$(function() {
  navHide();
  $("#nav-wrapper").css("display", "block");

  $(".footnotes ol").prepend("<h2>注释</h2>");
  $("section h1").after("<hr class='heading'>");
  pangu.spacingPage();

  $("nav ul").append("<li class='tag-H2'><a href='#'><i class='fa fa-home'></i> 返回顶部</a></li>");
  $("section h2, section h3, section h4").each(function(){
    var unallowedCharacters = /[\s\.\(\):&+]/g;
    if ($(this).prop("tagName") == "H2"){
      $("nav ul").append("<li class='tag-" + this.nodeName + "'><a href='#" +
      $(this).text().replace(unallowedCharacters, '-').replace(/-+/g, '-') + "'>" +
      $(this).text() + "</a></li>");
    }
    else if ($(this).prop("tagName") == "H3"){
      $("nav ul").append("<li class='tag-" + this.nodeName + "'>　<a href='#" +
      $(this).text().replace(unallowedCharacters, '-').replace(/-+/g, '-') + "'>" +
      $(this).text() + "</a></li>");
    }
    else{
      $("nav ul").append("<li class='tag-" + this.nodeName + "'>　　<a href='#" +
      $(this).text().replace(unallowedCharacters, '-').replace(/-+/g, '-') + "'>" +
      $(this).text() + "</a></li>");
    }
    $(this).attr("id",$(this).text().replace(unallowedCharacters, '-').replace(/-+/g, '-'));
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("#nav-wrapper").mouseleave(navHide);
  $("#nav-wrapper").mouseover(navShow);

  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  if($("#gitalk-container").length > 0)  // prevent error informed by browser
  {
    const gitalk = new Gitalk({
      clientID: 'c3149c4a0948a89e7d30',
      clientSecret: '133aec412b403bc7f78acda479782e8e317d7e0a',
      repo: 'qyxf.github.io',
      owner: 'qyxf',
      admin: ['xjtu-blacksmith'],
      id: location.pathname,      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    })
    gitalk.render('gitalk-container')
  }

  $('img').on('load', sectionHeight);
});
