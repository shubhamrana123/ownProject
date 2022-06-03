import { Component,ChangeDetectorRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { SpinnerService } from './shared/spinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit ,AfterViewChecked {

  message: string = 'loading :(';

  constructor(public spinnerService: SpinnerService,private cdr: ChangeDetectorRef){

  }
  ngAfterViewInit(): void {
    // this.message = 'all done loading :)'
    // this.cdr.detectChanges();
  }
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }
}
