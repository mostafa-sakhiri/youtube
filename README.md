In order to have data please execute the code above.
That will add videos in localstorage that will be manaed in the app.
```
var videos = [
  {
    id: 1
    channel: "Evanscence"
    title: "Lithium"
    views: "900 M"
    date: "6 ans"
    subscriptions: "300 M"
    likes: "10 M"
    dislikes: "100 K"
    subscribed: true
    liked: true
    uid: "PJGpsL_XYQI"
  },
  {
    id: 2
    channel: "Evanscence"
    title: "Going under"
    views: "900 M"
    date: "6 ans"
    subscriptions: "300 M"
    likes: "10 M"
    dislikes: "100 K"
    subscribed: true
    liked: true
    uid: "CdhqVtpR2ts"
  },
  {
    id: 3
    channel: "Evanscence"
    title: "The change"
    views: "900 M"
    date: "6 ans"
    subscriptions: "300 M"
    likes: "10 M"
    dislikes: "100 K"
    subscribed: true
    liked: true
    uid: "UB9wYGJUfA0"
  },
  {
    id: 4
    channel: "Linkin park"
    title: "Crawling"
    views: "900 M"
    date: "6 ans"
    subscriptions: "300 M"
    likes: "10 M"
    dislikes: "100 K"
    subscribed: true
    liked: true
    uid: "Gd9OhYroLN0"
  }
]

localStorage.setItem('youtubeSession', JSON.stringify(videos))
```