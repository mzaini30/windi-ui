
/**
 * @roxi/routify 2.18.0
 * File generated Sun Jul 11 2021 22:32:37 GMT+0800 (Waktu Indonesia Tengah)
 */

export const __version = "2.18.0"
export const __timestamp = "2021-07-11T14:32:37.510Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

