export default {
	app: {
		app_id: 'app_envylove',
		app_template: 'VerticalMaterialOverlay',
		app_name_domain: 'envylove.io',
		app_name_company: 'EnvyLove Inc',
		app_niche: 'relationships',
		app_layout: 'left',
		app_title: 'EnvyLove.io - Find Your Perfect Relationship Match Using Our Ai',
		app_description: 'Focus On The Right Matches: Make Dating The Delightful Experience It Should Be. Subscription-Based. Personalized Matches. No Public Profiles. Guaranteed Dates. Saving You Time & Money.',
		app_logo: '@/assets/logo.png',
	},
	app_models: [
		{
			prefix: "projects_",
			form_fields: [
				{
					field_id: "",
					field_type: "input",
					field_label: "",
					field_placeholder: "",
					field_small: "",
					field_required: true,
					field_readonly: true,
					field_disabled: true,
					field_maxlength: 255,
					field_minlength: 0
				}
			]
		},
	],
	app_widgets: [
		{
			widget_type: "panel",
			variation_id: "panel_1",
			dom_placement: "zone_1",
			widget_active: true,
			visibility: 'dev',
			replace: [
				{
					zone_field: "[field_1]",
					aob_prefix: "projects_",
					aob_key: 'project_title'
				}
			]
		}
	],
	router: [
		// RouterMain[0],
		// RouterProjects[0],
		// RouterBuilder[0],
		// RouterApp[0],
		// RouterAuth[0],
		// RouterUser[0],
		// RouterBilling[0],
		// RouterShop[0],
		// RouterSupport[0],
		// RouterDashboardClient[0],
		// RouterChat[0],
		// RouterMembership[0],
		{
			path: '*',
			redirect: '/login'
		},
	],
	app_menu_top_left: [

	],
	app_menu_top_right: [

	],
	app_menu_left: [
		{
			url: null,
			name: "Dashboard - Client",
			slug: "DashboardClient",
			icon: "",
			submenu: [
				{
					url: "/help-center",
					name: "HelpCenter",
					slug: 'help-center',
					tag: "",
					tagColor: "",
					icon: "",
					i18n: "Help Center",
				},
				{
					url: null,
					name: "ClientBilling",
					slug: 'billing',
					tag: "",
					tagColor: "",
					icon: "",
					i18n: "Billing",
					submenu: [
						{
							url: "/billing/history",
							name: "BillingHistory",
							slug: 'billing-history',
							tag: "",
							tagColor: "",
							icon: "",
							i18n: "Billing History",
						}
					],
				},

			]
		}
	],
	app_menu_right: [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	app_menu_copyright_left: [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	app_menu_copyright_center: [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	app_menu_copyright_right: [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	app_pricing: {
		basic: '5.00',
		standard: '10.00',
		premium: '15.00'
	},
	app_settings: [
		{
			preloader: false,
			landing_theme: 'StartUp'
		},
	],
	api_keys: [
		{
			aws: {
				'': '',
			},
			paypal: {
				'': '',
			},
			stripe: {
				'': '',
			}
		}
	],
	app_contact_info: [
		{
			phone: {
				default: '',
				hr: '',
				sales: '',
				support: '',
			},
			email: {
				default: '',
				hr: '',
				sales: '',
				support: '',
			},
			social: {
				facebook: '',
				ig: '',
				twitter: '',
				linkedin: '',
				twitch: '',
				pinterest: '',
				email: '',
			}
		}
	],
	app_features: [
		'version 0.1 - ',
	]
}