<template>
  <div>
    <new-user-form />
    <users-table />
  </div>
</template>

<script>
import NewUserForm from '@/components/NewUserForm.vue';
import UsersTable from '@/components/UsersTable.vue';

export default {
    components: {
        NewUserForm,
        UsersTable,
    },
};
</script>

<style>

</style>