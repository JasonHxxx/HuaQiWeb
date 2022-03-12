<template>
  <div>

    <div class="mt-6 d-flex justify-start" style="width: 90%;margin-left: 4.8%">
      <EsgReItem
          v-for="(info, i) in esgList"
          :key="i"
          :description="info.description"
          :kind="info.kind"
          :kind-des="info.kindDes"
      >
      </EsgReItem>
    </div>
  </div>
</template>

<script>
import EsgReItem from "../components/EsgReItem";
export default {
  name: "EsgRe",
  components: { EsgReItem},
  data() {
    return {
      esgList: [
        {
          description: "hhhhhhhhhhhhhhhhhhdddddddddddddddddd",
          kind:"E",
          kindDes:"nvironmental"
        },
        {
          description: "hhhhhhhhhhhhhhhhhhdddddddddddddddddd",
          kind:"S",
          kindDes:"ocial"
        },
        {
          description: "hhhhhhhhhhhhhhhhhhdddddddddddddddddd",
          kind:"G",
          kindDes:"overnance"
        }
      ]
    };
  }

};
</script>

<style scoped>

</style>
