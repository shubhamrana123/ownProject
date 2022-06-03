import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/component/login.service';
import { UserService } from './user.service';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { pathValue } from '../constant/routes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userRole: any
  pageSize = 5;
  currentPage = 1;
  totalRecords: any;
  showAddButton = false;
  submitted = false;
  public id: any;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'role', 'action'];
  dataSourceMatTable: any;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('hideElement') hideElement: ElementRef
  constructor(private userService: UserService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.userService.retrieveData(this.currentPage, this.pageSize).subscribe((datas: any) => {
      // console.log(datas.response.data);
      this.totalRecords = datas.response.totalRecords;
      this.dataSourceMatTable = datas.response.data;

    })
  }

  ngAfterViewInit(): void {
    if ((this.loginService.getUserRole() == "admin")) {
      this.showAddButton = true;

    }
    else
      if (!(this.loginService.getUserRole() == "admin")) {
        this.hideElement.nativeElement.style.display = 'none'

      }
  }
  addUsers() {

    this.router.navigate([pathValue.userRoute,pathValue.addEditRoute])
  }
  logout() {
    localStorage.clear();
    this.router.navigate([pathValue.loginRoute])
  }

  onPageChange(event: any) {
    this.currentPage = event;
    this.userService.retrieveData(event, this.pageSize).subscribe((datas: any) => {
      this.dataSourceMatTable = datas.response.data

    })

  }


  editUser(userId: any) {

    this.router.navigate([pathValue.userRoute+'/'+pathValue.editUser, userId])
  }

}
