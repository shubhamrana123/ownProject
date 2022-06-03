import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogbodyComponent } from '../shared/dialog/dialogbody.component';
import { HttpService } from '../shared/http.service';
import { Url } from '../constant/url';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private matDialog: MatDialog,private https:HttpService) { }
  retrieveData(pageIndex: any, pageSize: any) {
    return this.https.get(Url.addEditUrl+'?PageIndex=' + pageIndex + '&PageSize=' + pageSize);
  }
  addUsers(data: any) {
    return this.https.post(Url.addEditUrl, data)
  }
  retrieveUserData(id: any) {
    return this.https.get(Url.addEditUrl+'/' + id)
  }
  onEditForm(data: any) {
    return this.https.put(Url.addEditUrl, data)
  }
  openDialog(data: any,title:any) {
    const dialogConfig = new MatDialogConfig();
    // if(typeof title!='undefined'){
    //   alert("hi")
    //   console.log(title.title.loginTitle);
      

    // }
    dialogConfig.data = {
      data,title
    }
  
    this.matDialog.open(DialogbodyComponent, dialogConfig);
  }
}
