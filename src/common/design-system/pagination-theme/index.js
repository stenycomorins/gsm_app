export const PaginationTheme = ( props ) => {
    return (
        <ul class="pagination pagination-sm">
            <li class="page-item"><a class="page-link page-link-navigation" href="#"><img src="assets/images/page-prev-icon.png" /></a></li>
            <li class="page-item"><a class="page-link active" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link page-link-navigation" href="#"><img src="assets/images/page-next-icon.png" /></a></li>
        </ul>
    )
}