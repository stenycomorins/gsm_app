export const GhostButton = ( props ) => {
    return (
        <a class={"gsm-btn-toggle " + (props.disabled ? "toggle-disable" : "")} href="javascript:void(0)">
            <i class="mdi mdi-plus-box toggle-icon"></i> {props.label}
        </a>
    )
}