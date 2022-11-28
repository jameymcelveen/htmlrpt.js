const HtmlReport = HtmlReport || htmlReport.getInstance()

class htmlReport {
  static _instance = null

  static getInstance() {
    if(htmlReport._instance === null) {
      htmlReport._instance = new htmlReport()
    }
    return htmlReport._instance
  }

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
