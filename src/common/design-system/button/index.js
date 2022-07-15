export const Button = ( props ) => {
   
    return (
        <div>
            <button type="button" 
                class={"gsm-btn " + (props.border ? "gsm-btn-outline " : "") + (props.outline ? "gsm-outline-"+props.outline+" " : "") + (props.type ? "gsm-btn-"+props.type : "")}
                disabled={props.disabled}
            >
                {props.label}
            </button>
        </div>
    )
}