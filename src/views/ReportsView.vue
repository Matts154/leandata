<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Expense Reports</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>Total Cost by Category</h2>
        <p><strong>Meals:</strong> {{ formatCurrency(typeTotals.meals) }}</p>
        <p><strong>Travel:</strong> {{ formatCurrency(typeTotals.travel) }}</p>
        <p><strong>Software:</strong> {{ formatCurrency(typeTotals.software) }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p><strong>Grand total:</strong> {{ formatCurrency(calculateTotal(typeTotals)) }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useExpensesStore } from '@/stores/expenses'
import { mapState } from 'pinia'
import calculateTotal from '@/mixins/calculateTotal'
import formatCurrency from '@/mixins/formatCurrency'

export default {
  mixins: [formatCurrency, calculateTotal],
  computed: {
    ...mapState(useExpensesStore, ['typeTotals'])
  }
}
</script>

<style></style>
