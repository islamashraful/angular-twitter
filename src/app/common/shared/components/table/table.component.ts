import { Component, OnInit, Input } from '@angular/core';

/**
 * Column Interface
 */
export interface IColumn {
  /** Field */
  field: string;
  /** Header */
  header: string;
  /** Use ellipsis on column value */
  useEllipsis?: boolean,
  /** Styles attached with the cell */
  columnStyles?: Object
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
