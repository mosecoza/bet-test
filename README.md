## Getting started
To run the React app

```

cd bet-test && yarn && yarn start

```

To run the auth back-end

```
on port 3000

email "sally@mail.com"
password "qwertyui123"

cd auth-server && yarn && yarn start

```
on port 8080


TACC Mobi App
important to add redux to the app


:> reminders tutorial : https://medium.com/quick-code/react-native-push-notification-with-firebase-integration-c26c434f271c,
:> post on facebook : https://www.npmjs.com/package/react-native-fbsdk-next#usage
:> youtube palyer : https://lonelycpp.github.io/react-native-youtube-iframe/module-methods

:> send notifications to users with the event on favorites when new information or circular is uploaded, even post event.

:> clicking event shows event details page
    => shows: title, length, venue, details, circulars, start time,
    => can: like/favorite, unlike, post to facebook if loggedIn, can post to their fb page about the event
    => 

:> on first login, ask user to post on their account about the app {using shareLinkContent },


2022:{
    [month]: {
        [id]: {
            name: '',
            startDate: "",
            endDate: "",
            length: "",
            month: "",
            circular: [`${[id]}`],
            venue: "", 
            startTime: "",
            details: "",
            liked: [`${[id]}`],
            shares: 0,
            posts: {
                [uid]: "p-ost",
            }
        }
    }
}

this should be on admin.....
add details page

users:{
    [uid]:{
        name: "",
        events: [`${month}-{id}`,],
        notifications: {
            [id]: {
                delivered: false,
                viewed: false
            }
        },
        posts: {
            [date]: ""
        }
    }
}

on video play, share on page: 

circular_2022:{
    [name]:{
        name: '',
        date: "",
        location: "",
        event: `${month}-{id}`,
        views: 0
    }
}

add new fields on admin and view
to add notifications for this: 
to users, to events,
if opened add viewed,

notifications: {
    [id]:{
        title:"",
        details:"",
        event: `${month}-{id}`,
        views:0
    }
}

must get user who view details,

must create notification on admin for non event circulars and on functions, send notification

if logged in:
profile:{
    {...userInfo},
    favorites: [`${month}-{id}`,],
    notifications: {

    },
    posts: "",
},

errors_2022: {
    [date]: {
        error: "",
        where: "",
        user: [uid]
    }
}
