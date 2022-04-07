<script setup>
const props = defineProps(["contact"]);
</script>

<template>
	<div class="contact-list-item">
		<div class="contact-list-item__title">{{ contact.name }}</div>
		<div>{{ contact.phone }}</div>
	</div>
</template>

<style>
.contact-list-item {
	box-sizing: border-box;
}

.contact-list-item > div {
	margin: 10px 0px;
}

.contact-list-item__title {
	font-weight: 600;
}
</style>