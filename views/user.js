var users = [
    {
        "login": "pleum",
        "id": 5787659,
        "avatar_url": "https://avatars1.githubusercontent.com/u/5787659?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pleum",
        "html_url": "https://github.com/pleum",
        "followers_url": "https://api.github.com/users/pleum/followers",
        "following_url": "https://api.github.com/users/pleum/following{/other_user}",
        "gists_url": "https://api.github.com/users/pleum/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/pleum/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/pleum/subscriptions",
        "organizations_url": "https://api.github.com/users/pleum/orgs",
        "repos_url": "https://api.github.com/users/pleum/repos",
        "events_url": "https://api.github.com/users/pleum/events{/privacy}",
        "received_events_url": "https://api.github.com/users/pleum/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "Tedev555",
        "id": 10378565,
        "avatar_url": "https://avatars2.githubusercontent.com/u/10378565?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Tedev555",
        "html_url": "https://github.com/Tedev555",
        "followers_url": "https://api.github.com/users/Tedev555/followers",
        "following_url": "https://api.github.com/users/Tedev555/following{/other_user}",
        "gists_url": "https://api.github.com/users/Tedev555/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Tedev555/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Tedev555/subscriptions",
        "organizations_url": "https://api.github.com/users/Tedev555/orgs",
        "repos_url": "https://api.github.com/users/Tedev555/repos",
        "events_url": "https://api.github.com/users/Tedev555/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Tedev555/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "anakinnet",
        "id": 10265839,
        "avatar_url": "https://avatars0.githubusercontent.com/u/10265839?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/anakinnet",
        "html_url": "https://github.com/anakinnet",
        "followers_url": "https://api.github.com/users/anakinnet/followers",
        "following_url": "https://api.github.com/users/anakinnet/following{/other_user}",
        "gists_url": "https://api.github.com/users/anakinnet/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/anakinnet/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/anakinnet/subscriptions",
        "organizations_url": "https://api.github.com/users/anakinnet/orgs",
        "repos_url": "https://api.github.com/users/anakinnet/repos",
        "events_url": "https://api.github.com/users/anakinnet/events{/privacy}",
        "received_events_url": "https://api.github.com/users/anakinnet/received_events",
        "type": "User",
        "site_admin": false
    }
]



exports.findAll = function () {
    return users;
};

exports.findById = function (id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) 
            return users[i];
    }
};