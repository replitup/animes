const videos = [
    {
      title: 'Video Title 1',
      views: '123K views',
      likes: '4.5K',
      duration: '12:34',
      thumbnail: 'thumbnail1.jpg'
    },
    {
      title: 'Video Title 2',
      views: '56K views',
      likes: '2.1K',
      duration: '9:21',
      thumbnail: 'thumbnail2.jpg'
    },
    {
      title: 'Video Title 3',
      views: '89K views',
      likes: '6.3K',
      duration: '15:45',
      thumbnail: 'thumbnail3.jpg'
    }
  ];

  const videoGallery = document.getElementById('video-gallery');

  videos.forEach(video => {
    const card = document.createElement('div');
    card.className = 'card';

    const thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';
    // thumbnail.style.backgroundImage = `url(${video.thumbnail})`;

    const videoTime = document.createElement('span');
    videoTime.className = 'video-time';
    videoTime.textContent = video.duration;
    thumbnail.appendChild(videoTime);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = video.title;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = video.views;
    cardBody.appendChild(cardText);

    const videoInfo = document.createElement('div');
    videoInfo.className = 'video-info';

    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.innerHTML = `<i class="fa fa-thumbs-up"></i> ${video.likes}`;
    videoInfo.appendChild(likeBtn);

    const followBtn = document.createElement('button');
    followBtn.className = 'follow-btn';
    followBtn.textContent = 'Follow';
    videoInfo.appendChild(followBtn);

    cardBody.appendChild(videoInfo);
    card.appendChild(thumbnail);
    card.appendChild(cardBody);
    videoGallery.appendChild(card);
  });
