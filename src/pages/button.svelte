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

<Isi kode={`<div class="buttons">
  <button class="bg-white p-2 px-4 rounded border cursor-pointer inline-block">Primary</button>
  <button class="button is-link">Link</button>
</div>

<div class="buttons">
  <button class="button is-info">Info</button>
  <button class="button is-success">Success</button>
  <button class="button is-warning">Warning</button>
  <button class="button is-danger">Danger</button>
</div>`}></Isi>