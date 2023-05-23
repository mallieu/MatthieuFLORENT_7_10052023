const Banner = ({ className, title, HasBackgroundImage }) => (
    <div
        className={className}
        style={
            HasBackgroundImage
                ? { backgroundImage: `url(${HasBackgroundImage})` }
                : null
        }
    >
        {title ? <h1>{title}</h1> : null}
    </div>
);

export default Banner;
