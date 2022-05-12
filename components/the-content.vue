<template>
  <div class="container mx-auto mt-8 pb-20">
    <Nav />
    <h1 class="text-8xl font-bold mb-10">Cool Story Bro</h1>
    <slot></slot>
    <p class="text-lg mt-10">Piste twin tip corn, wheelie carbon snake bite ripping freshies. Dirt noodle road rash, poaching BB 360 bro giblets yard sale fatty huck avie rock-ectomy. Taco mitt whip brain bucket, couloir nose table top air snake bite hellflip acro jib.  Flowy newschooler dope bonk. Pow pow heli epic pow. Park grip tape face shots crank giblets scream single track. Snake bite skid lid bump, gorby stoked glades Whistler Snowboard yard sale fully laps ride flow. Grab laps nose pipe huckfest, ski bum back country white room washboard rock roll ollie jib pow pow brain bucket. Fully rip hero hellflip, Ski gear jammer pillow popping jib rail backside Whistler.Taco japan air schwag stoked bomb hole schwag chowder gnar 360 dust on crust death cookies booter schwag smear spin. Whip butter yard sale, mute pinner dirtbag huckfest hot dogging apres bear trap line reverse camber 180 yard sale. Saddle dust on crust skinny, gnar steeps schwag T-bar misty reverse camber death cookies spread eagle shuttle brain bucket granny gear dirtbag. Bomb japan air pow pow butter cork free ride brain bucket trucks pow white room backside crank bail cruiser bunny slope. Big ring stomp lid dirt crank brain bucket DH brain bucket. Ski clipless face shots saddle steed.  </p>
    <hr class="my-10" v-if="hasStoryImage">
    <div class="flex flex-col md:flex-row px-8">
      <div class="pr-10">
        <slot name="storyImage"></slot>
      </div>
      <p v-if="hasStoryImage" class="text-7xl italic my-auto"> Dirt noodle road rash, poaching BB 360 bro giblets yard sale fatty huck avie rock-ectomy.</p>
    </div>
    <hr class="my-10" v-if="hasStoryImage">
    <p v-if="hasStoryImage" class="text-lg mt-10">Piste twin tip corn, wheelie carbon snake bite ripping freshies. Dirt noodle road rash, poaching BB 360 bro giblets yard sale fatty huck avie rock-ectomy. Taco mitt whip brain bucket, couloir nose table top air snake bite hellflip acro jib.  Flowy newschooler dope bonk. Pow pow heli epic pow. Park grip tape face shots crank giblets scream single track. Snake bite skid lid bump, gorby stoked glades Whistler Snowboard yard sale fully laps ride flow. Grab laps nose pipe huckfest, ski bum back country white room washboard rock roll ollie jib pow pow brain bucket. Fully rip hero hellflip, Ski gear jammer pillow popping jib rail backside Whistler.Taco japan air schwag stoked bomb hole schwag chowder gnar 360 dust on crust death cookies booter schwag smear spin. Whip butter yard sale, mute pinner dirtbag huckfest hot dogging apres bear trap line reverse camber 180 yard sale. Saddle dust on crust skinny, gnar steeps schwag T-bar misty reverse camber death cookies spread eagle shuttle brain bucket granny gear dirtbag. Bomb japan air pow pow butter cork free ride brain bucket trucks pow white room backside crank bail cruiser bunny slope. Big ring stomp lid dirt crank brain bucket DH brain bucket. Ski clipless face shots saddle steed.  </p>
  </div>
</template>

<script>
import Nav from './nav.vue'
export default {
    computed: {
        hasStoryImage() {
            return !!this.$slots.storyImage;
        }
    },
    components: { Nav }
}
</script>

<style>
img {
  @apply border-black border-2;
}
</style>
