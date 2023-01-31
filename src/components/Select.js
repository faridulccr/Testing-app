import useSector from "../hooks/useSector";
import Sectors from "./Sectors";

const Select = ({ onChangeHandler }) => {
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
                    defaultValue={sectors[0].options}
                    required
                >
                    <Sectors sectors={sectors} />
                </select>
            )}
        </>
    );
};

export default Select;
