const Htmlrpt = Htmlrpt || {};

(() => {
  document.getElementById('report1').onclick = e => {
    alert('hello');
    Htmlrpt.RenderReport('report1.html');
  };

  let iFrame = null;
  const iFrameId = '__HtmlReport_iFrame';
  let initFrame = () => {
    iFrame = document.getElementById(iFrameId);
    if (iFrame == null) {
      iFrame = document.createElement("iframe");
      iFrame.id = iFrameId;
      iFrame.style.display = "none";
      document.body.appendChild(iFrame);
    }
  };

  Htmlrpt.RenderReport = function(reportUri) {
    initFrame();
    iFrame.addEventListener("load", function() {
      iFrame.contentWindow.print();
    });
    iFrame.src = reportUri;
  };
})();
