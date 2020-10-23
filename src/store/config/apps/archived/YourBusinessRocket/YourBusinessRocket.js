import RouterApp from '@/routers/RouterApp.js'
import RouterAuth from '@/routers/RouterAuth.js'
import RouterUser from '@/routers/RouterUser.js'
import RouterBuilder from '@/routers/RouterBuilder.js'
import RouterProjects from '@/routers/RouterProjects'
import RouterSupport from '@/routers/RouterSupport.js'
import RouterBilling from '@/routers/RouterBilling.js'
import RouterShop from '@/routers/RouterShop.js'
import RouterDashboardClient from '@/routers/RouterDashboardClient'
import RouterChat from '@/routers/RouterChat.js'
// import RouterMain from '@/routers/RouterMain.js'
import RouterMembership from '@/routers/RouterMembership.js'
//import RouterBuilderWidgets from '@/routers/RouterBuilderWidgets.js'

export default {
	app: {
		app_id: __filename.slice(__dirname.length + 1, -3),
		app_nice_name: "",
		app_category: "",
		app_layout: "left",
		app_title: __filename.slice(__dirname.length + 1, -3),
		app_description: '',
		app_logo: {},
		app_tagline: '',
	},
	app_models_v2: [
		{
			headerName: 'id',
			field: '0',
			width: 175,
			filter: true,
			checkboxSelection: true,
			headerCheckboxSelectionFilteredOnly: true,
			headerCheckboxSelection: true,
		},
		{
			headerName: 'Date',
			field: '1',
			filter: true,
			width: 175,
		},
		{
			headerName: 'Attributes',
			field: '2',
			filter: true,
			width: 250,
		},
		{
			headerName: 'Guarded',
			field: '3',
			filter: true,
			width: 150,
		},
		{
			headerName: 'Fillable',
			field: '4',
			filter: true,
			width: 150,
		},
		{
			headerName: 'Primary',
			field: '5',
			filter: true,
			width: 125,
		},
		{
			headerName: 'Table',
			field: '6',
			filter: true,
			width: 125,
		}
	],
	app_mock_data: [
		{
			"1": "1",
			"2": "2",
			"3": "3",
			"4": "4",
			"5": "5",
			"6": "6"
		}
	],
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
		 //RouterMain[0],
		RouterProjects[0],
		RouterBuilder[0],
		RouterApp[0],
		RouterAuth[0],
		RouterUser[0],
		RouterBilling[0],		
		RouterShop[0],
		RouterSupport[0],	
		RouterDashboardClient[0],
		RouterChat[0],		
		RouterMembership[0],
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
					url: "/support-tickets",
					name: "SupportTickets",
					slug: 'support-tickets',
					tag: "",
					tagColor: "",
					icon: "",
					i18n: "Support Tickets",
				},
				{
					url: "/shop",
					name: "Service Addons",
					slug: 'Shop',
					tag: "",
					tagColor: "",
					icon: "",
					i18n: "Service Addons",
				},
				{
					url: "/account-settings",
					name: "Account",
					slug: 'account-settings',
					tag: "",
					tagColor: "",
					icon: "",
					i18n: "Account Settings",
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
						},
						{
							url: "/billing/invoice",
							name: "BillingInvoice",
							slug: 'invoice',
							tag: "",
							tagColor: "",
							icon: "",
							i18n: "Invoice",
						},
					],
				},
				
			]
		},
		{
			url: null,
			name: "Dashboard - Admin",
			slug: "dashboard",
			icon: "",
			submenu: [
				{
					url: null,
					name: "Favorites",
					slug: "favorites",
					icon: "",
					i18n: "Favorites",
					submenu: [
						{
							url: '/activity',
							name: "Activity",
							i18n: "Activity",
							slug: "activity",
							icon: ""
						},
						{
							url: '/cover-generator',
							name: "CoverGenerator",
							i18n: "Cover Generator",
							slug: "cover-generator",
							icon: ""
						},
						{
							url: '/rate-calculator',
							name: "RateCalculator",
							i18n: "Rate Calculator",
							slug: "rate-calculator",
							icon: ""							
						},
					]
				},				
				{
					url: '/teams',
					name: "Teams",
					slug: "teams",
					icon: "",
					i18n: "Teams"
				},
				{
					url: '/clients',
					name: "Clients",
					slug: "clients",
					icon: "",
					i18n: "Clients",
					submenu: [
						{
							url: '/clients/notifier',
							name: "ClientNotifier",
							tag: "",
							tagColor: "",
							icon: "",
							i18n: "Client Notifier",
							slug: "client-notifier",
						},
					]
				},
				{
					url: '/deals',
					name: "Deals",
					slug: "deals",
					icon: ""
				},
				{
					url: '/projects',
					name: "Projects",
					slug: "projects",
					icon: "",
					i18n: "Projects"
				},
				{
					url: '/tasks',
					name: "Tasks",
					slug: "tasks",
					icon: "",
					i18n: "Tasks",
					submenu: [
						{
							url: '/tasks/templates',
							name: "TaskTemplates",
							slug: "task-templates",
							tag: "",
							tagColor: "",
							icon: "",
							i18n: ""							
						},
					]
				},				
				{
					url: null,
					name: "App Builder",
					slug: "dashboard",
					icon: "",
					submenu: [
						{
							url: '/builder/migrations',
							name: "Migrations",
							slug: 'migrations',
							tag: "",
							tagColor: "warning",
							icon: ""
						},
						{
							url: '/builder/views',
							name: 'Pages',
							slug: 'views',
							tag: "",
							tagColor: "warning",
							icon: ""
							,
						},
						{
							url: '/builder/commands',
							name: "Commands",
							slug: 'commands',
							tag: "",
							tagColor: "warning",
							icon: ""
						},
						{
							url: '/builder/configuration',
							name: "Configuration",
							slug: 'configuration',
							tag: "",
							tagColor: "warning",
							icon: ""
						},
						{
							url: '/builder/controllers',
							name: "Controllers",
							slug: 'Controllers',
							tag: "",
							tagColor: "warning",
							icon: ""
							,
						},
						{
							url: '/builder/membership-plans',
							name: "Membership Plans",
							slug: 'membership-plans',
							tag: "",
							tagColor: "warning",
							icon: ""
							,
						},
						{
							url: '/builder/memberships',
							name: "Memberships",
							slug: 'memberships',
							tag: "",
							tagColor: "warning",
							icon: ""
							,
						},
						{
							url: '/builder/middleware',
							name: "Middleware",
							slug: 'middleware',
							tag: "",
							tagColor: "warning",
							icon: ""
							,
						},
						{
							url: '/builder/models',
							name: "Models",
							slug: 'models',
							tag: "",
							tagColor: "warning",
							icon: ""
							,
						},
						{
							url: '/builder/routes',
							name: "Routes",
							slug: 'routes',
							tag: "",
							tagColor: "warning",
							icon: ""
							,
						}
					]
				},
								
			]
		},
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
