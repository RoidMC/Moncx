<template>
<div class="el-footer rmc-footer-content">
  <el-container>
      <el-aside width="50%">
        <div class="rmc-footer-info">
            <div class="footer-info-coryright">
                2022  RoidMC Studios
            </div>
            <div class="footer-info-icp">
              <a href="https://beian.miit.gov.cn">赣ICP备2021006150号-1</a>
              <br>
              <img src="/assets/imgs/web/icp/beian.png" height="16" width="16" alt="">
              <a href="https://www.beian.gov.cn">公安备案号-预留</a>
            </div>
        </div>
      </el-aside>
      <el-main>
        <div class="rmc-footer-icons">
          <!-- 页脚图标#1  -->
          <span class="icons-1">
            <a href="https://rmc.ink/social/qq">
              <font-awesome-icon icon="fa-brands fa-qq" />
            </a>
          </span>
          <!-- 页脚图标#2  -->
          <span class="icons-2">
            <a href="https://rmc.ink/social/discord">
              <font-awesome-icon icon="fa-brands fa-discord" />
            </a>
          </span>
          <!-- 页脚图标#3  -->
          <span class="icons-3">
            <a href="https://osc.roidmc.com">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
          </span>
          <!-- 页脚图标#4  -->
          <span class="icons-4">
            <a href="https://rmc.ink/social/email">
              <font-awesome-icon icon="fa-regular fa-envelope" />
            </a>
          </span>
        </div>
      </el-main>
    </el-container>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {
  ElContainer,
  ElAside,
  ElMain,
  ElIcon,
  ElButton,
  } from "element-plus";
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .text-color{
   color: white
  };
  .flex-grow {
    flex-grow: 1;
  }
  </style>
  