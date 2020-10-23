import ChromeStorage from '/src/new_tab/core/ChromeStorage.js';
import Project from '/src/new_tab/apps/AppProjects/Project.js';
import Task from '/src/new_tab/apps/AppProjects/Task.js';
import TeamMember from '/src/new_tab/apps/AppProjects/TeamMember.js';
import DragAndDrop from '/src/new_tab/apps/AppProjects/DragAndDrop.js';
import Goal from '/src/new_tab/apps/AppProjects/Goal.js';

export default class AppProjects {
    constructor(app_json_data) {
        this.app_json_data = app_json_data;
        this.handle();
    }
    app_json_data;
    /*** step -> COUNTERS ///////////////////////////////////////////////////////////*/
    total_projects;
    total_tasks_open;
    total_tasks_assigned;
    total_tasks_in_review;
    total_tasks_completed;

    /*** step -> ARRAYS -> ALL ///////////////////////////////////////////////////////////*/
    all_projects;
    all_tasks;
    all_team_members;
    all_settings;
    all_goals;
    all_notes;
    all_reminders;
    all_reports;
    all_leads;

    project_all_tasks;


    async handle() {
        let self = this;
        await self.fetch_all();
        console.log(this.all_projects);
        //Project.refresh_project_list(this.all_projects);
        //Project.bind_on_submit_store();
        //Project.bind_on_click_project();
    }

    /*** step -> LOAD APP ///////////////////////////////////////////////////////////*/
    async fetch_all() {
        let self              = this;
        this.all_projects     = await ChromeStorage.FetchPrefix('app_projects_');
        this.all_tasks        = await ChromeStorage.FetchPrefix('app_projects_tasks_');
        this.all_team_members = await ChromeStorage.FetchPrefix('app_projects_team_members_');
        this.all_goals        = await ChromeStorage.FetchPrefix('app_projects_goals_');
        this.all_leads        = await ChromeStorage.FetchPrefix('app_projects_leads_');
        this.all_settings     = await ChromeStorage.FetchPrefix('app_projects_settings_');
        this.all_reports      = await ChromeStorage.FetchPrefix('app_projects_reports_');
        this.all_notes        = await ChromeStorage.FetchPrefix('app_projects_notes_');
        this.all_reminders    = await ChromeStorage.FetchPrefix('app_projects_reminders_');
    }


}

