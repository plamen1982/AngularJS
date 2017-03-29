MACodingClubVideoSystem.factory('videoService', function(){
    return {
        getAllVideos: function(){
    
        return [{
        videoObject: {
        title: 'Course introduction video',
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
        date: new Date(2013, 12, 15, 12, 30, 0).toDateString(),
        likes: 322,
        websiteUrl: 'http://macodingclub.com'
    },
    {
        username: 'Misho  Mishkov',
        content: 'Congratulations Mishka!',
        date: new Date(2012, 12, 15, 12, 30, 0).toDateString(),
        likes: 32,
        websiteUrl: 'http://misho.com/'
    }
                ]
            }
        },
        {
        videoObject: {
        title: 'Auto rock video',
        pictureUrl: 'http://lorempixel.com/400/200/',
        length: '3:32',
        category: 'Auto',
        subscribers: 4,
        date: new Date(2014, 12, 15).toDateString(),
        haveSubtitles: false,
        comments: [
    {
        username: 'Tasho Tashev',
        content: 'Congratulations Tashko!',
        date: new Date(2013, 12, 15, 12, 30, 0).toDateString(),
        likes: 1,
        websiteUrl: 'http://tashistiq.com/'
    },
    {
        username: 'max',
        content: 'Congratulations maxi!',
        date: new Date(2012, 12, 15, 12, 30, 0).toDateString(),
        likes: 112,
        websiteUrl: 'http://maxi.com/'
    },
    {
        username: 'Pisho  Pishkov',
        content: 'Congratulations Pishka!',
        date: new Date(2011, 12, 15, 12, 30, 0).toDateString(),
        likes: 12,
        websiteUrl: 'http://pishko.com/'
    }
                            ]
                        }
                    }
                ]
            }
        }
    }
)
