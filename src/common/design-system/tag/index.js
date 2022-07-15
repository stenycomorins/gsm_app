export const Tag = ( props ) => {
    return (
        <div class={"form-group tagtype m-0 " + (props.type === "1" ? "tagtype-1" : "tagtype-2")}>
            <label class="simple-label" for="simpleinput">{props.label}</label>
            <input type="text" data-role="tagsinput" name="tags" class="form-control" />
        </div>
    )
}