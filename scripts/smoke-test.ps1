$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$mustExist = @(
  "index.html",
  "components/menu.html",
  "assets/css/base.css",
  "assets/css/layout.css",
  "assets/css/home.css",
  "assets/css/leads-acquisition-link.css",
  "assets/css/leads-employee-qr.css",
  "assets/css/leads-group-qr.css",
  "assets/css/leads-public-pool.css",
  "assets/css/customer-list-all.css",
  "assets/css/customer-list-mine.css",
  "assets/css/customer-tags.css",
  "assets/css/customer-group-tags.css",
  "assets/css/marketing-customer-broadcast.css",
  "assets/css/marketing-group-broadcast.css",
  "assets/css/marketing-moments.css",
  "assets/css/content-assets.css",
  "assets/css/content-script.css",
  "assets/css/content-knowledge-base.css",
  "assets/css/service-smart-service.css",
  "assets/css/service-schedule-service.css",
  "assets/css/service-complaints.css",
  "assets/css/system-employee-management.css",
  "assets/css/system-permission-management.css",
  "assets/css/system-department-management.css",
  "assets/css/system-operation-log.css",
  "assets/js/menu.js",
  "assets/js/home.js",
  "pages/leads-conversion.html",
  "pages/customer-management.html",
  "pages/marketing-campaigns.html",
  "pages/content-center.html",
  "pages/smart-service.html",
  "pages/system-management.html",
  "pages/leads-acquisition-link.html",
  "pages/leads-employee-qr.html",
  "pages/leads-group-qr.html",
  "pages/leads-public-pool.html",
  "pages/customer-list-all.html",
  "pages/customer-group-lists.html",
  "pages/customer-tags.html",
  "pages/customer-group-tags.html",
  "pages/marketing-customer-broadcast.html",
  "pages/marketing-group-broadcast.html",
  "pages/marketing-moments.html",
  "pages/content-assets.html",
  "pages/content-script.html",
  "pages/content-knowledge-base.html",
  "pages/service-smart-service.html",
  "pages/service-schedule-service.html",
  "pages/service-complaints.html",
  "pages/system-employee-management.html",
  "pages/system-permission-management.html",
  "pages/system-department-management.html",
  "pages/system-operation-log.html"
)

foreach ($relative in $mustExist) {
  $target = Join-Path $root $relative
  if (!(Test-Path $target)) {
    throw "Missing required file: $relative"
  }
}

Write-Host "Smoke test passed: all required files exist."

