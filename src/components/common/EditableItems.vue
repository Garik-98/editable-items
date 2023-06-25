<template>
    <div class="items">
        <div>
            <p v-if="!totalItems">
                No records found.
            </p>

            <EditableItem
                v-for="item in items"
                :key="item.name"
                :editableItem="item"
            />
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
import EditableItem from './EditableItem';

export default {
    name: "EditableItems",
    components: { 
        EditableItem
    },
    computed: {
        ...mapGetters([
            'items',
            'totalItems'
        ])
    }
}
</script>
  
<style scoped>
    .items {
        margin-top: 30px;
    }

    .items > div {
        padding: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>
    