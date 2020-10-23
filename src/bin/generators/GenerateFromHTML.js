import FetchHtml from "/src/new_tab/core/FetchHtml.js";

export default class GenerateFromHTML {
    constructor(ob_widget) {
        this.ob_widget = ob_widget;
        return this.handler();
    }
    async handler() {
        let self = this;
        self.generated_html = await new FetchHtml(this.ob_widget);
        // MODIFY THE WIDGET BEFORE RENDERING
        //self.build_widget_1();
        //self.build_widget_2();
        //self.build_widget_3();
        //self.build_widget_4();
        //self.build_widget_5();
        //self.widget_find_replace_1();
        //self.widget_find_replace_2();
        //self.widget_find_replace_3();
        //self.widget_find_replace_4();
        //self.widget_find_replace_5();
        // RETURN HTML AFTER FIND / REPLACE FUNCTIONS
        return self.generated_html;
    }
    //build_widget_1(){               self.generated_html;    };
    //build_widget_2(){               self.generated_html;    };
    //build_widget_3(){               self.generated_html;    };
    //build_widget_4(){               self.generated_html;    };
    //build_widget_5(){               self.generated_html;    };
    //widget_find_replace_1(){        self.generated_html;    };
    //widget_find_replace_2(){        self.generated_html;    };
    //widget_find_replace_3(){        self.generated_html;    };
    //widget_find_replace_4(){        self.generated_html;    };
    //widget_find_replace_5(){        self.generated_html;    };
}