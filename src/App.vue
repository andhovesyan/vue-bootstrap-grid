<template>
  <bs-grid>
    <bs-row>
      <bs-col :xs="12" :sm="6" :md="4" :xl="3" v-for="n in 12">
        <div class="card">
          Test
        </div>
      </bs-col>
    <bs-row>
  </bs-grid>
</template>

<script>
export default {
  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
.card {
  background: #fff;
  border-radius: .15rem;
  box-sizing: border-box;
  text-align: center;
  display: block;
  height: 5rem;
  margin: 0 0 1rem;
  padding: 2rem;
  width: 100%;
}
</style>