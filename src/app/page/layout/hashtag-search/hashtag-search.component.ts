import { Component, OnInit } from '@angular/core';
import { CoreHelpers } from '../../../common/utility/helpers/core.helpers';
import { DataService } from '../../../common/utility/services/data/data.service';

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
  },
  {
    "account": {
      "fullname": "Mark Runyon",
      "href": "/aspprogrammer",
      "id": 48011046
    },
    "date": "5:09 AM - 19 Jul 2019",
    "hashtags": [
      "#Microsoft",
      "#Azure",
      "#CloudComputing",
      "#AWS"
    ],
    "likes": 2,
    "replies": 0,
    "retweets": 5,
    "text": "Azure is killing it. 64% annualized growth in Q4, and the Cloud division surpasses Office & Windows segments for the first time.  https://buff.ly/2xXFGa1  #Microsoft #Azure #CloudComputing #AWS pic.twitter.com/L72GAcVOmU"
  },
  {
    "account": {
      "fullname": "Gabe L",
      "href": "/GabeLDev",
      "id": 1115430868074549249
    },
    "date": "7:42 AM - 19 Jul 2019",
    "hashtags": [
      "#AWS",
      "#awscloud"
    ],
    "likes": 5,
    "replies": 2,
    "retweets": 1,
    "text": "The Classic Solutions to architectural problems in relations to AWS was the most enjoying part of the course in @stephanemaarek Certified SA. Using all the services and real examples on how to effectively tackle solutions was amazing. #AWS #awscloud"
  },
  {
    "account": {
      "fullname": "ramsaran_d",
      "href": "/rham_d",
      "id": 1171183064
    },
    "date": "8:42 PM - 18 Jul 2019",
    "hashtags": [
      "#aws"
    ],
    "likes": 1,
    "replies": 0,
    "retweets": 0,
    "text": "#aws clouded with aws@cloudday pic.twitter.com/gE1MRlCRNt"
  },
  {
    "account": {
      "fullname": "Neelavanna Kannan",
      "href": "/NeelavannaK",
      "id": 1152063803812503552
    },
    "date": "8:59 PM - 18 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 2,
    "replies": 0,
    "retweets": 1,
    "text": "#AWS cloud day # AWS cloud pic.twitter.com/6JnLZKpsax"
  },
  {
    "account": {
      "fullname": "Jeff Barr  ☁️",
      "href": "/jeffbarr",
      "id": 48443
    },
    "date": "11:37 AM - 19 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 3,
    "replies": 0,
    "retweets": 0,
    "text": "New version of @GigaSpaces InsightEdge now available on #AWS Marketplace at  https://amzn.to/2Y2MeyG  (I first wrote about this platform in 2008 when it was called XAP)...pic.twitter.com/T4fiBHAv4a"
  },
  {
    "account": {
      "fullname": "santosh T Lamani",
      "href": "/tlsantu",
      "id": 265874302
    },
    "date": "8:41 PM - 18 Jul 2019",
    "hashtags": [
      "#aws"
    ],
    "likes": 1,
    "replies": 0,
    "retweets": 0,
    "text": "#aws cloud pic.twitter.com/6KWPYwWmw8"
  },
  {
    "account": {
      "fullname": "Viki Baarathi",
      "href": "/VBaarathi",
      "id": 1127550321725587456
    },
    "date": "4:02 PM - 18 Jul 2019",
    "hashtags": [
      "#aws",
      "#deepracer",
      "#ArtificialIntelligence"
    ],
    "likes": 2,
    "replies": 0,
    "retweets": 1,
    "text": "First #aws #deepracer challenge with homemade track at Maxis ISD townhall.  The walls turned out to be the most important part. #ArtificialIntelligencepic.twitter.com/pTuS9AoMBF"
  },
  {
    "account": {
      "fullname": "Scott Edwards",
      "href": "/edwards80",
      "id": 902830382344699905
    },
    "date": "8:48 AM - 18 Jul 2019",
    "hashtags": [
      "#aws"
    ],
    "likes": 2,
    "replies": 0,
    "retweets": 0,
    "text": "Watching the beginnings your first proper state machine deploy #aws pic.twitter.com/UB9Kj0j8xg"
  },
  {
    "account": {
      "fullname": "Frank Costeira",
      "href": "/WhatsOnMyMindIO",
      "id": 885248924
    },
    "date": "6:44 AM - 19 Jul 2019",
    "hashtags": [
      "#AWS",
      "#IoT",
      "#RaspberryPi"
    ],
    "likes": 1,
    "replies": 0,
    "retweets": 1,
    "text": "weekend plans; get my dashboard project connected to AWS IoT Core. #AWS #IoT #RaspberryPipic.twitter.com/hrl9coScAH"
  },
  {
    "account": {
      "fullname": "Ryan Dhungel",
      "href": "/kaloraat",
      "id": 775886849722023937
    },
    "date": "3:06 AM - 17 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 3,
    "replies": 0,
    "retweets": 0,
    "text": "#AWS is using his package and he is looking for a job :) pic.twitter.com/MTdOhWjg0q"
  },
  {
    "account": {
      "fullname": "Nick Triantafillou",
      "href": "/xelfer",
      "id": 15736512
    },
    "date": "6:12 PM - 18 Jul 2019",
    "hashtags": [
      "#aws"
    ],
    "likes": 10,
    "replies": 0,
    "retweets": 2,
    "text": "Beware of AWS billing scams! they're after your indorfmation. #aws pic.twitter.com/8SIIwdwTCl"
  },
  {
    "account": {
      "fullname": "Amith Mohan",
      "href": "/amithmohan",
      "id": 44160980
    },
    "date": "2:47 AM - 19 Jul 2019",
    "hashtags": [
      "#AWS",
      "#CLOUDDAY"
    ],
    "likes": 2,
    "replies": 0,
    "retweets": 1,
    "text": "Datazymes at #AWS #CLOUDDAY. The AWS journey for our product begins!pic.twitter.com/n9kXRksmUx"
  },
  {
    "account": {
      "fullname": "Jeff Barr  ☁️",
      "href": "/jeffbarr",
      "id": 48443
    },
    "date": "10:31 AM - 19 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 43,
    "replies": 6,
    "retweets": 11,
    "text": "A must-watch - .@CNBC examines how the #AWS Snow family of devices helps our customers transfer massive amounts of data to the cloud -  https://amzn.to/2Y3O1DA pic.twitter.com/CWwTy8ocyJ"
  },
  {
    "account": {
      "fullname": "SenseDeep",
      "href": "/SenseDeepSec",
      "id": 768481355340525568
    },
    "date": "7:36 PM - 19 Jul 2019",
    "hashtags": [
      "#aws",
      "#devops",
      "#cybersecurity"
    ],
    "likes": 3,
    "replies": 0,
    "retweets": 2,
    "text": "Security Tip #18: Restrict security group outgoing IP rules to minimize APTs and \"botification\".\n\nWeb Developer Security Checklist:  https://www.sensedeep.com/blog/posts/stories/web-developer-security-checklist.html …\n\nAnd PowerDown:  https://www.sensedeep.com/powerdown \n#aws #devops #cybersecurity #124pic.twitter.com/Ak3evVbnSv"
  },
  {
    "account": {
      "fullname": "Nese Ozler",
      "href": "/nesozl",
      "id": 405243902
    },
    "date": "9:53 AM - 18 Jul 2019",
    "hashtags": [
      "#Salesforce",
      "#AWS"
    ],
    "likes": 0,
    "replies": 0,
    "retweets": 0,
    "text": "How come #Salesforce missed the opp on creating #AWS type of business which accounts for nearly 59% of the Amazon's operating income and bring $25 billion in annual sales? Can we blame shortsightedness?"
  },
  {
    "account": {
      "fullname": "Danilo Poccia",
      "href": "/danilop",
      "id": 14151945
    },
    "date": "4:20 AM - 19 Jul 2019",
    "hashtags": [
      "#AWS",
      "#IaaS"
    ],
    "likes": 14,
    "replies": 0,
    "retweets": 6,
    "text": "AWS Named as a Leader in Gartner’s Infrastructure as a Service (IaaS) Magic Quadrant for the 9th Consecutive Year  https://buff.ly/30BQffd  #AWS #IaaSpic.twitter.com/mPPdlIdbLp"
  },
  {
    "account": {
      "fullname": "Andreas Wittig",
      "href": "/andreaswittig",
      "id": 45314209
    },
    "date": "4:13 AM - 19 Jul 2019",
    "hashtags": [
      "#AWS",
      "#CloudFormation"
    ],
    "likes": 7,
    "replies": 0,
    "retweets": 2,
    "text": "Free Templates for #AWS #CloudFormation v10.2.0 released: Latest AMIs and security updates  https://buff.ly/2Z1y7e8 pic.twitter.com/dedvNMPVzh"
  },
  {
    "account": {
      "fullname": "David Carboni",
      "href": "/davidcarboni",
      "id": 124136018
    },
    "date": "12:25 PM - 18 Jul 2019",
    "hashtags": [
      "#skyscanner",
      "#AWS"
    ],
    "likes": 26,
    "replies": 1,
    "retweets": 5,
    "text": "The best, simplest advice for your cloud journey: \"you are not Netflix\" - and definitely not yet. Start where you are and iterate. @StuHirstInfoSec at #skyscanner #AWS meetup. pic.twitter.com/iHDgik62pq"
  },
  {
    "account": {
      "fullname": "Farrah",
      "href": "/FarrahC32",
      "id": 47350584
    },
    "date": "8:40 PM - 17 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 18,
    "replies": 0,
    "retweets": 2,
    "text": "Such a fun night with @adrianco & @iAmTheWhaley. Two of the original #AWS heroes :) pic.twitter.com/PhZ7JnxINQ"
  },
  {
    "account": {
      "fullname": "Leonardo Cestarolli",
      "href": "/l_cestarolli",
      "id": 778308540297510912
    },
    "date": "4:17 PM - 17 Jul 2019",
    "hashtags": [
      "#aws",
      "#CloudComputing",
      "#certification"
    ],
    "likes": 5,
    "replies": 1,
    "retweets": 1,
    "text": "AWS Certified Solutions Architect !\nThanks to  @KroonenburgRyan for the courses! #aws #CloudComputing #certificationpic.twitter.com/aEc1IMGRMc"
  },
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
      "fullname": "zahedab",
      "href": "/zahedab",
      "id": 15662351
    },
    "date": "4:33 PM - 16 Jul 2019",
    "hashtags": [
      "#oscon",
      "#AWS",
      "#WardleyMapping"
    ],
    "likes": 20,
    "replies": 2,
    "retweets": 5,
    "text": "The Maestro of keynotes returns to #oscon and Open@AWS. @swardley demystifies technology with Blahs for your strategy #AWS #WardleyMappingpic.twitter.com/1jc344F2kF"
  },
  {
    "account": {
      "fullname": "Jeff Barr  ☁️",
      "href": "/jeffbarr",
      "id": 48443
    },
    "date": "2:43 PM - 16 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 56,
    "replies": 2,
    "retweets": 12,
    "text": "Meet the Newest #AWS News Bloggers -  https://aws.amazon.com/blogs/aws/meet-the-newest-aws-news-bloggers/ … - Looking forward to working with @bellevuesteve @julsimon @bwest @thebeebs @danilop and @sebsto .pic.twitter.com/PBvPbwNh0c"
  },
  {
    "account": {
      "fullname": "Jeff Barr  ☁️",
      "href": "/jeffbarr",
      "id": 48443
    },
    "date": "1:03 PM - 16 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 72,
    "replies": 0,
    "retweets": 31,
    "text": "Serverless Data Engineering at Zalando with the #AWS CDK -  https://amzn.to/2lNbyeN pic.twitter.com/3SyNoAAgcq"
  },
  {
    "account": {
      "fullname": "Jorge Bogantes",
      "href": "/jobomont",
      "id": 91872579
    },
    "date": "6:22 PM - 15 Jul 2019",
    "hashtags": [
      "#AnacostiaRiver",
      "#musselpower",
      "#freshwatermussels",
      "#aws"
    ],
    "likes": 48,
    "replies": 2,
    "retweets": 6,
    "text": "Our mussels are loving the #AnacostiaRiver water! These photos were taken August 2018 and today. They have grown from 1/2 inch when they came from the hatchery, to over 2 inches in average shell length #musselpower #freshwatermussels #aws pic.twitter.com/YLQOCaAMhv – at Kingman Island"
  },
  {
    "account": {
      "fullname": "Jeff Barr  ☁️",
      "href": "/jeffbarr",
      "id": 48443
    },
    "date": "2:40 PM - 15 Jul 2019",
    "hashtags": [
      "#AWS",
      "#Serverless"
    ],
    "likes": 120,
    "replies": 0,
    "retweets": 36,
    "text": "A very interesting paper: From Laptop to Lambda: Outsourcing Everyday Jobs to Thousands of Transient Function Containers -  https://stanford.io/2Y5aaoZ  ; code is at  http://bit.ly/2Y3l26P  #AWS #Serverlesspic.twitter.com/8UKlQI1ItP"
  },
  {
    "account": {
      "fullname": "Stu Hirst",
      "href": "/StuHirstInfoSec",
      "id": 2471883322
    },
    "date": "12:40 PM - 14 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 909,
    "replies": 50,
    "retweets": 231,
    "text": "us-east-3 #AWS pic.twitter.com/dwrvNuuyPB"
  },
  {
    "account": {
      "fullname": "Olivier Dauby",
      "href": "/odauby",
      "id": 50667433
    },
    "date": "10:06 AM - 14 Jul 2019",
    "hashtags": [
      "#kubernetes",
      "#digitalocean",
      "#aws",
      "#azure",
      "#ovh",
      "#gcp",
      "#terraform"
    ],
    "likes": 29,
    "replies": 4,
    "retweets": 18,
    "text": "I was a bit bored today so I created a #kubernetes cluster spawned over 5 cloud providers: #digitalocean, #aws , #azure, #ovh and #gcp, just for the fun of it.\nSimply works.\n\nNext time I'm bored:\n- multi-master control plane\n- a way to expose services\n- automate with #terraformpic.twitter.com/f9yRyjaR59"
  },
  {
    "account": {
      "fullname": "Matthew S. Wilson",
      "href": "/_msw_",
      "id": 15656207
    },
    "date": "10:31 PM - 13 Jul 2019",
    "hashtags": [
      "#AWS",
      "#Lambda"
    ],
    "likes": 570,
    "replies": 11,
    "retweets": 223,
    "text": "Stanford published a paper on gg, a framework and a set of command-line tools that helps people execute everyday applications (like compiling SW) using thousands of parallel threads on #AWS #Lambda to achieve near-interactive completion times. Wow! \n https://www-cs.stanford.edu/~matei/papers/2019/usenix_atc_gg.pdf …pic.twitter.com/Qs76rxbHvB"
  },
  {
    "account": {
      "fullname": "Sonia Ouarti",
      "href": "/soniaouarti",
      "id": 184772441
    },
    "date": "10:40 AM - 13 Jul 2019",
    "hashtags": [
      "#aws",
      "#aws_uki"
    ],
    "likes": 32,
    "replies": 3,
    "retweets": 1,
    "text": "After 6 and a bit years of building the UKI Marketing dpt, I’ve decided to take on a new challenge at AWS and work closer with developers. The hardest thing was to leave the most talented and fun team I ever worked with. Especially the one with the big head...  #aws #aws_ukipic.twitter.com/ZVU2A5FMju"
  },
  {
    "account": {
      "fullname": "Jeff Barr  ☁️",
      "href": "/jeffbarr",
      "id": 48443
    },
    "date": "12:14 PM - 12 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 108,
    "replies": 2,
    "retweets": 34,
    "text": "New - #AWS Budgets Reports - Opt in to daily, weekly, or monthly AWS Budgets Reports emails!  https://aws.amazon.com/blogs/aws-cost-management/launch-aws-budgets-reports/ …pic.twitter.com/uJY5yVnrkQ"
  },
  {
    "account": {
      "fullname": "Tim Veletta  🎮 TeleBlast",
      "href": "/TimVeletta",
      "id": 77520117
    },
    "date": "2:42 AM - 12 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 13,
    "replies": 4,
    "retweets": 0,
    "text": "Step 1. Complete\n\nI'm now an #AWS certified developer pic.twitter.com/O50sEssdwd"
  },
  {
    "account": {
      "fullname": "Jeff Barr  ☁️",
      "href": "/jeffbarr",
      "id": 48443
    },
    "date": "3:40 PM - 11 Jul 2019",
    "hashtags": [
      "#AWS",
      "#vscode"
    ],
    "likes": 417,
    "replies": 7,
    "retweets": 162,
    "text": "Announcing AWS Toolkit for Visual Studio Code -  https://aws.amazon.com/blogs/developer/announcing-aws-toolkit-for-visual-studio-code/ … #AWS #vscode - \n\nTest locally in Lambda-like environment\nDeploy to AWS region of your choice\nInvoke Lambda functions locally or remotely\nSpecify function configurationpic.twitter.com/PqCqwsXata"
  },
  {
    "account": {
      "fullname": "Jeff Barr  ☁️",
      "href": "/jeffbarr",
      "id": 48443
    },
    "date": "7:22 AM - 11 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 66,
    "replies": 2,
    "retweets": 27,
    "text": "Really helpful - #AWS security documentation by product category -  https://amzn.to/2Y20StS pic.twitter.com/M5SKpcHzpP"
  },
  {
    "account": {
      "fullname": "Jeff Barr  ☁️",
      "href": "/jeffbarr",
      "id": 48443
    },
    "date": "6:52 AM - 11 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 162,
    "replies": 6,
    "retweets": 80,
    "text": "#AWS Cloud Development Kit (CDK) – TypeScript and Python are Now Generally Available -  https://aws.amazon.com/blogs/aws/aws-cloud-development-kit-cdk-typescript-and-python-are-now-generally-available/ …pic.twitter.com/iOdFHRDPRG"
  },
  {
    "account": {
      "fullname": "Jeff Barr  ☁️",
      "href": "/jeffbarr",
      "id": 48443
    },
    "date": "6:48 AM - 11 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 90,
    "replies": 3,
    "retweets": 52,
    "text": "Amazon EventBridge - Event-Driven #AWS Integration for your SaaS Applications -  https://aws.amazon.com/blogs/aws/amazon-eventbridge-event-driven-aws-integration-for-your-saas-applications/ …pic.twitter.com/jdi75AoYAA"
  },
  {
    "account": {
      "fullname": "Danilo Poccia",
      "href": "/danilop",
      "id": 14151945
    },
    "date": "12:17 PM - 10 Jul 2019",
    "hashtags": [
      "#AWS",
      "#Observability"
    ],
    "likes": 247,
    "replies": 3,
    "retweets": 119,
    "text": "This is so cool! Introducing Amazon CloudWatch Anomaly Detection – Now in Preview – apply machine-learning algorithms to continuously analyze system and application metrics  https://buff.ly/2XYqQys  #AWS #Observabilitypic.twitter.com/NTEBAvFBFk"
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
  },
  {
    "account": {
      "fullname": "Amith Mohan",
      "href": "/amithmohan",
      "id": 44160980
    },
    "date": "2:47 AM - 19 Jul 2019",
    "hashtags": [
      "#AWS",
      "#CLOUDDAY"
    ],
    "likes": 2,
    "replies": 0,
    "retweets": 1,
    "text": "Datazymes at #AWS #CLOUDDAY. The AWS journey for our product begins!pic.twitter.com/n9kXRksmUx"
  },
  {
    "account": {
      "fullname": "AiThority",
      "href": "/AiThority",
      "id": 910050092744302592
    },
    "date": "2:07 AM - 19 Jul 2019",
    "hashtags": [
      "#AINews",
      "#AiThority",
      "#AI",
      "#Nielsen",
      "#AWS"
    ],
    "likes": 8,
    "replies": 0,
    "retweets": 3,
    "text": "Nielsen’s TV Ratings Platform Moves to AWS  http://ow.ly/ROQm30pa1PL  @nielsen #AINews #AiThority #AI #Nielsen #AWS pic.twitter.com/7nTt2sCFoc"
  },
  {
    "account": {
      "fullname": "Hashim Warren",
      "href": "/hashim_warren",
      "id": 803599579090448388
    },
    "date": "10:41 PM - 18 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 15,
    "replies": 2,
    "retweets": 2,
    "text": "AWS Fever:\n\na heightened emotional state where you conjure multiple obvious startup ideas based on the new feature #AWS announced"
  },
  {
    "account": {
      "fullname": "Neelavanna Kannan",
      "href": "/NeelavannaK",
      "id": 1152063803812503552
    },
    "date": "8:59 PM - 18 Jul 2019",
    "hashtags": [
      "#AWS"
    ],
    "likes": 2,
    "replies": 0,
    "retweets": 1,
    "text": "#AWS cloud day # AWS cloud pic.twitter.com/6JnLZKpsax"
  },
  {
    "account": {
      "fullname": "ramsaran_d",
      "href": "/rham_d",
      "id": 1171183064
    },
    "date": "8:42 PM - 18 Jul 2019",
    "hashtags": [
      "#aws"
    ],
    "likes": 1,
    "replies": 0,
    "retweets": 0,
    "text": "#aws clouded with aws@cloudday pic.twitter.com/gE1MRlCRNt"
  },
  {
    "account": {
      "fullname": "santosh T Lamani",
      "href": "/tlsantu",
      "id": 265874302
    },
    "date": "8:41 PM - 18 Jul 2019",
    "hashtags": [
      "#aws"
    ],
    "likes": 1,
    "replies": 0,
    "retweets": 0,
    "text": "#aws cloud pic.twitter.com/6KWPYwWmw8"
  },
  {
    "account": {
      "fullname": "I am a Developer",
      "href": "/i_am_adeveloper",
      "id": 3243878690
    },
    "date": "7:43 PM - 18 Jul 2019",
    "hashtags": [
      "#AWS",
      "#Azure"
    ],
    "likes": 1,
    "replies": 0,
    "retweets": 0,
    "text": "AWS vs. Azure — A Quick Comparison\n\n☞  https://ift.tt/2YXRghc \n#AWS #Azurepic.twitter.com/rlZ1xYV5SI"
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

  pagedData: any = null;

  currentPage: number = 1;

  pageSize = 10;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTweetsByHashtag('aws').subscribe(res => {
      console.log(res)
    }, err => {
      console.log('err', err)
    });

    this.data = mockData.map(item => ({
      text: item.text,
      likes: item.likes,
      replies: item.replies,
      retweets: item.retweets,
      hashtags: CoreHelpers.matchHashtag(item.hashtags, hashtag),
      date: CoreHelpers.longDate(item.date)
    }));

    this.pagedData = CoreHelpers.paginate(this.currentPage, this.pageSize, this.data);
  }

  onPageChanged(currentPage: number) {
    this.currentPage = currentPage;

    this.pagedData = CoreHelpers.paginate(currentPage, this.pageSize, this.data);
  }

}
