import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { popupMessage } from '../common-dialog';
@Component({
  selector: 'app-dialogbody',
  templateUrl: './dialogbody.component.html',
  styleUrls: ['./dialogbody.component.css']
})
export class DialogbodyComponent implements OnInit {
  title=''
 condition=false
  constructor(public dialogRef: MatDialogRef<DialogbodyComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if(typeof this.data.title!='undefined'){
      this.condition=true;
      alert("hi")
      this.title=data.title.loginTitle

    }
   }

  ngOnInit(): void {
    
 
  }
  close() {
    this.dialogRef.close();
  }

}
