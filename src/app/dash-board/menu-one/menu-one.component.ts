import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.css']
})
export class MenuOneComponent implements OnInit {
  phaseForm: FormGroup;
  selectedValue: string;
  numberOfRows :number;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.formReset();
  }

  formReset(){
    this.phaseForm = this._fb.group({
      phaseExecutions: this._fb.group({
        PRE: this._fb.array([this.addPhase()])
      })
    });
    this.selectedValue = "";
  }

  get f() { return this.phaseForm.controls; }
  addPhase() {
    return this._fb.group({
      phaseName: [''],
      phaseId: ['']
    });
  }

  addMorePhase() {
    
    this.phaseArray.push(this.addPhase());
  }
  addRows(){
    this.formReset();
    for(var i=0; i<this.numberOfRows;i++ ){
      this.addMorePhase();
    }
  }
  onSubmit() {
    console.log(this.phaseForm.value);
  }

  

  get phaseArray() {
    const control = <FormArray>(<FormGroup>this.phaseForm.get('phaseExecutions')).get('PRE');
    return control;
  }

}
