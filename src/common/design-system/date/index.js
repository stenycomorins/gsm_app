export const Date = ( props ) => {
    return (
        <div class="form-group mb-3">
            <label class="col-form-label" for="example-date">{props.label}</label>
            <input class="form-control" id="example-date" type="date" name="date" />
        </div>
    )
} 