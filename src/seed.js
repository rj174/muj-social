export function seedDatabase(firebase) {
  const users = [
    {
      userId: '73lSjotX4gNwRbU0egVHUaZQe2r1',
      username: 'Rahul',
      fullName: 'Rahul Jain',
      emailAddress: 'rahjain417@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'CinefiliaMUJ',
      fullName: 'DANCE CLUB OF MUJ',
      emailAddress: 'cinefelia.muj@gmail.com',
      following: [],
      followers: ['73lSjotX4gNwRbU0egVHUaZQe2r1'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'AYUSH',
      fullName: 'AYUSH BATRA',
      emailAddress: 'ayush123@gmail.com',
      following: [],
      followers: ['73lSjotX4gNwRbU0egVHUaZQe2r1'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'AGAMJYOT',
      fullName: 'Agamjyot Singh Kholi',
      emailAddress: 'agamjyotsingh@gmail.com',
      following: [],
      followers: ['73lSjotX4gNwRbU0egVHUaZQe2r1'],
      dateCreated: Date.now()
    }
  ];


  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: 'DANCE COMPETETION',
        likes: [],
        comments: [
          {
            displayName: 'AGAMJYOT',
            comment: 'GOODLUCK!'
          },
          {
            displayName: 'Ayush',
            comment: 'all the best!'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}
