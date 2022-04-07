<template>
	<Navigation />
	<RouterView class="side-bar" name="SideBar" />
	<RouterView class="workspace" />
</template>

<script setup>
import Navigation from "./views/Navigation.vue";
import { RouterView } from "vue-router";
</script>

<style>
html,
body {
	display: block;
	position: relative;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

#app {
	margin: 0;
	padding: 0;
	height: 100vh;
	display: grid;
	grid-template-areas:
		"nav nav"
		"sidebar workspace";
	grid-template-columns: 240px 1fr;
	grid-template-rows: 72px 1fr;
	gap: 16px;
}

.navigation {
	grid-area: nav;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
}

.side-bar {
	grid-area: sidebar;
	border-right: 1px solid rgba(0, 0, 0, 0.25);
}

.workspace {
	grid-area: workspace;
	overflow-y: scroll;
}
</style>