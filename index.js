const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let mainEl = document.getElementById("main-el")
let painterposts = ""


for (let i = 0; i < posts.length; i++) {
    painterposts +=  `        <section class="introduction">
                <img class="avatar" src= ${posts[i].avatar} lta="painter avatar">
                <div>
                    <p class="description" id="name">${posts[i].name}</p>
                    <p class="description">${posts[i].location}</p>
                </div>
            </section>
            <img class="post" src=${posts[i].post} lta="Painter's self">
            <section class="likes">
                <div>
                    <img class="features" id="heart" src="images/icon-heart.png" lta="heart to like">
                    <img class="features" src="images/icon-comment.png"  lta="ballon to comment">
                    <img class="features" src="images/icon-dm.png" lta="arrow to dm">
                </div>
                <p id="likes-el">${posts[i].likes + " "} likes</p>
                <p class="comment"><span class="user">${posts[i].username + " "}</span>${posts[i].comment}</p>
            </section>
    `
}

mainEl.innerHTML = painterposts