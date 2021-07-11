
/**
 * @roxi/routify 2.18.0
 * File generated Sun Jul 11 2021 22:29:19 GMT+0800 (Waktu Indonesia Tengah)
 */

export const __version = "2.18.0"
export const __timestamp = "2021-07-11T14:29:19.018Z"

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
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/zen/personal-projects/windi-ui/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
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
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/guide/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/zen/personal-projects/windi-ui/src/pages/guide/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/guide/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/zen/personal-projects/windi-ui/src/pages/guide/index.svelte",
          "importPath": "../src/pages/guide/index.svelte",
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
          "path": "/guide/index",
          "id": "_guide_index",
          "component": () => import('../src/pages/guide/index.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "routify.svelte",
          "filepath": "/guide/routify.svelte",
          "name": "routify",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/zen/personal-projects/windi-ui/src/pages/guide/routify.svelte",
          "importPath": "../src/pages/guide/routify.svelte",
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
          "path": "/guide/routify",
          "id": "_guide_routify",
          "component": () => import('../src/pages/guide/routify.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "vite.svelte",
          "filepath": "/guide/vite.svelte",
          "name": "vite",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/zen/personal-projects/windi-ui/src/pages/guide/vite.svelte",
          "importPath": "../src/pages/guide/vite.svelte",
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
          "path": "/guide/vite",
          "id": "_guide_vite",
          "component": () => import('../src/pages/guide/vite.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/guide/_layout.svelte",
      "ownMeta": {
        "index": 50
      },
      "meta": {
        "index": 50,
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/guide",
      "id": "_guide__layout",
      "component": () => import('../src/pages/guide/_layout.svelte').then(m => m.default)
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

