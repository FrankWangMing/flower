// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"404":{"id":"404","path":"*","parentId":"DocLayout"},"dumi-context-layout":{"id":"dumi-context-layout","path":"/","isLayout":true},"DocLayout":{"id":"DocLayout","path":"/","parentId":"dumi-context-layout","isLayout":true},"docs/guide":{"path":"guide","id":"docs/guide","parentId":"DocLayout"},"docs/index":{"path":"","id":"docs/index","parentId":"DocLayout"},"demo-render":{"id":"demo-render","path":"~demos/:id","parentId":"dumi-context-layout"}} as const;
  return {
    routes,
    routeComponents: {
'404': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__404" */'/Users/wangming/Documents/GitHub/flower/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.25.2_@swc+helpers@0.5.1_@types+node@22.2.0_@types+react@18.3.3_eslin_n3un4tbwir6z2wymbntggw3ude/node_modules/dumi/dist/client/pages/404.js')),
'dumi-context-layout': React.lazy(() => import(/* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */'/Users/wangming/Documents/GitHub/flower/.dumi/tmp/dumi/theme/ContextWrapper')),
'DocLayout': React.lazy(() => import(/* webpackChunkName: "nm__dumi__theme-default__layouts__DocLayout__index" */'/Users/wangming/Documents/GitHub/flower/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.25.2_@swc+helpers@0.5.1_@types+node@22.2.0_@types+react@18.3.3_eslin_n3un4tbwir6z2wymbntggw3ude/node_modules/dumi/theme-default/layouts/DocLayout/index.js')),
'docs/guide': React.lazy(() => import(/* webpackChunkName: "docs__guide.md" */'/Users/wangming/Documents/GitHub/flower/docs/guide.md')),
'docs/index': React.lazy(() => import(/* webpackChunkName: "docs__index.md" */'/Users/wangming/Documents/GitHub/flower/docs/index.md')),
'demo-render': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__Demo__index" */'/Users/wangming/Documents/GitHub/flower/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.25.2_@swc+helpers@0.5.1_@types+node@22.2.0_@types+react@18.3.3_eslin_n3un4tbwir6z2wymbntggw3ude/node_modules/dumi/dist/client/pages/Demo/index.js')),
},
  };
}
