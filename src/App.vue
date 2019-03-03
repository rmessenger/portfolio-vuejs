<template>
  <div class="w-100 tc pa4 gray">
    <h2>Test header</h2>
    <h3 v-if="loading">Loading...</h3>
    <p v-for="post in posts" :key="`post-${post._id}`">{{post.title}}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    loading: false,
    posts: []
  }),
  created() {
    this.loading = true;
    this.getPosts()
      .then(posts => (this.posts = posts))
      .catch(error => window.alert(error))
      .then(() => (this.loading = false));
  },
  methods: {
    getPosts() {
      return this.$sanity.fetch(`
        *[_type == "post"]{
          _id,
          title,
          author,
          mainImage,
          categories
        }
      `);
    }
  }
};
</script>
