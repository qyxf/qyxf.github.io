$(function() {
    $("p > code, li > code, span > code").each(function() {
      // 匹配示例：ACCA61王敏、3D打印钱71张三丰、能动少C71诸葛孔明（暂不检测外文名）
      if(this.innerText != null && this.innerText.match(/[\u4e00-\u9fa5A-D3]{1,5}\d{2,3}[\u4e00-\u9fa5]{2,4}/))
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
