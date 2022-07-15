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
    Button
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
            <Button type="primary" label="Primary Button"/>
            <Button type="secondary" label="Secondary Button"/>
            <Button label="Disabled Button" disabled={true}/>
            <Button label="Outline Default" border={true} outline="default" />
            <Button label="Outline light" border={true} outline="light" />
        </div>
    )
}