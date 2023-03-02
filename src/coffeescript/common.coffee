getJson = (name) ->
    obj = await fetch "./dist/" + name + ".json"
    return obj.json()

class Canvas
    constructor: (@element,height,width,@fg,@bg) ->
        @element.height = height
        @element.width = width
        @ctx = @element.getContext "2d"
        @ctx.fillStyle = @bg
        @ctx.fillRect 0, 0, width, height

    drawValueBg: (index) ->
        @ctx.strokeStyle = "#000"
        @ctx.lineJoin = "round"
        @ctx.lineWidth = 75
        @ctx.fillStyle = "#222222"

        height = 170 + index*120
        @ctx.strokeRect 165, 50+height, 470, 0

    drawValues: (value, index) ->
        height = 170 + index*120

        left_image = new Image 
        left_image.src = "./assets/values/" + value.icons[0]
        left_image.addEventListener "load", =>
            @ctx.drawImage left_image, 20, height, 100, 100

        right_image = new Image 
        right_image.src = "./assets/values/" + value.icons[1]
        right_image.addEventListener "load", =>
            @ctx.drawImage right_image, 680, height, 100, 100

    drawScoreRect: (scores, values, score, index) ->
        @ctx.lineWidth = 65
        v = scores[score]
        height = 220 + index*120
        colors = values[index].color

        [color1,color2] = if v > 50 then [colors[1],colors[0]] else [colors[0],colors[1]]
        [val1,val2] = if v > 50 then [636-4.72*(100-v),166] else [166,636-4.72*(100-v)]
        [ext1,ext2] = if v > 50 then [4.72*(100-v)-2,4.72*v-2] else [4.72*v-2,4.72*(100-v)-2]

        @ctx.strokeStyle = color1
        @ctx.strokeRect val1, height, ext1, 0
        @ctx.strokeStyle = color2
        @ctx.strokeRect val2, height, ext2, 0


    @findTier: (val) ->
        ranges = [0,5,15,25,35,45,55,65,75,85,95]
        for r,i in ranges
            if val < ranges[i]
                return ranges.length - i
        return 0


    drawScoreLabel: (val, values, index) ->
        @ctx.font = "50px 'Source Sans Pro', sans-serif"
        height = index*120 + 237.5
        if val is null or val > 100 or val < 0
            throw new Error "Invalid score: " + val

        if val > 30
            @ctx.fillStyle = if values[index].white_label[0] then "#FFF" else "#000"
            @ctx.textAlign = "left"
            @ctx.fillText val.toFixed(1) + "%", 150, height

        if val < 70
            @ctx.fillStyle = if values[index].white_label[1] then "#FFF" else "#000"
            @ctx.textAlign = "right"
            @ctx.fillText (100 - val).toFixed(1) + "%", 650, height

        @ctx.fillStyle = @fg
        @ctx.textAlign = "center"
        @ctx.font="bold 30px 'Source Sans Pro', sans-serif"
        name = do values[index].name.charAt(0).toUpperCase + values[index].name.slice 1
        @ctx.fillText name + " Axis: " + values[index].tiers[ Canvas.findTier(val)], 400, 170+index*120, 550


    drawHeader: (params) ->
        @ctx.fillStyle = @fg
        @ctx.font = "700 50px 'Source Sans Pro', sans-serif"
        @ctx.textAlign = "left"
        @ctx.fillText "PolcompballValues", 20, 90

        @ctx.font = "30px 'Source Sans Pro', sans-serif"
        user = if not params.gallery then \ 
        "Closest match: " + params.user else params.user
        @ctx.fillText user, 20, 130, 700

        @ctx.textAlign = "right"
        @ctx.font = "300 25px 'Source Sans Pro', sans-serif"
        @ctx.fillText "polcompballvalues.github.io", 780, 40
        @ctx.fillText params.version, 780, 70
        @ctx.fillText params.edition, 780, 100

    clearFields: ->
        @ctx.fillStyle = @bg
        @ctx.fillRect 126,130,550,1730
        @ctx.fillRect 0,0,800,150

export {getJson, Canvas}
