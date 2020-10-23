export default {
	"app": {
		'app_id': __filename.slice(__dirname.length + 1, -3),
		'app_nice_name': "",
		'app_category': "",
		'app_layout': "double",
		'app_title': '',
		'app_description': '',
		'app_logo': {},
		'app_tagline': '',
	},
	"app_models": [
		{
			'prefix': "projects_",
			'form_fields': [
				{
					'field_id': "",
					'field_type': "input",
					'field_label': "",
					'field_placeholder': "",
					'field_small': "",
					'field_required': true,
					'field_readonly': true,
					'field_disabled': true,
					'field_maxlength': 255,
					'field_minlength': 0
				}
			]
		},
	],
	'app_widgets': [
		{
			'widget_type': "panel",
			'variation_id': "panel_1",
			'dom_placement': "zone_1",
			'widget_active': true,
			'visibility': 'dev',
			'replace': [
				{
					'zone_field': "[field_1]",
					'aob_prefix': "projects_",
					'aob_key': 'project_title'
				}
			]
		}
	],
	router: [

	],
	'app_menu_top_left': [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	'app_menu_top_right': [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	'app_menu_left': [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	'app_menu_right': [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	'app_menu_copyright_left': [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	'app_menu_copyright_center': [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	'app_menu_copyright_right': [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	'app_pricing': {
		'basic': '5.00',
		'standard': '10.00',
		'premium': '15.00'
	},
	'app_settings': [
		{
			'preloader': false,
			'landing_theme': 'StartUp'
		},
	],
	'api_keys': [
		{
			'aws': {
				'': '',
			},
			'paypal': {
				'': '',
			},
			'stripe': {
				'': '',
			}
		}
	],
	'app_contact_info': [
		{
			'phone': {
				'default': '',
				'hr': '',
				'sales': '',
				'support': '',
			},
			'email': {
				'default': '',
				'hr': '',
				'sales': '',
				'support': '',
			},
			'social': {
				'facebook': '',
				'ig': '',
				'twitter': '',
				'linkedin': '',
				'twitch': '',
				'pinterest': '',
				'email': '',
			}
		}
	],
	'app_features': [
		'version 0.1 - Do something special',
	],
}