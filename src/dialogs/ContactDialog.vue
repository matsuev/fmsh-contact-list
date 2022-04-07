<template>
	<el-dialog v-model="visible" title="Данные контакта" destroy-on-close>
		<ContactForm ref="contactForm" :model="contact" @submit="onFormSubmit" />
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="onFormCancel">Отменить</el-button>
				<el-button type="primary" @click="trySubmit">
					{{ buttonLabel }}
				</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import ContactForm from "../forms/ContactForm.vue";

const props = defineProps(["contact", "visible", "role"]);

const buttonLabel = computed(() =>
	props.role == "add" ? "Добавить" : "Сохранить"
);

const contactForm = ref(null);
const trySubmit = () => contactForm.value.submitForm();

const emit = defineEmits(["cancel", "submit"]);
const onFormSubmit = () => emit("submit");
const onFormCancel = () => emit("cancel");
</script>