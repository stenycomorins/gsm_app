export const RadioButton = () => {
    return (
        <div>
             <div class="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                <label class="custom-control-label" for="customRadio1"><span class="control-text">Radiobutton item 1</span></label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                <label class="custom-control-label" for="customRadio2"><span class="control-text">Radiobutton item 2</span></label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" disabled />
                <label class="custom-control-label" for="customRadio3"><span class="control-text">Radiobutton item 3</span></label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input" disabled checked />
                <label class="custom-control-label" for="customRadio4"><span class="control-text">Radiobutton item 4</span></label>
            </div>
        </div>
    )
}