import FetchHtml from '/src/new_tab/core/FetchHtml.js';
export default class GenerateGap {
    ob_widget;
    ob_widget_zone;
    ob_widget_zone_has_children;
    generated_widget;
    constructor(ob_widget, ob_widget_zone, ob_widget_zone_has_children) {
        this.ob_widget                   = ob_widget;
        this.ob_widget_zone              = ob_widget_zone;
        this.ob_widget_zone_has_children = ob_widget_zone_has_children;
        return this.handler();
    }
    build_widget_1() {}// modify generated widget object -> place back into object
    build_widget_2() {}// modify generated widget object -> place back into object
    build_widget_3() {}// modify generated widget object -> place back into object
    build_widget_4() {}// modify generated widget object -> place back into object
    build_widget_5() {}// modify generated widget object -> place back into object

    widget_find_replace_1() {}// modify generated widget object -> place back into object
    widget_find_replace_2() {}// modify generated widget object -> place back into object
    widget_find_replace_3() {}// modify generated widget object -> place back into object
    widget_find_replace_4() {}// modify generated widget object -> place back into object
    widget_find_replace_5() {}// modify generated widget object -> place back into object


    handler() {
        let self = this;
        self.generated_widget = new FetchHtml(this.ob_widget);
        self.build_widget_1();
        self.build_widget_2();
        self.build_widget_3();
        self.build_widget_4();
        self.build_widget_5();

        self.widget_find_replace_1();
        self.widget_find_replace_2();
        self.widget_find_replace_3();
        self.widget_find_replace_4();
        self.widget_find_replace_5();

        return self.generated_widget;
    }
}