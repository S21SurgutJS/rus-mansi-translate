<script>
	import Icon from './Icon.svelte';
</script>

<footer class="footer">
	<div class="footer__divider"></div>
	<nav class="footer__nav">
		<a class="footer__link" href="/tales">
			<Icon iconId="book" width={33} height={26} />
		</a>
		<a class="footer__link" href="/">
			<Icon iconId="translator" width={33} height={29} />
		</a>
		<a class="footer__link" href="/testing">
			<Icon iconId="testing" width={33} height={26} />
		</a>
	</nav>
</footer>

<style lang="postcss">
	.footer {
		&__divider {
			height: 22px;

			background-image: url('icons/native-divider.svg');
			background-size: cover;
			background-repeat: no-repeat;
		}

		&__nav {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			height: 50px;

			background-color: white;
		}

		&__link {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
