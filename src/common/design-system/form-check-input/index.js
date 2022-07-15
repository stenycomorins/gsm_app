export const FormCheckInput = ( props ) => {
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
                {props.label}
            </label>
        </div>
    )
}