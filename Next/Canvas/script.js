(() => {
    let canvas = document.getElementById('c');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        //drapeau
        ctx.beginPath();
        ctx.rect(10, 10, 60, 30);
        ctx.rect(10, 10, 20, 30);
        ctx.rect(10, 10, 40, 30);
        ctx.stroke();
        ctx.closePath();
        //bateau
        ctx.beginPath();
        ctx.moveTo(80, 50);
        ctx.lineTo(180, 50);
        ctx.lineTo(160, 80);
        ctx.lineTo(100, 80);
        ctx.lineTo(80, 50);
        ctx.moveTo(130, 50);
        ctx.lineTo(130, 0);
        ctx.lineTo(180, 20);
        ctx.lineTo(130, 40);
        ctx.stroke();
        ctx.closePath();
        //maison
        ctx.beginPath();
        ctx.rect(10, 100, 50, 50);
        ctx.rect(30, 130, 10, 20);
        ctx.moveTo(10, 100);
        ctx.lineTo(35, 80);
        ctx.lineTo(60, 100);
        ctx.stroke();
        ctx.closePath();
        //bonhomme
        ctx.beginPath();
        ctx.arc(175, 250, 50, 0, Math.PI * 2, true);
        ctx.moveTo(210, 250);
        ctx.arc(175, 250, 35, 0, Math.PI, false)
        ctx.moveTo(165, 240);
        ctx.arc(160, 240, 5, 0, Math.PI * 2, true);
        ctx.moveTo(195, 240);
        ctx.arc(190, 240, 5, 0, Math.PI * 2, true);
        ctx.moveTo(175, 300);
        ctx.lineTo(175, 450);
        ctx.lineTo(115, 500);
        ctx.moveTo(175, 450);
        ctx.lineTo(235, 500);
        ctx.moveTo(115, 350);
        ctx.lineTo(235, 350);
        ctx.stroke();
        ctx.closePath();
    }
})();