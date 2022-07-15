export const Accordian = () => {
    return (
        <div id="accordion" class="custom-accordion mb-4">
            <div class="card parent-card mb-0">
                <div class="card-header parent-card-header" id="sectionOne">
                    <h5 class="m-0">
                        <a class="custom-accordion-title d-block" data-toggle="collapse" href="#section_collapseOne" aria-expanded="true" aria-controls="section_collapseOne">
                            <span class=""><i class="mdi mdi-chevron-down accordion-arrow"></i></span> Landing Section 
                        </a>
                    </h5>
                </div>

                <div id="section_collapseOne" class="collapse show" aria-labelledby="sectionOne" data-parent="#accordion">
                    <div class="card-body parent-card-body">
                        <div id="sub-accordion" class="sub-custom-accordion">

                            <div class="card child-card mb-0">
                                <div class="card-header child-card-header" id="sub_sectionOne">
                                    <h5 class="m-0">
                                        <a class="custom-accordion-title d-block" data-toggle="collapse" href="#subsection_collapseOne" aria-expanded="true" aria-controls="subsection_collapseOne">
                                            <span class=""><i class="mdi mdi-chevron-down accordion-arrow"></i></span> Header Text
                                        </a>
                                    </h5>
                                </div>
                                <div id="subsection_collapseOne" class="collapse show" aria-labelledby="sub_sectionOne" data-parent="#sub-accordion">
                                    <div class="card-body child-card-body">
                                        <div class="form-group form-group-block">
                                            <input type="text" class="form-control" placeholder="placeholder text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card child-card mb-0">
                                <div class="card-header child-card-header" id="sub_sectionTwo">
                                    <h5 class="m-0">
                                        <a class="custom-accordion-title collapsed d-block" data-toggle="collapse" href="#subsection_collapseTwo" aria-expanded="false" aria-controls="subsection_collapseTwo">
                                            <span class=""><i class="mdi mdi-chevron-down accordion-arrow"></i></span> Body text 
                                        </a>
                                    </h5>
                                </div>
                                <div id="subsection_collapseTwo" class="collapse" aria-labelledby="sub_sectionTwo" data-parent="#sub-accordion">
                                    <div class="card-body child-card-body">
                                        <div class="form-group form-group-block mb-4">
                                            <textarea class="form-control" id="labelTextarea-3" placeholder="Placeholder text"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}