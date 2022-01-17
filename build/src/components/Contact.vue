<template>
<div>
    <h2>Contact</h2>
    <MajorContact 
        text="신랑에게 연락하기" 
        name="양창은" 
        phone="+82-10-7118-8571" 
        messenger_url="https://m.me/besty1993" 
        line_url="" 
        kakao_url="http://qr.kakao.com/talk/GOK_CkRf2xxUlpP5txKxJfnvbgc-"
    />
    <MajorContact 
        text="신부에게 연락하기" 
        name="세라오스니" 
        phone="+82-10-2719-8571" 
        messenger_url="https://m.me/waldorfxx" 
        line_url="" 
        kakao_url="http://qr.kakao.com/talk/EyRNfP64x018Je1.43.Ipv9ofcc-"
    />
    <Button text="혼주분께 연락하기" @btn-click="toggleMinorContact"/>
    <div v-show="showMinorContact">
        <span>
            <MinorContact />
            <MinorContact />
        </span>
    </div>
</div>
</template>

<script>
import MajorContact from './MajorContact'
import MinorContact from './MinorContact'
import Button from './Button'

export default {
    name: 'Contact',
    components: {
        MajorContact,
        MinorContact,
        Button,
    },
    data() {
        return {
            showMinorContact: false
        }
    },
    methods: {
        toggleMinorContact() {
            this.showMinorContact = !this.showMinorContact
            console.log(this.showMinorContact)
        },
    }
}
</script>