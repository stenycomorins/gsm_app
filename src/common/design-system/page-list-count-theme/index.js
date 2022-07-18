export const PageListCountTheme = () => {
    return (
        <div class="gsm-datatable_length">
            <label>
                Show
                <select name="gsm-datatable_length mt-3">
                    <option selected="">--</option>
                    <option value="1">10</option>
                    <option value="2">25</option>
                    <option value="3">50</option>
                </select>  
                entries 
            </label>
        </div>
    )
}