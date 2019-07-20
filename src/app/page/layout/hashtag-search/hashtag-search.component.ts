import { Component, OnInit } from '@angular/core';
import { CoreHelpers } from 'src/app/common/utility/helpers/core.helpers';

const cellColor = '#d3d3d3';

const mockData = [
  {
    "account": {
      "fullname": "Joshua",
      "href": "/joshuaseattle",
      "id": 838841790773940228
    },
    "date": "5:24 PM - 16 Jul 2019",
    "hashtags": [
      "#AWS",
      "#DAY1",
      "#cloudcomputing",
      "#Reinvent"
    ],
    "likes": 157,
    "replies": 15,
    "retweets": 2,
    "text": "After 5 years in the same building and same job at @awscloud, this week I moved to the newest Amazon building (aptly named re:Invent) and into the role of Technical Advisor to the SVP of #AWS\n\nLooking forward to the new challenges ahead! #DAY1 #cloudcomputing #Reinventpic.twitter.com/3cF7FVtNs3"
  },
  {
    "account": {
      "fullname": "Calsoft Inc.",
      "href": "/CalsoftInc",
      "id": 142583197
    },
    "date": "9:58 PM - 19 Jul 2019",
    "hashtags": [
      "#AWS",
      "#Pune"
    ],
    "likes": 1,
    "replies": 0,
    "retweets": 1,
    "text": "Calsoft team all set for the #AWS User Group #Pune Meetup @AWSpic.twitter.com/Up7LbYXuVz"
  },
  {
    "account": {
      "fullname": "InfraguardIO ☁️",
      "href": "/InfraguardIo",
      "id": 1049965264941371392
    },
    "date": "3:26 AM - 19 Jul 2019",
    "hashtags": [
      "#aws",
      "#amazonwebservices"
    ],
    "likes": 2,
    "replies": 0,
    "retweets": 2,
    "text": "With InfraGuard's automated patch management policy you can automatically test, package, and deploy patches to thousands of systems in minutes, saving your time and money over limited, manual processes.\n\nContact us for a demo at contact@infraguard.io\n\n#aws #amazonwebservicespic.twitter.com/NB1cZWKP16"
  }
];

const hashtag = 'aws';

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

  data: any = null;

  constructor() { }

  ngOnInit() {
    this.data = mockData.map(item => ({
      text: item.text,
      likes: item.likes,
      replies: item.replies,
      retweets: item.retweets,
      hashtags: CoreHelpers.matchHashtag(item.hashtags, hashtag),
      date: CoreHelpers.longDate(item.date)
    }));
  }

  onPageChanged(currentPage: number) {
    console.log('onPageChanged', currentPage)
  }

}
