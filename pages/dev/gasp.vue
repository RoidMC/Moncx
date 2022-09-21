<template>
    <div ref="box" class="box"></div>
  </template>
  
  <script>
  import { TimelineLite, Back } from 'gsap'
  
  export default {
    mounted() {
      const { box } = this.$refs
      const timeline = new TimelineLite()
  
      timeline.to(box, 1, {
        x: 200,
        rotation: 90,
        ease: Back.easeInOut, // Specify an ease
      })
      timeline.to(box, 0.9 , {
        background: 'green'
      },
      '-=0.5' // Run the animation 0.5s early
      )
    }
  }
  </script>
  
  <style>
  /* styles emitted */
  </style>