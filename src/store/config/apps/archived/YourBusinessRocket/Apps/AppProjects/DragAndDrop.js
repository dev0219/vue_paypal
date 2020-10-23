export default class DragAndDrop{
    constructor(){

    }
    static on_drag() {
        jQuery('.draggable').draggable({
                                           stack      : ".draggable",
                                           scroll     : false,              // If set to true, container auto-scrolls while dragging.
                                           delay      : 300,
                                           revert     : true,
                                           containment: 'document',
                                           opacity    : 0.90,               // Opacity for the helper while being dragged.
                                           zIndex     : 10000,              // Z-index for the helper while being dragged.
                                           appendTo   : "body",             // Which element the draggable helper should be appended to while dragging.
                                           cursor     : "hand",             // type of cursor to use
                                           cursorAt   : {                    // Sets the offset of the dragging helper relative to the mouse cursor.
                                               left: 0,
                                               top : 0
                                           },
                                           helper     : 'clone',
                                           start      : function (event, ui) {
                                               console.log('drag started...');
                                           },
                                           drag       : function (event, ui) {
                                               console.log('dragging....');
                                           },
                                           stop       : function (event, ui) {
                                               console.log('drag stopped...');
                                           }
                                       });
    }
    static on_drop() {
        let self = this;
        jQuery('.droppable').droppable({
                                           hoverClass: "bg-danger",
                                           greedy    : true,
                                           tolerance : "pointer",
                                           activate  : function (element) {
// var dropzone = jQuery(this);
                                           },
                                           over      : function (element) {
                                               console.log('HOVERING OVER DROPPABLE');
// var dropzone = jQuery(this);
                                           },
                                           out       : function (element) {
                                               console.log('NOT IN DROP ZONE');
// var dropzone = jQuery(this);
                                           },
                                           drop      : function (event, ui) {
// GET THE DROP ZONE
                                               var drop_zone         = jQuery(this);
                                               var parent_id_element = jQuery(this).attr('id');
                                               var dropped_element   = ui.draggable;

                                               var new_task_status = jQuery(drop_zone).data('task_status');
                                               var task_id         = jQuery(dropped_element).attr('id');
                                               jQuery(drop_zone).append(dropped_element);

                                               self.update_task_status(new_task_status, task_id);

                                           }
                                       });
    }
    static on_sort() {
        jQuery(".droppable_canvas").sortable({
                                                 disabled   : false,                        // Disables the sortable if set to true.
                                                 placeholder: "ui-state-highlight",       // A class name that gets applied to the otherwise white space.
                                                 items      : ".node",                       // Specifies which items inside the element should be sortable.
                                                 distance   : 5,                            // sorting will not start until after mouse is dragged beyond distance.
                                                 axis       : "y", 		          // If defined, the items can be dragged only horizontally or vertically. Possible values: "x", "y".
                                                 containment: "parent",
                                                 cursor     : "move",
                                                 zIndex     : 9999,
                                                 delay      : 5,
                                                 tolerance  : "pointer",                    // Z-index for element/helper while being sorted.
                                                 classes    : {
                                                     "ui-sortable": "highlight"
                                                 },
                                                 create     : function (event, ui) {
//console.log('sorting: create');
                                                 },
                                                 start      : function (event, ui) {
//console.log('sorting: start');
                                                     jQuery('.droppable_canvas').droppable("disable");
                                                     var sort_zone = jQuery(this);
                                                     var item      = ui.item;
                                                     var item_id   = ui.item.attr("id");
                                                     if (jQuery(sort_zone).hasClass("droppable_canvas") && jQuery(item).hasClass("node_section")) {
                                                         jQuery(".droppable_container, .droppable_row, .droppable_column, .droppable_element").sortable("disable");
                                                         jQuery(".droppable_section").sortable("enable");
                                                     } else if (jQuery(sort_zone).hasClass("droppable_section") && jQuery(item).hasClass("node_container")) {
                                                         jQuery(".droppable_section, .droppable_row, .droppable_column, .droppable_element").sortable("disable");
                                                         jQuery(".droppable_container").sortable("enable");
                                                     } else if (jQuery(sort_zone).hasClass("droppable_container") && jQuery(item).hasClass("node_row")) {
                                                         jQuery(".droppable_section, .droppable_container,.droppable_column, .droppable_element").sortable("disable");
                                                         jQuery(".droppable_row").sortable("enable");
                                                     } else if (jQuery(sort_zone).hasClass("droppable_row") && jQuery(item).hasClass("node_column")) {
                                                         jQuery(".droppable_section, .droppable_container, .droppable_row, .droppable_element").sortable("disable");
                                                         jQuery(".droppable_column").sortable("enable");
                                                     }
                                                 },
                                                 activate   : function (event, ui) {
//console.log('sorting: activate');
                                                 },
                                                 over       : function (event, ui) {
//console.log('sorting: over');
                                                     ui.placeholder.addClass('placeholder_background');
                                                 },
                                                 sort       : function (event, ui) {
//console.log('sorting: sort');
                                                 },
                                                 change     : function (event, ui) {
//console.log('sorting: change');
                                                 },
                                                 beforeStop : function (event, ui) {
//console.log('sorting: before stop');
                                                 },
                                                 stop       : function (event, ui) {
//console.log('sorting: stop');
                                                 },
                                                 update     : function (event, ui) {

                                                 },
                                                 deactivate : function (event, ui) {
//console.log('sorting: deactivated');
                                                     jQuery('.droppable_canvas').droppable("enable");
                                                 },
                                                 receive    : function (event, ui) {
//console.log('sorting: receive');
                                                 },
                                                 remove     : function (event, ui) {
//console.log('sorting remove');
                                                 }
                                             });
    }
}