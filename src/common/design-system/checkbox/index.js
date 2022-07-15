export const CheckBox = () => {
    return (
        <div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1"><span class="control-text">Checkbox item 1</span></label> 
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                <label class="custom-control-label" for="customCheck2"><span class="control-text">Checkbox item 2</span></label> 
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" checked disabled="disabled" id="customCheck3" />
                <label class="custom-control-label" for="customCheck3"><span class="control-text">Checkbox item 3</span></label> 
            </div>
        </div>
    )
}