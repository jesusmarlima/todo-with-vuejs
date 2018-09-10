import {cypressIsCool, allPosts} from '../../../src/components/testSample'


context('unit test', () => {
  it('call my function and return plus curuxcu', (what='cypress') => {
      expect(cypressIsCool(what)).to.match(/cypress is cool!/)
  });
})

context('async tests', () => {
  it('get allposts count to 200', async ()=> {
    const posts = await allPosts();
      expect(posts).to.have.length(200)
  });
});