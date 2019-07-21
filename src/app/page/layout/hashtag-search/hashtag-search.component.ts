import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CoreHelpers } from '../../../common/utility/helpers/core.helpers';
import { DataService } from '../../../common/utility/services/data/data.service';
import { fromEvent, Subscription } from 'rxjs';
import { map, filter, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ITweet } from '../tweets/tweets.component';

const cellColor = '#d3d3d3';

/**
 * Hashtag Search Component
 */
@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.scss']
})
export class HashtagSearchComponent implements OnInit, OnDestroy {
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
   * Subscription reference of the sobservable
   */
  private subscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.resetData();
  }

  ngAfterViewInit(): void {
    const searchTerms$ = fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        startWith(this.searchInput.nativeElement.value),
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
  filterTweetsByHashtag(tweets: ITweet[]) {
    const searchInput = this.searchInput.nativeElement.value;

    return tweets.filter(t =>
      t.hashtags.some(item =>
        item.toLocaleLowerCase() === `#${searchInput.toLocaleLowerCase()}`
      )
    );
  }

  /**
   * Prepare paged data from filtered data
   * @param tweets 
   */
  preparePagedData(tweets: ITweet[]) {
    const filteredTweets = this.filterTweetsByHashtag(tweets);

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
