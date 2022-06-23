const initialState = {

  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'Sport',
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'Movies',
      author: 'John Doe'
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'Sport',
      author: 'John Doe'
    },
    {
      id: '4',
      title: 'Article title IV',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'News',
      author: 'John Doe'
    },
    {
      id: '5',
      title: 'Article title V',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'Miscellaneous',
      author: 'John Doe'
    }
  ],

  categories: [
    {
      id: '1',
      name: 'Sport'
    },
    {
      id: '2',
      name: 'News'
    },
    {
      id: '3',
      name: 'Movies'
    },
    {
      id: '4',
      name: 'Miscellaneous'
    }
  ]
};

export default initialState;