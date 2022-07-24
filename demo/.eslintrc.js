module.exports = {
	root: true,
	env: {
		es2021: true
	},
	extends: ['standard', 'plugin:vue/vue3-recommended'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/no-unused-properties': [
			'error',
			{
				groups: ['props', 'data', 'computed', 'methods', 'setup'],
				deepData: true
			}
		],
		'no-empty-pattern': 'off',
		'no-unused-vars': 'warn',
		'valid-typeof': 'off',
		indent: 'off',
		'no-tabs': 'off',
		'vue/html-indent': 'off',
		'space-before-function-paren': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
					normal: 'always',
					component: 'always'
				}
			}
		]
	}
}
