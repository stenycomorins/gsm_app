export const DropDown = ( props ) => {
    return (
        <div class="form-group form-group-block p-0 mb-2">
            <label class="col-form-label">{props.label}</label>
            <div class="col p-0">
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