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
import Invitation from "./Invitation/Invitation";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import Calendar from "./Calendar/Calendar";
import Location from "./Location/Location";
import Quote from "./Quote/Quote";
import Account from "./Account/Account";

import Dot from "@/components/Util/Dot";

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