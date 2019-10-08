$(function() {
    $("code").each(function() {
      if(this.innerText != null && this.innerText.match(/\S*\d{2,3}\S*/))
      {
        var label = /\S*\d{2,3}/.exec(this.innerText);
        var message = /\d{2,3}\S*/.exec(this.innerText);
        message = message.toString().replace(/[-\d]/g,'');
        var labelColor = "";
        var classList = new Array(/钱/, /少/, /宗濂/, /越杰/, /数\S*试/, /物\S*试/, /化\S*生/, /计\S*试/, /人\S*试/);
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
});
