import {PostTypes} from '../static/Types';

/* == 
    Dummy 
    Story
== */
export const DummyStory = [
  {
    id: '1',
    title: 'Your story',
    dp: require('../assets/jpg/man0.jpeg'),
    main: true,
  },

  {
    id: '2',
    title: 'samgrill',
    dp: require('../assets/jpg/man1.jpeg'),
    main: false,
  },

  {
    id: '3',
    title: 'sandra1',
    dp: require('../assets/jpg/lady1.jpeg'),
    main: false,
  },

  {
    id: '4',
    title: 'john_doe',
    dp: require('../assets/jpg/man3.jpeg'),
    main: false,
  },
  {
    id: '5',
    title: 'emily_rose',
    dp: require('../assets/jpg/lady2.jpeg'),
    main: false,
  },
  {
    id: '6',
    title: 'michael99',
    dp: require('../assets/jpg/man2.jpeg'),
    main: false,
  },
];

/* ==
    Dummy
    Post
== */

export const DummyPosts: PostTypes[] = [
  {
    id: 1,
    account_name: 'Sam Mike',
    first_name: 'Sam',
    last_name: 'Mike',
    account_dp: require('../assets/jpg/lady1.jpeg'),
    post_message:
      'The Platform June 12 special will be held at the ballroom of Marriott GRA Ikeja! and most of the players will be there.',
    post_image: require('../assets/png/post8.png'),
    post_like: 0,
    post_comments: 660,
    created_at: '2024-05-28 18:34:19',
    isSponsored: true,
  },
  {
    id: 2,
    account_name: 'John Doe',
    first_name: 'John',
    last_name: 'Doe',
    account_dp: require('../assets/jpg/man1.jpeg'),
    post_message:
      'Excited to share my latest project with you all! Stay tuned for more updates.',
    post_image: require('../assets/png/post7.png'),
    post_like: 8500,
    post_comments: 420,
    created_at: '2024-06-15 10:12:45',
    isSponsored: false,
  },
  {
    id: 3,
    account_name: 'Jane Smith',
    first_name: 'Jane',
    last_name: 'Smith',
    account_dp: require('../assets/jpg/lady3.jpeg'),
    post_message:
      'Had a fantastic time at the tech conference today! Learned so much.',
    post_image: require('../assets/png/post6.png'),
    post_like: 9200,
    post_comments: 530,
    created_at: '2024-06-20 14:23:55',
    isSponsored: true,
  },
  {
    id: 4,
    account_name: 'Mike Johnson',
    first_name: 'Mike',
    last_name: 'Johnson',
    account_dp: require('../assets/jpg/man2.jpeg'),
    post_message:
      'Can’t wait for the weekend! Planning a getaway to the mountains.',
    post_image: require('../assets/png/post3.png'),
    post_like: 6300,
    post_comments: 310,
    created_at: '2024-06-25 08:47:30',
    isSponsored: false,
  },
  {
    id: 5,
    account_name: 'Emily Davis',
    first_name: 'Emily',
    last_name: 'Davis',
    account_dp: require('../assets/jpg/lady2.jpeg'),
    post_message:
      'Just finished reading an amazing book! Highly recommend it to everyone.',
    post_image: require('../assets/png/post1.png'),
    post_like: 7800,
    post_comments: 290,
    created_at: '2024-07-01 16:29:00',
    isSponsored: false,
  },
  {
    id: 6,
    account_name: 'Chris Lee',
    first_name: 'Chris',
    last_name: 'Lee',
    account_dp: require('../assets/jpg/man3.jpeg'),
    post_message: 'Starting a new fitness challenge today! Wish me luck.',
    post_image: require('../assets/png/post2.png'),
    post_like: 5400,
    post_comments: 150,
    created_at: '2024-07-05 09:12:35',
    isSponsored: true,
  },
];
