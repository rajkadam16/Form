import { Component } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  tableInfoData: any[] = [];
  tableSectionData: any[] = [];
  checkAll: boolean = false;

  constructor(private table: JsonfilereaderService) { }

  ngOnInit(): void {
    this.table.parseJsonFile(SystemConfig.tableJson).subscribe((res: any) => {
      this.tableInfoData = res.tableList;
      this.tableSectionData = res.tableSection;
    });
  }
  toggleCheckAll() {
    this.checkAll = !this.checkAll;
    this.tableInfoData.forEach(item => item.selected = this.checkAll);
  }
  onItemChange() {
    this.checkAll = this.tableInfoData.every(item => item.selected);
  }
  searchText: string = '';
  items: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  friuts: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

  searchItems() {
    return this.items.filter(item =>
      item.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  deleteItem(index: number) {
    this.friuts.splice(index, 1);
  }
  
  }