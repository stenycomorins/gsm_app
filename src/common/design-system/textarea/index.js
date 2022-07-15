export const TextArea = ( props ) => {
    return (
        <div class="form-group form-group-block mb-4">
            <label class="col-form-label" for="labelTextarea-1">{props.label}</label>
            <textarea class="form-control" id="labelTextarea-1" placeholder="Placeholder text"></textarea>
        </div>
    )
}