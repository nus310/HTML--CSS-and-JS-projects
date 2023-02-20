// dummy data
// const posts = [
//     {
//         title : "post-1",
//         body: "details-1"
//     },
//     {
//         title : "post-2",
//         body: "details-2"
//     },
//     {
//         title : "post-3",
//         body: "details-3"
//     },
//     {
//         title : "post-4",
//         body: "details-4"
//     },
//     {
//         title : "post-5",
//         body: "details-5"
//     },
//     {
//         title : "post-6",
//         body: "details-6"
//     },

// ];

// find container
const postContainer = document.querySelector(".postContainer");
// fetch API


const loadElement = () =>{
    //const posts = makeRequest();
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => json.map((p) =>{
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = 
        `<h3 class="postTitle"> ${p.title}</h3>
        <p class="postDes"> ${p.body} </p>`;
        postContainer.appendChild(postElement); //child added to parent
    
    }),
    );

}
loadElement();



