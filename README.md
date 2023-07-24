# ModelPlayer

Example to use
``` js
const player1 = new ModelPlayer("_YOUR_ELEMENT_ID_", {
    file: "_YOUR_VIDEO_URL_" || {
        title: "_VIDEO_TITLE_",
        file: "_VIDEO_URL_",
        chapter: "_VIDEO_CHAPTER_"
    },
    playlist: [
        {
            title: "_VIDEO_TITLE_",
            file: "_VIDEO_URL_",
            chapter: "_VIDEO_CHAPTER_",
            poster: "_VIDEO_POSTER_URL_" || flase,
            isplay: true
        },
        {
            title: "_VIDEO_TITLE_",
            file: "_VIDEO_URL_",
            chapter: "_VIDEO_CHAPTER_",
            poster: "_VIDEO_POSTER_URL_" || flase
        }
    ],
    poster: "_VIDEO_POSTER_URL_" || flase
});
```
