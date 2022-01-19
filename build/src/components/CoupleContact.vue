<template>
<span>
    <span> 
        <h4txt>{{text}}</h4txt>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.name}}
    </span>

    <div class="space-short">
        <a href="tel:{{data.phone}}">
            <img src="../assets/icon_phone.svg">
        </a>
        <a href="{{data.messenger}}">
            <img src="../assets/icon_messenger.svg">
        </a>
        <a href="{{data.line}}">
            <img src="../assets/icon_line.svg">
        </a>
        <a href="{{data.kakao}}">
            <img src="../assets/icon_kakaotalk.svg">
        </a>
    </div>
</span> 
</template>

<script>
export default {
    name: 'CoupleContact',
    props: {
        'text': String,
        'data': Object
    }
}
</script>