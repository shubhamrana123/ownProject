import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/user/user.service';
import { popupMessage } from 'src/app/shared/common-dialog';
import { pathValue } from 'src/app/constant/routes';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  @Input() parentData: any;
  submitted = false;
  addEditForms: FormGroup
  public id: any;
  isAdd: boolean;
  currentPage: number = 1;
  pageSize = 5;
  loading: any

  constructor(private form: FormBuilder, private userService: UserService, private activated: ActivatedRoute, private router: Router, private matDialog: MatDialog) { }

  ngOnInit(): void {

    this.activated.paramMap.subscribe(params => {
      this.id = params.get('userId');
      this.isAdd = !this.id;
      this.addEditForms = this.form.group({
        first_name: new FormControl('', Validators.compose([Validators.required])),
        last_name: new FormControl('', Validators.required),
        user_email: new FormControl('', Validators.email),
        password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')])),
        user_type: new FormControl('', Validators.compose([Validators.required])),
        isnotify: new FormControl(),


      })
      if (!this.isAdd) {
        this.userService.retrieveUserData(this.id).subscribe((datas: any) => {
          this.addEditForms.patchValue(datas.response.data);
          this.addEditForms.controls.user_type.setValue(datas?.response?.data?.user_role)

        })
      }

    });
  }

  get f() { return this.addEditForms.controls; }

  onSubmit() {
   
    this.submitted = true;
    // this.loading = true;
    if (this.addEditForms.valid) {
      if (this.isAdd) {
        this.onAddUser();
      } else {
        this.onEdit();
      }
    }
    if (this.addEditForms.invalid) {
      return;
    }
  }
  onEdit() {
    var editforms = {
      ...this.addEditForms?.value,
      userid: this.id
    }

    if (this.addEditForms.valid) {
      this.userService.onEditForm(editforms).subscribe((data: any) => {

        this.userService.openDialog(popupMessage.data?.body?.editData,popupMessage.data.title.editTitle);

      })
      this.userService.retrieveData(this.currentPage, this.pageSize).subscribe((datas: any) => {
      })
      this.router.navigate([pathValue.userRoute])

    }
  }
  onAddUser() {
    if (this.addEditForms.valid) {
      this.userService.addUsers(this.addEditForms.value).subscribe((data) => {
        this.userService.openDialog(popupMessage.data?.body?.addData,popupMessage.data?.title?.addTitle);


      })
      this.router.navigate([pathValue.userRoute])
    }
  }
  cancel() {
    this.router.navigate([pathValue.userRoute])
  }

}