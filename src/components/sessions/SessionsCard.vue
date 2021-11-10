<template>
  <div class="sessions__wrapper mt-4">
    <div class="sessions__header">Розклад сеансів</div>
    <div class="sessions__cards">
      <session-card />
      <session-card />
      <session-card />
      <session-card />
      <session-card />
      <session-card />
      <session-card />
      <session-card />
      <session-card />
    </div>
    <div class="sessions__footer">просто низ</div>
  </div>
</template>

<script>
import SessionCard from "@/components/sessions/SessionCard";
export default {
  name: "SessionsCard",
  components: { SessionCard },
};
</script>

<style lang="scss" scoped>
.sessions__wrapper {
  border-radius: 20px;
  overflow: hidden;
  color: white;

  & div {
    padding: 20px;
  }
}

.sessions__header,
.sessions__footer {
  background: #2d3436;
  height: 100px;
}

.sessions__cards {
  height: 400px;
  background: #617383;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
