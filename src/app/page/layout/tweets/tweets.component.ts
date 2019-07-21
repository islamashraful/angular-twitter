import { Component, OnInit } from '@angular/core';

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
export class TweetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
