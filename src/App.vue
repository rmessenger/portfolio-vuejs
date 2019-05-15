<template>
  <div class="cf poiret-one">
    <div class="fl w-100 w-30-l pa4 cf tr-l flex items-center flex-column flex-row-ns flex-column-l">
      <!-- LOGO -->
      <div class="w-100 bb pb3 pb0-m bw0-m">
        <span class="f2 bungee">BOLD<br/>SIMPLICITY</span>
        <div class="pt2">Portfolio by Robin Messenger</div>
        <div class="pt3">
          <a 
            target="_blank"
            href="https://github.com/rmessenger/portfolio-vuejs"
            class="pv1 ph2 bg-orange white br4 b no-underline dim"
          >
            <i class="fas fa-hammer"></i>
            Under construction
          </a>
        </div>
      </div>

      <!-- MENU -->
      <div class="f4 f3-l b tr flex-grow-1 mt2 mt0-m flex justify-between w-100 db-ns flex-wrap">
        <a
          v-for="page in $options.pages"
          :key="`page-${page.name}`"
          class="pv1 di pointer w-100-l br4-l mv1-l mh0-l ml3-ns dib"
          :class="{[page.color]: page===activePage, 'faa-flash animated': page===activePage && loading}"
          @click="activePage=page"
        >
          {{page.name}}
          <i :class="page.icon + (page===activePage && loading ? '' : '')" class="w2 tc"></i>
        </a>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="fl w-100 w-70-l pa4 pt0 pt4-l mw7-l relative">
      <h1 class="mt0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic molestiae aliquid dolores dicta ex, totam ad commodi voluptatibus fugiat quis magni saepe rerum atque quam. Laudantium earum doloremque quisquam maiores provident, minima non! Necessitatibus minima error tempora totam quae, nobis fuga sunt iusto neque tenetur, quis similique explicabo consequuntur voluptatem dolores sed dolorum, beatae culpa. Molestiae qui, repudiandae eaque vero nesciunt id natus possimus praesentium odio soluta saepe earum enim harum esse facere optio dolore iusto nam animi. Veniam, qui quisquam! Optio exercitationem quia sed maiores amet, labore nisi repellat eius aliquam accusantium suscipit animi est fugit. Illo, quod magnam!</p>
      <h1 class="mt0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laboriosam.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, temporibus. Voluptas, dolor eos. Excepturi sit, at adipisci quam qui earum sequi harum nemo deleniti asperiores tempore hic autem eum aperiam cum et sed culpa sunt repudiandae? Officia assumenda aspernatur voluptates, praesentium, rerum iure eaque cumque maxime nostrum qui nulla nobis beatae excepturi id eius deleniti nisi minus odit numquam veritatis facilis perspiciatis ullam unde fuga. Aut veritatis fuga consequatur praesentium obcaecati non eos impedit dolor beatae doloribus, expedita delectus earum esse cupiditate unde corporis quidem nemo ipsa placeat architecto asperiores quis soluta? Nihil, ea. Ipsum consectetur quos, doloremque exercitationem assumenda repellat ducimus ratione optio quam aliquam iusto quia, tempora ad.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, temporibus. Voluptas, dolor eos. Excepturi sit, at adipisci quam qui earum sequi harum nemo deleniti asperiores tempore hic autem eum aperiam cum et sed culpa sunt repudiandae? Officia assumenda aspernatur voluptates, praesentium, rerum iure eaque cumque maxime nostrum qui nulla nobis beatae excepturi id eius deleniti nisi minus odit numquam veritatis facilis perspiciatis ullam unde fuga. Aut veritatis fuga consequatur praesentium obcaecati non eos impedit dolor beatae doloribus, expedita delectus earum esse cupiditate unde corporis quidem nemo ipsa placeat architecto asperiores quis soluta? Nihil, ea. Ipsum consectetur quos, doloremque exercitationem assumenda repellat ducimus ratione optio quam aliquam iusto quia, tempora ad.</p>
      <h1 class="mt0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic molestiae aliquid dolores dicta ex, totam ad commodi voluptatibus fugiat quis magni saepe rerum atque quam. Laudantium earum doloremque quisquam maiores provident, minima non! Necessitatibus minima error tempora totam quae, nobis fuga sunt iusto neque tenetur, quis similique explicabo consequuntur voluptatem dolores sed dolorum, beatae culpa. Molestiae qui, repudiandae eaque vero nesciunt id natus possimus praesentium odio soluta saepe earum enim harum esse facere optio dolore iusto nam animi. Veniam, qui quisquam! Optio exercitationem quia sed maiores amet, labore nisi repellat eius aliquam accusantium suscipit animi est fugit. Illo, quod magnam!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  pages: [
    {
      name: 'About Me',
      icon: 'fas fa-user-circle',
      color: 'gold',
    },
    {
      name: 'Posts',
      icon: 'fas fa-brain',
      color: 'red',
    },
    {
      name: 'VueJS',
      icon: 'fab fa-vuejs',
      color: 'green',
    },
    {
      name: 'JavaScript',
      icon: 'fab fa-js-square',
      color: 'yellow',
    },
    {
      name: 'Java',
      icon: 'fab fa-java',
      color: 'blue',
    },
    {
      name: 'Resume',
      icon: 'fas fa-address-card',
      color: 'purple',
    }
  ],
  data: () => ({
    loading: false,
    activePage: null,
    posts: []
  }),
  created() {
    this.activePage = this.$options.pages[0];
    this.loading = true;
    this.getPosts()
      .then(posts => (this.posts = posts))
      .catch(error => window.alert(error))
      .then(() => (this.loading = false));
  },
  methods: {
    getPosts() {
      return this.$sanity.fetch(`*[_type == "post"]`);
    }
  }
};
</script>
