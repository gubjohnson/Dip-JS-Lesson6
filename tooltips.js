window.onload = Tooltips;


function Tooltips(){
    var links = document.getElementsByTagName("a");

    //loop though all the links
    for(var i = 0; i<links.length; i++){
        var title = links[i].getAttribute("title");

        //if title assign set up event listeners
        if (title && title.length > 0){
            //show rich tooltip
            links[i].onmouseover = showTipListener;

            //hide rich tooltip
            links[i].onmouseout = hideTipListener;
        }
    }
}

function showTip(link){
    var tip = document.createElement("span");
    tip.className = "tooltip";
    var tiptext = document.createTextNode(link.getAttribute("title"));
    tip.appendChild(tiptext);
    link.appendChild(tip);
    link.tooltip = tip;
    link.title = "";
}

function hideTip(link){
    if(link.tooltip){
        link.title = link.tooltip.childNodes[0].nodeValue;
        link.removeChild(link.tooltip);
        link.tooltip = null;
    }
}

function showTipListener(event){
    var link = this;
    this.timer = setTimeout(function(){
        showTip(link);
    },250);
    return false;
}

function hideTipListener(event){
    clearTimeout(this.timer);
    hideTip(this);
}

