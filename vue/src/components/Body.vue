<template>
  <div>
    <Invitation />
    <Contact />
    <Gallery />
    <Calendar />
    <Location />
    <Account />
  </div>
</template>

<script>
import Invitation from "./Invitation";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Calendar from "./Calendar";
import Location from "./Location";
import Account from "./Account";

export default {
  name: "Body",
  components: {
    Invitation,
    Contact,
    Gallery,
    Calendar,
    Location,
    Account,
  },
};
</script>

<style>
.container {
  margin: 168px 0;
}
</style>