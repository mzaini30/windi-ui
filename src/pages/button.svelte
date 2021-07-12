<script>
	import Isi from './Isi.svelte'
	document.title = 'Button'
</script>

<Isi kode={`<button class="bg-white p-2 px-4 rounded border hover:border-gray-400 cursor-pointer inline-block">Button</button>`}></Isi>

<Isi kode={`<a class="bg-white p-2 px-4 rounded border hover:border-gray-400 cursor-pointer inline-block">Anchor</a>
<button class="bg-white p-2 px-4 rounded border cursor-pointer hover:border-gray-400 inline-block">Button</button>
<input class="bg-white p-2 hover:border-gray-400 px-4 rounded border cursor-pointer inline-block" type="submit" value="Submit input">
<input class="bg-white p-2 px-4 rounded border hover:border-gray-400 cursor-pointer inline-block" type="reset" value="Reset input">`}></Isi>

<Isi kode={`<button class="bg-white hover:bg-gray-200 p-2 px-4 rounded cursor-pointer inline-block">White</button>
<button class="bg-gray-100 hover:bg-gray-200 p-2 px-4 rounded border cursor-pointer inline-block">Light</button>
<button class="bg-gray-800 text-white p-2 px-4 rounded border cursor-pointer inline-block">Dark</button>
<button class="bg-black text-white p-2 px-4 rounded border cursor-pointer inline-block">Black</button>
<button class="bg-white p-2 px-4 underline rounded hover:bg-gray-200 cursor-pointer inline-block">Text</button>
<button class="bg-white p-2 px-4 rounded text-blue-700 hover:underline cursor-pointer inline-block">Ghost</button>`}></Isi>

<Isi kode={`<div class="mb-3">
  <button class="bg-teal-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Primary</button>
  <button class="bg-indigo-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Link</button>
</div>

<div class="mb-3">
  <button class="bg-blue-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Info</button>
  <button class="bg-green-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Success</button>
  <button class="bg-yellow-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Warning</button>
  <button class="bg-red-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Danger</button>
</div>`}></Isi>

<Isi kode={`<div class="mb-3">
  <button class="bg-teal-200 text-teal-700 p-2 px-4 rounded border cursor-pointer inline-block">Primary</button>
  <button class="bg-indigo-200 text-indigo-700 p-2 px-4 rounded border cursor-pointer inline-block">Link</button>
</div>

<div class="mb-3">
  <button class="bg-blue-200 text-blue-700 p-2 px-4 rounded border cursor-pointer inline-block">Info</button>
  <button class="bg-green-200 text-green-700 p-2 px-4 rounded border cursor-pointer inline-block">Success</button>
  <button class="bg-yellow-200 text-yellow-700 p-2 px-4 rounded border cursor-pointer inline-block">Warning</button>
  <button class="bg-red-200 text-red-700 p-2 px-4 rounded border cursor-pointer inline-block">Danger</button>
</div>`}></Isi>

<Isi kode={`<button class="text-gray-700 p-2 px-4 rounded border hover:border-gray-400 cursor-pointer inline-block mb-1">Outlined</button>
<button class="text-teal-500 border-teal-500 hover:(bg-teal-500 text-white) p-2 px-4 rounded border cursor-pointer inline-block mb-1">Outlined</button>
<button class="text-indigo-500 border-indigo-500 hover:(bg-indigo-500 text-white) p-2 px-4 rounded border cursor-pointer inline-block mb-1">Outlined</button>
<button class="text-blue-500 border-blue-500 hover:(bg-blue-500 text-white) p-2 px-4 rounded border cursor-pointer inline-block mb-1">Outlined</button>
<button class="text-green-500 border-green-500 hover:(bg-green-500 text-white) p-2 px-4 rounded border cursor-pointer inline-block mb-1">Outlined</button>
<button class="text-red-500 border-red-500 hover:(bg-red-500 text-white) p-2 px-4 rounded border cursor-pointer inline-block mb-1">Outlined</button>`}></Isi>