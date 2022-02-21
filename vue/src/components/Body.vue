<template>
  <div>
    <Invitation />
    <Contact />
    <Gallery />
    <Calendar />
    <Location />
    <Dot />
    <Quote />
    <Account />
  </div>
</template>

<script>
import Invitation from "./Invitation";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Calendar from "./Calendar";
import Location from "./Location";
import Dot from "./Dot";
import Quote from "./Quote";
import Account from "./Account";

export default {
  name: "Body",
  components: {
    Invitation,
    Contact,
    Gallery,
    Calendar,
    Location,
    Dot,
    Quote,
    Account,
  },
};
</script>

<style>
.container {
  margin: 168px 0;
}
</style>