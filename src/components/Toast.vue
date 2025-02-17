<script setup lang="ts"></script>
<template>
    <div class="toast-wrapper">
      <div class="toast text-center items-center justify-center">
        You must enter values in both fields!
      </div>
    </div>
  </template>
  
  <style>
    .toast-wrapper {
      position: fixed;
      width: 100%;
      right: 0px;
      top: 10px;
      z-index: 200;
    }
    .toast {
      padding: 15px;
      color: white;
      background: #ff0062;
      border-radius: 10px;
      box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
      max-width: 420px;
      margin: 0 auto;
    }
  </style>