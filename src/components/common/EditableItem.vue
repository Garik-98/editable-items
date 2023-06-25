<template>
    <div class="ed-item">
        <input
            class="item"
            v-bind:disabled="!editing"
            v-model="item.value"
        />
        <div class="options">
            <div v-if="editing">
                <i class="fas fa-check green" @click="updateItem"></i>
                <i class="fas fa-ban red" @click="cancel"></i>
            </div>
            <i v-else class="fas fa-edit green" @click="edit"></i>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'EditableItem',
    props: {
        editableItem: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            item: { ...this.editableItem },
            editing: false,
            defaultValue: null
        };
    },
    methods: {
        edit() {
            this.defaultValue = this.item.value;
            this.editing = true;
        },
        cancel() {
            this.item.value = this.defaultValue;
            this.editing = false;
        },
        updateItem() {
            this.$store.commit('updateItem', {
                name: this.item.name,
                value: this.item.value
            });

            this.editing = false;
        }
    }
}
</script>
  
<style scoped>
    .ed-item {
        width: 50%;
        position: relative;
        margin-bottom: 15px;
    }

    .item {
        width: 100%;
        padding: 15px;
        font-size: 20px;
        border: none;
        border-radius: 10px;
        outline: none;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    }

    .options {
        position: absolute;
        top: 35%;
        right: 10px;
        display: flex;
        align-items: center;
    }

    i {
        cursor: pointer;
        margin: 2px;
    }

    i.red:hover {
        color: red;
    }

    i.green:hover {
        color: green;
    }
</style>
    