async function fetchVideos() {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos');
        const data = await response.json();
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = '';

        console.log(data.data.data)
        
        if (data.success && data.data.data && Array.isArray(data.data.data)) {
            const resi = data.data.data;
            resi.forEach((video, item) => {
                const videoCard = document.createElement('div');
                videoCard.classList.add('video-card');
                videoCard.innerHTML = `
                    <iframe src="https://www.youtube.com/embed/${resi[item].items.id}" allowfullscreen></iframe>
                    <div class="title">${resi[item].items.snippet.localized.title}</div>
                `;
                videoContainer.appendChild(videoCard);
            });
            console.log(data.data.data)
        } else {
            videoContainer.innerHTML = '<p>Failed to load videos.</p>';
        }
    } catch (error) {
        document.getElementById('videoContainer').innerHTML = '<p>An error occurred. Please try again later.</p>';
    }
}

fetchVideos();
