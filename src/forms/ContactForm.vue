<template>
	<el-form :model="model" ref="formRef" :rules="rules" label-width="150px">
		<el-form-item label="Фамилия Имя" prop="name">
			<el-input v-model="model.name" autocomplete="off" ref="inputName" />
		</el-form-item>
		<el-form-item label="Номер телефона">
			<el-input v-model="model.phone" autocomplete="off" />
		</el-form-item>
	</el-form>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
defineProps(["model"]);

const emit = defineEmits(["submit"]);

const inputName = ref(null);
onMounted(() => {
	if (!inputName) return;
	inputName.value.focus();
});

const rules = reactive({
	name: [
		{
			required: true,
			message: "Please input Activity name",
			trigger: "change",
		},
		{ min: 5, message: "Length should be 3 or greater", trigger: "change" },
	],
});

const formRef = ref(null);

const submitForm = async () => {
	if (!formRef) return;
	await formRef.value.validate((valid) => {
		if (valid) {
			emit("submit");
		}
	});
};

const resetForm = () => {
	if (!formRef) return;
	formRef.value.resetFields();
};

defineExpose({ submitForm, resetForm });
</script>