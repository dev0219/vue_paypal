import Task from '/src/new_tab/apps/AppProjects/Task.js';
export default class Project{
    constructor(){

    }
    refresh_project_list(all_projects) {
        jQuery(all_projects).each(function (index, object) {
            let element = "<button type=\"button\" class=\"btn btn-secondary project_link \" data-project_id=\"" + object.project_id + "\">" + object.project_client_name + "</button>";
            jQuery('#project_list').append(element);

        });
    }
    bind_on_submit_store() {
        $(document).on("click", "#btn_form_new_project", function () {
            console.log('FIRED->submit->project');
            let date          = new Date();
            let current_day   = date.getDay();
            let current_month = date.getMonth();
            let current_year  = date.getFullYear();
            let created       = Date.now();

            let project_client_name = jQuery('#project_client_name').val();

            if (project_client_name === '') {
                alert('Missing Project Name');
            } else {
                let project_contract_type = jQuery('#project_contract_type').val();
                let project_amount        = jQuery('#project_amount').val();
                let project_hourly_rate   = jQuery('#project_amount').val();
                let project_date_start    = new Date(jQuery('#project_date_start').val());
                let start_day             = project_date_start.getDate();
                let start_month           = project_date_start.getMonth() + 1;
                let start_year            = project_date_start.getFullYear();


                let project_date_due = new Date(jQuery('#project_date_due').val());
                let due_day          = project_date_due.getDate();
                let due_month        = project_date_due.getMonth() + 1;
                let due_year         = project_date_due.getFullYear();

                let project_project_type = jQuery('#project_project_type').val();
                let project_platform     = jQuery('#project_platform').val();

                let project_website   = jQuery('#project_website').val();
                let project_email     = jQuery('#project_email').val();
                let project_phone     = jQuery('#project_phone').val();
                let project_time_zone = jQuery('#project_time_zone').val();
                let project_notes     = jQuery('#project_notes').val();

                let object = {
                    "id"                   : created,
                    "project_contract_type": project_contract_type,
                    "project_amount"       : project_amount,
                    "project_hourly_rate"  : project_hourly_rate,
                    "project_date_start"   : project_date_start,
                    "project_date_due"     : project_date_due,
                    "project_project_type" : project_project_type,
                    "project_platform"     : project_platform,
                    "project_client_name"  : project_client_name,
                    "project_website"      : project_website,
                    "project_email"        : project_email,
                    "project_phone"        : project_phone,
                    "project_time_zone"    : project_time_zone,
                    "project_notes"        : project_notes,
                    "created"              : created,
                    "created_day"          : current_day,
                    "created_month"        : current_month,
                    "created_year"         : current_year,
                    "start_day"            : start_day,
                    "start_month"          : start_month,
                    "start_year"           : start_year,
                    "due_day"              : due_day,
                    "due_month"            : due_month,
                    "due_year"             : due_year
                };
                ChromeStorage.chrome_store('app_projects_', object);
                // chrome.storage.sync.set({[object.project_id]: object}, function () {
                //     console.log('STORED -> ' + JSON.stringify(object));
                //     let projects = self.chrome_fetch_projects();
                //     jQuery('#modal_project').modal('hide');
                //     self.refresh_project_list(projects);
                // });
            }
        });
    }
    bind_on_click_project(){
        $(document).on("click", ".project_link", function () {
            jQuery('.project_link').removeClass('bg-info');
            jQuery(this).addClass('bg-info');
            let project_id = parseInt(jQuery(this).attr('data-project_id'));
            jQuery('#app_container').attr('data-project_id', project_id);
            Task.refresh_project_tasks(project_id);
        });

    }
}