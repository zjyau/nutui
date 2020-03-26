<template>
	<div>
		<h4>所有ICON</h4>
		<table>
			<tr>
				<td><nut-icon type="top" /><span>top</span></td>
				<td><nut-icon type="down" /><span>down</span></td>
				<td><nut-icon type="right" /><span>right</span></td>
				<td><nut-icon type="action" /><span>action</span></td>
			</tr>
			<tr>
				<td><nut-icon type="more" /><span>more</span></td>
				<td><nut-icon type="trolley" /><span>trolley</span></td>
				<td><nut-icon type="search" /><span>search</span></td>
				<td><nut-icon type="tick" /><span>tick</span></td>
			</tr>
			<tr>
				<td><nut-icon type="plus" /><span>plus</span></td>
				<td><nut-icon type="minus" /><span>minus</span></td>
				<td><nut-icon type="cross" /><span>cross</span></td>
				<td><nut-icon type="circle-cross" /><span>circle-cross</span></td>
			</tr>
		</table>
		<h4>自定义尺寸</h4>
		<table>
			<tr>
				<td><nut-icon type="more" size="40px" /><span>more</span></td>
				<td><nut-icon type="trolley" size="40px" /><span>trolley</span></td>
				<td><nut-icon type="search" size="40px" /><span>search</span></td>
				<td><nut-icon type="tick" size="40px" /><span>tick</span></td>
			</tr>
		</table>
		<h4>自定义颜色</h4>
		<table>
			<tr>
				<td><nut-icon type="more" color="#f0250f" /><span>more</span></td>
				<td><nut-icon type="trolley" color="#f0250f" /><span>trolley</span></td>
				<td><nut-icon type="search" color="#f0250f" /><span>search</span></td>
				<td><nut-icon type="tick" color="#f0250f" /><span>tick</span></td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
table {
	width: 100%;
	border-collapse: collapse;

	td {
		width: 25%;
		text-align: center;
		vertical-align: middle;
		height: 100px;
		border: 1px solid #ebebeb;
		font-size: 12px;
	}

	span {
		display: block;
	}
}
</style>
