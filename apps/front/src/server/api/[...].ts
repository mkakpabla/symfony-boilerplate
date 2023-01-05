import {defineEventHandler, getHeaders, getMethod, H3Event, proxyRequest} from "h3";
import _ from 'lodash';
export default defineEventHandler((event: H3Event) => {
    // proxy only "/api" requests
   // if (!event.node.req.url?.startsWith('/api/')) return
console.log('route');
    const target = new URL(event.req.url as string, 'http://back/');

        return proxyRequest(event, target.toString(), {
            headers: {
                host: target.host // if you need to bypass host security
            }
        });
});
/*
const proxy = httpProxy.createProxyServer({
    target: 'http://back/',
    changeOrigin: true,
    ws: true
})
// @ts-ignore
export default (req, res) => {
    return proxy.web(req, res);
}**/
// @ts-ignore
/**export default defineEventHandler(async (event: H3Event) => {
    const method = getMethod(event);
    const params = getQuery(event);
    const headers = getHeaders(event) || {};
    const body = method === "GET" ? undefined : await readBody(event);
    console.log(event.req.url);
    console.log(headers);
    const d = await $fetch.raw(
        event.req.url,
        {
            method,
            params,
            body,
            baseURL: "http://back/",
            // @ts-ignore
            headers: _.omit(headers, ["host", "connection", "x-forwarded-server", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"])
        }
    ).catch(e => e);
    console.log('-----');
    //console.log(d);
   // return {d.data, {statusCode: d.statusCode}};
})**/
/**
 *

import {getMethod} from "h3";

export default defineEventHandler(async (event) => {
    const method = getMethod(event);
    const params = readBody(event);
    const body = method === "GET" ? undefined : await useBody(event)

    return await $fetch(event.req.url, {
        headers: {
            "Content-Type": "application/json"
        },
        baseURL,
        method,
        params,
        body
    })
})
 **/

/*
import httpProxy from "http-proxy" // make sure to use package redirect to "http-proxy-node16" for fixing closing event: https://github.com/http-party/node-http-proxy/pull/1559

const apiProxy = httpProxy.createProxyServer({
  changeOrigin: true, // don't forget this, or you're going to chase your tail for hours
  target: process.env.API_ROOT || "http://127.0.0.1:3640"
})
apiProxy.on("proxyReq", (proxyReq, req, res, options) => {
  proxyReq.path = proxyReq.path.replace("/api", "")
})

export default defineNitroPlugin(nitroApp => {
  nitroApp.h3App.stack.unshift({
    route: "/api",
    handler: fromNodeMiddleware((req, res, _) => apiProxy.web(req, res))
  })
})
*/