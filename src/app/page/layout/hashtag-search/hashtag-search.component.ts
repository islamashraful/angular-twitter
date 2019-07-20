import { Component, OnInit } from '@angular/core';

const cellColor = '#d3d3d3';

/**
 * Hashtag Search Component
 */
@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.scss']
})
export class HashtagSearchComponent implements OnInit {
  columns = [
    { field: 'text', header: 'Tweet', useEllipsis: true, columnStyles: { width: '30%' } },
    { field: 'likes', header: 'Likes', columnStyles: { color: cellColor } },
    { field: 'replies', header: 'Replies', columnStyles: { color: cellColor } },
    { field: 'retweets', header: 'Retweets', columnStyles: { color: cellColor } },
    { field: 'hashtags', header: 'Hashtags' },
    { field: 'date', header: 'Date' },
  ];

  data = [
    {
      text: 'How to use #AWS AppSync in Lambda Functions -  http://bit.ly/2XzeIj9 pic.twitter.com/9g5m3YgQRT',
      likes: 44,
      replies: 1,
      retweets: 12,
      hashtags: ['#AWS'],
      date: '10:31 PM - 13 Jul 2019'
    },
    {
      text: '2 How to use #AWS AppSync in Lambda Functions -  http://bit.ly/2XzeIj9 pic.twitter.com/9g5m3YgQRT',
      likes: 4,
      replies: 12,
      retweets: 11,
      hashtags: ['#AWSS'],
      date: '10:35 PM - 13 Jul 2019'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onPageChanged(currentPage: number) {
    console.log('onPageChanged', currentPage)
  }

}
