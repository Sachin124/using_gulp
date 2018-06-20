import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; // Import If you are using Reactuve Form
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  updateBtn: boolean; // hide submit button when edit
  tempIndex: number; // for delete and edit operation
  saveData: any[] = []; // Save Form Data 
  crudForm: FormGroup; // formName 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm(); // call the function
  }

  // Create The Form Using Angular Reactive Form Technique
  createForm() {
    this.crudForm = this.fb.group({
      fName: new FormControl(), // use this name in formControlName in html File
      lName: new FormControl(),
      address: new FormControl(),
      batch: new FormControl()
    })
  }

// Save Form in SaveData Array
  save() {
    this.saveData.push({
      fName: this.crudForm.get('fName').value,
      lName: this.crudForm.get('lName').value,
      address: this.crudForm.get('address').value,
      batch: this.crudForm.get('batch').value
    });
  }

// Delete Row from Data Grid/ Table using Index
  delete(index: number) {
    this.saveData.splice(index, 1);
  }

// Edit Row from Data Grid/ Table using Index
  
  editRow(index: number) {
    this.updateBtn= true;    
    this.tempIndex = index;
    this.crudForm.setValue({
      fName: this.saveData[index].fName,
      lName: this.saveData[index].lName,
      address: this.saveData[index].address,
      batch: this.saveData[index].batch
    });
  }
// Save Edited Row Data from Data Grid/ Table using Index

  saveEdit() {
    this.saveData.forEach((element,index)=>{
      this.saveData[this.tempIndex].fName = this.crudForm.get('fName').value;
      this.saveData[this.tempIndex].lName = this.crudForm.get('lName').value;
      this.saveData[this.tempIndex].address = this.crudForm.get('address').value;
      this.saveData[this.tempIndex].batch = this.crudForm.get('batch').value;      
    });
    this.updateBtn= false;
  }
}
