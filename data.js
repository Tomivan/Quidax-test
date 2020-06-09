const data = {
    "books": [
        {
            "name": "The Effective Engineer",
            "src": "assets/images/effective engineer.png",
            "status": "Available",
            "author": "Edmond Lau",
            "year": "2009",
            "genre": "Motivational",
            "ratings": 4.0,
            "members": 31,
            "likes": 29
        },
        {
            "name": "Built To Last",
            "src": "assets/images/built to last.png",
            "status": "Borrowed Out",
            "author": "Jim collins, Jerry I.Porras",
            "year": "2001",
            "genre": "Business, Entrprenuership",
            "ratings": 4.0,
            "members": 31,
            "likes": 29
        },
        {
            "name": "The Lean Startup",
            "src": "assets/images/the lean startup.png",
            "status": "Available",
            "author": "Eric leis",
            "year": "2004",
            "genre": "Motivational",
            "ratings": 4.0,
            "members": 31,
            "likes": 29
        },
        {
            "name": "Effective Python",
            "src": "assets/images/effective python.png",
            "status": "Available",
            "author": "Diomidis Spinellis",
            "year": "",
            "genre": "Motivational",
            "ratings": 4.0,
            "members": 31,
            "likes": 29
        },
        {
            "name": "Big magic",
            "src": "assets/images/big magic.png",
            "status": "Available",
            "author": "Elizabeth Gilbert",
            "year": "2014",
            "genre": "Motivational",
            "ratings": 4.0,
            "members": 31,
            "likes": 29
        }
    ]
}

//Looping through the books array to populate the HTML
for(const key in data) {
    for (let i = 0; i < data[key].length; i++) {
        const name = data[key][i].name;
        const src = data[key][i].src;
        const status = data[key][i].status;
        const author = data[key][i].author;
        const year = data[key][i].year;
        const genre = data[key][i].genre;
        const ratings = data[key][i].ratings;
        const members = data[key][i].members;
        const likes = data[key][i].likes;
        const card = document.querySelectorAll('.card');
        card.innerHTML =
          '<img src=src>'+ src +
          '<p>' + status + '</p>' +
          '<div class="details">' +
          '<p class="name">' + name + '</p>' +
          '<p>' + author + '</p>' + '<p>' + year + ' - ' + '</p>' +
          '<p>' + genre + '</p>'
          '<p>' + ratings + '</p>' +
          '<p>' + members + '</p>' + '|' + '<p>' + likes + '</p>';
        document.getElementById(key).childNodes;
      }
      
}
