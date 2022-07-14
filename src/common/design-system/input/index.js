export const TextInput = (props) => {
    return (
        <div className="form-group form-group-inline row m-0 mt-2">
            <label className="col-form-label align-self-center pl-0" for="alt_text">{props.label}</label>
            <div className="col pr-0">
                <input type="text" className="form-control" id="alt_text" name="userName" placeholder={props.placeholder} />
            </div>
        </div>
    )
}