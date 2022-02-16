<script>
	import { session } from '$app/stores';
	import notifications, { theme } from '../appStore.js';
	import { ComboBox, Button } from 'carbon-components-svelte';
	import { GaugeChart, DonutChart } from '@carbon/charts-svelte';

	//let chartCss = "";

	const data1 = [
		{
			group: 'value',
			value: 42
		},
		{
			group: 'delta',
			value: -13.37
		}
	];

	const options1 = {
		title: 'Gauge semicircular -- danger status',
		resizable: true,
		animations: true,
		height: '250px',
		width: '460px',
		color: {
			scale: {
				value: '#6929c4'
			}
		},
		gauge: {
			type: 'semi',
			status: 'danger'
		}
	};

	const data2 = [
		{
			group: '2V2N 9KYPM version 1',
			count: 28000
		},
		{
			group: 'L22I P66EP L22I P66EP L22I P66EP',
			count: 65000
		},
		{
			group: 'JQAI 2M4L1',
			count: 75000
		},
		{
			group: 'J9DZ F37AP',
			count: 3200
		},
		{
			group: 'YEL48 Q6XK YEL48',
			count: 15000
		},
		{
			group: 'Misc',
			count: 25000
		}
	];

	const options2 = {
		title: 'Donut (value maps to count)',
		resizable: true,
		pie: {
			valueMapsTo: 'count'
		},
		height: '350px'
	};

	function increase() {
		data1[0].value += 5;
		data1[1].value += 5;

		const copy = data2.slice();
		let index = 0;
		for (const element of copy) {
			let count = data2[index].count;
			data2[index].count = count + count * (0.1 + index / 100);
			index++;
		}
	}

	function decrease() {
		data1[0].value -= 5;
		data1[1].value -= 5;

		const copy = data2.slice();
		let index = 0;
		for (const element of copy) {
			let count = data2[index].count;
			data2[index].count = count - count * (0.1 + index / 100);
			index++;
		}
	}

	$: options1.gauge.status = data1[1].value < 0 ? 'danger' : 'success';
</script>

<svelte:head>
	<title>Lighthouse</title>
</svelte:head>

<h1>Welcome to Lighthouse Loyalty club</h1>
<p class="my-4">
	Visit <a href="https://elearning.fh-swf.de/course/view.php?id=13764" target="_blank"
		>Lighthouse Moodle page</a
	> for more information
</p>

<Button on:click={increase}>Increase</Button>
<Button kind="danger" on:click={decrease}>Descrease</Button>

<div class="dashboard">
	<div class="row">
		<div class="col-6 px-4 center-x">
			<GaugeChart data={data1} options={options1} />
		</div>
		<div class="col-6 px-4 center-x">
			<DonutChart data={data2} options={options2} />
		</div>
		<div class="col-6 px-4 center-x">
			<GaugeChart data={data1} options={options1} />
		</div>
		<div class="col-6 px-4 center-x">
			<GaugeChart data={data1} options={options1} />
		</div>
	</div>
</div>

