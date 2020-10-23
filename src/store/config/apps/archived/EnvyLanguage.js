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

	],
	app_menu_top_left: [
		{
			url: null,
			name: '',
			tag: "",
			tagColor: "warning",
			icon: ""
		},
	],
	app_menu_top_right: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/main/Home.vue'),
			meta: {
				pageTitle: 'Home',
				rule: 'editor'
			}
		},
		{
			path: '/about-us',
			name: 'about-us',
			component: () => import('@/views/main/AboutUs.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'About Us', active: true }
				],
				pageTitle: 'About Us',
				rule: 'editor'
			}
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('@/views/main/Blog.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Blog', active: true }
				],
				pageTitle: 'Blog',
				rule: 'editor'
			}
		},
		{
			path: '/privacy-policy',
			name: 'PrivacyPolicy',
			component: () => import('@/views/main/PrivacyPolicy.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Privacy olicy', active: true }
				],
				pageTitle: 'Privacy Policy',
				rule: 'editor'
			}
		},

		{
			path: '/terms-and-conditions',
			name: 'TermsAndConditions',
			component: () => import('@/views/main/TermsAndConditions.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Terms & Conditions', active: true }
				],
				pageTitle: 'Terms & Conditions',
				rule: 'editor'
			}
		},
		{
			path: '/contact-us',
			name: 'ContactUs',
			component: () => import('@/views/main/ContactUs.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Contact Us', active: true }
				],
				pageTitle: 'Contact Us',
				rule: 'editor'
			}
		},
		{
			path: '/faq',
			name: 'faq',
			component: () => import('@/views/main/Faq.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'FAQ', active: true }
				],
				pageTitle: 'FAQ',
				rule: 'editor'
			}
		},
		{
			path: '/features',
			name: 'features',
			component: () => import('@/views/main/Features.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Features', active: true }
				],
				pageTitle: 'Features',
				rule: 'editor'
			}
		},
		{
			path: '/pricing',
			name: 'pricing',
			component: () => import('@/views/main/Pricing.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Pricing', active: true }
				],
				pageTitle: 'Pricing',
				rule: 'editor'
			}
		},
		{
			path: '/reviews',
			name: 'reviews',
			component: () => import('@/views/main/Reviews.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Reviews', active: true }
				],
				pageTitle: 'Reviews',
				rule: 'editor'
			}
		},
	],
	app_menu_left: [
		{
			url: null,
			name: "Dashboard",
			slug: "dashboard",
			icon: "",
			submenu: [
				{
					url: null,
					name: "",
					slug: "",
					tag: "",
					tagColor: "",
					icon: "",
					i18n: "",
				},
			]
		},

	],
	app_menu_right: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/main/Home.vue'),
			meta: {
				pageTitle: 'Home',
				rule: 'editor'
			}
		},
		{
			path: '/about-us',
			name: 'about-us',
			component: () => import('@/views/main/AboutUs.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'About Us', active: true }
				],
				pageTitle: 'About Us',
				rule: 'editor'
			}
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('@/views/main/Blog.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Blog', active: true }
				],
				pageTitle: 'Blog',
				rule: 'editor'
			}
		},
		{
			path: '/privacy-policy',
			name: 'PrivacyPolicy',
			component: () => import('@/views/main/PrivacyPolicy.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Privacy olicy', active: true }
				],
				pageTitle: 'Privacy Policy',
				rule: 'editor'
			}
		},

		{
			path: '/terms-and-conditions',
			name: 'TermsAndConditions',
			component: () => import('@/views/main/TermsAndConditions.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Terms & Conditions', active: true }
				],
				pageTitle: 'Terms & Conditions',
				rule: 'editor'
			}
		},
		{
			path: '/contact-us',
			name: 'ContactUs',
			component: () => import('@/views/main/ContactUs.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Contact Us', active: true }
				],
				pageTitle: 'Contact Us',
				rule: 'editor'
			}
		},
		{
			path: '/faq',
			name: 'faq',
			component: () => import('@/views/main/Faq.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'FAQ', active: true }
				],
				pageTitle: 'FAQ',
				rule: 'editor'
			}
		},
		{
			path: '/features',
			name: 'features',
			component: () => import('@/views/main/Features.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Features', active: true }
				],
				pageTitle: 'Features',
				rule: 'editor'
			}
		},
		{
			path: '/pricing',
			name: 'pricing',
			component: () => import('@/views/main/Pricing.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Pricing', active: true }
				],
				pageTitle: 'Pricing',
				rule: 'editor'
			}
		},
		{
			path: '/reviews',
			name: 'reviews',
			component: () => import('@/views/main/Reviews.vue'),
			meta: {
				breadcrumb: [
					{ title: 'Home', url: '/' },
					{ title: 'Reviews', active: true }
				],
				pageTitle: 'Reviews',
				rule: 'editor'
			}
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