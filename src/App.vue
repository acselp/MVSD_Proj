<template>
  <n-config-provider :theme="themeLight">
  <div class="section">
    <div class="container">
      <div class="title">
        University prediction
      </div>
      <div class="columns">
        <div class="column is-3">
          <n-card>
            <n-form ref="formRef" :model="{}">
              <n-form-item path="age" label="Grade">
                <n-input @keydown.enter.prevent placeholder="Insert your grade" />
              </n-form-item>
              <n-form-item path="age" label="Cota 30%">
                <n-checkbox  />
              </n-form-item>
            </n-form>
          </n-card>
        </div>
        <div class="column is-9">
          <div class="level">
              <n-input />
              <n-button>
                Search
              </n-button>
          </div>
          <div class="level">
            <div class="level-item">
              <n-data-table
                :columns="tableSchema"
                :data="data"
                :pagination="false"
                :bordered="true"
                :striped="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </n-config-provider>
</template>


<script setup lang="ts">


import {onMounted, ref} from "vue";
import {GetTableSchema} from "@/table-schema";
import {getData} from "@/tableData";
import {NButton, NCard, NCheckbox, NDataTable, NForm, NFormItem, NInput} from "naive-ui";
import themeLight from "naive-ui/es/rate/styles/light";

const data = ref([])

const tableSchema = GetTableSchema();

const lightTheme = themeLight;

onMounted(() => {
  data.value = getData();
})

</script>
