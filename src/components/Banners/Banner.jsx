const Banner = ({ className, title }) => (
    <div className={className}>{title ? <h1>{title}</h1> : null}</div>
);

export default Banner;
