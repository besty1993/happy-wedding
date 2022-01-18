<template>
    <div>
        <h4>{{ text }}</h4>
        <MinorContactItem
            title="아버지"
            :name="father_name"
            :phone="phone"
            :kakao_url="kakao_url"
            :line_url="line_url"
        />
        <MinorContactItem
            text="신부측 혼주"
            :father_name="father_name"
            :mother_name="mother_name"
            :kakao_url="kakao_url"
            :line_url="line_url"
        />
    </div>
</template>

<script>
import MinorContactItem from './MinorContactItem'

export default {
    name: 'MinorContact',
    components: {
        MinorContactItem
    },
    props: {
        text: String,
        father_name: String,
        mother_name: String,
        kakao_url: String,
        line_url: String,
    },
}
</script>
