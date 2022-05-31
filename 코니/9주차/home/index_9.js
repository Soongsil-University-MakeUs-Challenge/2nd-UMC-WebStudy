
const API_KEY = "AIzaSyBkMNCa_6NqmGyTziUULAAwmbzfEOxi7_0";
const $contentBox = document.querySelector("#contentBox");


const fetchVideo = () => {
    var requestOptions = {
        method: "GET",
    };

    fetch(
        'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxWidth=100&regionCode=kr&key=${AIzaSyBkMNCa_6NqmGyTziUULAAwmbzfEOxi7_0}'
    )
        .then((response) => response.json())
        .then((result) => result.items.map(item => videoCardTemplate(item)))
        .catch((error) => console.log("error", error));
}

fetchVideo();


function videoCardTemplate (data) {
    const videoItem = `
        <div class="videoItemContainer">
            <a href="/8주차)%20데이터통신/youtube/end/play/play.html" data-id=${data.id}>
                    <div class="videoThumbnailContainer">
                            <img class="thumbnailImg" src=${data.snippet.thumbnails.high.url} />
                    </div>
            </a>
            <div class="videoDetailsContainer">
                    <a class="videoChannelLink" href=${`https://www.youtube.com/channel/${data.snippet.channelId}`}>
                            <img class="channelImg" src="https://yt3.ggpht.com/8T1OF6XdiT2t5fjitlxh5KzcrqSsTbrEUxCF0JOM_fCKgWCenl0X8lvmv6NGmLVDSVsP4wZvwQ=s68-c-k-c0x00ffffff-no-rj" />
                    </a>
                    <a href=${`https://www.youtube.com/watch?v=${data.id}`}>
                            <div class="videoMetaDetails">
                                    <div class="videoTitle">
                                            <h3>${data.snippet.title}</h3>
                                    </div>
                                    <div class="videoMetaData">
                                            <p class="metaText">${data.snippet.channelTitle}</p>
                                            <p class="extraMeta">
                                                    <span class="metaText viewCount">${
                          Number(data.statistics.viewCount) > 100000
                            ? (
                                Number(data.statistics.viewCount) / 1000
                              ).toFixed(0) + "K"
                            : Number(data.statistics.viewCount)
                        } views</span>
                                                    <span class="metaText">${luxon.DateTime.fromISO(
                          data.snippet.publishedAt
                        ).toRelative()}</span>
                                            </p>
                                    </div>
                            </div>
                    </a>
            </div>
    </div>
`;

$contentBox.insertAdjacentHTML('beforeend', videoItem);
}