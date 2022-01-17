<template>
<div>
    <span> 
        <h4txt>{{text}}</h4txt>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;양창은
    </span>

    <div class="space-short">
        <a href="tel:{{phone}}">
            <img src="../assets/icon_phone.svg">
        </a>
        <a href="{{messenger_url}}">
            <img src="../assets/icon_messenger.svg">
        </a>
        <a href="{{line_url}}">
            <img src="../assets/icon_line.svg">
        </a>
        <a href="{{kakao_url}}">
            <img src="../assets/icon_kakaotalk.svg">
        </a>
    </div>
</div> 
</template>

<script>
export default {
    name: 'MajorContact',
    props: {
        'text': String,
        'name': String,
        'phone': String,
        'messenger_url': String,
        'line_url': String,
        'kakao_url': String
    }
}
</script>