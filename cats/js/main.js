
window.onload = function() {
    var $canvas = $("#canvas");
    var emptyColor = "#ffffff00"

    window.selectPixelMap = function(index){
        console.log('Clicked: ', index);
        let pixelMap = document.getElementById('pixelmap_'+index).innerHTML;
        document.getElementById('out').innerHTML = pixelMap;
        var array = str.split("\n").map(function(row) {
            return row.split(" ").map(function(x) {
                return parseInt(x, 10);
            });
        })
        a = array;
        drawCanvas(a);
        console.log(a);
    }
    window.selectSprite = function(index){
        console.log('Clicked: ', index);
        document.getElementById('sprite_holder').innerHTML = '<div class="sprite_large" id="sprite_'+index+'"></div>';

        if(index == 0){
            width = 12;
            height = 23;
        } else if(index == 1){
            width = 12;
            height = 24;
        } else if(index == 2){
            width = 22;
            height = 16;
        } else if(index == 3){
            width = 22;
            height = 16;
        } else if(index == 4){
            width = 22;
            height = 17;
        } else if(index == 5){
            width = 23;
            height = 16;
        } else if(index == 6){
            width = 24;
            height = 16;
        } else if(index == 7){
            width = 23;
            height = 17;
        } else if(index == 8){
            width = 23;
            height = 17;
        } else if(index == 9){
            width = 22;
            height = 16;
        } else if(index == 10){
            width = 22;
            height = 16;
        } else if(index == 11){
            width = 22;
            height = 17;
        } else if(index == 12){
            width = 13;
            height = 24;
        } else if(index == 13){
            width = 11;
            height = 23;
        } else if(index == 14){
            width = 11;
            height = 23;
        } else if(index == 15){
            width = 12;
            height = 24;
        } else if(index == 16){
            width = 13;
            height = 24;
        } else if(index == 17){
            width = 11;
            height = 23;
        } else if(index == 18){
            width = 11;
            height = 23;
        } else if(index == 19){
            width = 12;
            height = 24;
        } else if(index == 20){
            width = 12;
            height = 24;
        } else if(index == 21){
            width = 11;
            height = 27;
        } else if(index == 22){
            width = 11;
            height = 27;
        } else if(index == 23){
            width = 12;
            height = 23;
        } else if(index == 24){
            width = 12;
            height = 24;
        } else if(index == 25){
            width = 11;
            height = 27;
        } else if(index == 26){
            width = 11;
            height = 27;
        } else if(index == 27){
            width = 12;
            height = 23;
        } else if(index == 28){
            width = 22;
            height = 17;
        } else if(index == 29){
            width = 23;
            height = 16;
        } else if(index == 30){
            width = 24;
            height = 16;
        } else if(index == 31){
            width = 23;
            height = 17;
        } else if(index == 32){
            width = 24;
            height = 17;
        } else if(index == 33){
            width = 22;
            height = 16;
        } else if(index == 34){
            width = 22;
            height = 16;
        } else if(index == 35){
            width = 22;
            height = 17;
        }
        document.getElementById('iw').value = width;
        document.getElementById('ih').value = height;
        a = initArray(width, height);
        drawCanvas(a);
    }

    function generatePixelMapImages(){
        let pixel_map_holder = document.getElementById('pixel_map_holder');
		let html = '';
        for(let i=0; i<36; i++){
            html += '<div class="sprite" id="sprite_'+i+'" onclick="selectSprite('+i+')"></div>';
            if(i == 3 || i == 11 || i == 19 || i == 27){
                html += '<br>';
            }
        }
        pixel_map_holder.innerHTML = html;
    }
    generatePixelMapImages();

    function initArray(w, h) {
        var imageArray = [];
        for (var i = 0; i < h; i++) {
            var row = [];
            imageArray.push(row);
            for (var j = 0; j < w; j++) {
                row.push(0);
            }
        }
        return imageArray;
    }

    function getActiveColorId() {
        return parseInt($("input:radio[name=color]:checked").val(), 10);
    }

    function getColorCode(colorId) {
        if (!colorId || colorId === 0) {
            return "#ffffff00";
        } else {
            return "#" + $("#color" + colorId).val();
        }
    }

    function drawCanvas(array) {
        let template = document.getElementById('sprite_holder');
        let offsetX = ((30 - array[0].length) * 14) / 2;
        let oddOffsetX = (array[0].length % 2 == 0 ? 7 : 14);
        template.style.marginLeft = '-' + (offsetX - oddOffsetX) + 'px';
        $canvas.html('')
        array.forEach(function(subArray, i) {
            var $row = $("<div class='row'></div>").appendTo($canvas);
            subArray.forEach(function(cell, j) {
                var color = getColorCode(cell)
                var $cell = $("<div class='cell' style='background-color:" + color + "'></div>").appendTo($row)
                $cell.on("mousedown", function(e) {
                    var colorId = getActiveColorId();
                    var colorCode = getColorCode(colorId)
                    if (e.which === 1 && array[i][j] != colorId) {
                        array[i][j] = colorId;
                        $cell.css("background-color", colorCode);
                    } else {
                        array[i][j] = 0
                        $cell.css("background-color", emptyColor);
                    }
                });
                $cell.on("mouseenter", function(e) {
                    var colorId = getActiveColorId();
                    var colorCode = getColorCode(colorId);
                    if (e.which === 1) {
                        array[i][j] = colorId;
                        $cell.css("background-color", colorCode)
                    }
                    if (e.which === 3) {
                        array[i][j] = 0;
                        $cell.css("background-color", emptyColor);
                    }
                    e.preventDefault();
                    e.stopPropagation();
                })
            })
        })
    }
    var a = initArray(12, 23);
    drawCanvas(a);
    $(".color").each(function() {
        var $input = $(this);
        $input.css("background-color", "#" + $input.val());
        $input.on("change keyup", function() {
            $input.css("background-color", "#" + $input.val());
        })
    })

    $("#iw").on("change", function() {
        a = initArray(parseInt($("#iw").val(), 10), parseInt($("#ih").val(), 10));
        drawCanvas(a);
    })
    $("#ih").on("change", function() {
        a = initArray(parseInt($("#iw").val(), 10), parseInt($("#ih").val(), 10));
        drawCanvas(a);
    })
    $("#reset").on("click", function() {
        a = initArray(parseInt($("#iw").val(), 10), parseInt($("#ih").val(), 10));
        drawCanvas(a);
    })
    $("#print").on("click", function() {
        var print = a.map(function(row, i) {
            return row.join(" ");
        }).join("\n");
        console.log(print);
        $("#out").val(print);
    })

    $("#read").on("click", function() {
        var str = $("#out").val();
        var array = str.split("\n").map(function(row) {
            return row.split(" ").map(function(x) {
                return parseInt(x, 10);
            });
        })
        a = array;
        drawCanvas(a);
        console.log(a);
    })

    $("#redraw").on("click", function() {
        drawCanvas(a);
    })

    $("#palette").on("click", function() {
        generateColorPalette();
        drawCanvas(a);
    })

    $("#png").on("click", function() {
        $("#png-out").prop("src", generatePNG());
        //window.open(generatePNG(), "_blank");;
    })


    $("#grid").on("change", function() {
        if (this.checked) {
            $canvas.addClass("grid");
        } else {
            $canvas.removeClass("grid");
        }
    })

    function selectColor(colorCode) {
        $("#c" + colorCode).prop("checked", true);
    }

    $(document).on('keydown', function(e) {
        var key = e.which;
        switch (key) {
            case 49: // 1
                selectColor(1);
                break;

            case 50: // 2
                selectColor(2);
                break;

            case 51: //3
                selectColor(3);
                break;

            case 52: //4
                selectColor(4);
                break;

            case 53: //5
                selectColor(5);
                break;

            case 54: //6
                selectColor(6);
                break;

            case 71: //g
                $("#grid").click();
                break;

            case 80: //p
                generateColorPalette();
                drawCanvas(a);
                break;

            case 82: //r
                drawCanvas(a);
                break
        }
        //console.log(key)
    })


    function randomHex256() {
        var n = Math.floor(Math.random() * 256);
        //console.log(n);
        return ("0" + n.toString(16)).slice(-2);
    }

    function randomHexColor() {
        return randomHex256() + randomHex256() + randomHex256();
    }

    function RGBToHSL(r, g, b) {
        if (Array.isArray(r)) {
            g = r[1];
            b = r[2];
            r = r[0];
        }
        var r = r / 255;
        var g = g / 255;
        var b = b / 255;
        var cMax = Math.max(r, g, b);
        var cMin = Math.min(r, g, b);
        var delta = cMax - cMin;
        if (delta == 0) {
            var h = 0;
        } else if (cMax == r) {
            var h = 60 * (((g - b) / delta) % 6);
        } else if (cMax == g) {
            var h = 60 * ((b - r) / delta + 2);
        } else if (cMax == b) {
            var h = 60 * ((r - g) / delta + 4);
        }
        if (h < 0) {
            h += 360;
        }
        var l = (cMax + cMin) / 2;

        if (delta == 0) {
            var s = 0;
        } else {
            var s = delta / (1 - Math.abs(2 * l - 1));
        }
        //console.log("H:", h, " S:", s, " L:", l);
        return [h, s, l]
    }

    function HSLToRGB(h, s, l) {
        if (Array.isArray(h)) {
            s = h[1];
            l = h[2];
            h = h[0];
        }
        var c = (1 - Math.abs(2 * l - 1)) * s;
        var x = c * (1 - Math.abs((h / 60) % 2 - 1));
        var m = l - c / 2;
        if (h >= 0 && h < 60) {
            var r = c;
            var g = x;
            var b = 0;
        } else if (h >= 60 && h < 120) {
            var r = x;
            var g = c;
            var b = 0;
        } else if (h >= 120 && h < 180) {
            var r = 0;
            var g = c;
            var b = x;
        } else if (h >= 180 && h < 240) {
            var r = 0;
            var g = x;
            var b = c;
        } else if (h >= 240 && h < 300) {
            var r = x;
            var g = 0;
            var b = c;
        } else if (h >= 300 && h < 360) {
            var r = c;
            var g = 0;
            var b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
        return [r, g, b]
    }

    function RGBToHex(r, g, b) {
        if (Array.isArray(r)) {
            g = r[1];
            b = r[2];
            r = r[0];
        }
        return ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2);
    }

    function hexToRGB(hex) {
        return [parseInt(hex.slice(0, 2), 16),
            parseInt(hex.slice(2, 4), 16),
            parseInt(hex.slice(4, 6), 16)
        ]

    }

    function testColor() {
        var rch = randomHexColor();
        var rc = hexToRGB(rch);
        var hsl = RGBToHSL(rc);
        var rgb = HSLToRGB(hsl)
        var hx = RGBToHex(rgb);
        console.log(rch);
        console.log(rc);
        console.log(hsl);
        console.log(rgb);
        console.log(hx);
    }

    function setFieldColor(id, hexColor) {
        $("#color" + id).val(hexColor).css("background-color", "#" + hexColor);
    }

    function generateRandomColor() {
        var activeId = getActiveColorId();
        var color = randomHexColor();
        setFieldColor(activeId, color);

    }

    function generateColorPalette() {
        var hex = randomHexColor();
        var hsl = RGBToHSL(hexToRGB(hex));

        var h = hsl[0];
        var s = hsl[1];
        var l = hsl[2];
        var h1 = (h + 0) % 360;
        var h2 = (h + 0) % 360;
        var h3 = (h + 0) % 360;
        var h4 = (h + 0) % 360;
        var h5 = (h + 320) % 360

        var c1 = HSLToRGB(h1, 1, 0.1);
        var c2 = HSLToRGB(h2, 1, 0.2);
        var c3 = HSLToRGB(h3, 1, 0.45);
        var c4 = HSLToRGB(h4, 1, 0.7);
        var c5 = HSLToRGB(h5, 1, 0.8);

        setFieldColor(1, RGBToHex(c1));
        setFieldColor(2, RGBToHex(c2));
        setFieldColor(3, RGBToHex(c3));
        setFieldColor(4, RGBToHex(c4));
        setFieldColor(5, RGBToHex(c5));

    }

    function generatePNG() {
        var canvas = document.createElement("canvas");
        var data = a;
        var colors = [0, 1, 2, 3, 4, 5, 6].map(function(id) {
            if (id) {
                return "#" + $("#color" + id).val();
            }
        })

        var size = parseInt($("#pngPixelSize").val(), 10);
        canvas.width = size * data[1].length;
        canvas.height = size * data.length;
        var ctx = canvas.getContext('2d');
        for (var j = 0; j < data.length; j++) {
            var row = data[j];
            for (var i = 0; i < row.length; i++) {
                var color = colors[row[i]];
                if (color) {
                    ctx.fillStyle = color;
                    ctx.fillRect(i * size, j * size, size, size);
                }
            }
        }
        return canvas.toDataURL();
    }

}