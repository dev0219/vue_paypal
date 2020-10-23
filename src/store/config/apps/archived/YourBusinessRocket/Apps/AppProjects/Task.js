export default class Task{
    constructor(){

    }
    refresh_project_tasks(project_id,all_tasks) {
        console.log('FIRED REFRESH TASKS..............');
        jQuery('#list_tasks_open').empty();
        jQuery('#list_tasks_assigned').empty();
        jQuery('#list_tasks_in_review').empty();
        jQuery('#list_tasks_completed').empty();
        let project_tasks  = all_tasks.filter(function (ob) {
            return project_id === ob.task_project_id;
        });
        jQuery(project_tasks).each(function (index, object) {
            let element = 'test'; //self.generate_html_widget_task(object);
            if (object.task_status === 'open') {
                jQuery('#list_tasks_open').append(element);
                console.log(element);
            } else if (object.task_status === 'assigned') {
                jQuery('#list_tasks_assigned').append(element);
            } else if (object.task_status === 'in_review') {
                jQuery('#list_tasks_in_review').append(element);
            } else if (object.task_status === 'completed') {
                jQuery('#list_tasks_completed').append(element);
            }
        });
    }
    on_submit_form_new_task() {
        let self = this;
        $(document).on("click", "#btn_form_new_task", function () {
            let date          = new Date();
            let current_day   = date.getDay();
            let current_month = date.getMonth() + 1;
            let current_year  = date.getFullYear();
            let created       = Date.now();

            let task_id          = 'task_' + created;
            let task_project_id  = jQuery('#task_project').val();
            let task_assigned_to = jQuery('#task_assigned_to').val();

            let task_title       = jQuery('#task_title').val();
            let task_description = jQuery('#task_description').val();

            let task_date_start = new Date(jQuery('#task_date_start').val());
            let start_day       = task_date_start.getDate();
            let start_month     = task_date_start.getMonth() + 1;
            let start_year      = task_date_start.getFullYear();

            let task_date_due = new Date(jQuery('#task_date_due').val());
            let due_day       = task_date_due.getDate();
            let due_month     = task_date_due.getMonth() + 1;
            let due_year      = task_date_due.getFullYear();

            if (task_title === '') {
                alert('Task missing title');
            } else {
                let task_status               = "open";
                let task_percentage_completed = jQuery('#task_percentage_completed').val() || 0;
                let hourly_rate_project       = jQuery('#task_project :selected').attr('data-hourly_rate');

                let hourly_rate_assigned_to  = parseInt(jQuery('#task_assigned_to :selected').attr('data-hourly_rate'));
                let task_hours_billed_client = parseInt(jQuery('#task_hours_billed_client').val());
                let task_hours_allocated     = parseInt(jQuery('#task_hours_allocated').val());

//console.log('1->' + hourly_rate_project);
//console.log('2->' + hourly_rate_assigned_to);
//console.log('3->' + task_hours_billed_client);
//console.log('4->' + task_hours_allocated);

                let calc_new_task_amount_client_billed = hourly_rate_project * task_hours_billed_client;
                let calc_new_task_amount_payout        = hourly_rate_assigned_to * task_hours_allocated;
                let calc_new_task_amount_profit        = calc_new_task_amount_client_billed - calc_new_task_amount_payout;

//console.log(calc_new_task_amount_client_billed);
//console.log(calc_new_task_amount_payout);
//console.log(calc_new_task_amount_profit);

                let object = {
                    "task_id"                  : task_id,
                    "task_project_id"          : task_project_id,
                    "task_assigned_to"         : task_assigned_to,
                    "task_status"              : task_status,
                    "task_percentage_completed": task_percentage_completed,
                    "task_title"               : task_title,
                    "task_description"         : task_description,
                    "task_date_start"          : task_date_start,
                    "task_date_due"            : task_date_due,
                    "task_hours_billed_client" : task_hours_billed_client,
                    "task_hours_allocated"     : task_hours_allocated,
                    "task_amount_payout"       : calc_new_task_amount_payout,
                    "task_amount_profit"       : calc_new_task_amount_profit,
                    "task_amount_billed"       : calc_new_task_amount_client_billed,
                    "created"                  : created,
                    "created_day"              : current_day,
                    "created_month"            : current_month,
                    "created_year"             : current_year,
                    "start_day"                : start_day,
                    "start_month"              : start_month,
                    "start_year"               : start_year,
                    "due_day"                  : due_day,
                    "due_month"                : due_month,
                    "due_year"                 : due_year
                };
                chrome.storage.sync.set({[object.task_id]: object}, function () {
                    console.log('STORED -> ' + JSON.stringify(object));
                    let tasks = self.chrome_fetch_tasks();
                    self.refresh_project_tasks(tasks);
                    jQuery('#modal_project').modal('hide');
                });
            }
        });
    }
    on_click_task() {
        $(document).on("click", ".task", function () {
            let task_id        = jQuery(this).attr('data-task_id');
            let project_id     = jQuery(this).attr('data-project_id');
            let team_member_id = jQuery(this).attr('data-team_member_id');
            let modal          = jQuery('#modal_project');
            jQuery(modal).attr('data-task_id', task_id);
            jQuery(modal).attr('data-project_id', project_id);
            jQuery(modal).attr('data-team_member_id', team_member_id);
            jQuery('#li_modal_create_new_tab_projects').addClass('hide');
            jQuery('#li_modal_create_new_team_member').addClass('hide');
            jQuery(modal).modal('show');
        });
    }
}