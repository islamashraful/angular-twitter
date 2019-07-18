import { Component, OnInit, Input } from '@angular/core';

/**
 * Pagination Component
 */
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
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

  constructor() { }

  ngOnInit() {
  }

}
