let postForm = document.getElementById('post-form');
let postContent = document.getElementById('post-content');
let postContainer = document.getElementById('post-container');
postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let post = {
        author: 'ME',
        content: postContent.value
    };
    displayPost(post);
    postContent.value = '';
});
function displayPost(post) {
    let postHTML = `
     <div class="post">
     <span class="post-author">${post.author}</span>
     <p class="post-content">${post.content}</p>
     </div>
    `;
    postContainer.insertAdjacentHTML('beforeend', postHTML);
}

const imageUploadInput = document.getElementById('image-upload');
const submitImageButton = document.getElementById('submit-image-button');
const imagePreviewDiv = document.getElementById('image-preview');

submitImageButton.addEventListener('click', () => {
    const selectedFile = imageUploadInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        const imageDataUrl = reader.result;
        const imageElement = document.createElement('img');
        imageElement.src = imageDataUrl;
        imagePreviewDiv.appendChild(imageElement);
    });
    reader.readAsDataURL(selectedFile);
});



const replyButtons = document.querySelectorAll('.reply-button');
replyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const replyForm = button.nextElementSibling;
        replyForm.style.display = 'block';
    });
});

const submitReplyButtons = document.querySelectorAll('.submit-reply-button');
const notificationMessage = document.getElementById('notification-message');
submitReplyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const replyText = button.previousElementSibling.value;
        const newReply = document.createElement('div');
        const commentText = document.getElementById('comment-text').value;
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
        <button class="like-button" style="background: red;color: white;">Like Comment</button>
        <span class="like-count" style="color: red;font-size: 18px;">0 Likes</span>
        `;
        
        newReply.className = 'reply';
        newReply.innerHTML = `<p>${replyText}</p>`;
        const commentContainer = button.closest('#comment-container');
        commentContainer.appendChild(newReply);
        commentContainer.appendChild(newComment);
        notificationMessage.innerHTML = 'New Comment Posted!';
        setTimeout(() => {
            notificationMessage.innerHTML = '';
        }, 5000);
        const likeButton = newComment.querySelector('.like-button');
        const likeCount = newComment.querySelector('.like-count');
        likeButton.addEventListener('click', () => {
            const currentCount = parseInt(likeCount.textContent);
            likeCount.textContent = currentCount + 1 +  'Likes';
        });
        button.previousElementSibling.value = '';
    });
});