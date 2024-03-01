<template>
    <div class="login-layout">
        <div class="login-form">
            <div class="">
                <img src="/images/main_logo.svg"/>
                <div class="title">
                    PRマネージャーのIDでログインできます
                </div>
            </div>
            <div class="input-layout">
                <div class="label-input">
                    <div class="label">サブドメイン</div>
                    <input placeholder="bravesoft" />
                </div>
                <div class="label-input">
                    <div class="label">メールアドレス</div>
                    <input placeholder="cookpit@cookpit.com" />
                </div>
                <div class="label-input">
                    <div class="label">パスワード</div>
                    <input type="password" placeholder="・・・・・・" />
                </div>
            </div>
            <button type="submit" class="btn-submit">ログイン</button>
            <div class="d-flex align-items-center link-text">
                PRマネージャーへ
                <img src="/images/link_img.svg" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Login',
  meta: [
    { name: 'login' }
  ],
})
</script>
<style lang="scss" scoped>
.login-layout {
    min-height: calc(100vh - 56px);
    display: flex;
    justify-content: center;
    align-items: center;
    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 439px;
        padding: 24px 48px;
        gap: 32px;
        background-color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(217, 224, 232, 1);
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
    }
    .input-layout {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
        .label-input {
            display: flex;
            flex-direction: column;
            gap: 12px;
            .label {
                font-family: 'Hiragino Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 140%;
                color: #08121A;
            }
        }
    }
    .title {
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        margin-top: 16px;
    }
    .link-text {
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 120%;
        color: #FF7800;
        gap: 4px;
    }
}
</style>