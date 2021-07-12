<script>
	import Isi from './Isi.svelte'
	document.title = 'Button'
</script>

<Isi kode={`<button class="focus:outline-none bg-white p-2 px-4 rounded border hover:border-gray-400 cursor-pointer inline-block">Button</button>`}></Isi>

<Isi kode={`<a class="focus:outline-none bg-white p-2 px-4 rounded border hover:border-gray-400 cursor-pointer inline-block">Anchor</a>
<button class="focus:outline-none bg-white p-2 px-4 rounded border cursor-pointer hover:border-gray-400 inline-block">Button</button>
<input class="focus:outline-none bg-white p-2 hover:border-gray-400 px-4 rounded border cursor-pointer inline-block" type="submit" value="Submit input">
<input class="focus:outline-none bg-white p-2 px-4 rounded border hover:border-gray-400 cursor-pointer inline-block" type="reset" value="Reset input">`}></Isi>

<Isi kode={`<button class="focus:outline-none bg-white hover:bg-gray-200 p-2 px-4 rounded cursor-pointer inline-block">White</button>
<button class="focus:outline-none bg-gray-100 hover:bg-gray-200 p-2 px-4 rounded border cursor-pointer inline-block">Light</button>
<button class="focus:outline-none bg-gray-800 text-white p-2 px-4 rounded border cursor-pointer inline-block">Dark</button>
<button class="focus:outline-none bg-black text-white p-2 px-4 rounded border cursor-pointer inline-block">Black</button>
<button class="focus:outline-none bg-white p-2 px-4 underline rounded hover:bg-gray-200 cursor-pointer inline-block">Text</button>
<button class="focus:outline-none bg-white p-2 px-4 rounded text-blue-700 hover:underline cursor-pointer inline-block">Ghost</button>`}></Isi>

<Isi kode={`<div class="focus:outline-none mb-3">
  <button class="focus:outline-none bg-teal-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Primary</button>
  <button class="focus:outline-none bg-indigo-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Link</button>
</div>

<div class="focus:outline-none mb-3">
  <button class="focus:outline-none bg-blue-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Info</button>
  <button class="focus:outline-none bg-green-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Success</button>
  <button class="focus:outline-none bg-yellow-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Warning</button>
  <button class="focus:outline-none bg-red-500 text-white p-2 px-4 rounded border cursor-pointer inline-block">Danger</button>
</div>`}></Isi>

<Isi kode={`<div class="focus:outline-none mb-3">
  <button class="focus:outline-none bg-teal-200 text-teal-700 p-2 px-4 rounded border cursor-pointer inline-block">Primary</button>
  <button class="focus:outline-none bg-indigo-200 text-indigo-700 p-2 px-4 rounded border cursor-pointer inline-block">Link</button>
</div>

<div class="focus:outline-none mb-3">
  <button class="focus:outline-none bg-blue-200 text-blue-700 p-2 px-4 rounded border cursor-pointer inline-block">Info</button>
  <button class="focus:outline-none bg-green-200 text-green-700 p-2 px-4 rounded border cursor-pointer inline-block">Success</button>
  <button class="focus:outline-none bg-yellow-200 text-yellow-700 p-2 px-4 rounded border cursor-pointer inline-block">Warning</button>
  <button class="focus:outline-none bg-red-200 text-red-700 p-2 px-4 rounded border cursor-pointer inline-block">Danger</button>
</div>`}></Isi>

<Isi kode={`<button class="focus:outline-none text-gray-700 p-2 px-4 rounded border hover:border-gray-400 cursor-pointer inline-block mb-1">Outlined</button>
<button class="focus:outline-none text-teal-500 border-teal-500 hover:(bg-teal-500 text-white) p-2 px-4 rounded border cursor-pointer inline-block mb-1">Outlined</button>
<button class="focus:outline-none text-indigo-500 border-indigo-500 hover:(bg-indigo-500 text-white) p-2 px-4 rounded border cursor-pointer inline-block mb-1">Outlined</button>
<button class="focus:outline-none text-blue-500 border-blue-500 hover:(bg-blue-500 text-white) p-2 px-4 rounded border cursor-pointer inline-block mb-1">Outlined</button>
<button class="focus:outline-none text-green-500 border-green-500 hover:(bg-green-500 text-white) p-2 px-4 rounded border cursor-pointer inline-block mb-1">Outlined</button>
<button class="focus:outline-none text-red-500 border-red-500 hover:(bg-red-500 text-white) p-2 px-4 rounded border cursor-pointer inline-block mb-1">Outlined</button>`}></Isi>