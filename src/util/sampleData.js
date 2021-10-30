


export let userComments = [
    {
      parentId: null,
      id: 1,
      name: "Anand",
      comment: "good morning",
      like: 1,
      replys: [
        {
          id: "1.1",
          name: "Anand",
          comment: "good morning",
          like: 1,
          replys: [
            {
              id: "1.1.1",
              name: "Anand",
              comment: "good morning",
              like: 1,
              replys: []
            },
            {
              id: "1.1.2",
              name: "Anand",
              comment: "good morning",
              like: 1,
              replys: []
            }
          ]
        },
        {
          id: 12,
          name: "Anand",
          comment: "good morning",
          like: 1,
          replys: []
        }
      ]
    },
    {
      id: 2,
      name: "Ravi",
      comment: "good morning",
      like: 1,
      replys: []
    },
    {
      id: 3,
      name: "Raju",
      comment: "good morning",
      like: 1,
      replys: []
    }
  ];