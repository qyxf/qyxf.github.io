var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

var navHide = function() {
  $("#nav-bar").css("height", "0");
  $("#nav-bar").css("opacity", "0");
  $("#nav-bar").css("visibility", "hidden")
  $("#nav-bar").css("overflow-y", "hidden");
  $("#nav-wrapper").css("width", "25px");
  $("#nav-wrapper").css("height", "50px");
  $("#toc").css("padding", "1px");
  $("#toc").css("border-bottom", "0px");
  $("#toc").css("height", "48px");
  $("#toc").css("flex-direction", "column");
  $("#toc").css("animation", "blink 0.5s");
}


$(window).resize(sectionHeight);

$(function() {

  navHide();
  $("#nav-wrapper").css("display", "block");

  $("section h1, section h2, section h3").each(function(){
    if ($(this).prop("tagName") == "H1"){
      $("nav ul").append("<li class='tag-" + this.nodeName + "'><a href='#" + $(this).text().replace(/[\s\.\(\):&+]/g, '-').replace(/-+/g, '-') + "'>" + $(this).text() + "</a></li>");
    }
    else if ($(this).prop("tagName") == "H2"){
      $("nav ul").append("<li class='tag-" + this.nodeName + "'>　<a href='#" + $(this).text().replace(/[\s\.\(\):&+]/g, '-').replace(/-+/g, '-') + "'>" + $(this).text() + "</a></li>");      
    }
    else{
      $("nav ul").append("<li class='tag-" + this.nodeName + "'>　　<a href='#" + $(this).text().replace(/[\s\.\(\):&+]/g, '-').replace(/-+/g, '-') + "'>" + $(this).text() + "</a></li>");
    }
    $(this).attr("id",$(this).text().replace(/[\s\.\(\):&+]/g, '-').replace(/-+/g, '-'));
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("#nav-wrapper").mouseleave(navHide);

  $("#nav-wrapper").mouseover(function()
  {
    $("#nav-bar").css("overflow-y", "auto");
    $("#nav-bar").css("height", "250px");
    $("#nav-wrapper").css("width", "250px");
    $("#nav-wrapper").css("height", "280px");
    $("#toc").css("padding", "5px");
    $("#toc").css("border-bottom", "1px solid #111");
    $("#toc").css("height", "20px");
    $("#toc").css("flex-direction", "row");
    $("#toc").css("animation", "blinkback 0.5s");
    $("#nav-bar").css("color", "#ccc");
    $("#nav-bar").css("visibility", "visible");
    $("#nav-bar").css("opacity", "1");
  });

  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top;
    $("html, body").animate({scrollTop: position}, 750);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });
  
  sectionHeight();
  navHide();

  $('img').on('load', sectionHeight);
});