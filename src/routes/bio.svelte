<script>
	import Timeline from './timeline.svelte';
</script>

<div class="grid grid-rows-1 gap-4 lg:grid-cols-[repeat(auto-fit,_14.666666%)] grid-cols-1 m-auto justify-center">
	<div class="col-start-2 col-span-1 justify-center justify-self-center mx-auto bio-pic">
		<img class="rounded-full" src="/img/devi.jpg" alt="" />
	</div>
	<div class="col-span-3 justify-center justify-self-center mx-auto">
		<div class="bio">
			<h2 class="h2">
				<i class="fa-solid fa-gears"></i>
				<span class="intro">Hi, I'm <strong>Devi Acharya</strong></span>
			</h2>
			<h4 class="h4">I design and develop AI tools for games & interactive media</h4>
		</div>
		<Timeline />
	</div>
</div>
