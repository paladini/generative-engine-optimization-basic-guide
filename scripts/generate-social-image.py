from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


WIDTH = 1200
HEIGHT = 630


def load_font(name, size):
    path = Path("C:/Windows/Fonts") / name
    if path.exists():
        return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def draw_wrapped(draw, text, xy, font, fill, max_width, line_height, max_lines):
    x, y = xy
    words = text.split()
    lines = []
    line = ""

    for word in words:
        test = f"{line} {word}".strip()
        if draw.textbbox((0, 0), test, font=font)[2] <= max_width:
            line = test
        else:
            lines.append(line)
            line = word

    if line:
        lines.append(line)

    for text_line in lines[:max_lines]:
        draw.text((x, y), text_line, font=font, fill=fill)
        y += line_height


def draw_geo_mark(base, xy, size):
    multiplier = 4
    mark_size = size * multiplier
    mark = Image.new("RGBA", (mark_size, mark_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(mark)
    scale = mark_size / 96

    def point(x, y):
        return (round(x * scale), round(y * scale))

    def box(cx, cy, radius):
        return (
            round((cx - radius) * scale),
            round((cy - radius) * scale),
            round((cx + radius) * scale),
            round((cy + radius) * scale),
        )

    def line(points, fill, width, joint=None):
        draw.line([point(x, y) for x, y in points], fill=fill, width=round(width * scale), joint=joint)

    draw.rounded_rectangle((0, 0, mark_size, mark_size), radius=round(18 * scale), fill=(17, 24, 39, 255))
    draw.polygon([point(29, 31), point(59, 27), point(71, 55), point(39, 67)], fill=(23, 32, 51, 184))

    for segment in [
        ((29, 31), (59, 27)),
        ((59, 27), (71, 55)),
        ((29, 31), (39, 67)),
        ((39, 67), (71, 55)),
        ((59, 27), (39, 67)),
    ]:
        line(segment, (229, 237, 247, 220), 6)

    draw.ellipse(box(29, 31, 12), fill=(14, 118, 111, 255))
    draw.ellipse(box(59, 27, 11), fill=(49, 71, 168, 255))
    draw.ellipse(box(39, 67, 11), fill=(180, 106, 0, 255))
    draw.ellipse(box(71, 55, 13), fill=(248, 250, 252, 255))

    draw.ellipse(box(28, 29, 4.75), outline=(204, 251, 241, 255), width=round(3 * scale))
    line(((32, 33), (36, 37)), (204, 251, 241, 255), 3)
    line(((54, 24), (64, 24)), (248, 250, 252, 230), 3)
    line(((54, 30), (61, 30)), (248, 250, 252, 230), 3)
    line(((34, 64), (44, 64)), (248, 250, 252, 230), 3)
    line(((34, 70), (41, 70)), (248, 250, 252, 230), 3)
    line(((65, 55), (69, 59), (78, 50)), (17, 24, 39, 255), 4.5, joint="curve")

    resampling = getattr(Image, "Resampling", Image)
    mark = mark.resize((size, size), resampling.LANCZOS)
    base.paste(mark, xy, mark)


def main():
    image = Image.new("RGB", (WIDTH, HEIGHT), (246, 248, 251))
    draw = ImageDraw.Draw(image)

    for y in range(HEIGHT):
        t = y / (HEIGHT - 1)
        color = (
            int(255 * (1 - t) + 238 * t),
            int(255 * (1 - t) + 246 * t),
            int(255 * (1 - t) + 247 * t),
        )
        draw.line([(0, y), (WIDTH, y)], fill=color)

    ink = (23, 32, 51)
    muted = (93, 107, 130)
    indigo = (49, 71, 168)
    line = (216, 224, 234)

    draw.rounded_rectangle((72, 74, 1128, 560), radius=8, fill=(223, 228, 236))
    draw.rounded_rectangle((60, 62, 1116, 548), radius=8, fill=(255, 255, 255), outline=line, width=3)

    brand_font = load_font("segoeuib.ttf", 36)
    title_font = load_font("segoeuib.ttf", 66)
    subtitle_font = load_font("segoeui.ttf", 30)
    tag_font = load_font("segoeuib.ttf", 22)

    draw_geo_mark(image, (92, 88), 72)
    draw.text((188, 105), "GEO Basics", font=brand_font, fill=ink)

    draw.text((92, 190), "Generative Engine", font=title_font, fill=ink)
    draw.text((92, 266), "Optimization", font=title_font, fill=ink)

    draw_wrapped(
        draw,
        "A beginner guide for AI search visibility, citation-ready content, structured data, crawlers, and measurement.",
        (96, 370),
        subtitle_font,
        muted,
        920,
        40,
        2,
    )

    x = 96
    for tag in ["AI search", "GEO guide", "Citation-ready", "Schema.org"]:
        bbox = draw.textbbox((0, 0), tag, font=tag_font)
        width = bbox[2] - bbox[0] + 34
        draw.rounded_rectangle((x, 488, x + width, 536), radius=8, fill=(255, 255, 255), outline=line, width=2)
        draw.text((x + 17, 499), tag, font=tag_font, fill=indigo)
        x += width + 14

    output = Path("assets/images/geo-basics-social.png")
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output)
    print(f"Generated {output} ({WIDTH}x{HEIGHT})")


if __name__ == "__main__":
    main()
