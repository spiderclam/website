<div class="absolute top-0 -z-20 w-full h-screen linear-fade overflow-hidden">
	<div class="absolute top-0 w-screen h-4/5 head-gradient" />
</div>

<style>
	.head-gradient {
		background-color: blue;
		background-image: radial-gradient(at 40% 24%, rgb(251, 146, 60) 0, transparent 78%),
			radial-gradient(at 62% 34%, rgb(220, 252, 231) 0, transparent 37%),
			radial-gradient(at 93% 54%, rgb(185, 28, 28) 0, transparent 68%),
			radial-gradient(at 45% 78%, rgb(124, 58, 237) 0, transparent 100%),
			radial-gradient(at 89% 5%, rgb(192, 132, 252) 0, transparent 72%),
			radial-gradient(at 90% 35%, rgb(13, 148, 136) 0, transparent 64%);
		mask-image: radial-gradient(ellipse 100% 100% at 50% -20%, black, transparent 80%);
		opacity: 0.75;
	}

	.linear-fade {
		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%);
	}
</style>
