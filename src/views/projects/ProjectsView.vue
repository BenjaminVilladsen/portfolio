<template>
    <div class="projects">
        <h1>Projects</h1>
        <router-link :to="{name: 'projectPreview', params: {id: 'MoneyMonth'}}">
            <div class="project">
                <h2>Money Per Day</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed </p>
            </div>
          </router-link>
      </div>
  </template>

<script>
export default {
  name: 'ProjectsView',
  data () {
    return {
    }
  }

}
</script>

  <style scoped>
    .project {
        padding : 20px;
        color: white;
      margin: 0 auto;
      width: 200px;
      height: 200px;
      border-radius: 25px;
      background: #405a74;
      transition: all 0.3s ease-in;
    }
    .project:hover{
      background: #678fb8;
      transition: all 0.3s ease-in;
    }
    .project:active{
      background: #405a74;
    }
    a {
      text-decoration: none;
      transform: translateY(10px);
      transition: all 0.3s ease-in;
    }
    a :hover{
      transform: translateY(-10px);
      transition: all 0.3s ease-in;
    }
    h2{
      transition: all 0.3s ease-in;
    }
    p{
      transition: all 0.3s ease-in;
    }

  </style>
