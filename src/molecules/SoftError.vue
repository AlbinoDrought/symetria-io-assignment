<template>
  <div class="soft error molecule">
    <sub-text>
      An error occurred processing your request.
    </sub-text>
    <link-button @click.native.prevent="$emit('retry')">
      Try Again
    </link-button>
  </div>
</template>

<script>
import SubText from '@/components/Text/SubText';
import LinkButton from '@/components/LinkButton';

export default {
  components: {
    LinkButton,
    SubText,
  },
};
</script>

<style scoped>
.soft.error.molecule {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
