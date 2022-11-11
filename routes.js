// This file was automatically added by edgio deploy.
// You should commit this file to source control.
import { Router } from '@edgio/core/router'
import { nextRoutes } from '@edgio/next'

// Remove this line to suppress Next's default behavior of removing trailing slashes via a redirect.
// If trailingSlash: true is set in next.config.js, removing this line will remove the redirect that adds the trailing slash.
nextRoutes.setEnforceTrailingSlash(true)

export default new Router()
  // Prevent search engines from indexing permalink URLs
  .noIndexPermalink()
  .match('/service-worker.js', ({ serviceWorker }) => {
    return serviceWorker('.next/static/service-worker.js')
  })

  .get("/foo/bar", ({ 
    setUpstreamResponseHeader,
    setResponseHeader,
    proxy,
    cache }) => {
    cache({
      browser: false,
      edge: {
        maxAgeSeconds: 6,
      },
    });
    proxy("origin");
    setResponseHeader('header-name', 'header-value');
    setResponseHeader(' x-0-t', 'ECL=TRUE');
    setResponseHeader(' x-0-status', 'ECL=TRUE');
    setResponseHeader(' x-0-components', 'ECL=TRUE');
    setUpstreamResponseHeader(' x-0-version', 'ECL=TRUE');
  })

  .use(nextRoutes) // automatically adds routes for all files under /pages
