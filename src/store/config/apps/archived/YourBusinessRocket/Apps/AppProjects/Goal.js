export default class Goal{
    constructor(){

    }
    on_submit_goals() {
        $(document).on("click", "#btn_form_goals_submit", function () {
            let array               = [];
            let goal_income_daily   = jQuery('#goal_income_daily').val();
            let goal_income_weekly  = jQuery('#goal_income_weekly').val();
            let goal_income_monthly = jQuery('#goal_income_monthly').val();
            let goal_income_yearly  = jQuery('#goal_income_yearly').val();

            array.push({"goal_income_daily": goal_income_daily});
            array.push({"goal_income_weekly": goal_income_weekly});
            array.push({"goal_income_monthly": goal_income_monthly});
            array.push({"goal_income_yearl": goal_income_yearly});

            chrome.storage.sync.set(array);
            jQuery('#modal_goals').modal('hide');
        });
    }
}