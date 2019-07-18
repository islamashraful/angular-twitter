import { Component, OnInit, Input } from '@angular/core';

/**
 * Column Interface
 */
export interface IColumn {
  /** Field */
  field: string;
  /** Header */
  header: string;
}

/**
 * Table Component
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  /**
   * Table data source 
   */
  @Input() data: any[];

  /** 
   * Table columns collection 
   */
  @Input() columns: IColumn[];

  constructor() { }

  ngOnInit() {
  }

}
