<script>
	export let kode
</script>

<div class="grid grid-cols-2 gap-3">
	<div class="">
		{@html kode}
	</div>
	<div class="">
		<textarea name="" bind:value={kode} id="" class="bg-green-100 p-2 w-full focus:outline-none" readonly cols="30" rows="5"></textarea>
	</div>
</div>