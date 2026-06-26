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
    teal = (14, 118, 111)
    amber = (180, 106, 0)
    line = (216, 224, 234)

    draw.rounded_rectangle((72, 74, 1128, 560), radius=8, fill=(223, 228, 236))
    draw.rounded_rectangle((60, 62, 1116, 548), radius=8, fill=(255, 255, 255), outline=line, width=3)

    brand_font = load_font("segoeuib.ttf", 36)
    title_font = load_font("segoeuib.ttf", 66)
    subtitle_font = load_font("segoeui.ttf", 30)
    tag_font = load_font("segoeuib.ttf", 22)

    draw.ellipse((92, 94, 144, 146), fill=teal)
    draw.ellipse((112, 112, 164, 164), fill=indigo)
    draw.ellipse((132, 94, 184, 146), fill=amber)
    draw.text((205, 101), "GEO Basics", font=brand_font, fill=ink)

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
