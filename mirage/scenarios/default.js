export default function(server) {

  // generate 10 posts
  server.createList('post', 10);

  server.loadFixtures('comments');
  server.create('comment', { postId: 5 });

}
