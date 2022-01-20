<template>
<div>
    <div>
        <h4txt>{{text}}</h4txt>{{data.name}}
    </div>

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
</div> 
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