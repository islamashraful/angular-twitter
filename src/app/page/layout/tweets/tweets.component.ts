import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { map, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CoreHelpers } from '../../../common/utility/helpers/core.helpers';
import { DataService } from '../../../common/utility/services/data/data.service';
import { ITweet } from '../tweets/tweets.component';

const cellColor = '#d3d3d3';

/**
 * Tweet interface
 */
export interface ITweet {
  account: {
    fullname: string,
    href: string,
    id: number
  },
  date: string,
  hashtags: string[],
  likes: number,
  replies: number,
  retweets: number,
  text: string
}

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit, OnDestroy {
  /**
   * Search text input element
   */
  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;

  /**
   * Table columns
   */
  columns = [
    { field: 'text', header: 'Tweet', useEllipsis: true, columnStyles: { width: '30%' } },
    { field: 'likes', header: 'Likes', columnStyles: { color: cellColor } },
    { field: 'replies', header: 'Replies', columnStyles: { color: cellColor } },
    { field: 'retweets', header: 'Retweets', columnStyles: { color: cellColor } },
    { field: 'hashtags', header: 'Hashtags' },
    { field: 'date', header: 'Date' },
  ];

  /**
   * Complete data source
   */
  data: any = null;

  /**
   * Paginated data source
   */
  pagedData: any = null;

  /**
   * Current page
   */
  currentPage: number = 1;

  /**
   * Number of rows per page
   */
  pageSize: number = 10;

  /**
   * Loading state of the api response
   */
  loading: boolean = false;

  /**
   * Subscription reference of observable
   */
  private subscription: Subscription;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.resetData();
  }

  ngAfterViewInit(): void {
    const searchInput = this.searchInput.nativeElement;

    const searchTerms$ = fromEvent<any>(searchInput, 'keyup')
      .pipe(
        map(event => CoreHelpers.formatHashtag(event.target.value)),
        startWith(searchInput.value),
        debounceTime(1000),
        distinctUntilChanged()
      );

    this.subscription = searchTerms$
      .subscribe(
        term => {
          this.loading = true;
          if (term) {
            this.dataService.getTweetsByHashtag(term).subscribe(res => {
              this.preparePagedData(res);
              this.loading = false;
            }, err => {
              this.resetData();
              console.log('err', err)
            });
          } else {
            this.resetData();
          }
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Page change handler
   * @param currentPage 
   */
  onPageChanged(currentPage: number) {
    this.currentPage = currentPage;

    this.pagedData = CoreHelpers.paginate(currentPage, this.pageSize, this.data);
  }

  /**
   * Filter api response with exact match
   * @param tweets 
   */
  filterTweets(tweets: ITweet[]) {
    const searchInput = CoreHelpers.formatHashtag(this.searchInput.nativeElement.value);

    return tweets.filter(t =>
      t.hashtags.some(item =>
        item.toLowerCase() === `#${searchInput.toLowerCase()}`
      )
    );
  }

  /**
   * Prepare paged data from filtered data
   * @param tweets 
   */
  preparePagedData(tweets: ITweet[]) {
    const filteredTweets = this.filterTweets(tweets);

    this.data = filteredTweets.map(item => ({
      text: item.text,
      likes: CoreHelpers.replaceZeroWithDash(item.likes),
      replies: CoreHelpers.replaceZeroWithDash(item.replies),
      retweets: CoreHelpers.replaceZeroWithDash(item.retweets),
      hashtags: CoreHelpers.parseHashtag(item.hashtags),
      date: CoreHelpers.longDate(item.date)
    }));

    this.pagedData = CoreHelpers.paginate(this.currentPage, this.pageSize, this.data);
  }

  /**
   * Reset all data and loading state
   */
  resetData() {
    this.loading = false;
    this.pagedData = [];
    this.data = [];
  }
}
