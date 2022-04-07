<template>
	<div class="contact-list">
		<h3>Все контакты</h3>
		<div v-if="contacts.getList.length == 0" class="contact-list-card">
			Список пуст
		</div>
		<div
			v-else
			class="contact-list-card"
			v-for="contact in contacts.getList"
			:key="contact.id"
		>
			<ContactListItem :contact="contact" />
			<div class="contact-actions">
				<el-checkbox v-model="contact.faworite"
					>Добавить в избранное</el-checkbox
				>
				&nbsp;&nbsp;&nbsp;

				<el-button
					type="danger"
					size="small"
					:icon="Delete"
					@click="deleteContact(contact)"
					>Удалить</el-button
				>
				<el-button
					type="primary"
					size="small"
					:icon="Edit"
					@click="editContact(contact)"
					>Править</el-button
				>
			</div>
		</div>
		<el-button type="primary" :icon="CirclePlus" @click="createNewContact"
			>Добавить контакт</el-button
		>
		<ContactDialog
			:contact="dialogContact"
			:visible="dialogVisible"
			:role="dialogRole"
			@cancel="cancelAction"
			@submit="submitAction"
		/>
	</div>
</template>

<script setup>
import { useContacts } from "../stores/contacts";
import { ref } from "vue";
import ContactListItem from "./ContactListItem.vue";
import ContactDialog from "../dialogs/ContactDialog.vue";
import { Edit, Delete, CirclePlus } from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";

const contacts = useContacts();

const dialogContact = ref({});
const dialogVisible = ref(false);
const dialogRole = ref("");

const editContact = (contact) => {
	dialogContact.value = Object.assign({}, contact);
	showDialog("edit");
};

const createNewContact = () => {
	dialogContact.value = contacts.newContact();
	showDialog("add");
};

const deleteContact = (contact) => {
	ElMessageBox.confirm("Удалить контакт из списка?", "Вы уверены?", {
		confirmButtonText: "OK",
		cancelButtonText: "Отмена",
		type: "warning",
	})
		.then(() => {
			contacts.delete(contact);
		})
		.catch(() => {});
};

const cancelAction = () => {
	hideDialog();
};

const submitAction = () => {
	contacts.update(dialogContact.value);
	hideDialog();
};

const showDialog = (role) => {
	dialogRole.value = role;
	dialogVisible.value = true;
};

const hideDialog = () => {
	dialogVisible.value = false;
	dialogContact.value = {};
};
</script>

<style>
.contact-list {
	box-sizing: border-box;
	max-width: 600px;
}

.contact-list-card {
	border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
	margin: 10px 0px;
	padding: 10px 0px;
}

.contact-actions {
	text-align: right;
}
</style>