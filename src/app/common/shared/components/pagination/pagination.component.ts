import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Pagination Component
 */
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  /**
   * Total number of items
   */
  @Input() total: number;

  /**
   * Current page
   */
  @Input() currentPage: number;

  /**
   * Number of items per page
   */
  @Input() pageSize: number;

  /**
   * Emit event with page change
   */
  @Output() pageChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
