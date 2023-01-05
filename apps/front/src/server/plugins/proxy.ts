

export default defineNitroPlugin((nitroApp) => {
});
/**

// Thanks https://github.com/nuxt/framework/discussions/1223#discussioncomment-4085779
import httpProxy from "http-proxy"; // make sure to use package redirect to "http-proxy-node16" for fixing closing event: https://github.com/http-party/node-http-proxy/pull/1559

import * as http from "http";
import {fromNodeMiddleware} from "h3";
import {NitroApp} from "nitropack";

const apiProxy = httpProxy.createProxyServer({
    changeOrigin: true, // don't forget this, or you're going to chase your tail for hours
    target: "http://back/",
    timeout: 15 * 1000
})

apiProxy.on("proxyReq", (proxyReq: http.ClientRequest, req: http.IncomingMessage) => {
    // The following line need to be ignore, the originalUrl is not part of the type
    // @ts-ignore
    proxyReq.path = req.originalUrl;

  //  proxyReq.removeHeader("connection");
   console.log(proxyReq);
})


apiProxy.on("proxyRes", (proxyReq, req, res) => {
    console.log('test api proxyRes');
   // console.log(res);
})


export default defineNitroPlugin((nitroApp: NitroApp) => {
    nitroApp.h3App.stack.unshift({
       route: "/api",
        handler: fromNodeMiddleware((req, res, _) => {
          console.log('test api plugin');
            return apiProxy.web(req, res);
        })
    })
});
 **/