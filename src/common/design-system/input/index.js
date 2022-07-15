export const TextInput = (props) => {
    return (
        <div class={"form-group " + (props.display === "row" ? "form-group-inline row m-0 mb-3" : "form-group-block p-0 mb-3")}>
            <label class={"col-form-label " + (props.display === "row" && "align-self-center pl-0")} for="alt_text">{props.label}</label>
            <div class={props.display === "row" && "col pr-0"}>
                <input type="text" class="form-control" id="alt_text" name="userName" placeholder={props.placeholder} />
            </div>
        </div>
    )
}