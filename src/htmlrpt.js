var HtmlRpt = HtmlRpt || __initHtmlReports();

function __initHtmlReports() {
  const _reportAttr = 'report-src';
  const _reportFrameId = '__htmlReportFrame';
  const _reportElements = document.querySelectorAll('[' + _reportAttr + ']');
  const _byId = document.getElementById;
  const _addChild = document.body.appendChild;

  let _reportFrame = null;

  let __initHtmlReports = function() {
    _reportFrame = _byId(_reportFrameId);
    if (_reportFrame == null) {
      _reportFrame = document.createElement("iframe");
      _reportFrame.id = _reportFrameId;
      _reportFrame.style.display = "none";
      _addChild(_reportFrame);
    }
  };

  //r.attributes[_reportAttr].value
  let _renderReport = function (reportUri) {
    _reportFrame.addEventListener("load", function () {
      _reportFrame.contentWindow.print();
    });
    _reportFrame.src = reportUri;
  };

  let _bindElements = function (attrValue) {
    _reportElements.forEach(r => {
      let clickEvent = _renderReport(attrValue);
      r.onclick = clickEvent;
    });
  };

  __initHtmlReports();
  _bindElements();

  return {
    RenderReport: _renderReport
  }
}
