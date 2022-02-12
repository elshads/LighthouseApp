<script>
	import Notification from '$lib/Notification.svelte';
</script>

<div class="auth-bg">
    <div class="auth-box p-4 m-auto">
        <slot></slot>
    </div>
	<Notification />
</div>

<style>
    .auth-bg {
		display: flex;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		background-color: #fff;
		color: #1e1e1e;
	}

    .auth-box {
		display: block;
		background-color: #fff;
		width: 20rem;
		text-align: center;
		border-radius: 8px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
</style>