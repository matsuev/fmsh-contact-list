<template>
	<div>
		<div v-for="contact in contacts.getFaworiteList" :key="contact.id">
			{{ contact.name }}
		</div>
	</div>
</template>

<script setup>
import { useContacts } from "../stores/contacts";

const contacts = useContacts();
</script>