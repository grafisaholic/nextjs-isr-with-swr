export interface PostTypes {
  id: string | number;
  title: string;
  date: string;
  stack: string;
  topic?: string;
  content?: string;
}

export const posts: PostTypes[] = [
  {
    id: 1,
    title: 'Borden',
    date: '22/07/2021',
    stack: 'mongodb',
    topic: 'frontend',
    content:
      "Resection of Right Carpal Joint, Open Approach. If you're developing an application, you'll want to make sure you're testing it under conditions that closely simulate a production environment. In production, you'll have an army of users banging away at your app and filling your database with data, which puts stress on your code. If you're hand-entering data into a test environment one record at a time using the UI, you're never going to build up the volume and variety of data that your app will accumulate in a few days in production. Worse, the data you enter will be biased towards your own usage patterns and won't match real-world usage, leaving important bugs undiscovered.",
  },
  {
    id: 2,
    title: 'Avigdor',
    date: '02/06/2021',
    stack: 'reactjs',
    topic: 'backend',
    content:
      "Drainage of Right Submaxillary Gland, Percutaneous Approach, Diagnostic. If you're developing an application, you'll want to make sure you're testing it under conditions that closely simulate a production environment. In production, you'll have an army of users banging away at your app and filling your database with data, which puts stress on your code. If you're hand-entering data into a test environment one record at a time using the UI, you're never going to build up the volume and variety of data that your app will accumulate in a few days in production. Worse, the data you enter will be biased towards your own usage patterns and won't match real-world usage, leaving important bugs undiscovered.",
  },
  {
    id: 3,
    title: 'Conrade',
    date: '22/01/2021',
    stack: 'reactjs',
    topic: 'devops',
    content:
      "Supplement Right Subclavian Vein with Synthetic Substitute, Percutaneous Endoscopic Approach. If you're developing an application, you'll want to make sure you're testing it under conditions that closely simulate a production environment. In production, you'll have an army of users banging away at your app and filling your database with data, which puts stress on your code. If you're hand-entering data into a test environment one record at a time using the UI, you're never going to build up the volume and variety of data that your app will accumulate in a few days in production. Worse, the data you enter will be biased towards your own usage patterns and won't match real-world usage, leaving important bugs undiscovered.",
  },
  {
    id: 4,
    title: 'Winona',
    date: '13/06/2021',
    stack: 'nextjs',
    topic: 'frontend',
    content:
      "Bypass Left Greater Saphenous Vein to Lower Vein with Autologous Tissue Substitute, Open Approach. If you're developing an application, you'll want to make sure you're testing it under conditions that closely simulate a production environment. In production, you'll have an army of users banging away at your app and filling your database with data, which puts stress on your code. If you're hand-entering data into a test environment one record at a time using the UI, you're never going to build up the volume and variety of data that your app will accumulate in a few days in production. Worse, the data you enter will be biased towards your own usage patterns and won't match real-world usage, leaving important bugs undiscovered.",
  },
  {
    id: 5,
    title: 'Constantia',
    date: '19/11/2021',
    stack: 'nextjs',
    topic: 'backend',
    content:
      "Fusion of Right Toe Phalangeal Joint with Synthetic Substitute, Percutaneous Endoscopic Approach. If you're developing an application, you'll want to make sure you're testing it under conditions that closely simulate a production environment. In production, you'll have an army of users banging away at your app and filling your database with data, which puts stress on your code. If you're hand-entering data into a test environment one record at a time using the UI, you're never going to build up the volume and variety of data that your app will accumulate in a few days in production. Worse, the data you enter will be biased towards your own usage patterns and won't match real-world usage, leaving important bugs undiscovered.",
  },
];
