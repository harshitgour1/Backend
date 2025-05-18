require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=> {
    res.send('harshitgoud01')
})

app.get('/login', (req, res)=> {
    res.send('<h1>Please login to our website</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send('<a href="youtube.com", style="color:red">Click</a>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

const githubData = {
  "login": "harshitgour1",
  "id": 161942589,
  "node_id": "U_kgDOCacMPQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/161942589?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/harshitgour1",
  "html_url": "https://github.com/harshitgour1",
  "followers_url": "https://api.github.com/users/harshitgour1/followers",
  "following_url": "https://api.github.com/users/harshitgour1/following{/other_user}",
  "gists_url": "https://api.github.com/users/harshitgour1/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/harshitgour1/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/harshitgour1/subscriptions",
  "organizations_url": "https://api.github.com/users/harshitgour1/orgs",
  "repos_url": "https://api.github.com/users/harshitgour1/repos",
  "events_url": "https://api.github.com/users/harshitgour1/events{/privacy}",
  "received_events_url": "https://api.github.com/users/harshitgour1/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Harshit Goud",
  "company": null,
  "blog": "",
  "location": "Indore, India ",
  "email": null,
  "hireable": true,
  "bio": "An Ai Enthusiast and Researcher.. \r\nFrontEnd Developer Currently Learning Backend Technologies and GEN-AI...",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2024-03-02T12:01:33Z",
  "updated_at": "2025-05-11T05:09:43Z"
}

app.get('/github', (req, res)=> {
    res.json(githubData)
})