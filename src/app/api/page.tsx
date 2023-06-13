type Params = { slug: string };
type SearchParams = {
    name: string;
    type: 'svg' | 'png';
    rounded: boolean | number;
    size: number;
    color: 'black' | 'white';
    bg: string;
    gradient: boolean;
};

export default function Page({ params, searchParams }: { params: Params; searchParams: SearchParams }): JSX.Element {
    const getGradientHex = (hex: string, amount: number) => {
        hex = hex.replace('#', '');
        let temp = parseInt(hex, 16);
        return (
            '#' +
            (
                ((temp & 0x0000ff) + amount) |
                ((((temp >> 8) & 0x00ff) + amount) << 8) |
                (((temp >> 16) + amount) << 16)
            ).toString(16)
        );
    };

    let { name, type, rounded, size, color, bg, gradient } = searchParams;
    name = name ? name : 'John Doe';
    type = type ? type : 'svg';
    rounded = rounded ? rounded : 0;
    size = size ? size : 100;
    color = color ? color : 'black';
    bg = bg ? bg : '#A7ACD9';
    gradient = gradient ? gradient : false;
    const initials = name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();

    const svg = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width=${size}
    height=${size}
    viewBox="0 0 100 100"
    fill="none"
    stroke="none"
    style={{ borderRadius: rounded === true ? '50%' : ${rounded}% }}
>
    <rect width="100%" height="100%" fill={gradient ? url(#${name}) : bg} />
    <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={color}
        fontFamily="sans-serif"
        fontSize="50"
    >
        ${initials}
    </text>
    {gradient ? (
        <defs>
            <linearGradient id=${name} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor=${bg} />
                <stop offset="100%" stopColor=${getGradientHex(bg, 50)} />
            </linearGradient>
        </defs>
    ) : null}
</svg>`;

    const png = `data:image/svg+xml;base64,${btoa(svg)}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            stroke="none"
            style={{ borderRadius: rounded === true ? '50%' : `${rounded}%` }}
        >
            <rect width="100%" height="100%" fill={gradient ? `#${name}` : bg} />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill={color}
                fontFamily="sans-serif"
                fontSize="50"
            >
                {initials}
            </text>
            {gradient ? (
                <defs>
                    <linearGradient id={name} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={bg} />
                        <stop offset="100%" stopColor={getGradientHex(bg, 50)} />
                    </linearGradient>
                </defs>
            ) : null}
        </svg>
    );
}
