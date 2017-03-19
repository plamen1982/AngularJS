MACodingClubVideoSystem.factory('videoService', function(){
    return [{
    videoObject: {
    title: 'Course introduction',
    pictureUrl: 'http://lorempixel.com/400/200/',
    length: '3:32',
    category: 'IT',
    subscribers: 3,
    date: new Date(2014, 12, 15).toDateString(),
    haveSubtitles: false,
    comments: [
    {
        username: 'Pesho Peshev',
        content: 'Congratulations Peshko!',
        date: new Date(2014, 12, 15, 12, 30, 0).toDateString(),
        likes: 2,
        websiteUrl: 'http://pesho.com/'
    },
    {
        username: 'pax',
        content: 'Congratulations paxi!',
        date: new Date(2014, 12, 15, 12, 30, 0).toDateString(),
        likes: 322,
        websiteUrl: 'http://pesho.com/'
    },
    {
        username: 'Misho  Mishkov',
        content: 'Congratulations Mishka!',
        date: new Date(2014, 12, 15, 12, 30, 0).toDateString(),
        likes: 32,
        websiteUrl: 'http://pesho.com/'
    }

                ]
            }
        }]
    }
)