const HtmlReport = (() => {
  let _iframe = null
  const _iframeId = '__html_report_iframe'

  const _initialize = () => {

    // Add the hidden iframe
    _iframe = document.createElement('iframe')
    _iframe.id = _iframeId
    _iframe.style.display = 'none'
    document.body.appendChild(_iframe)

    // Bind all tags that contain the class name '.html-report'
    let htmlReports = document.getElementsByClassName('html-report')
    for (let i = 0; i < htmlReports.length; i++) {
      let htmlReport = htmlReports[i]
      htmlReport.onclick = function (element) {
        let reportSrc = element.target.dataset.reportSrc
        if (reportSrc && reportSrc.trim() !== '') {
          _renderReport(reportSrc)
        }
      }
    }
  }

  const _renderReport = (reportUri) => {
    _iframe.addEventListener('load', function () {
      _iframe.contentWindow.print()
    });
    _iframe.src = reportUri
  }

  // Initialize after the DOM loads
  document.addEventListener('DOMContentLoaded', () => _initialize())

  return {
    renderReport: _renderReport
  }

})()
