var HtmlReport = (function () {
  var _iframe = null
  var _iframeId = '__html_report_iframe'

  var _initialize = function () {

    // Add the hidden iframe
    _iframe = document.createElement('iframe')
    _iframe.id = _iframeId
    _iframe.style.display = 'none'
    document.body.appendChild(_iframe)

    // Bind all tags that contain the class name '.html-report'
    var htmlReports = document.getElementsByClassName('html-report')
    for (var i = 0; i < htmlReports.length; i++) {
      var htmlReport = htmlReports[i]
      htmlReport.onclick = function (element) {
        var reportSrc = element.target.dataset.reportSrc
        if (reportSrc && reportSrc.trim() !== '') {
          _renderReport(reportSrc)
        }
      }
    }
  }

  var _renderReport = function (reportUri) {
    _iframe.addEventListener('load', function () {
      _iframe.contentWindow.print()
    });
    _iframe.src = reportUri
  }

  // Initialize after the DOM loads
  document.addEventListener('DOMContentLoaded', function () { return _initialize(); })

  return {
    renderReport: _renderReport
  }

})()

