import { 
    Input, 
    DropDown, 
    Date, 
    Tag, 
    CheckBox, 
    RadioButton, 
    Switch, 
    TextArea, 
    Accordian, 
    Check, 
    Button,
    GhostButton,
    Pagination,
    ListCount,
    Breadcrumb
  } from "common/design-system";
  
  export default function DesignSystem () {
    return (
        <div class="wrapper p-5">
            <h4 class="header-title mb-3">Form Elements</h4>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title">Inputs</h4><br/>
                            <Input 
                                label="Label"
                                placeholder="form control placeholder" 
                                display="row"
                            />
                            <Input 
                                label="Label" 
                                placeholder="form control placeholder" 
                                display="col"
                            />
                            <br/><h4 class="header-title">DropDowns</h4><br/>
                            <DropDown
                                label="Label" 
                                placeholder="Choose" 
                                display="row"
                            />
                            <DropDown
                                label="Label" 
                                placeholder="Choose" 
                                display="col"
                            />
                            <br/><h4 class="header-title">Tags</h4><br/>
                            <Tag
                                label="Type 1 Tag" 
                                type="1"
                            /><br/>
                            <Tag
                                label="Type 2 Tag" 
                                type="2"
                            /><br/>
                            <br/><h4 class="header-title">TextArea</h4><br/>
                            <TextArea 
                                label="Label" 
                            />
                            <Check 
                                label="Check me out"
                            /><br/>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <Date label="Date"/>
                            <h4 class="header-title ">CheckBox</h4><br/>
                            <CheckBox /><br/>
                            <h4 class="header-title">RadioButton</h4><br/>
                            <RadioButton /><br/>
                            <h4 class="header-title ">Switch</h4>
                            <Switch />
                            <br/><h4 class="header-title ">Accordian</h4><br/>
                            <Accordian />
                        </div>
                    </div>
                </div>
            </div>

            <h4 class="header-title mb-3">Buttons</h4>
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title ">Default buttons</h4>
                        <div class="button-list">
                            <Button type="primary" label="Primary Button"/>
                            <Button type="secondary" label="Secondary Button"/>
                            <Button disabled={true} label="Disabled Button"/>
                        </div><br/><br/>
                        <h4 class="header-title ">Bordered buttons</h4>
                        <div class="button-list">
                            <Button border={true} outline="default" label="Outline Default"/>
                            <Button border={true} outline="light" label="Outline light"/>
                        </div><br/><br/>
                        <h4 class="header-title ">Button sizes</h4>
                        <div class="button-list">
                            <Button type="primary" label="Normal"/>
                            <Button type="secondary" label="Small" size="small"/>
                        </div><br/><br/>
                        <h4 class="header-title ">Block buttons</h4><br/>
                        <Button type="primary" display="block" label="primary-block button"/>
                        <Button type="secondary" display="block" label="secondary-block button"/>
                        <Button type="primary" label="small-primary-block" size="small" display="block"/>
                        <Button type="secondary" label="small-secondary-block" size="small" display="block"/><br/><br/><br/>
                        <h4 class="header-title ">Default ghost buttons</h4>
                        <div class="button-list">
                            <GhostButton label="icon Button" />
                            <GhostButton label="icon Button disabled" disabled={true}/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title ">pagination theme</h4><br/>
                        <Pagination /><br/>
                        <h4 class="header-title ">page list count theme</h4><br/>
                        <ListCount />
                        <hr class="my-4"/>
                        <h4 class="header-title ">Breadcrumb — White theme</h4>
                        <Breadcrumb />
                    </div>
                </div>
            </div>
        </div>
    )
}