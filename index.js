Object.keys(words).forEach((category) => {
    if (category !== 'all') {
      words.all = {...words.all, ...words[category]};
    }
  });