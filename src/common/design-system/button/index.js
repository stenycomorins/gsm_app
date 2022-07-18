export const Button = ( props ) => {
   
    return (
        <button type="button" 
            class={"gsm-btn " + 
                (props.type ? "gsm-btn-"+props.type+" " : "") +
                (props.border ? "gsm-btn-outline " : "") + 
                (props.outline ? "gsm-outline-"+props.outline+" " : "") +
                (props.size === "small" ? "gsm-btn-sm " : "") +
                (props.display === "block" ? "btn-block" : "")
            }
            disabled={props.disabled}
        >
            {props.label}
        </button>
    )
}