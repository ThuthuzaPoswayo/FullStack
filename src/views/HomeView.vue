<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
    <div class="row">
      <section class="row" id="landing">
        <LandingPage />
      </section>
      <div class="row">
        <section class="row" id="about">
          <About />
        </section>
      </div>
      <div class="row">
        <section class="row" id="resume">
          <Resume />
        </section>
      </div>
      <div class="">
        <section class="row" id="projects">
          <Projects />
        </section>
      </div>
      <div class="row">
        <section class="row" id="admin">
          <Testimonials />
        </section>
      </div>
      <div class="row">
        <section class="row" id="reach-us">
          <ReachMe />
        </section>
      </div>
      <div class="row">
        <section id="footer">
          <FooterComp />
        </section>
      </div>
    </div>
  </div>
</template>

<!-- // import NavBar from "@/components/NavBar.vue";
// import LandingPage from "@/components/LandingPage.vue";
// import About from "@/components/AboutMe.vue";
// import Projects from "@/components/ProjectsSection.vue";
// import Resume from "@/components/ResumeSection.vue";
// import Testimonials from "@/components/TestimonialSection.vue";
// import FooterComp from "@/components/Footer.vue";
// import ReachMe from "@/components/ReachMe.vue" -->

 <!-- <script>
export default {
  name: "HomeView",
  components: {
    NavBar,
    LandingPage,
    About,
    Products,
    Resume,
    Testimonials,
    FooterComp,
    ReachMe
  },
};
</script>  -->

<style>

</style>