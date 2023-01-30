import OptGroup from "./OptGroup";

const Sectors = ({ sectors }) => {
    return (
        <>
            {sectors &&
                sectors.length > 0 &&
                sectors.map((sector, i) => {
                    if (sector.name && sector.options) {
                        return (
                            <OptGroup
                                key={i}
                                label={sector.name}
                                options={sector.options}
                            />
                        );
                    } else {
                        return <option value={sector}>{sector}</option>;
                    }
                })}
        </>
    );
};

export default Sectors;
