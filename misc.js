fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(json => {
        console.log(json);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to load posts. Please try again later.');
    });



//////////////////////////////////////

    document.body.addEventListener('click', function(event) {
        if (event.target.tagName === 'H3') {
            alert('You clicked on a post title: ' + event.target.innerText);
        }
    });
    
///////////////////////////////

    const savePostsToLocal = (posts) => {
        localStorage.setItem('posts', JSON.stringify(posts));
    };
    
    window.onload = function() {
        let storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
            renderPosts(JSON.parse(storedPosts));
        } else {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(posts => {
                    savePostsToLocal(posts);
                    renderPosts(posts);
                });
        }
    };
    
    function renderPosts(posts) {
        posts.forEach(post => {
            let div = document.createElement('div');
            div.className = 'post';
            let postTitle = document.createElement('h3');
            postTitle.innerText = post.title;
            let postBody = document.createElement('p');
            postBody.innerText = post.body;
            div.appendChild(postTitle);
            div.appendChild(postBody);
            document.body.appendChild(div);
        });
    }
    




//////////////////////////

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            renderPosts(posts);
        });






////////////////////

<form id="postForm">
    <input type="text" id="title" placeholder="Post Title" required>
    <textarea id="body" placeholder="Post Body" required></textarea>
    <button type="submit">Add Post</button>
</form>


document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('New Post:', data);
        alert('Post added successfully!');
    });
});


























































































window.onload = function() {
    fetch('https://jsonplaceholder.typicode.com/psts')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(json => {
            console.log(json);

            for (let i = 0; i < json.length; i++) {
                let div = document.createElement("div");
                div.className = 'post';

                let postTitle = document.createElement("h3");
                postTitle.innerText = json[i].title;

                let postBody = document.createElement("p");
                postBody.innerText = json[i].body;

                div.appendChild(postTitle);
                div.appendChild(postBody);

                document.body.appendChild(div);
            }
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = "Error: " + err.message;
            document.body.appendChild(errDiv);
        })
        .finally(() => {
            let footer = document.createElement("footer");
            let date = new Date().toLocaleString();
            footer.innerText = "Page loaded on: " + date;
            document.body.appendChild(footer);
        });
};
