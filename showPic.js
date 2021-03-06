// window.onload = prepareGallery;
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);


function showPic(whichpic){
    if(!document.getElementById("placeholder"))return true;
    
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    if(!document.getElementById("description")) return false;

    if(whichpic.getAttribute("title")){
        var text = whichpic.getAttribute("title");
    } else {
        var text = "No Title";
    }

    if(placeholder.nodeName != "IMG") return true;

    var description = document.getElementById("description");

    if(description.firstChild.nodeType == 3){
        description.firstChild.nodeValue = text;
    }

    // alert(description.nodeValue);
    // alert(description.childNodes[0].nodeValue);
    // alert(description.firstChild.nodeValue);
    description.firstChild.nodeValue = text;
    return false;
}

function prepareGallery() {
    if(!document.getElementsByTagName){
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("imagegallery")){
        return false;
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            return showPic(this);
            return false;
        }
    }
}

function preparePlaceholder(){
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src","../images/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);

    var gallery = document.getElementById("imagegallery");
    gallery.parentNode.insertBefore(placeholder, gallery);
    gallery.parentNode.insertBefore(description, gallery);
}

