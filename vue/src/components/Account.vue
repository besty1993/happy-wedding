<template>
    <h2>마음 보내실 곳</h2>
    <AccountItem />
</template>

<script>
import AccountItem from './AccountItem'

export default {
    name: 'Account',
    components: {
        AccountItem,
    },
    data() {
        return {
            groom: [
                {
                    name: '양창은',
                    bank: '우리',
                    account: '1002745899033',
                },
                {
                    name: '양선직',
                    bank: '',
                    account: '',
                }
            ],
            bride: [
                {
                    name: '세라오스니',
                    bank: '우리',
                    account: '',
                },
            ]
        }
    }
}
</script>

<style>
</style>