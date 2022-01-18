<template>
<div>
    <h2>Contact</h2>
    <MajorContact 
        text="신랑에게 연락하기" 
        name="양창은" 
        phone="+82-10-7118-8571" 
        :messenger_url="groomData.messenger"
        line_url="" 
        kakao_url=""
    />
    <MajorContact 
        text="신부에게 연락하기" 
        name="세라오스니" 
        phone="+82-10-2719-8571" 
        messenger_url="" 
        line_url="" 
        kakao_url=""
    />
    <Button text="혼주분께 연락하기" @btn-click="toggleMinorContact"/>
    <div v-show="showMinorContact">
        <span>
            <MinorContact 
                text="신랑측 혼주"
                father_name="양선직"
                mother_name="유인숙"
                kakao_url="asdf"
                line_url=""
            />
            <MinorContact 
                text="신부측 혼주"
                father_name="세라오 쏨퐁"
                mother_name="캄푸 쏨분"
                kakao_url=""
                line_url="asdf"
            />
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
            showMinorContact: false,
            PeopleInfoList: [
                {
                    name: "양창은",
                    phone: "+82-10-7118-8571",
                    messenger: "https://m.me/besty1993",
                    line: "",
                    kakao: "http://qr.kakao.com/talk/GOK_CkRf2xxUlpP5txKxJfnvbgc-",
                },
                {
                    name: "세라오스니",
                    phone: "+82-10-2719-8571",
                    messenger: "https://m.me/waldorfxx",
                    line: "",
                    kakao: "http://qr.kakao.com/talk/EyRNfP64x018Je1.43.Ipv9ofcc-",
                },
            ]
        }
    },
    methods: {
        toggleMinorContact() {
            this.showMinorContact = !this.showMinorContact
        },
    }
}
</script>