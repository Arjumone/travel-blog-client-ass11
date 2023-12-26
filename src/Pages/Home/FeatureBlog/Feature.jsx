

const Feature = ({feature}) => {
    const {image} = feature
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default Feature;