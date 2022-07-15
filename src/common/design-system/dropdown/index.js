export const DropDown = ( props ) => {
    return (
        <div class={"form-group " + (props.display === "row" ? "form-group-inline row m-0 mb-3" : "form-group-block p-0 mb-3")}>
            <label class={"col-form-label " + (props.display === "row" && "align-self-center pl-0")}>{props.label}</label>
            <div class={"col " + (props.display === "row" ? "pr-0" : "p-0")}>
                <div class="dropdown gsmDropdown">
                    <a class="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">{props.placeholder}</a>
                    <ul class="dropdown-menu gsm-dropdown-menu">
                        <li><a href="#" class="gsm-dropdown-link">Individual</a></li>
                        <li><a href="#" class="gsm-dropdown-link">Company</a></li>
                        <li><a href="#" class="gsm-dropdown-link">Organization</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}