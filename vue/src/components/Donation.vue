<template>
    <h2>마음 보내실 곳</h2>
    <DonationItem />
</template>

<script>
import DonationItem from './DonationItem'

export default {
    name: 'Donation',
    components: {
        DonationItem,
    },
    data() {
        return {
            groom: {
                bank: '우리',
                account: '1002745899033',
                owner: '양창은',
            },
            bride: {
                bank: '우리',
                account: '',
                owner: '세라오스니'
            },
            groomParents: [
                {
                    bank: '',
                    account: '',
                    owner: '양선직',
                }
            ]
        }
    }
}
</script>

<style>
</style>