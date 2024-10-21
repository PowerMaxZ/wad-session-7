window.onload = function() {



    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            console.log(json);


            for (let i = 0; i < json.length; i++) {
                let div = document.createElement("div");
                let postTitle = document.createElement("h3");
                let postBody = document.createElement("p");

                div.className = "post"

                postTitle.innerText = json[i].title
                postBody.innerText = json[i].body

                div.appendChild(postTitle)
                div.appendChild(postBody)

                document.body.appendChild(div)
            }
        }).catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
        }).finally(() => {
            let footer = document.createElement("footer");
            date = new Date().toLocaleString()
            footer.innerText = date;
            document.body.appendChild(footer);
        })
        



}