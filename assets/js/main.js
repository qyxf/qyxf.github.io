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

var computeNavigationBar = function() {
  var navBarHeight = $("#nav-wrapper").height() - $("#toc").height() - 10;
  $("#nav-bar").height(navBarHeight);
}

$(window).resize(sectionHeight);
$(window).resize(computeNavigationBar);

$(function() {

  $("section h1, section h2, section h3").each(function(){
    if ($(this).prop("tagName") == "H1"){
      $("nav ul").append("<li class='tag-" + this.nodeName + "'><a href='#" + $(this).text().replace(/[\s\.\(\):&+]/g, '-').replace(/-+/g, '-') + "'><strong>" + $(this).text() + "</strong></a></li>");
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

  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  $("#nav-wrapper").mouseover(function(){
    $("#nav-bar").css("width", "100%");
    $("nav").css("margin-right", "unset");
  });

  $("#nav-wrapper").mouseout(function(){
    $("#nav-bar").css("width", "120%");
    $("nav").css("margin-right", "20%");
  });

  sectionHeight();
  computeNavigationBar();

  if($("nav").css("height")<$("#nav-wrapper").css("height"))
  {
    $("#nav-wrapper").css("height", "auto");
    $("#nav-bar").css("overflow: x", "hidden");
  }


  $('img').on('load', sectionHeight);
});