<script lang="ts">
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { randomAddress } from '$lib/utils/helpers';
	import { pairAddresses } from '$lib/utils/store';

	import '../app.postcss';
</script>

<svelte:head>
	<title>ApeSpace</title>
</svelte:head>

<div class="flex flex-col gap-2 h-screen">
	<Navbar on:nextPair={() => goto(`/${randomAddress($pairAddresses)}`)} />
	<div class="flex-1">
		<slot />
	</div>
	<Footer />
</div>
