const presets = [
	[
		'@babel/preset-env',
		{
			loose: true,
			modules: false,
		},
	],
];

const plugins = ['@babel/plugin-transform-runtime', '@babel/plugin-transform-object-assign'];

module.exports = { presets, plugins };
