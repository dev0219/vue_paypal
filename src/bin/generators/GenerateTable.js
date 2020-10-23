import ChromeStorage from '/src/new_tab/core/ChromeStorage.js';

export default class GenerateTable {
    aob_app_widgets;
    aob_app_chrome_categories;
    aob_app_chrome_categories_data;

    constructor() {
        this.aob_app_chrome_categories = [
            'prefix_1', 'prefix_2', 'prefix_3'
        ];
      this.aob_app_widgets           = [
            {
                "widget_type"       : "panel",
                "widget_variation"  : "panel_5",
                "widget_zone"       : "widget_zone_1",
                "widget_source"     : "html",
                "widget_data_fields": [
                    {
                        "prefix" : "prefix_1",
                        "field_1": "chrome_key1",
                        "field_2": "chrome_key2",
                        "field_3": "chrome_key3",
                        "field_4": "chrome_key4"
                    },
                    {
                        "prefix" : "prefix_2",
                        "field_1": "chrome_key1",
                        "field_2": "chrome_key2",
                        "field_3": "chrome_key3",
                        "field_4": "chrome_key4"
                    }
                ],
            },
            {
                "widget_type"       : "form",
                "widget_variation"  : "form_1",
                "widget_zone"       : "widget_zone_1",
                "widget_source"     : "html",
                "widget_form_fields": [
                    {
                        "field_id"         : "field_id",
                        "field_width"      : "field_width",
                        "field_type"       : "field_type",
                        "field_label"      : "field_label",
                        "field_placeholder": "field_placeholder",
                        "field_min_length" : "field_min_length",
                        "field_max_length" : "field_max_length",
                        "field_small"      : "field_small",
                        "field_classes"    : "field_classes",
                        "field_required"   : "field_required",
                        "field_disabled"   : "field_disabled",
                        "field_ready_only" : "field_ready_only"
                    },
                    {
                        "field_id"         : "field_id",
                        "field_width"      : "field_width",
                        "field_type"       : "field_type",
                        "field_label"      : "field_label",
                        "field_placeholder": "field_placeholder",
                        "field_min_length" : "field_min_length",
                        "field_max_length" : "field_max_length",
                        "field_small"      : "field_small",
                        "field_classes"    : "field_classes",
                        "field_required"   : "field_required",
                        "field_disabled"   : "field_disabled",
                        "field_ready_only" : "field_ready_only"
                    },
                    {
                        "field_id"         : "field_id",
                        "field_width"      : "field_width",
                        "field_type"       : "field_type",
                        "field_label"      : "field_label",
                        "field_placeholder": "field_placeholder",
                        "field_min_length" : "field_min_length",
                        "field_max_length" : "field_max_length",
                        "field_small"      : "field_small",
                        "field_classes"    : "field_classes",
                        "field_required"   : "field_required",
                        "field_disabled"   : "field_disabled",
                        "field_ready_only" : "field_ready_only"
                    },
                    {
                        "field_id"         : "field_id",
                        "field_width"      : "field_width",
                        "field_type"       : "field_type",
                        "field_label"      : "field_label",
                        "field_placeholder": "field_placeholder",
                        "field_min_length" : "field_min_length",
                        "field_max_length" : "field_max_length",
                        "field_small"      : "field_small",
                        "field_classes"    : "field_classes",
                        "field_required"   : "field_required",
                        "field_disabled"   : "field_disabled",
                        "field_ready_only" : "field_ready_only"
                    },
                    {
                        "field_id"         : "field_id",
                        "field_width"      : "field_width",
                        "field_type"       : "field_type",
                        "field_label"      : "field_label",
                        "field_placeholder": "field_placeholder",
                        "field_min_length" : "field_min_length",
                        "field_max_length" : "field_max_length",
                        "field_small"      : "field_small",
                        "field_classes"    : "field_classes",
                        "field_required"   : "field_required",
                        "field_disabled"   : "field_disabled",
                        "field_ready_only" : "field_ready_only"
                    },
                    {
                        "field_id"         : "field_id",
                        "field_width"      : "field_width",
                        "field_type"       : "field_type",
                        "field_label"      : "field_label",
                        "field_placeholder": "field_placeholder",
                        "field_min_length" : "field_min_length",
                        "field_max_length" : "field_max_length",
                        "field_small"      : "field_small",
                        "field_classes"    : "field_classes",
                        "field_required"   : "field_required",
                        "field_disabled"   : "field_disabled",
                        "field_ready_only" : "field_ready_only"
                    }
                ],
                "widget_data_fields": [
                    {
                        "prefix" : "prefix_1",
                        "field_1": "chrome_key1",
                        "field_2": "chrome_key2",
                        "field_3": "chrome_key3",
                        "field_4": "chrome_key4"
                    },
                    {
                        "prefix" : "prefix_2",
                        "field_1": "chrome_key1",
                        "field_2": "chrome_key2",
                        "field_3": "chrome_key3",
                        "field_4": "chrome_key4"
                    }
                ],
            }
        ];
        this.fetch_chrome_data()
            .then(this.handle);
    }
    async fetch_chrome_data() {
        this.aob_app_chrome_categories_data = await new ChromeStorage(this.aob_app_chrome_categories);
    }
    handle() {
        new RenderDom(this.aob_app_widgets, this.aob_app_chrome_categories_data);
        let self = this;
        self.on_click_1();
        self.on_click_2();
        self.on_click_3();
        self.on_click_4();
        self.on_click_5();
        self.on_change_1();
        self.on_change_2();
        self.on_change_3();
        self.on_change_4();
        self.on_change_5();
        self.on_drag();
        self.on_drop();
        self.on_sort();
    }

    on_click_1() {$(document).on("click", ".action_edit", function () { });}
    on_click_2() {$(document).on("click", ".action_store", function () { });}
    on_click_3() {$(document).on("click", ".action_delete", function () { });}
    on_click_4() {$(document).on("click", ".action_show", function () { });}
    on_click_5() {$(document).on("click", ".action_refresh", function () { });}
    on_change_1() {$(document).on("change", "#", function () { });}
    on_change_2() {$(document).on("change", "#", function () { });}
    on_change_3() {$(document).on("change", "#", function () { });}
    on_change_4() {$(document).on("change", "#", function () { });}
    on_change_5() {$(document).on("change", "#", function () { });}
    on_drag() {}
    on_drop() {}
    on_sort() {}
}