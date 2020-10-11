<template>
  <notifications  classes="notification" animation-type="css" animation-name="appeare" />
</template>


<style lang="scss">

@keyframes appeare {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.notification {
  position: fixed;
  bottom: 0;
  left:0;
  right:0;
  z-index: 99;
  padding: 10px;
  margin: 0 5px 5px;
  font-size: 12px;
  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;
    max-width: 400px;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }
 
  &.error {
    background: #E54D42;
    border-left-color: #B82E24;
  }
 
  &.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }
}

</style>