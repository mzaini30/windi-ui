<a href="/" class="p-8 bg-green-500 block text-white text-5xl">Windi UI</a>

<div class="grid <md:grid-cols-1 grid-cols-6">
  <div class="p-4">
    <div class="mb-3">
      {#each daftarIsi as x}
        <a href={x.link} class="p-3 block bg-gray-100 hover:bg-green-300">{x.judul}</a>
      {/each}
    </div>
    <a href='https://github.com/mzaini30/windi-ui' class="p-3 block bg-gray-100 hover:bg-green-300">Github</a>
  </div>
  <div class="col-span-5">
    <div class="p-4">
      <slot></slot>  
    </div>
  </div>
</div>

<script>
  const daftarIsi = [
    {judul: 'Box', link: '/box'},
    {judul: 'Button', link: '/button'},
  ]
</script>