



// load header of page
const header = document.getElementById('header');

getHeader();

function getHeader() {
  var xhr = new XMLHttpRequest();
  xhr.responseType = "document";

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      header.appendChild(getBodyFromHtml(xhr.response));
    }
  }
  xhr.open('GET', 'header.html', true);
  xhr.send('');
}

function getBodyFromHtml(htmlFile){
  let htmlDocument = new Document();
  htmlDocument = htmlFile;

  let subheader = htmlDocument.getElementById("subheader");
  subheader.innerText = "blog-submit-new";
  
  return htmlDocument.getElementById('header');
}









let file_code = document.getElementById('file-code');
enableTab();
function enableTab() {
  file_code.onkeydown = function(e) {
      if (e.keyCode === 9) { // tab was pressed

          // get caret position/selection
          var val = this.value,
              start = this.selectionStart,
              end = this.selectionEnd;

          // set textarea value to: text before caret + tab + text after caret
          this.value = val.substring(0, start) + '\t' + val.substring(end);

          // put caret at right position again
          this.selectionStart = this.selectionEnd = start + 1;

          // prevent the focus lose
          return false;

      }
  };
}

let viewport = document.getElementById('viewport');

let execute = document.getElementById('execute').addEventListener('click', executeToViewport);





function executeToViewport(){

  let htmlSite = new Document();
  htmlSite = file_code.value;


  if(viewport.innerHTML != null){
    viewport.innerHTML = '';
  }


  //let blog = htmlSite.getElementById('blog-site');
  console.log("BLOG | " + htmlSite);

  viewport.innerHTML = htmlSite;
}



