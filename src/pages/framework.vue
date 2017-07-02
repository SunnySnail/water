<template>
    <div class="merchant-page page">
        <navbar :title="$store.state.framework.title"></navbar>

        <router-view></router-view>

        <bottom-navbar
            v-show='$store.state.framework.actionBarVisible'
            :active_name='$store.state.framework.activeActionName'
        ></bottom-navbar>
    </div>
</template>
