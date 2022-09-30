<script lang="ts">
	import Table from '$lib/components/Table.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	// onMount(async () => {
	// 	// const res = await fetch(`${BASE_URL}/check`, {
	// 	const res = await fetch(`${BASE_URL}/pairs/0x521c79bfb7c0f528fbb2366b494f14b60ce055f3/volume/daily?to=${Date.now()}&num=7`, {
	// 		headers: {
	// 			Authorization: `Bearer ${API_KEY}`
	// 		}
	// 	});

	// 	if (res.ok) {
	// 		const data = await res.json();
	// 		console.log(data);
	// 		info = data;
	// 	}
	// });
</script>

<div class="container mx-auto max-w-screen-xl">
	<Table {data} />
	<div class="mockup-code max-w-md mx-auto p-2 m-4">
		<pre>{JSON.stringify(data, null, 2)}</pre>
	</div>
</div>
