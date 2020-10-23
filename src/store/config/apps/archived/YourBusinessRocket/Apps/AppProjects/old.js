

// /*** step -> BIND -> WIDGETS -> TOP RIGHT ///////////////////////////////////////////////////////////*/
// this.on_click_top_right_btn_create_new();
// this.on_click_top_right_dd_project_settings();
//
// /*** step -> BIND -> WIDGETS -> FORMS ///////////////////////////////////////////////////////////*/
// this.on_change_form_create_new_task_fields();
// this.on_submit_form_new_project();
// this.on_submit_form_new_team_member();
// this.on_submit_form_new_task();
// this.on_submit_goals();
//
// /*** step -> BIND -> WIDGETS -> CENTER ///////////////////////////////////////////////////////////*/
// this.on_click_project();
// this.on_click_task();

async refresh_class_object(property_name) {
    let self = this;
    if (property_name === 'projects') {
        this.all_projects = await self.chrome_fetch_projects();
    } else if (property_name === 'tasks') {
        this.all_tasks = await self.chrome_fetch_tasks();
    } else if (property_name === 'team_members') {
        this.all_team_members = await self.chrome_fetch_team_members();
    } else if (property_name === 'goals') {
        this.all_goals = await self.chrome_fetch_goals();
    } else if (property_name === 'settings') {
        this.all_settings = await self.chrome_fetch_settings();
    } else if (property_name === 'notes') {
        this.all_notes = await self.chrome_fetch_notes();
    } else if (property_name === 'reminders') {
        this.all_reminders = await self.chrome_fetch_reminders();
    } else if (property_name === 'reports') {
        this.all_reports = await self.chrome_fetch_reports();
    } else if (property_name === 'leads') {
        this.all_leads = await self.chrome_fetch_leads();
    }
}
/*** step -> CHROME FETCH ///////////////////////////////////////////////////////////*/
async chrome_fetch_projects() {
    let self    = this;
    let array   = [];
    let total_projects;
    let promise = new Promise((resolve, reject) => {
        chrome.storage.sync.get(null, function (results) {
            if (jQuery.isEmptyObject(results)) {
                reject('Failed - fetch projects - all');
            } else {
                Object.keys(results).forEach(function (item) {
                    if (item.includes('project_')) {
                        total_projects++;
                        array.push(results[item]);
                    }
                });
                self.total_projects = total_projects;
                resolve(array);
            }
        });
    });
    return await promise;
}
async chrome_fetch_tasks() {
    let self                  = this;
    let array                 = [];
    let total_tasks_open      = 0;
    let total_tasks_assigned  = 0;
    let total_tasks_in_review = 0;
    let total_tasks_completed = 0;
    let promise               = new Promise((resolve, reject) => {
        chrome.storage.sync.get(null, function (results) {
            if (jQuery.isEmptyObject(results)) {
                reject('Failed - fetch tasks - all');
            } else {
                Object.keys(results).forEach(function (item) {
                    if (item.includes('task_')) {
                        array.push(results[item]);
                    }
                });
                jQuery(array).each(function (index, object) {
                    if (object.task_status === 'open') {
                        total_tasks_open++;
                    } else if (object.task_status === 'assigned') {
                        total_tasks_assigned++;
                    } else if (object.task_status === 'in_review') {
                        total_tasks_in_review++;
                    } else if (object.task_status === 'completed') {
                        total_tasks_completed++;
                    }
                });

                self.total_tasks_open      = total_tasks_open;
                self.total_tasks_assigned  = total_tasks_assigned;
                self.total_tasks_in_review = total_tasks_in_review;
                self.total_tasks_completed = total_tasks_completed;
                self.all_tasks             = array;
                resolve(array);
            }
        });
    });
    return await promise;
}
async chrome_fetch_team_members() {
    let self    = this;
    let array   = [];
    let promise = new Promise((resolve, reject) => {
        chrome.storage.sync.get(null, function (results) {
            if (jQuery.isEmptyObject(results)) {
                reject('Failed - fetch team members - all');
            } else {
                Object.keys(results).forEach(function (item) {
                    if (item.includes('team_member_')) {
                        array.push(results[item]);
                    }
                });
                self.all_team_members = array;
                resolve(array);
            }
        });
    });
    return await promise;
}
// async chrome_fetch_settings() {
//     let self    = this;
//     let array   = [];
//     let promise = new Promise((resolve, reject) => {
//         chrome.storage.sync.get(null, function (results) {
//             if (jQuery.isEmptyObject(results)) {
//                 reject('Failed - fetch settings - all');
//             } else {
//                 Object.keys(results).forEach(function (item) {
//                     if (item.includes('setting_')) {
//                         array.push(results[item]);
//                     }
//                 });
//                 self.all_settings = array;
//                 resolve(array);
//             }
//         });
//     });
//     return await promise;
// }
// async chrome_fetch_goals() {
//     let self    = this;
//     let array   = [];
//     let promise = new Promise((resolve, reject) => {
//         chrome.storage.sync.get(null, function (results) {
//             if (jQuery.isEmptyObject(results)) {
//                 reject('Failed - fetch goals - all');
//             } else {
//                 Object.keys(results).forEach(function (item) {
//                     if (item.includes('goal_')) {
//                         array.push(results[item]);
//                     }
//                 });
//                 self.all_goals = array;
//                 resolve(array);
//             }
//         });
//     });
//     return await promise;
// }
// async chrome_fetch_notes() {
//     let self    = this;
//     let array   = [];
//     let promise = new Promise((resolve, reject) => {
//         chrome.storage.sync.get(null, function (results) {
//             if (jQuery.isEmptyObject(results)) {
//                 reject('Failed - fetch notes - all');
//             } else {
//                 Object.keys(results).forEach(function (item) {
//                     if (item.includes('note_')) {
//                         array.push(results[item]);
//                     }
//                 });
//                 self.all_notes = array;
//                 resolve(array);
//             }
//         });
//     });
//     return await promise;
// }
// async chrome_fetch_reminders() {
//     let self    = this;
//     let array   = [];
//     let promise = new Promise((resolve, reject) => {
//         chrome.storage.sync.get(null, function (results) {
//             if (jQuery.isEmptyObject(results)) {
//                 reject('Failed - fetch reminders - all');
//             } else {
//                 Object.keys(results).forEach(function (item) {
//                     if (item.includes('reminder_')) {
//                         array.push(results[item]);
//                     }
//                 });
//                 self.all_reminders = array;
//                 resolve(array);
//             }
//         });
//     });
//     return await promise;
// }
// async chrome_fetch_reports() {
//     let self    = this;
//     let array   = [];
//     let promise = new Promise((resolve, reject) => {
//         chrome.storage.sync.get(null, function (results) {
//             if (jQuery.isEmptyObject(results)) {
//                 reject('Failed - fetch log item - all');
//             } else {
//                 Object.keys(results).forEach(function (item) {
//                     if (item.includes('log_item_')) {
//                         array.push(results[item]);
//                     }
//                 });
//                 self.all_reports = array;
//                 resolve(array);
//             }
//         });
//     });
//     return await promise;
// }
// async chrome_fetch_leads() {
//     let self    = this;
//     let array   = [];
//     let promise = new Promise((resolve, reject) => {
//         chrome.storage.sync.get(null, function (results) {
//             if (jQuery.isEmptyObject(results)) {
//                 reject('Failed - fetch lead - all');
//             } else {
//                 Object.keys(results).forEach(function (item) {
//                     if (item.includes('lead_')) {
//                         array.push(results[item]);
//                     }
//                 });
//                 self.all_leads = array;
//                 resolve(array);
//             }
//         });
//     });
//     return await promise;
// }
async chrome_fetch_project_tasks(project_id) {
    let self                          = this;
    let array                         = [];
    let project_total_tasks_open      = 0;
    let project_total_tasks_assigned  = 0;
    let project_total_tasks_in_review = 0;
    let project_total_tasks_completed = 0;
    let promise                       = new Promise((resolve, reject) => {
        chrome.storage.sync.get(null, function (results) {
            if (jQuery.isEmptyObject(results)) {
                reject('Failed - fetch tasks - project - single');
            } else {
                console.log('here 1');
                Object.keys(results).forEach(function (item) {
                    if (project_id === 0) {
                        console.log('here 2');
                        array.push(results[item]);
                    } else {

                        let task_project_id = results[item].task_project_id;
                        console.log('here 3');
                        console.log('1111' + task_project_id);
                        console.log(project_id);
                        if (task_project_id === project_id) {
                            console.log('here 4');
                            array.push(results[item]);
                        } else {
                            console.log('problem');
                        }
                    }

                });
                console.log('HERE.....................');

                console.log(array);
                jQuery(array).each(function (index, object) {
                    if (object.task_status === 'open') {
                        project_total_tasks_open++;
                    } else if (object.task_status === 'assigned') {
                        project_total_tasks_assigned++;
                    } else if (object.task_status === 'in_review') {
                        project_total_tasks_in_review++;
                    } else if (object.task_status === 'completed') {
                        project_total_tasks_completed++;
                    }
                });

                self.project_total_tasks_open      = project_total_tasks_open;
                self.project_total_tasks_assigned  = project_total_tasks_assigned;
                self.project_total_tasks_in_review = project_total_tasks_in_review;
                self.project_total_tasks_completed = project_total_tasks_completed;
                self.project_all_tasks             = array;
                resolve(array);
            }
        });
    });
    return await promise;
}

/*** step -> BIND -> WIDGETS ///////////////////////////////////////////////////////////*/


/*** step -> REFRESH -> DOM -> PROJECT LIST///////////////////////////////////////////////////////////*/


/*** step -> REFRESH -> DOM -> PROJECT -> SINGLE ///////////////////////////////////////////////////////////*/
async refresh_project(project_id) {
    let self = this;
    await this.chrome_fetch_project_tasks(project_id);
    self.refresh_project_tasks();
    self.refresh_project_task_counters();
    self.refresh_project_payouts();
    self.refresh_project_profits();
    self.refresh_project_income();
    self.on_drag();
    self.on_drop();
    self.on_sort();
}

refresh_project_task_counters() {
    let total_tasks_open      = this.total_tasks_open;
    let total_tasks_assigned  = this.total_tasks_assigned;
    let total_tasks_in_review = this.total_tasks_in_review;
    let total_tasks_completed = this.total_tasks_completed;
    let total_projects        = this.total_projects;

    jQuery('#counter_total_tasks_open').text(total_tasks_open);
    jQuery('#counter_total_tasks_assigned').text(total_tasks_assigned);
    jQuery('#counter_total_tasks_in_review').text(total_tasks_in_review);
    jQuery('#counter_total_tasks_completed').text(total_tasks_completed);
}
refresh_project_payouts() {
    let self  = this;
    let tasks = this.project_all_tasks;
    console.log(tasks);
    jQuery(tasks).each(function (index, object) {
        let clone = self.generate_html_payouts_table(object);
        jQuery('#table_body_payouts').html(clone);
    });
}
refresh_project_profits() {
    let self  = this;
    let tasks = this.project_all_tasks;
    jQuery(tasks).each(function (index, object) {
        console.log('object_project_id->' + object.task_project_id);
        let clone = self.generate_html_profits_table(object);
        jQuery('#table_body_profits').html(clone);
    });
}
refresh_project_income() {
    let tasks = this.project_all_tasks;

    let date          = new Date();
    let current_day   = date.getDay();
    let current_month = date.getMonth() + 1;
    let current_year  = date.getFullYear();
    let last_week     = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    /*** step -> INCOMING - TODAY ///////////////////////////////////////////////////////////*/
    let tasks_today        = tasks.filter(function (object) {
        return object.created_day === current_day;
    });
    let tasks_income_today = 0;
    jQuery(tasks_today).each(function (index, object) {
        let task_profit = parseInt(object.task_amount_profit) || 0;
        console.log(task_profit);
        tasks_income_today = +task_profit;
    });

    /*** step -> INCOMING - WEEK ///////////////////////////////////////////////////////////*/
    let tasks_week        = tasks.filter(function (object) {
        return object.created > last_week;
    });
    let tasks_income_week = 0;
    jQuery(tasks_week).each(function (index, object) {
        let task_profit   = parseInt(object.task_amount_profit) || 0;
        tasks_income_week = +task_profit;
    });


    /*** step -> INCOME - MONTH ///////////////////////////////////////////////////////////*/
    let tasks_month        = tasks.filter(function (object) {
        return object.created_month === current_month;
    });
    let tasks_income_month = 0;
    jQuery(tasks_month).each(function (index, object) {
        let task_profit    = parseInt(object.task_amount_profit) || 0;
        tasks_income_month = +task_profit;
    });

    /*** step -> INCOME - MONTH ///////////////////////////////////////////////////////////*/
    let tasks_year        = tasks.filter(function (object) {
        return object.created_year === current_year;
    });
    let tasks_income_year = 0;
    jQuery(tasks_year).each(function (index, object) {
        let task_profit   = parseInt(object.task_amount_profit) || 0;
        tasks_income_year = +task_profit || 0;
    });

    this.generate_html_widget_counter_income_today(tasks_income_today);
    this.generate_html_widget_counter_income_week(tasks_income_week);
    this.generate_html_widget_counter_income_month(tasks_income_month);
    this.generate_html_widget_counter_income_year(tasks_income_year);
}

/*** step -> GENERATE HTML ///////////////////////////////////////////////////////////*/
generate_html_widget_task(object) {
    let node_task = jQuery('#node_task').clone();
    jQuery(node_task).attr('id', object.task_id);
    jQuery(node_task).attr('data-project_id', object.task_project_id);
    jQuery(node_task).attr('data-task_id', object.task_id);
    jQuery(node_task).attr('data-team_member_id', object.task_assigned_to);

    let profit = object.task_amount_profit || 0;
    profit     = "$" + String(profit.toFixed(2));

    let due_date = object.due_month + '/' + object.due_day;
    jQuery(node_task).find('#node_task_due_in').text(due_date);
    jQuery(node_task).find('#node_task_profit').text(profit);
    jQuery(node_task).find('#node_task_title').text(object.task_title);
    jQuery(node_task).find('#node_task_team_member').text('Assigned to: ' + object.task_assigned_to);
    jQuery(node_task).find('#node_task_progress_bar').attr('aria-valuenow', object.task_percentage_completed);
    jQuery(node_task).find('#node_task_progress_bar').css('width', object.task_percentage_completed);
    jQuery(node_task).find('#node_task_progress_percentage').text(object.task_percentage_completed + '%');
    jQuery(node_task).removeClass('node');
    return node_task;
}
generate_html_payouts_table(object) {
    let due_date = object.due_month + '/' + object.due_day + '/' + object.due_year;
    let clone    = jQuery('#node_widget_tr_payout').find('tr').clone();
    jQuery(clone).find('#node_payout_task_id').text(object.task_id);
    jQuery(clone).find('#node_payout_date').text(due_date);
    jQuery(clone).find('#node_payout_title').text(object.task_title);
    jQuery(clone).find('#node_payout_assigned_to').text(object.task_assigned_to);
    jQuery(clone).find('#node_payout_amount_client').text(object.task_hours_billed_client);
    jQuery(clone).find('#node_payout_amount_payout').text(object.task_amount_payout);
    jQuery(clone).find('#node_payout_amount_profit').text(object.task_amount_profit);
    jQuery(clone).find('#node_payout_status').text(object.task_amount_billed);
    return clone;
}
generate_html_profits_table(object) {
    let due_date = object.due_month + '/' + object.due_day + '/' + object.due_year;
    let clone    = jQuery('#node_widget_tr_profit').find('tr').clone();
    jQuery(clone).find('#node_profit_task_id').text(object.task_id);
    jQuery(clone).find('#node_profit_date').text(due_date);
    jQuery(clone).find('#node_profit_title').text(object.task_title);
    jQuery(clone).find('#node_profit_assigned_to').text(object.task_assigned_to);
    jQuery(clone).find('#node_profit_amount_client').text(object.task_hours_billed_client);
    jQuery(clone).find('#node_profit_amount_payout').text(object.task_amount_payout);
    jQuery(clone).find('#node_profit_amount_profit').text(object.task_amount_profit);
    jQuery(clone).find('#node_profit_status').text(object.task_amount_billed);
    return clone;
}
generate_html_widget_counter_income_today(amount) {
    let clone = jQuery('#node_widget_income').clone();
    clone.find('#node_title').text('Today\'s Income');
    clone.find('#node_amount').text('$ ' + amount);
    clone.removeClass('node');
    jQuery('#counter_income_today').html(clone);

    console.log(amount);
}
generate_html_widget_counter_income_week(amount) {
    let clone = jQuery('#node_widget_income').clone();
    clone.find('#node_title').text('This Week');
    clone.find('#node_amount').text('$ ' + amount);
    clone.removeClass('node');
    jQuery('#counter_income_week').html(clone);
}
generate_html_widget_counter_income_month(amount) {
    let clone = jQuery('#node_widget_income').clone();
    clone.find('#node_title').text('This Month');
    clone.find('#node_amount').text('$ ' + amount);
    clone.removeClass('node');
    jQuery('#counter_income_month').html(clone);
}
generate_html_widget_counter_income_year(amount) {
    let clone = jQuery('#node_widget_income').clone();
    clone.find('#node_title').text('This Year');
    clone.find('#node_amount').text('$ ' + amount);
    clone.removeClass('node');
    jQuery('#counter_income_year').html(clone);
}
//generate_html_counter_payouts_revenue() {}
//generate_html_counter_payouts_payouts() {}
//generate_html_counter_payouts_profit() {}
//generate_html_counter_payouts_revenue() {}
//generate_html_counter_payouts_payouts() {}

/*** step -> PREFILL FORM FIELDS ///////////////////////////////////////////////////////////*/
prefill_form_fields() {
    let self = this;
    self.prefill_form_new_task_dd_projects();
    self.prefill_form_new_task_dd_assign_to();
}
prefill_form_new_task_dd_projects() {
    jQuery('#task_project').empty();
    jQuery(this.all_projects).each(function (index, object) {
        let element = "<option value=\"" + object.project_id + "\" data-hourly_rate=\"" + object.project_hourly_rate + "\">" + object.project_client_name + "</option>";
        jQuery('#task_project').append(element);
    });
}
prefill_form_new_task_dd_assign_to() {
    jQuery('#task_assigned_to').empty();
    jQuery(this.all_team_members).each(function (index, object) {
        let element = "<option value=\"" + object.team_member_name + "\" data-hourly_rate=\"" + object.team_member_hourly_rate + "\">" + object.team_member_name + "</option>";
        jQuery('#task_assigned_to').append(element);
    });
}
prefill_form_goals() {
    jQuery('#goal_income_daily').val(this.all_goals["goal_income_daily"]);
    jQuery('#goal_income_weekly').val(this.all_goals["goal_income_weekly"]);
    jQuery('#goal_income_monthly').val(this.all_goals["goal_income_monthly"]);
    jQuery('#goal_income_yearly').val(this.all_goals["goal_income_yearly"]);
    jQuery('#modal_goals').modal('show');
}

/*** step -> ACTIONS ///////////////////////////////////////////////////////////////////////*/
action_project_delete(project_id) {
    chrome.storage.sync.remove(project_id);
}
action_project_tasks_delete(project_id) {

}
action_projects_delete_all() {
    let array = [];
    let self  = this;
    chrome.storage.sync.get(null, function (results) {
        if (jQuery.isEmptyObject(results)) {
            reject('Failed - projects delete - all');
        } else {
            Object.keys(results).forEach(function (item) {
                if (item.includes('project_') || item.includes('task_')) {
                    array.push(item);
                }
            });
            console.log('here');
            console.log(array);
            chrome.storage.sync.remove(array);
            self.refresh_project_tasks();
            self.refresh_project_list();
        }
    });
}
action_tasks_delete_all() {
    let array = [];
    let self  = this;
    chrome.storage.sync.get(null, function (results) {
        if (jQuery.isEmptyObject(results)) {
            reject('Failed - tasks delete - all');
        } else {
            Object.keys(results).forEach(function (item) {
                if (item.includes('task_')) {
                    array.push(item);
                }
            });
            console.log('here');
            console.log(array);
            chrome.storage.sync.remove(array);
            self.refresh_project_tasks();
        }
    });

}
action_team_members_delete_all() {
    let array = [];
    chrome.storage.sync.get(null, function (results) {
        if (jQuery.isEmptyObject(results)) {
            reject('Failed - team member delete - all');
        } else {
            Object.keys(results).forEach(function (item) {
                if (item.includes('team_member_')) {
                    array.push(item);
                }
            });
            console.log('here');
            console.log(array);
            chrome.storage.sync.remove(array);
        }
    });
}
update_task_status(new_task_status, task_id) {
    let self = this;
    chrome.storage.sync.get([task_id], function (results) {
        let object = results[task_id];
        console.log(object);
        object.task_status = new_task_status;
        chrome.storage.sync.set({[task_id]: object}, function () {
            self.refresh_class_object('tasks');
        });
    });
}

on_enter_google_search() {
    jQuery(document).on('keypress', '#field_top_header_search', function (event) {
        if (event.which === 13) {
            event.preventDefault();
            let search_value = jQuery('#field_top_header_search').val();
            let search_query = "https://www.google.com/search?q=" + search_value;
            window.location.replace(search_query);
        }
    });
}
on_click_top_right_btn_create_new() {
    let self = this;
    $(document).on("click", "#btn_create_new", function () {
        let modal = jQuery('#modal_project');
        jQuery(modal).attr('data-task_id', 0);
        jQuery(modal).attr('data-project_id', 0);
        jQuery(modal).attr('data-team_member_id', 0);

        jQuery('#li_modal_create_new_tab_projects').removeClass('hide');
        jQuery('#li_modal_create_new_team_member').removeClass('hide');
        self.prefill_form_fields();
    });
}
on_click_top_right_dd_project_settings() {
    let self = this;
    $(document).on("change", "#project_settings", function () {
        let trigger_action = jQuery(this).val();
        let project_id     = jQuery('#app_container').data('project_id');

        if (trigger_action === 'project_delete') {
            if (confirm('This Project -> Delete?')) {
                self.action_project_delete(project_id);
            }
        } else if (trigger_action === 'project_tasks_delete') {
            if (confirm('This Project -> Delete All Task?')) {
                self.action_project_tasks_delete(project_id);
            }
        } else if (trigger_action === 'tasks_delete_all') {
            if (confirm('All Projects -> Delete All Tasks?')) {
                self.action_tasks_delete_all();
            }
        } else if (trigger_action === 'projects_delete_all') {
            if (confirm('All Projects -> Delete?')) {
                self.action_projects_delete_all();
            }
        } else if (trigger_action === 'team_members_delete_all') {
            if (confirm('All Team Members -> Delete?')) {
                self.action_team_members_delete_all();
            }
        } else if (trigger_action === 'modal_goals') {
            self.prefill_form_goals();
        }
    });
}
on_change_form_create_new_task_fields() {
    $(document).on("change", "#task_hours_billed_client, #task_hours_allocated", function () {
//console.log('HERE....................');
        let hourly_rate_project      = jQuery('#task_project :selected').attr('data-hourly_rate');
//console.log('1->' + hourly_rate_project);
        let hourly_rate_assigned_to  = parseInt(jQuery('#task_assigned_to :selected').attr('data-hourly_rate'));
//console.log('2->' + hourly_rate_assigned_to);
        let task_hours_billed_client = parseInt(jQuery('#task_hours_billed_client').val());
//console.log('3->' + task_hours_billed_client);
        let task_hours_allocated     = parseInt(jQuery('#task_hours_allocated').val());
//console.log('4->' + task_hours_allocated);


        let calc_new_task_amount_client_billed = hourly_rate_project * task_hours_billed_client;
//console.log(calc_new_task_amount_client_billed);
        let calc_new_task_amount_payout        = hourly_rate_assigned_to * task_hours_allocated;
//console.log(calc_new_task_amount_payout);
        let calc_new_task_amount_profit        = calc_new_task_amount_client_billed - calc_new_task_amount_payout;
//console.log(calc_new_task_amount_profit);
        jQuery('#calc_new_task_amount_client_billed').text('$ ' + calc_new_task_amount_client_billed.toString());
        jQuery('#calc_new_task_amount_payout').text('$ ' + calc_new_task_amount_payout.toString());
        jQuery('#calc_new_task_amount_profit').text('$ ' + calc_new_task_amount_profit.toString());
    });
}

