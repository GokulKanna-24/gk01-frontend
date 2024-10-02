import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { MainSettingService } from '../main-setting.service';
import { HxSpinnerService } from '../../../_custom-hx/hx-spinner/hx-spinner.service';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    TableModule,CardModule,ButtonModule,
  ],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss'
})
export class ModulesComponent implements OnInit {

  data: any[] = [];

  constructor(
    private service: MainSettingService,
    private spinner: HxSpinnerService,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.service.getModules(1, 5).subscribe((res:any) => {
      if(res.success) {
        this.data = res.data.data;
      } else {
        console.log(res);
      }
      this.spinner.hide();
    }, (err) => {
      console.log(err);
    })
  }

}
