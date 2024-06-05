import { Component } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  tableInfoData: any[] = [];
  tableSectionData: any[] = [];
  excelBtnData: any[] = [];
  checkAll: boolean = false;
  pageSize = 5;
  currentPage = 1;
  searchtext: any;

  constructor(private table: JsonfilereaderService) {}
  ngOnInit(): void {
    this.table.parseJsonFile(SystemConfig.tableJson).subscribe((res: any) => {
      this.tableInfoData = res.tableList;
      this.tableSectionData = res.tableSection;
      this.excelBtnData = res.excelBtn;
    });
  }
  toggleCheckAll() {
    this.checkAll = !this.checkAll;
    this.tableInfoData.forEach((item) => (item.selected = this.checkAll));
  }
  onItemChange() {
    this.checkAll = this.tableInfoData.every((item) => item.selected);
  }

  fileName = 'ExcelSheet.xlsx';
  exportExcel() {
    let data = document.getElementById('table-data');

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
}
