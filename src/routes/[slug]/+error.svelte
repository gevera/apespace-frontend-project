<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="mx-auto grid place-items-center h-full">
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Oopss! It's a {$page.status}</h2>
			<p>{$page?.error?.message}</p>
			<div class="card-actions justify-end">
				<a href="/" alt="Main Page">
					<button class="btn btn-primary">Main Page</button>
				</a>
			</div>
		</div>
	</div>
</div>
