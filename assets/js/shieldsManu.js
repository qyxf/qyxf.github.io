$(function() {
    $("img[src='shield']").each(function()
    {
        $(this).attr("src", "https://img.shields.io/badge/" + $(this).attr("alt"));
    });

    $("img[src='person']").each(function()
    {
        var label = /\S*\d{2,3}/.exec($(this).attr("alt"));
        var message = /\d{2,3}-?\S*/.exec($(this).attr("alt"));
        message = message.toString().replace(/[-\d]/g,'');
        var labelColor = "";
        if(/钱/.test(label)){ labelColor = "yellow"; }
        else if(/少/.test(label)){ labelColor = "red"; }
        else if(/宗濂/.test(label)){ labelColor = "violet"; }
        else if(/越杰/.test(label)){ labelColor = "brightgreen"; }
        else if(/数\S*试/.test(label)){ labelColor = "lightblue"; }
        else if(/物\S*试/.test(label)){ labelColor = "blue"; }
        else if(/化\S*生/.test(label)){ labelColor = "blueviolet"; }
        else if(/计\S*试/.test(label)){ labelColor = "orange"; }
        else if(/人\S*试/.test(label)){ labelColor = "silver"; }
        else { labelColor = "grey"; }
        $(this).attr("src", "https://img.shields.io/badge/" + label + "-" + message + "-grey?labelColor=" + labelColor);
        var name_ref = /@\S*/.exec($(this).parent().attr("href"));
        if(name_ref != null && name_ref != "@"){
            $(this).parent().attr("href", "https://github.com/" + name_ref.toString().replace(/@/, ''));
        }
    });

    $("[src*='img\.shields\.io']").css({
      "display": "unset",
      "vertical-align": "text-bottom",
      "padding": "0 2px 0 2px"
    });
});