<script>
	import Isi from './Isi.svelte'
	document.title = 'Box'
</script>

<Isi kode={`<div class="bg-white border shadow-md rounded p-4">I'm in a box.</div>`}></Isi>
<Isi kode={`<div class="bg-white border shadow-md rounded p-4">
	<div class='font-bold mb-3'>Email</div>
	<input type="text" placeholder='Masukkan Email' class='mb-3 focus:outline-none border focus:border-blue-300 p-2 w-full rounded'/>
	<div class='font-bold mb-3'>Password</div>
	<input type="password" placeholder='Masukkan Password' class='mb-3 focus:outline-none border focus:border-blue-300 p-2 w-full rounded'/>
	<input type="submit" class='bg-green-400 p-2 px-4 rounded-lg text-white' value='Login'/>
</div>`}></Isi>
<Isi kode={`<div class="bg-white border shadow-md rounded p-4">
	<div class='grid'>
		<div>
			<img src="/kotak.png" alt=""/>
		</div>
		<div></div>
	</div>
</div>`}></Isi>