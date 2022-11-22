var HtmlRpt = HtmlRpt == null ? {} : __InitHtmlRpt();

function __InitHtmlRpt() {
  const _reportAttr = 'report-src';
  const _reportFrameId = '__htmlReportFrame';
  const _reportElements = document.querySelectorAll('[' + _reportAttr + ']');

  let _reportFrame = null;

  _reportElements.forEach(r => {
    r.onclick = HtmlRpt.RenderReport(r.attributes[_reportAttr].value);
  });

  let _initReportFrame = () => {
    _reportFrame = document.getElementById(_reportFrameId);
    if (_reportFrame == null) {
      _reportFrame = document.createElement("iframe");
      _reportFrame.id = _reportFrameId;
      _reportFrame.style.display = "none";
      document.body.appendChild(_reportFrame);
    }
  };

  let _renderReport = function (reportUri) {
    _initReportFrame();
    _reportFrame.addEventListener("load", function () {
      _reportFrame.contentWindow.print();
    });
    _reportFrame.src = reportUri;
  };

  return {
    RenderReport: _renderReport
  }
}
