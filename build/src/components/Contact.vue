<template>
<div class="container">
    <h2>Contact</h2>
    <CoupleContact 
        text="신랑에게 연락하기"
        :data="groomInfo"
    />
    <CoupleContact 
        text="신부에게 연락하기" 
        :data="brideInfo"
    />
    <Button text="혼주분께 연락하기" 
        @btn-click="toggleParentsContact"/>
    <span v-show="showMinorContact">
        <ParentsContact 
            text="신랑측 혼주"
            :fatherData="groomFatherInfo"
            :motherData="groomMotherInfo"
        />
        <ParentsContact 
            text="신부측 혼주"
            :fatherData="brideFatherInfo"
            :motherData="brideMotherInfo"
        />
    </span>
</div>
</template>

<script>
import CoupleContact from './CoupleContact'
import ParentsContact from './ParentsContact'
import Button from './Button'

export default {
    name: 'Contact',
    components: {
        CoupleContact,
        ParentsContact,
        Button,
    },
    data() {
        return {
            showMinorContact: false,
            groomInfo: {
                id: 0,
                name: "양창은",
                phone: "+82-10-7118-8571",
                messenger: "https://m.me/besty1993",
                line: "",
                kakao: "http://qr.kakao.com/talk/GOK_CkRf2xxUlpP5txKxJfnvbgc-",
            },
            brideInfo: {
                id: 1,
                name: "세라오스니",
                phone: "+82-10-2719-8571",
                messenger: "https://m.me/waldorfxx",
                line: "",
                kakao: "http://qr.kakao.com/talk/EyRNfP64x018Je1.43.Ipv9ofcc-",
            },
            groomFatherInfo: {
                name: "양선직",
                phone: "+82-10-5464-8571",
                kakao: "asdf",
                line: "",
            },
            groomMotherInfo: {
                name: "유인숙",
                phone: "+82-10-3207-8571",
                kakao: "asdf",
                line: "",
            },
            brideFatherInfo: {
                name: "세라오 쏨퐁",
                phone: "",
                kakao: "",
                line: "asdf",
            },
            brideMotherInfo: {
                name: "캄푸 쏨분",
                phone: "",
                kakao: "",
                line: "asdf",
            },
        }
    },
    methods: {
        toggleParentsContact() {
            this.showMinorContact = !this.showMinorContact
        },
    }
}
</script>

<style scoped>

</style>