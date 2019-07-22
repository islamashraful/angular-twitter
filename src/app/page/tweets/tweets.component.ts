import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AppView } from '../../common/utility/enums/app-view';
import { CoreHelpers } from '../../common/utility/helpers/core.helpers';
import { DataService } from '../../common/utility/services/data/data.service';

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
   * Component configuration
   */
  configuration: {
    /** Search placeholder */
    placeholder: string,
    /** Search title */
    title: string,
    /** Initial text for search */
    initialSearchInput: string,
    /** Method reference for api call from data service */
    getTweets: Function
  };

  /**
   * Subscription reference of observable
   */
  private subscription: Subscription;

  constructor(private dataService: DataService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.resetData();

    this.initConfig();
  }

  initConfig() {
    if (this.route.routeConfig.path === AppView.HASHTAG_SEARCH) {
      this.configuration = {
        title: 'Hashtag search',
        placeholder: 'Search by Hashtag',
        initialSearchInput: 'Python',
        getTweets: this.dataService.getTweetsByHashtag.bind(this.dataService)
      };
    } else {
      this.configuration = {
        title: 'User search',
        placeholder: 'Search by User',
        initialSearchInput: 'Twitter',
        getTweets: this.dataService.getTweetsByUser.bind(this.dataService)
      };
    }
  }

  ngAfterViewInit() {
    this.searchInput.nativeElement.value = this.configuration.initialSearchInput;

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
            this.configuration.getTweets(term).subscribe(res => {
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

    if (this.route.routeConfig.path === AppView.HASHTAG_SEARCH) {
      return tweets.filter(t =>
        t.hashtags.some(item =>
          item.toLowerCase() === `#${searchInput.toLowerCase()}`
        )
      );
    } else {
      return tweets.filter(t =>
        t.account.fullname.toLowerCase() === searchInput.toLowerCase()
      );
    }
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
