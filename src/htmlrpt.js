var HtmlRpt = HtmlRpt || __InitHtmlRpt();

function __InitHtmlRpt() {
  const _reportAttr = 'report-src';
  const _reportFrameId = '__htmlReportFrame';
  const _reportElements = document.querySelectorAll('[' + _reportAttr + ']');

  let _reportFrame = null;

  let _initReports = function() {
    _reportFrame = document.getElementById(_reportFrameId);
    if (_reportFrame == null) {
      _reportFrame = document.createElement("iframe");
      _reportFrame.id = _reportFrameId;
      _reportFrame.style.display = "none";
      document.body.appendChild(_reportFrame);
    }
  };

  let _bindElements = function () {
    _reportElements.forEach(r => {
      r.onclick = _renderReport(r.attributes[_reportAttr].value);
    });
  };

  let _renderReport = function (reportUri) {
    _reportFrame.addEventListener("load", function () {
      _reportFrame.contentWindow.print();
    });
    _reportFrame.src = reportUri;
  };

  _initReports();
  _bindElements();

  return {
    RenderReport: _renderReport
  }
}
