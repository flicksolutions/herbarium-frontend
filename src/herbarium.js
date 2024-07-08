export const herbarium = {
	name: 'herbarium',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #4daa51
		'--color-primary-50': '228 242 229', // #e4f2e5
		'--color-primary-100': '219 238 220', // #dbeedc
		'--color-primary-200': '211 234 212', // #d3ead4
		'--color-primary-300': '184 221 185', // #b8ddb9
		'--color-primary-400': '130 196 133', // #82c485
		'--color-primary-500': '77 170 81', // #4daa51
		'--color-primary-600': '69 153 73', // #459949
		'--color-primary-700': '58 128 61', // #3a803d
		'--color-primary-800': '46 102 49', // #2e6631
		'--color-primary-900': '38 83 40', // #265328
		// secondary | #192329
		'--color-secondary-50': '221 222 223', // #dddedf
		'--color-secondary-100': '209 211 212', // #d1d3d4
		'--color-secondary-200': '198 200 202', // #c6c8ca
		'--color-secondary-300': '163 167 169', // #a3a7a9
		'--color-secondary-400': '94 101 105', // #5e6569
		'--color-secondary-500': '25 35 41', // #192329
		'--color-secondary-600': '23 32 37', // #172025
		'--color-secondary-700': '19 26 31', // #131a1f
		'--color-secondary-800': '15 21 25', // #0f1519
		'--color-secondary-900': '12 17 20', // #0c1114
		// tertiary | #c0b6b4
		'--color-tertiary-50': '246 244 244', // #f6f4f4
		'--color-tertiary-100': '242 240 240', // #f2f0f0
		'--color-tertiary-200': '239 237 236', // #efedec
		'--color-tertiary-300': '230 226 225', // #e6e2e1
		'--color-tertiary-400': '211 204 203', // #d3cccb
		'--color-tertiary-500': '192 182 180', // #c0b6b4
		'--color-tertiary-600': '173 164 162', // #ada4a2
		'--color-tertiary-700': '144 137 135', // #908987
		'--color-tertiary-800': '115 109 108', // #736d6c
		'--color-tertiary-900': '94 89 88', // #5e5958
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #495a8f
		'--color-surface-50': '228 230 238', // #e4e6ee
		'--color-surface-100': '219 222 233', // #dbdee9
		'--color-surface-200': '210 214 227', // #d2d6e3
		'--color-surface-300': '182 189 210', // #b6bdd2
		'--color-surface-400': '128 140 177', // #808cb1
		'--color-surface-500': '73 90 143', // #495a8f
		'--color-surface-600': '66 81 129', // #425181
		'--color-surface-700': '55 68 107', // #37446b
		'--color-surface-800': '44 54 86', // #2c3656
		'--color-surface-900': '36 44 70' // #242c46
	}
};
