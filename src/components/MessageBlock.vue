<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MessageBlock',
  props: {
    msg: String
  }
}
</script>