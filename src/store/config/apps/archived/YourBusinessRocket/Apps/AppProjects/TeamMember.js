export default class TeamMember{
    constructor(){

    }
    on_submit_form_new_team_member() {
        console.log('bind - on submit - team member');
        $(document).on("click", "#btn_form_new_team_member", function () {

            let team_member_position       = jQuery('#team_member_position').val();
            let team_member_name           = jQuery('#team_member_name').val();
            let team_member_hourly_rate    = jQuery('#team_member_hourly_rate').val();
            let team_member_skype_name     = jQuery('#team_member_skype_name').val();
            let team_member_freelancer_url = jQuery('#team_member_freelancer_url').val();
            let team_member_email          = jQuery('#team_member_email').val();
            let team_member_country        = jQuery('#team_member_country').val();
            let team_member_time_zone      = jQuery('#team_member_time_zone').val();
            let team_member_notes          = jQuery('#team_member_notes').val();
            let team_member_skills         = jQuery('#team_member_skills').val();

            if (team_member_name === '') {
                alert('Missing Team Member Name');
            } else {
                console.log('triggered->submit->team_member');
                let date          = new Date();
                let current_day   = date.getDay();
                let current_month = date.getMonth();
                let current_year  = date.getFullYear();
                let created       = Date.now();

                let id = 'team_member_' + created;

                let object = {
                    "id"                        : id,
                    "team_member_position"      : team_member_position,
                    "team_member_name"          : team_member_name,
                    "team_member_hourly_rate"   : team_member_hourly_rate,
                    "team_member_skype_name"    : team_member_skype_name,
                    "team_member_freelancer_url": team_member_freelancer_url,
                    "team_member_email"         : team_member_email,
                    "team_member_country"       : team_member_country,
                    "team_member_time_zone"     : team_member_time_zone,
                    "team_member_notes"         : team_member_notes,
                    "team_member_skills"        : team_member_skills,
                    "created"                   : created,
                    "created_day"               : current_day,
                    "created_month"             : current_month,
                    "created_year"              : current_year,
                };
                chrome.storage.sync.set({[object.id]: object});

                jQuery('#modal_project').modal('hide');
            }
        });
    }
}