<template>
	<div :style="styles" :class="['nut-avatar', 'avatar-' + size, 'avatar-' + shape]" @click="activeavatar">
		<i class="icon" :style="iconStyles"></i>
		<span class="text"><slot></slot></span>
	</div>
</template>

<script lang="ts">
import { computed } from '@vue/composition-api';

export default {
	name: 'nut-avatar',
	props: {
		size: {
			type: String,
			default: 'normal',
		},
		shape: {
			type: String,
			default: 'round',
		},
		bgColor: {
			type: String,
			default: '#eee',
		},
		bgIcon: {
			type: String,
			default:
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAASFBMVEUAAAAXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEdRCe4GAAAAF3RSTlMACSW88uTcQKeYWB7YOTB/xXdlkHFLzVTLks0AAAD+SURBVDjLjZILjoMwDAXzD5Q/LZ3733STbpYskoM6EkhBw7MdWV2JfYDQR9XGWArWtJzoOHGxkZOd56T11GdLzlrBz+rD7GEViwHJKRYgFexTrXp6Qi9IAaZ6miAIEqDrSQOC5L6Rxtp3YpbLdbDU0wKdID3A67Oah4cgpe916r78IUSdBRdKkNgV66H1sSJ3NGzW8x832s1clQ6RbqjO4Wjgzs5eJOxu9GVYs1sSrzrVGMXtGf+mHBxYrUS0BTf8Dj4mp2GNn8sYqHskMAGD2sCqGyxs+bXfSXsO8WDuJAO+bK1IXdH83FKkYHJsoIl6l6tf2s5bxVCSfMsJ8QdwfR4F9ZQcyQAAAABJRU5ErkJggg==',
		},
		bgImage: {
			type: String,
			default: '',
		},
		activeAvatar: {
			type: Function,
		},
	},
	setup(props: any) {
		// 返回只读属性，修改会报警
		const styles = computed(() => {
			return {
				background: props.bgColor + ' url(' + props.bgImage + ')' + 'no-repeat',
				backgroundSize: '100%',
			};
		});
		const iconStyles = computed(() => {
			return {
				backgroundImage: 'url(' + props.bgIcon + ')',
			};
		});
		function activeavatar() {
			typeof props.activeAvatar === 'function' && (props as any).activeAvatar();
		}
		return {
			styles,
			iconStyles,
			activeavatar,
		};
	},
};
</script>
