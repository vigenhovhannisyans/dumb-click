$(document).ready(()=>{
    let x = 0
    let y = 0
    let countDown = 3
    $('#no').click((e)=>{
         x = Math.floor(Math.random()*(300-100+1)+100)
         y =Math.floor(Math.random()*(300-100+1)+100)
         console.log(x);
        $('#no').css('transform',`translate(-${x}%,-${y}%)`)
    })
    $('#yes').click(()=>{
        $('.know-alert').removeClass('displayed-alert')
        $('#no').addClass('pointer-events')
        $('#yes').addClass('pointer-events')

        let inter = setInterval(() => {
            $('#count-down').text(--countDown)
            if(countDown===0){
                $('.know-alert').addClass('displayed-alert')
                $('#no').removeClass('pointer-events').css('transform',`translate(0%,0%)`)
                $('#yes').removeClass('pointer-events')
                countDown = 3
                $('#count-down').text(3)
                clearInterval(inter)
            }
        }, 1000);
    })
})