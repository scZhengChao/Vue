<template>
    	<!-- 头部信息 begin -->
        <div>
            <header class="aui-navBar">
                <a href="javascript:;" class="aui-navBar-item">
                    <i class="aui-icon aui-icon-back"></i>
                </a>
                <div class="aui-navBar-center">
                    <router-link to="/shop" tag="span" class="aui-navBar-title aui-navBar-logo">
                    <!-- <span class="aui-navBar-title aui-navBar-logo"></span> -->
                    </router-link>
                </div>
                <a href="javascript:;" class="aui-navBar-item">
                    <i class="aui-icon aui-icon-user"></i>
                </a>
		    </header>
        </div>
		
		<!-- 头部信息 end -->
</template>

<script>
export default {
	
}
</script>
<style>
.aui-flexView {
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0 auto;
    max-width: 750px;
    min-width: 300px;
}
    .aui-navBar {
        height: 0.9rem;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        background-color: rgba(255, 255, 255, 0.98);
    }

    .aui-fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
    }

    .aui-navBar-item {
        height: 0.9rem;
        min-width: 25%;
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 25%;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        padding: 0 0.2rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 0.3rem;
        white-space: nowrap;
        overflow: hidden;
        color: #5C5C5C;
    }
    .aui-navBar-item:first-child {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        -ms-flex-order: 1;
        order: 1;
        margin-right: -25%;
    }
    .aui-navBar-center {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        -ms-flex-order: 2;
        order: 2;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        height: 0.9rem;
        width: 50%;
        margin-left: 25%;
    }
    .aui-navBar-title {
        text-align: center;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        display: block;
        text-overflow: ellipsis;
        font-size: 0.3rem;
        color: #5C5C5C;
    }
    .aui-navBar-item:last-child {
        -webkit-box-ordinal-group: 4;
        -webkit-order: 3;
        -ms-flex-order: 3;
        order: 3;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }
    .aui-nav-top {
        position: relative;
    }
</style>

