var HtmlReport = function() {
  var _iframe = null
  var _iframeId = '__html_report_iframe'

  var _renderReport = function(reportUri) {
    _iframe.addEventListener('load', function () {
      _iframe.contentWindow.print()
    });
    _iframe.src = reportUri
  }

  var _initialize = function() {
    // Add the hidden iframe
    _iframe = document.createElement('iframe')
    _iframe.id = _iframeId
    _iframe.style.display = 'none'
    document.body.appendChild(_iframe)

    // Bind all tags that contain the class name '.html-report'
    var htmlReports = document.getElementsByClassName('html-rpt')
    for (var i = 0; i < htmlReports.length; i++) {
      var htmlReport = htmlReports[i]
      htmlReport.onclick = (element) => {
        var reportSrc = element.target.dataset.reportSrc
        if (reportSrc && reportSrc.trim() !== '') {
          _renderReport(reportSrc)
        }
      }
    }
  }

  document.addEventListener('DOMContentLoaded', _initialize)

  return {
    renderReport: _renderReport
  }
}();

/*
var __htmlReport_Instance = null;

class htmlReport {

  constructor() {
    this.iframe = null
    this.iframeId = '__html_report_iframe'
    document.addEventListener('DOMContentLoaded', this.initialize)
  }

  initialize() {
    // Add the hidden iframe
    this.iframe = document.createElement('iframe')
    this.iframe.id = this.iframeId
    this.iframe.style.display = 'none'
    document.body.appendChild(this.iframe)

    // Bind all tags that contain the class name '.html-report'
    let htmlReports = document.getElementsByClassName('html-report')
    for (let i = 0; i < htmlReports.length; i++) {
      let htmlReport = htmlReports[i]
      htmlReport.onclick = (element) => {
        let reportSrc = element.target.dataset.reportSrc
        if (reportSrc && reportSrc.trim() !== '') {
          this.renderReport(reportSrc)
        }
      }
    }
  }

  renderReport(reportUri) {
    this.iframe.addEventListener('load', function () {
      this.iframe.contentWindow.print()
    });
    this.iframe.src = reportUri
  }
}

function __htmlReport_getInstance() {
  if(__htmlReport_Instance == null) {
    __htmlReport_Instance = new htmlReport()
    __htmlReport_Instance.initialize()
  }
  return __htmlReport_Instance
}
/**/
