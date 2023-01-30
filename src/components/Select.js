import useSector from "../hooks/useSector";
import Sectors from "./Sectors";

const Select = ({ onChangeHandler, value }) => {
    const { loading, error, sectors } = useSector();

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There is an error.</h1>}
            {!loading && !error && (
                <select
                    multiple={true}
                    size="10"
                    name="sectors"
                    onChange={onChangeHandler}
                    value={value}
                >
                    <Sectors sectors={sectors} />
                </select>
            )}
        </>
    );
};

export default Select;
