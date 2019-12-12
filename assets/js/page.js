var $$ = mdui.JQ;

// source: https://eriri.ink/archives/build-a-toc-for-an-article.html
var headerEl = 'h2, h3, h4',  //headers
    content = '.js-toc-content',//文章容器
    idArr = {};  //标题数组以确定是否增加索引id
//add #id
$(content).children(headerEl).each(function () {
    //去除空格以及多余标点
    var headerId = $(this).text().replace(/[\s|\~|`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\=|\||\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\：|\，|\。]/g, '');
    headerId = headerId.toLowerCase();
    if (idArr[headerId]) {
        //id已经存在
        $(this).attr('id', headerId + '-' + idArr[headerId]);
        idArr[headerId]++;
    }
    else {
        //id未存在
        idArr[headerId] = 1;
        $(this).attr('id', headerId);
    }
});

tocbot.init({
  // Where to render the table of contents.
  tocSelector: '.js-toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: '.js-toc-content',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h2, h3, h4',
  ignoreSelector: '.js-toc-ignore',
  scrollSmooth: true,
  hasInnerContainers: true,
  headingsOffset: 80
});

pangu.spacingPage();

$('#drawer-toc-btn').click(function(){
  $('#main-toc').append($('.js-toc'));
})


$$('article.mdui-typo p > img').addClass("mdui-center mdui-shadow-4 mdui-m-a-1");
$$('article h1').addClass("mdui-ripple");
$$('article blockquote').addClass("mdui-text-color-black-secondary");
$$('article table').addClass("mdui-table");
$$('.footnotes').addClass("mdui-card mdui-p-a-2 mdui-m-a-1");
$$('.footnotes').prepend('<div class="mdui-card-primary"> \
                         <div class="mdui-card-title mdui-typo-title"> \
                         注释 </div> </div>');
$$('fig-cap, tab-cap').addClass("mdui-center mdui-text-center mdui-m-t-0 mdui-m-b-4");

$('.js-toc:empty').append('<span class="mdui-center"> 没有条目哦... </span>');
$('main').css('min-height', $(window).height() - 136);

// source: https://www.ihewro.com/archives/523/
$('a.reversefootnote').click(function() {
    var target = document.getElementById(this.hash.slice(1));
    if (!target) return;
    var targetOffset = $(target).offset().top - 70;
    $('html,body').animate({
        scrollTop: targetOffset
    }, 300);
    return false;
});
$('article sup a').click(function() {
    var target = document.getElementById(this.hash.slice(1));
    if (!target) return;
    var targetOffset = $(target).offset().top;
    $('html,body').animate({
        scrollTop: targetOffset
    }, 300);
    return false;
});

$("#theme-btn").click(function() {
    if($(this).is(":checked")) {
      $$('.mdui-color-white').addClass('mdui-color-grey-900');
      $$('.mdui-color-grey-900').removeClass('mdui-color-white');
    }
    else {
      $$('.mdui-color-grey-900').addClass('mdui-color-white');
      $$('.mdui-color-white').removeClass('mdui-color-grey-900');
    }
});

// shieldsMenu.js here
$("p > code, li > code, span > code").each(function() {
  // 匹配示例：ACCA61王敏、3D打印钱71张三丰、能动少C71诸葛孔明（暂不检测外文名）
  if(this.innerText != null && this.innerText.match(/[\u4e00-\u9fa5A-D3]{1,5}\d{2,3}[\u4e00-\u9fa5]{2,4}/))
  {
    var label = /\S*\d{2,3}/.exec(this.innerText);
    var message = /\d{2,3}\S*/.exec(this.innerText);
    message = message.toString().replace(/[-\d]/g,'');
    var labelColor = "";
    var classList = new Array(/钱/, /少/, /宗濂/, /越杰/, /数\S*试/, /物\S*试/, /化\S*生/, /计\S*试/, /人\S*[试智]/);
    var classNameList = new Array("qian", "shao", "zonglian", "yuejie", "shushi", "wushi", "huasheng", "jishi", "renshi")
    var className = "other";
    for(var i = 0; i < classList.length; i++)
    {
      if(classList[i].test(label))
      {
        className = classNameList[i];
        break;
      }
    }
    var badgeItem = "<span class='badge'><span class='badge-label badge-" + className + "'>" + label + "</span><span class='badge-message'>" + message + "</span></span>";
    $(this).replaceWith(badgeItem);
  }
})

$$('span.badge').addClass("mdui-ripple");
