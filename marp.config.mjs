import markdownItKroki from '@kazumatu981/markdown-it-kroki';

export default {
  engine: ({ marp }) =>
    marp.use(markdownItKroki, {
      entrypoint: 'https://kroki.io',
      useImg: true,
      imageFormat: 'svg',
    }),
};
