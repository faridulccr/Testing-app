const Selected = ({ selected }) => {
    return (
        <>
            {selected && selected.length > 0 && (
                <select
                    className="selected-items"
                    multiple={true}
                    defaultValue={selected}
                >
                    {selected.map((item, i) => (
                        <option key={i} disabled>
                            {item}
                        </option>
                    ))}
                </select>
            )}
        </>
    );
};
export default Selected;
