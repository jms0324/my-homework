function LoadNAVBAR(){
    const allElements = document.getElementsByTagName('*');

            //document tag로 선언한 html요소를 찾아서 allelements에 부여해줌
       //d우리는 navbar.html을 태그로 지정해서 여기에 대입할거임
    //*로 표시하면 html파일 전체의 요소
    for(var i=0;i<allElements.length;i++) {
        var el = allElements[i];
        var navpath = el.getAttribute("nav-include-path");
        if (navpath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.innerHTML = this.responseText;
                    el.removeAttribute("nav-include-path");
                    LoadNAVBAR();
                }
            }
            xhttp.open("GET", navpath, true);
            xhttp.send();
            return;
        }
    }



}

function LoadFOOTER(){
    const allElements = document.getElementsByTagName('*');

    //document tag로 선언한 html요소를 찾아서 allelements에 부여해줌
    //d우리는 navbar.html을 태그로 지정해서 여기에 대입할거임
    //*로 표시하면 html파일 전체의 요소
    for(var i=0;i<allElements.length;i++) {
        var el = allElements[i];
        var footpath = el.getAttribute("foot-include-path");
        if (footpath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.innerHTML = this.responseText;
                    el.removeAttribute("foot-include-path");
                    LoadFOOTER();
                }
            }
            xhttp.open("GET", footpath, true);
            xhttp.send();
            return;
        }
    }



}

function go_main() {    //버튼클래스에서 onclick하면 main.html로 이동하게해주는 함수  절대경로로 구현
    window.location.href =  "/LikeLionhw/templates/main.html";
}