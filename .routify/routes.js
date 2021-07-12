
/**
 * @roxi/routify 2.18.0
 * File generated Mon Jul 12 2021 17:06:23 GMT+0800 (Waktu Indonesia Tengah)
 */

export const __version = "2.18.0"
export const __timestamp = "2021-07-12T09:06:23.350Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/home/zen/personal-projects/windi-ui/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "box.svelte",
      "filepath": "/box.svelte",
      "name": "box",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/zen/personal-projects/windi-ui/src/pages/box.svelte",
      "importPath": "../src/pages/box.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/box",
      "id": "_box",
      "component": () => import('../src/pages/box.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "button.svelte",
      "filepath": "/button.svelte",
      "name": "button",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/zen/personal-projects/windi-ui/src/pages/button.svelte",
      "importPath": "../src/pages/button.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/button",
      "id": "_button",
      "component": () => import('../src/pages/button.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/zen/personal-projects/windi-ui/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "Isi.svelte",
      "filepath": "/Isi.svelte",
      "name": "Isi",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/zen/personal-projects/windi-ui/src/pages/Isi.svelte",
      "importPath": "../src/pages/Isi.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/Isi",
      "id": "_Isi",
      "component": () => import('../src/pages/Isi.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

